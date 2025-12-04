import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserAvatar from "@/components/UserAvatar";
import OnlineStatusIndicator from "@/components/OnlineStatusIndicator";
import { UserPlus, Swords, Check, X, Loader2, Inbox, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface FriendRequest {
  id: string;
  user_id: string;
  friend_id: string;
  status: string;
  created_at: string;
  sender_username?: string;
  sender_avatar_style?: string;
}

interface BattleInvite {
  id: string;
  sender_id: string;
  receiver_id: string;
  room_id: string;
  status: string;
  expires_at: string;
  created_at: string;
  sender_username?: string;
  sender_avatar_style?: string;
  room_code?: string;
  subject?: string;
}

interface InboxSectionProps {
  userId: string;
}

export default function InboxSection({ userId }: InboxSectionProps) {
  const navigate = useNavigate();
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [battleInvites, setBattleInvites] = useState<BattleInvite[]>([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState<string | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<Set<string>>(new Set());

  const fetchInbox = async () => {
    setLoading(true);
    try {
      // Fetch pending friend requests
      const { data: requests } = await supabase
        .from("friends")
        .select("*")
        .eq("friend_id", userId)
        .eq("status", "pending");

      if (requests && requests.length > 0) {
        // Get sender profiles
        const senderIds = requests.map(r => r.user_id);
        const { data: profiles } = await supabase
          .from("profiles")
          .select("id, username, avatar_style")
          .in("id", senderIds);

        const enrichedRequests = requests.map(r => {
          const sender = profiles?.find(p => p.id === r.user_id);
          return {
            ...r,
            sender_username: sender?.username || "Unknown",
            sender_avatar_style: sender?.avatar_style,
          };
        });
        setFriendRequests(enrichedRequests);
      } else {
        setFriendRequests([]);
      }

      // Fetch pending battle invitations
      const { data: invites } = await supabase
        .from("battle_invitations")
        .select("*")
        .eq("receiver_id", userId)
        .eq("status", "pending")
        .gt("expires_at", new Date().toISOString());

      if (invites && invites.length > 0) {
        // Get sender profiles and room details
        const senderIds = invites.map(i => i.sender_id);
        const roomIds = invites.map(i => i.room_id).filter(Boolean);

        const [profilesRes, roomsRes] = await Promise.all([
          supabase.from("profiles").select("id, username, avatar_style").in("id", senderIds),
          roomIds.length > 0 
            ? supabase.from("battle_rooms").select("id, room_code, subject").in("id", roomIds)
            : { data: [] }
        ]);

        const enrichedInvites = invites.map(inv => {
          const sender = profilesRes.data?.find(p => p.id === inv.sender_id);
          const room = roomsRes.data?.find(r => r.id === inv.room_id);
          return {
            ...inv,
            sender_username: sender?.username || "Unknown",
            sender_avatar_style: sender?.avatar_style,
            room_code: room?.room_code,
            subject: room?.subject,
          };
        });
        setBattleInvites(enrichedInvites);
      } else {
        setBattleInvites([]);
      }
    } catch (error) {
      console.error("Error fetching inbox:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInbox();

    // Subscribe to real-time updates
    const friendChannel = supabase
      .channel("inbox_friends")
      .on("postgres_changes", { event: "*", schema: "public", table: "friends", filter: `friend_id=eq.${userId}` }, () => {
        fetchInbox();
      })
      .subscribe();

    const inviteChannel = supabase
      .channel("inbox_invites")
      .on("postgres_changes", { event: "*", schema: "public", table: "battle_invitations", filter: `receiver_id=eq.${userId}` }, () => {
        fetchInbox();
      })
      .subscribe();

    // Track online presence
    const presenceChannel = supabase.channel('online-users-inbox');
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
            user_id: userId,
            online_at: new Date().toISOString(),
          });
        }
      });

    return () => {
      supabase.removeChannel(friendChannel);
      supabase.removeChannel(inviteChannel);
      supabase.removeChannel(presenceChannel);
    };
  }, [userId]);

  const handleFriendRequest = async (requestId: string, accept: boolean) => {
    setProcessing(requestId);
    try {
      const { error } = await supabase
        .from("friends")
        .update({ status: accept ? "accepted" : "rejected" })
        .eq("id", requestId);

      if (error) throw error;

      toast({
        title: accept ? "Friend Added!" : "Request Rejected",
        description: accept ? "You are now friends!" : "Friend request rejected",
      });

      fetchInbox();
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setProcessing(null);
    }
  };

  const handleBattleInvite = async (invite: BattleInvite, accept: boolean) => {
    setProcessing(invite.id);
    try {
      if (accept && invite.room_code) {
        // Update invitation status
        await supabase
          .from("battle_invitations")
          .update({ status: "accepted" })
          .eq("id", invite.id);

        // Get user profile for joining
        const { data: profile } = await supabase
          .from("profiles")
          .select("username")
          .eq("id", userId)
          .single();

        // Join the battle room
        await supabase
          .from("battle_rooms")
          .update({
            opponent_id: userId,
            opponent_username: profile?.username,
            status: "ready",
          })
          .eq("id", invite.room_id);

        navigate(`/battle/${invite.room_code}`);
      } else {
        await supabase
          .from("battle_invitations")
          .update({ status: "rejected" })
          .eq("id", invite.id);

        toast({ title: "Invitation Declined" });
        fetchInbox();
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setProcessing(null);
    }
  };

  const totalCount = friendRequests.length + battleInvites.length;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all" className="flex items-center gap-1">
            <Inbox className="w-4 h-4" />
            All ({totalCount})
          </TabsTrigger>
          <TabsTrigger value="friends" className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            Friends ({friendRequests.length})
          </TabsTrigger>
          <TabsTrigger value="battles" className="flex items-center gap-1">
            <Swords className="w-4 h-4" />
            Battles ({battleInvites.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-3">
          {totalCount === 0 ? (
            <Card className="p-8 text-center">
              <Inbox className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No pending notifications</p>
            </Card>
          ) : (
            <>
              {friendRequests.map((req) => (
                <FriendRequestCard
                  key={req.id}
                  request={req}
                  processing={processing === req.id}
                  isOnline={onlineUsers.has(req.user_id)}
                  onAccept={() => handleFriendRequest(req.id, true)}
                  onReject={() => handleFriendRequest(req.id, false)}
                />
              ))}
              {battleInvites.map((inv) => (
                <BattleInviteCard
                  key={inv.id}
                  invite={inv}
                  processing={processing === inv.id}
                  isOnline={onlineUsers.has(inv.sender_id)}
                  onAccept={() => handleBattleInvite(inv, true)}
                  onReject={() => handleBattleInvite(inv, false)}
                />
              ))}
            </>
          )}
        </TabsContent>

        <TabsContent value="friends" className="mt-4 space-y-3">
          {friendRequests.length === 0 ? (
            <Card className="p-8 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No pending friend requests</p>
            </Card>
          ) : (
            friendRequests.map((req) => (
              <FriendRequestCard
                key={req.id}
                request={req}
                processing={processing === req.id}
                isOnline={onlineUsers.has(req.user_id)}
                onAccept={() => handleFriendRequest(req.id, true)}
                onReject={() => handleFriendRequest(req.id, false)}
              />
            ))
          )}
        </TabsContent>

        <TabsContent value="battles" className="mt-4 space-y-3">
          {battleInvites.length === 0 ? (
            <Card className="p-8 text-center">
              <Swords className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No pending battle invitations</p>
            </Card>
          ) : (
            battleInvites.map((inv) => (
              <BattleInviteCard
                key={inv.id}
                invite={inv}
                processing={processing === inv.id}
                isOnline={onlineUsers.has(inv.sender_id)}
                onAccept={() => handleBattleInvite(inv, true)}
                onReject={() => handleBattleInvite(inv, false)}
              />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function FriendRequestCard({
  request,
  processing,
  isOnline,
  onAccept,
  onReject,
}: {
  request: FriendRequest;
  processing: boolean;
  isOnline: boolean;
  onAccept: () => void;
  onReject: () => void;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <UserAvatar
              userId={request.user_id}
              avatarStyle={request.sender_avatar_style}
              size="md"
            />
            <OnlineStatusIndicator 
              isOnline={isOnline} 
              className="absolute -bottom-0.5 -right-0.5"
            />
          </div>
          <div>
            <p className="font-semibold">{request.sender_username}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <UserPlus className="w-3 h-3" />
              Friend Request
              {isOnline && <span className="text-green-500">• Online</span>}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="text-destructive"
            onClick={onReject}
            disabled={processing}
          >
            {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : <X className="w-4 h-4" />}
          </Button>
          <Button
            size="sm"
            className="bg-green-500 hover:bg-green-600"
            onClick={onAccept}
            disabled={processing}
          >
            {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </Card>
  );
}

function BattleInviteCard({
  invite,
  processing,
  isOnline,
  onAccept,
  onReject,
}: {
  invite: BattleInvite;
  processing: boolean;
  isOnline: boolean;
  onAccept: () => void;
  onReject: () => void;
}) {
  const expiresIn = Math.max(0, Math.floor((new Date(invite.expires_at).getTime() - Date.now()) / 60000));

  return (
    <Card className="p-4 border-orange-500/30 bg-gradient-to-r from-orange-500/5 to-red-500/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <UserAvatar
              userId={invite.sender_id}
              avatarStyle={invite.sender_avatar_style}
              size="md"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
              <Swords className="w-3 h-3 text-white" />
            </div>
            <OnlineStatusIndicator 
              isOnline={isOnline} 
              className="absolute -top-0.5 -right-0.5"
            />
          </div>
          <div>
            <p className="font-semibold">{invite.sender_username}</p>
            <p className="text-xs text-muted-foreground">
              Battle Challenge • {invite.subject || "All"} • Expires in {expiresIn}m
              {isOnline && <span className="text-green-500"> • Online</span>}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={onReject}
            disabled={processing}
          >
            {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Decline"}
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
            onClick={onAccept}
            disabled={processing}
          >
            {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : "Join Battle"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
