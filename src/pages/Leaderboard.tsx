import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Label } from "@/components/ui/label";
import BottomNav from "@/components/BottomNav";
import LeaderboardTabs from "@/components/LeaderboardTabs";
import UserRankCard from "@/components/UserRankCard";
import HamburgerMenu from "@/components/HamburgerMenu";

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

interface UserRank {
  rank: number;
  username: string;
  total_score: number;
  quiz_count: number;
  avg_score: number;
  league: string;
  current_streak: number;
  avatar_style?: string;
  user_id?: string;
}

const Leaderboard = () => {
  const navigate = useNavigate();
  const [allTimeLeaderboard, setAllTimeLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [monthlyLeaderboard, setMonthlyLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [userRank, setUserRank] = useState<UserRank | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [userClass, setUserClass] = useState<number | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/");
      } else {
        setCurrentUserId(user.id);
        const { data: profile } = await supabase
          .from("profiles")
          .select("class_level, avatar_style")
          .eq("id", user.id)
          .single();
        
        if (profile?.class_level) {
          setUserClass(profile.class_level);
          setSelectedClass(profile.class_level);
        }
      }
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    fetchLeaderboard();
  }, [selectedClass]);

  const fetchLeaderboard = async () => {
    try {
      if (!selectedClass || !currentUserId) {
        setAllTimeLeaderboard([]);
        setWeeklyLeaderboard([]);
        setMonthlyLeaderboard([]);
        setUserRank(null);
        setLoading(false);
        return;
      }

      // Fetch all leaderboard types and user profile in parallel
      const [allTimeRes, weeklyRes, monthlyRes, userRankRes, profileRes] = await Promise.all([
        supabase.rpc('get_class_leaderboard', { class_num: selectedClass }),
        supabase.rpc('get_weekly_leaderboard', { class_num: selectedClass }),
        supabase.rpc('get_monthly_leaderboard', { class_num: selectedClass }),
        supabase.rpc('get_user_rank', { p_user_id: currentUserId, class_num: selectedClass }),
        supabase.from('profiles').select('avatar_style').eq('id', currentUserId).single()
      ]);

      if (allTimeRes.error) throw allTimeRes.error;
      if (weeklyRes.error) throw weeklyRes.error;
      if (monthlyRes.error) throw monthlyRes.error;

      // Fetch avatar styles for all users in leaderboards
      const allUserIds = new Set<string>();
      [...(allTimeRes.data || []), ...(weeklyRes.data || []), ...(monthlyRes.data || [])].forEach((entry: any) => {
        if (entry.user_id) allUserIds.add(entry.user_id);
      });

      const { data: avatarData } = await supabase
        .from('profiles')
        .select('id, avatar_style')
        .in('id', Array.from(allUserIds));

      const avatarMap = new Map(avatarData?.map(p => [p.id, p.avatar_style]) || []);

      // Add avatar styles to leaderboard data
      const addAvatars = (data: any[]) => data.map(entry => ({
        ...entry,
        avatar_style: avatarMap.get(entry.user_id)
      }));

      setAllTimeLeaderboard(addAvatars(allTimeRes.data || []));
      setWeeklyLeaderboard(addAvatars(weeklyRes.data || []));
      setMonthlyLeaderboard(addAvatars(monthlyRes.data || []));
      
      if (userRankRes.data && userRankRes.data.length > 0) {
        setUserRank({
          ...userRankRes.data[0],
          avatar_style: profileRes.data?.avatar_style,
          user_id: currentUserId
        });
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setAllTimeLeaderboard([]);
      setWeeklyLeaderboard([]);
      setMonthlyLeaderboard([]);
      setUserRank(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 hidden md:flex"
            >
              <Home className="w-5 h-5 mr-2" />
              होम
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold mx-auto md:mx-0">🏆 Leaderboard</h1>
            <HamburgerMenu />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Class Filter */}
        <div className="mb-6 max-w-xs mx-auto">
          <Label htmlFor="class-filter" className="mb-2 block text-center">कक्षा चुनें</Label>
          <select
            id="class-filter"
            value={selectedClass || ""}
            onChange={(e) => setSelectedClass(e.target.value ? Number(e.target.value) : null)}
            className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">सभी कक्षाएं</option>
            <option value={9}>कक्षा 9</option>
            <option value={10}>कक्षा 10</option>
            <option value={11}>कक्षा 11</option>
            <option value={12}>कक्षा 12</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">लोड हो रहा है...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* User's Current Rank */}
            {userRank && (
              <UserRankCard
                rank={Number(userRank.rank)}
                username={userRank.username}
                totalScore={Number(userRank.total_score)}
                league={userRank.league}
                currentStreak={userRank.current_streak}
                userId={userRank.user_id || ''}
                avatarStyle={userRank.avatar_style}
              />
            )}

            {/* Leaderboard Tabs */}
            <LeaderboardTabs
              allTimeData={allTimeLeaderboard}
              weeklyData={weeklyLeaderboard}
              monthlyData={monthlyLeaderboard}
              currentUserId={currentUserId}
            />
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Leaderboard;
