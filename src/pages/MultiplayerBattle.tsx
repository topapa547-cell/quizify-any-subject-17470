import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserAvatar from "@/components/UserAvatar";
import { ArrowLeft, Swords, Users, Copy, Loader2, Share2, UserPlus } from "lucide-react";
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

export default function MultiplayerBattle() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [mode, setMode] = useState<"select" | "create" | "join" | "waiting" | "invite">("select");
  const [roomCode, setRoomCode] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [subject, setSubject] = useState("all");
  const [questionCount, setQuestionCount] = useState("10");
  const [loading, setLoading] = useState(false);
  const [waitingRoom, setWaitingRoom] = useState<any>(null);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [loadingFriends, setLoadingFriends] = useState(false);
  const [sendingInvite, setSendingInvite] = useState<string | null>(null);

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
            // Opponent joined! Navigate to battle
            navigate(`/battle/${updatedRoom.room_code}`);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [waitingRoom, navigate]);

  const createBattle = async () => {
    if (!user || !profile) return;
    setLoading(true);

    try {
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
        })
        .select()
        .single();

      if (error) throw error;

      setRoomCode(code);
      setWaitingRoom(data);
      setMode("waiting");
      toast.success("Battle room created!");
    } catch (error: any) {
      toast.error(error.message || "Failed to create room");
    } finally {
      setLoading(false);
    }
  };

  const joinBattle = async () => {
    if (!user || !profile || !joinCode.trim()) return;
    setLoading(true);

    try {
      // Find the room
      const { data: room, error: findError } = await supabase
        .from("battle_rooms")
        .select("*")
        .eq("room_code", joinCode.toUpperCase())
        .eq("status", "waiting")
        .single();

      if (findError || !room) {
        toast.error("Room not found or already started");
        setLoading(false);
        return;
      }

      if (room.host_id === user.id) {
        toast.error("You cannot join your own room");
        setLoading(false);
        return;
      }

      // Join the room
      const { error: joinError } = await supabase
        .from("battle_rooms")
        .update({
          opponent_id: user.id,
          opponent_username: profile.username,
          status: "ready",
        })
        .eq("id", room.id);

      if (joinError) throw joinError;

      navigate(`/battle/${room.room_code}`);
    } catch (error: any) {
      toast.error(error.message || "Failed to join room");
    } finally {
      setLoading(false);
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
  };

  const fetchFriends = async () => {
    if (!user) return;
    setLoadingFriends(true);
    try {
      // Get accepted friendships where user is either side
      const { data: friendships } = await supabase
        .from("friends")
        .select("*")
        .eq("status", "accepted")
        .or(`user_id.eq.${user.id},friend_id.eq.${user.id}`);

      if (friendships && friendships.length > 0) {
        // Get friend IDs
        const friendIds = friendships.map(f => 
          f.user_id === user.id ? f.friend_id : f.user_id
        );

        // Get friend profiles
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

  const openInviteFriends = () => {
    fetchFriends();
    setMode("invite");
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
                  <p className="text-sm text-muted-foreground">Host a new battle room</p>
                </div>
              </div>
            </Card>

            {/* Join Battle */}
            <Card
              className="p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/30 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setMode("join")}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Join Battle</h3>
                  <p className="text-sm text-muted-foreground">Enter a room code to join</p>
                </div>
              </div>
            </Card>

            {/* Invite Friends */}
            <Card
              className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 border-purple-500/30 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => {
                fetchFriends();
                setMode("create"); // First create room, then show invite option
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <UserPlus className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Invite Friends</h3>
                  <p className="text-sm text-muted-foreground">Challenge your friends directly</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Create Battle Form */}
        {mode === "create" && (
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold mb-4 text-foreground">Create Battle Room</h2>
            
            <div className="space-y-4">
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

              <Button
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                onClick={createBattle}
                disabled={loading}
              >
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Swords className="w-4 h-4 mr-2" />}
                Create Room
              </Button>
            </div>
          </Card>
        )}

        {/* Join Battle Form */}
        {mode === "join" && (
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold mb-4 text-foreground">Join Battle Room</h2>
            
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
                onClick={joinBattle}
                disabled={loading || joinCode.length !== 6}
              >
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Users className="w-4 h-4 mr-2" />}
                Join Battle
              </Button>
            </div>
          </Card>
        )}

        {/* Waiting Room */}
        {mode === "waiting" && (
          <Card className="p-6 bg-card border-border text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center animate-pulse">
                <Swords className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Waiting for Opponent...</h2>
              <p className="text-muted-foreground text-sm mt-1">Share the room code with your friend</p>
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
            <div className="text-sm text-muted-foreground mb-6">
              <p>Subject: {subjects.find(s => s.value === subject)?.label}</p>
              <p>Questions: {questionCount}</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={cancelWaiting}>
                Cancel
              </Button>
              <Button className="flex-1" onClick={shareRoom}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Invite Friends Section */}
            {friends.length > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  Invite Friends
                </p>
                <ScrollArea className="h-32">
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
