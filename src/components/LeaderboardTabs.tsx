import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, UserPlus, Check, Loader2 } from "lucide-react";
import { getLeagueIcon } from "@/utils/pointsCalculator";
import UserAvatar from "@/components/UserAvatar";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface LeaderboardEntry {
  username: string;
  total_score: number;
  quiz_count: number;
  avg_score: number;
  league: string;
  current_streak: number;
  user_id: string;
  avatar_style?: string;
}

interface LeaderboardTabsProps {
  allTimeData: LeaderboardEntry[];
  weeklyData: LeaderboardEntry[];
  monthlyData: LeaderboardEntry[];
  currentUserId: string | null;
}

const LeaderboardTabs = ({ allTimeData, weeklyData, monthlyData, currentUserId }: LeaderboardTabsProps) => {
  const [friendRequestsSent, setFriendRequestsSent] = useState<Set<string>>(new Set());
  const [sendingRequest, setSendingRequest] = useState<string | null>(null);

  const sendFriendRequest = async (targetUserId: string) => {
    if (!currentUserId) return;
    setSendingRequest(targetUserId);

    try {
      // Check if already friends or pending
      const { data: existing } = await supabase
        .from("friends")
        .select("*")
        .or(`and(user_id.eq.${currentUserId},friend_id.eq.${targetUserId}),and(user_id.eq.${targetUserId},friend_id.eq.${currentUserId})`)
        .maybeSingle();

      if (existing) {
        if (existing.status === "accepted") {
          toast({ title: "Already friends!" });
        } else if (existing.status === "pending") {
          toast({ title: "Request already sent" });
        }
        setFriendRequestsSent(prev => new Set(prev).add(targetUserId));
        return;
      }

      const { error } = await supabase
        .from("friends")
        .insert({
          user_id: currentUserId,
          friend_id: targetUserId,
          status: "pending",
        });

      if (error) throw error;

      setFriendRequestsSent(prev => new Set(prev).add(targetUserId));
      toast({ title: "Friend request sent!", description: "Waiting for them to accept" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setSendingRequest(null);
    }
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (index === 1) return <Medal className="w-6 h-6 text-gray-400" />;
    if (index === 2) return <Award className="w-6 h-6 text-amber-600" />;
    return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">#{index + 1}</span>;
  };

  const renderLeaderboard = (data: LeaderboardEntry[]) => {
    if (data.length === 0) {
      return (
        <Card>
          <CardContent className="py-12 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">अभी तक कोई स्कोर नहीं है!</p>
            <p className="text-sm text-muted-foreground mt-2">पहले क्विज़ खेलें।</p>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="space-y-4">
        {data.map((entry, index) => {
          const isCurrentUser = entry.user_id === currentUserId;
          const canAddFriend = !isCurrentUser && currentUserId;
          const requestSent = friendRequestsSent.has(entry.user_id);
          const isSending = sendingRequest === entry.user_id;

          return (
            <Card 
              key={`${entry.user_id}-${index}`} 
              className={`${index < 3 ? 'border-primary/50' : ''} ${isCurrentUser ? 'bg-primary/10 border-primary' : ''}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <UserAvatar 
                        userId={entry.user_id}
                        avatarStyle={entry.avatar_style}
                        size={index < 3 ? "lg" : "md"}
                        fallbackText={entry.username.charAt(0)}
                      />
                      {index < 3 && (
                        <div className="absolute -top-1 -right-1">
                          {index === 0 && <Trophy className="w-5 h-5 text-yellow-500" />}
                          {index === 1 && <Medal className="w-5 h-5 text-gray-400" />}
                          {index === 2 && <Award className="w-5 h-5 text-amber-600" />}
                        </div>
                      )}
                      {index >= 3 && (
                        <div className="absolute -bottom-1 -right-1 bg-muted text-muted-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {entry.username}
                        {isCurrentUser && (
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">आप</span>
                        )}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-sm text-muted-foreground">{entry.quiz_count} क्विज़ खेला</p>
                        <span className="text-sm">{getLeagueIcon(entry.league)}</span>
                        {entry.current_streak > 0 && (
                          <span className="text-sm text-orange-600">🔥 {entry.current_streak}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {canAddFriend && (
                      <Button
                        size="icon"
                        variant={requestSent ? "secondary" : "outline"}
                        className="h-8 w-8"
                        onClick={() => !requestSent && sendFriendRequest(entry.user_id)}
                        disabled={requestSent || isSending}
                      >
                        {isSending ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : requestSent ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <UserPlus className="w-4 h-4" />
                        )}
                      </Button>
                    )}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{entry.total_score}</div>
                      <p className="text-xs text-muted-foreground">अंक</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">औसत स्कोर</span>
                  <span className="text-lg font-semibold">{entry.avg_score}%</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <Tabs defaultValue="all-time" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="all-time">All-Time</TabsTrigger>
        <TabsTrigger value="weekly">साप्ताहिक</TabsTrigger>
        <TabsTrigger value="monthly">मासिक</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all-time">
        {renderLeaderboard(allTimeData)}
      </TabsContent>
      
      <TabsContent value="weekly">
        {renderLeaderboard(weeklyData)}
      </TabsContent>
      
      <TabsContent value="monthly">
        {renderLeaderboard(monthlyData)}
      </TabsContent>
    </Tabs>
  );
};

export default LeaderboardTabs;
