import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import UserAvatar from "@/components/UserAvatar";
import OnlineStatusIndicator from "@/components/OnlineStatusIndicator";
import { ArrowLeft, Swords, Users, Copy, Loader2, Share2, UserPlus, Globe, Lock, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import BottomNav from "@/components/BottomNav";

const generateRoomCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

const subjects = [
  { value: "all", label: "सभी विषय", labelEn: "All Subjects" },
  { value: "math", label: "गणित", labelEn: "Mathematics" },
  { value: "science", label: "विज्ञान", labelEn: "Science" },
  { value: "english", label: "अंग्रेजी", labelEn: "English" },
  { value: "hindi", label: "हिंदी", labelEn: "Hindi" },
  { value: "social_science", label: "सामाजिक विज्ञान", labelEn: "Social Science" },
  { value: "it_ites", label: "IT/ITes", labelEn: "IT/ITes" },
];

interface Friend {
  id: string;
  username: string;
  avatar_style?: string;
}

interface PublicRoom {
  id: string;
  room_code: string;
  host_username: string;
  host_id: string;
  subject: string;
  total_questions: number;
  class_level: number;
  created_at: string;
}

type Mode = "select" | "create" | "join" | "public" | "waiting";

export default function MultiplayerBattle() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [mode, setMode] = useState<Mode>("select");
  const [roomCode, setRoomCode] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [subject, setSubject] = useState("all");
  const [questionCount, setQuestionCount] = useState("10");
  const [isPublic, setIsPublic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waitingRoom, setWaitingRoom] = useState<any>(null);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [selectedFriends, setSelectedFriends] = useState<Set<string>>(new Set());
  const [loadingFriends, setLoadingFriends] = useState(false);
  const [sendingInvite, setSendingInvite] = useState<string | null>(null);
  const [publicRooms, setPublicRooms] = useState<PublicRoom[]>([]);
  const [loadingPublicRooms, setLoadingPublicRooms] = useState(false);
  const [joiningRoom, setJoiningRoom] = useState<string | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }
      setUser(user);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(profileData);
    };
    fetchUser();
  }, [navigate]);

  // Fetch friends when component mounts
  useEffect(() => {
    if (user) {
      fetchFriends();
    }
  }, [user]);

  // Track online presence
  useEffect(() => {
    if (!user) return;

    const presenceChannel = supabase.channel('online-users');

    presenceChannel
      .on('presence', { event: 'sync' }, () => {
        const state = presenceChannel.presenceState();
        const online = new Set<string>();
        Object.values(state).forEach((presences: any) => {
          presences.forEach((presence: any) => {
            if (presence.user_id) {
              online.add(presence.user_id);
            }
          });
        });
        setOnlineUsers(online);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await presenceChannel.track({
            user_id: user.id,
            online_at: new Date().toISOString(),
          });
        }
      });

    return () => {
      supabase.removeChannel(presenceChannel);
    };
  }, [user]);

  // Subscribe to room updates when waiting
  useEffect(() => {
    if (!waitingRoom) return;

    const channel = supabase
      .channel(`battle_room_${waitingRoom.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "battle_rooms",
          filter: `id=eq.${waitingRoom.id}`,
        },
        (payload) => {
          const updatedRoom = payload.new as any;
          if (updatedRoom.opponent_id && updatedRoom.status === "ready") {
            navigate(`/battle/${updatedRoom.room_code}`);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [waitingRoom, navigate]);

  // Subscribe to public rooms when in public mode
  useEffect(() => {
    if (mode !== "public") return;

    fetchPublicRooms();

    const channel = supabase
      .channel("public_rooms")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "battle_rooms",
        },
        () => {
          fetchPublicRooms();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [mode]);

  const fetchFriends = async () => {
    if (!user) return;
    setLoadingFriends(true);
    try {
      const { data: friendships } = await supabase
        .from("friends")
        .select("*")
        .eq("status", "accepted")
        .or(`user_id.eq.${user.id},friend_id.eq.${user.id}`);

      if (friendships && friendships.length > 0) {
        const friendIds = friendships.map(f => 
          f.user_id === user.id ? f.friend_id : f.user_id
        );

        const { data: profiles } = await supabase
          .from("profiles")
          .select("id, username, avatar_style")
          .in("id", friendIds);

        setFriends(profiles?.map(p => ({
          id: p.id,
          username: p.username,
          avatar_style: p.avatar_style || undefined,
        })) || []);
      } else {
        setFriends([]);
      }
    } catch (error) {
      console.error("Error fetching friends:", error);
    } finally {
      setLoadingFriends(false);
    }
  };

  const fetchPublicRooms = async () => {
    setLoadingPublicRooms(true);
    try {
      // Only show rooms created within last 15 minutes
      const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
      
      const { data, error } = await supabase
        .from("battle_rooms")
        .select("id, room_code, host_username, host_id, subject, total_questions, class_level, created_at")
        .eq("is_public", true)
        .eq("status", "waiting")
        .gte("created_at", fifteenMinutesAgo)
        .order("created_at", { ascending: false })
        .limit(20);

      if (error) throw error;
      setPublicRooms((data as PublicRoom[]) || []);
    } catch (error) {
      console.error("Error fetching public rooms:", error);
    } finally {
      setLoadingPublicRooms(false);
    }
  };

  const createBattle = async () => {
    if (!user || !profile) return;
    setLoading(true);

    try {
      // Check if user already has an active waiting room
      const { data: existingRoom } = await supabase
        .from("battle_rooms")
        .select("id, room_code")
        .eq("host_id", user.id)
        .eq("status", "waiting")
        .maybeSingle();

      if (existingRoom) {
        toast.error("आपके पास पहले से एक active room है! पहले उसे cancel करें।");
        setLoading(false);
        return;
      }

      const code = generateRoomCode();
      const { data, error } = await supabase
        .from("battle_rooms")
        .insert({
          room_code: code,
          host_id: user.id,
          host_username: profile.username,
          subject,
          class_level: profile.class_level || 10,
          total_questions: parseInt(questionCount),
          status: "waiting",
          is_public: isPublic,
        })
        .select()
        .single();

      if (error) throw error;

      setRoomCode(code);
      setWaitingRoom(data);
      setMode("waiting");
      toast.success("Battle room created!");

      // Send invites to selected friends
      if (selectedFriends.size > 0) {
        const invites = Array.from(selectedFriends).map(friendId => ({
          sender_id: user.id,
          receiver_id: friendId,
          room_id: data.id,
          status: "pending",
          expires_at: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
        }));

        await supabase.from("battle_invitations").insert(invites);
        toast.success(`Invited ${selectedFriends.size} friend(s)!`);
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to create room");
    } finally {
      setLoading(false);
    }
  };

  const joinBattle = async (roomCodeToJoin?: string, roomId?: string) => {
    if (!user || !profile) return;
    const codeToUse = roomCodeToJoin || joinCode.trim().toUpperCase();
    if (!codeToUse && !roomId) return;
    
    setLoading(true);
    if (roomId) setJoiningRoom(roomId);

    try {
      let room;
      if (roomId) {
        const { data, error } = await supabase
          .from("battle_rooms")
          .select("*")
          .eq("id", roomId)
          .eq("status", "waiting")
          .single();
        if (error) throw error;
        room = data;
      } else {
        const { data, error } = await supabase
          .from("battle_rooms")
          .select("*")
          .eq("room_code", codeToUse)
          .eq("status", "waiting")
          .single();
        if (error || !data) {
          toast.error("Room not found or already started");
          return;
        }
        room = data;
      }

      // Check if room is too old (> 15 minutes)
      const roomAge = Date.now() - new Date(room.created_at).getTime();
      if (roomAge > 15 * 60 * 1000) {
        toast.error("यह room expire हो गया है। कृपया दूसरा room try करें।");
        fetchPublicRooms(); // Refresh the list
        return;
      }

      if (room.host_id === user.id) {
        toast.error("You cannot join your own room");
        return;
      }

      const { error: joinError } = await supabase
        .from("battle_rooms")
        .update({
          opponent_id: user.id,
          opponent_username: profile.username,
          status: "ready",
        })
        .eq("id", room.id)
        .eq("status", "waiting"); // Prevent race condition

      if (joinError) throw joinError;

      navigate(`/battle/${room.room_code}`);
    } catch (error: any) {
      toast.error(error.message || "Failed to join room");
    } finally {
      setLoading(false);
      setJoiningRoom(null);
    }
  };

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    toast.success("Room code copied!");
  };

  const shareRoom = async () => {
    const shareData = {
      title: "Quiz Battle Challenge!",
      text: `Join my Quiz Battle! Room Code: ${roomCode}`,
      url: window.location.origin + `/battle/${roomCode}`,
    };
    
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      copyRoomCode();
    }
  };

  const cancelWaiting = async () => {
    if (waitingRoom) {
      await supabase.from("battle_rooms").delete().eq("id", waitingRoom.id);
    }
    setWaitingRoom(null);
    setMode("select");
    setRoomCode("");
    setSelectedFriends(new Set());
  };

  const inviteFriend = async (friendId: string) => {
    if (!user || !profile || !waitingRoom) return;
    setSendingInvite(friendId);

    try {
      const { error } = await supabase
        .from("battle_invitations")
        .insert({
          sender_id: user.id,
          receiver_id: friendId,
          room_id: waitingRoom.id,
          status: "pending",
          expires_at: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
        });

      if (error) throw error;
      toast.success("Battle invitation sent!");
    } catch (error: any) {
      toast.error(error.message || "Failed to send invitation");
    } finally {
      setSendingInvite(null);
    }
  };

  const toggleFriendSelection = (friendId: string) => {
    const newSet = new Set(selectedFriends);
    if (newSet.has(friendId)) {
      newSet.delete(friendId);
    } else {
      newSet.add(friendId);
    }
    setSelectedFriends(newSet);
  };

  if (!user || !profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 pt-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => mode === "waiting" ? cancelWaiting() : mode === "select" ? navigate(-1) : setMode("select")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              <Swords className="w-7 h-7" />
              Multiplayer Battle
            </h1>
            <p className="text-white/80 text-sm">Challenge friends to a quiz duel!</p>
          </div>
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto">
        {/* Mode Selection */}
        {mode === "select" && (
          <div className="space-y-4">
            {/* User Card */}
            <Card className="p-4 bg-card border-border">
              <div className="flex items-center gap-3">
                <UserAvatar userId={user.id} size="md" />
                <div>
                  <p className="font-bold text-foreground">{profile.username}</p>
                  <p className="text-sm text-muted-foreground">Class {profile.class_level}</p>
                </div>
              </div>
            </Card>

            {/* Create Battle */}
            <Card
              className="p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/30 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setMode("create")}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                  <Swords className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Create Battle</h3>
                  <p className="text-sm text-muted-foreground">Host public or private room</p>
                </div>
              </div>
            </Card>

            {/* Join Private */}
            <Card
              className="p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/30 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setMode("join")}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Join Private</h3>
                  <p className="text-sm text-muted-foreground">Enter room code to join</p>
                </div>
              </div>
            </Card>

            {/* Browse Public */}
            <Card
              className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/30 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setMode("public")}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Browse Public</h3>
                  <p className="text-sm text-muted-foreground">Join open battle rooms</p>
                </div>
              </div>
            </Card>

            {/* Invite Friends */}
            {friends.length > 0 && (
              <Card
                className="p-6 bg-gradient-to-br from-pink-500/10 to-rose-600/10 border-pink-500/30 cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => {
                  setIsPublic(false);
                  setMode("create");
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                    <UserPlus className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Invite Friends</h3>
                    <p className="text-sm text-muted-foreground">{friends.length} friends available</p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Create Battle Form */}
        {mode === "create" && (
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold mb-4 text-foreground">Create Battle Room</h2>
            
            <div className="space-y-4">
              {/* Public/Private Toggle */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  {isPublic ? (
                    <Globe className="w-5 h-5 text-purple-500" />
                  ) : (
                    <Lock className="w-5 h-5 text-green-500" />
                  )}
                  <div>
                    <p className="font-medium text-sm">{isPublic ? "Public Room" : "Private Room"}</p>
                    <p className="text-xs text-muted-foreground">
                      {isPublic ? "Anyone can join from lobby" : "Only with room code/invite"}
                    </p>
                  </div>
                </div>
                <Switch checked={isPublic} onCheckedChange={setIsPublic} />
              </div>

              <div>
                <Label>Subject</Label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Questions</Label>
                <Select value={questionCount} onValueChange={setQuestionCount}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 Questions</SelectItem>
                    <SelectItem value="10">10 Questions</SelectItem>
                    <SelectItem value="15">15 Questions</SelectItem>
                    <SelectItem value="20">20 Questions</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Friend Selector */}
              {friends.length > 0 && !isPublic && (
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <UserPlus className="w-4 h-4" />
                    Invite Friends ({selectedFriends.size} selected)
                    <span className="text-xs text-green-500">
                      ({friends.filter(f => onlineUsers.has(f.id)).length} online)
                    </span>
                  </Label>
                  <ScrollArea className="h-40 border rounded-lg p-2">
                    <div className="space-y-2">
                      {/* Sort friends - online first */}
                      {[...friends].sort((a, b) => {
                        const aOnline = onlineUsers.has(a.id) ? 0 : 1;
                        const bOnline = onlineUsers.has(b.id) ? 0 : 1;
                        return aOnline - bOnline;
                      }).map((friend) => (
                        <div
                          key={friend.id}
                          className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                            selectedFriends.has(friend.id) ? "bg-primary/10" : "hover:bg-muted/50"
                          }`}
                          onClick={() => toggleFriendSelection(friend.id)}
                        >
                          <Checkbox checked={selectedFriends.has(friend.id)} />
                          <div className="relative">
                            <UserAvatar userId={friend.id} avatarStyle={friend.avatar_style} size="sm" />
                            <OnlineStatusIndicator 
                              isOnline={onlineUsers.has(friend.id)} 
                              className="absolute -bottom-0.5 -right-0.5"
                            />
                          </div>
                          <span className="text-sm font-medium">{friend.username}</span>
                          {onlineUsers.has(friend.id) && (
                            <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-500 ml-auto">
                              Online
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}

              <Button
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                onClick={createBattle}
                disabled={loading}
              >
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Swords className="w-4 h-4 mr-2" />}
                Create Room {selectedFriends.size > 0 && `& Invite ${selectedFriends.size}`}
              </Button>
            </div>
          </Card>
        )}

        {/* Join Private Form */}
        {mode === "join" && (
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Join Private Room
            </h2>
            
            <div className="space-y-4">
              <div>
                <Label>Room Code</Label>
                <Input
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  className="text-center text-2xl font-mono tracking-widest"
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                onClick={() => joinBattle()}
                disabled={loading || joinCode.length !== 6}
              >
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Users className="w-4 h-4 mr-2" />}
                Join Battle
              </Button>
            </div>
          </Card>
        )}

        {/* Browse Public Rooms */}
        {mode === "public" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-500" />
                Public Rooms
              </h2>
              <Button variant="ghost" size="sm" onClick={fetchPublicRooms} disabled={loadingPublicRooms}>
                <RefreshCw className={`w-4 h-4 ${loadingPublicRooms ? "animate-spin" : ""}`} />
              </Button>
            </div>

            {loadingPublicRooms ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : publicRooms.length === 0 ? (
              <Card className="p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">No public rooms available</p>
                <Button onClick={() => { setIsPublic(true); setMode("create"); }}>
                  Create Public Room
                </Button>
              </Card>
            ) : (
              <div className="space-y-3">
                {publicRooms.map((room) => (
                  <Card key={room.id} className="p-4 border-purple-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <UserAvatar userId={room.host_id} size="md" />
                        <div>
                          <p className="font-semibold">{room.host_username}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Badge variant="secondary" className="text-xs">
                              {subjects.find(s => s.value === room.subject)?.label || room.subject}
                            </Badge>
                            <span>{room.total_questions} Qs</span>
                            <span>Class {room.class_level}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-purple-500 hover:bg-purple-600"
                        onClick={() => joinBattle(room.room_code, room.id)}
                        disabled={joiningRoom === room.id}
                      >
                        {joiningRoom === room.id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          "Join"
                        )}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Waiting Room */}
        {mode === "waiting" && (
          <Card className="p-6 bg-card border-border text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center animate-pulse">
                <Swords className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Waiting for Opponent...</h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                {waitingRoom?.is_public ? (
                  <Badge className="bg-purple-500/20 text-purple-600">
                    <Globe className="w-3 h-3 mr-1" /> Public
                  </Badge>
                ) : (
                  <Badge className="bg-green-500/20 text-green-600">
                    <Lock className="w-3 h-3 mr-1" /> Private
                  </Badge>
                )}
              </div>
            </div>

            {/* Room Code Display */}
            <div className="bg-muted rounded-xl p-4 mb-4">
              <p className="text-sm text-muted-foreground mb-2">Room Code</p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-3xl font-mono font-bold tracking-widest text-foreground">{roomCode}</p>
                <Button variant="ghost" size="icon" onClick={copyRoomCode}>
                  <Copy className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Room Details */}
            <div className="text-sm text-muted-foreground mb-4">
              <p>Subject: {subjects.find(s => s.value === subject)?.label}</p>
              <p>Questions: {questionCount}</p>
            </div>

            <div className="flex gap-3 mb-4">
              <Button variant="outline" className="flex-1" onClick={cancelWaiting}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={shareRoom}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Invite Friends Section - Always Visible */}
            {friends.length > 0 && (
              <div className="pt-4 border-t border-border text-left">
                <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  Invite Friends
                </p>
                <ScrollArea className="h-40">
                  <div className="space-y-2">
                    {friends.map((friend) => (
                      <div
                        key={friend.id}
                        className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
                      >
                        <div className="flex items-center gap-2">
                          <UserAvatar userId={friend.id} avatarStyle={friend.avatar_style} size="sm" />
                          <span className="text-sm font-medium">{friend.username}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => inviteFriend(friend.id)}
                          disabled={sendingInvite === friend.id}
                          className="h-7"
                        >
                          {sendingInvite === friend.id ? (
                            <Loader2 className="w-3 h-3 animate-spin" />
                          ) : (
                            <Swords className="w-3 h-3" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            )}

            {friends.length === 0 && (
              <p className="text-xs text-muted-foreground mt-4">
                Add friends from the Leaderboard to invite them directly!
              </p>
            )}

            {/* Waiting Animation */}
            <div className="mt-6 flex justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </Card>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
