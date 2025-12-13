import { useState, useEffect } from "react";
import { Trophy, Crown, Medal, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/UserAvatar";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

interface LeaderboardEntry {
  rank: number;
  user_id: string;
  username: string;
  total_points: number;
  puzzles_solved: number;
  current_streak: number;
  elo_rating: number;
}

export const ChessLeaderboard = () => {
  const { language } = useLanguage();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [currentUserRank, setCurrentUserRank] = useState<LeaderboardEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setCurrentUserId(user.id);

      const { data, error } = await supabase.rpc('get_chess_leaderboard', { limit_count: 100 });
      
      if (error) throw error;

      if (data) {
        setLeaderboard(data as LeaderboardEntry[]);
        
        // Find current user's rank
        if (user) {
          const userEntry = (data as LeaderboardEntry[]).find(e => e.user_id === user.id);
          if (userEntry) {
            setCurrentUserRank(userEntry);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Medal className="h-5 w-5 text-amber-600" />;
      default: return <span className="text-muted-foreground font-bold">#{rank}</span>;
    }
  };

  const getEloTier = (elo: number) => {
    if (elo >= 1800) return { name: 'Grandmaster', color: 'bg-purple-500' };
    if (elo >= 1500) return { name: 'Master', color: 'bg-amber-500' };
    if (elo >= 1200) return { name: 'Expert', color: 'bg-blue-500' };
    if (elo >= 900) return { name: 'Intermediate', color: 'bg-green-500' };
    return { name: 'Beginner', color: 'bg-gray-500' };
  };

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map(i => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-3 w-16" />
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Current User Card */}
      {currentUserRank && (
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-amber-800 dark:text-amber-200">
                  {language === 'hindi' ? 'आपकी रैंक' : 'Your Rank'}
                </p>
                <p className="text-sm text-amber-600">
                  #{currentUserRank.rank} • {currentUserRank.total_points} {language === 'hindi' ? 'अंक' : 'pts'}
                </p>
              </div>
              <Badge className={getEloTier(currentUserRank.elo_rating).color}>
                {currentUserRank.elo_rating} ELO
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Leaderboard List */}
      {leaderboard.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <Star className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">
              {language === 'hindi' 
                ? 'अभी तक कोई रैंकिंग नहीं। पहले बनें!' 
                : 'No rankings yet. Be the first!'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {leaderboard.map((entry) => {
            const isCurrentUser = entry.user_id === currentUserId;
            const eloTier = getEloTier(entry.elo_rating);
            
            return (
              <Card 
                key={entry.user_id}
                className={`${isCurrentUser ? 'ring-2 ring-amber-400' : ''}`}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    {/* Rank */}
                    <div className="w-8 flex justify-center">
                      {getRankIcon(entry.rank)}
                    </div>

                    {/* Avatar */}
                    <UserAvatar 
                      userId={entry.user_id} 
                      size="sm" 
                      className="flex-shrink-0"
                    />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium truncate ${isCurrentUser ? 'text-amber-600' : ''}`}>
                        {entry.username}
                        {isCurrentUser && ' (You)'}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>🧩 {entry.puzzles_solved}</span>
                        <span>🔥 {entry.current_streak}</span>
                      </div>
                    </div>

                    {/* Score & ELO */}
                    <div className="text-right">
                      <p className="font-bold text-amber-600">{entry.total_points}</p>
                      <Badge variant="outline" className="text-xs">
                        {entry.elo_rating}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
