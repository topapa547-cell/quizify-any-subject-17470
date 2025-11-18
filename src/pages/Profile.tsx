import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Trophy, Target, TrendingUp, LogOut, Award } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { toast } from "@/hooks/use-toast";
import { getUserAchievements } from "@/utils/achievements";
import LeagueCard from "@/components/LeagueCard";
import StreakCounter from "@/components/StreakCounter";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    totalScore: 0,
    avgScore: 0,
    bestScore: 0,
  });
  const [achievements, setAchievements] = useState<any[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/");
        return;
      }
      setUser(session.user);

      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      
      if (profileData) {
        setProfile(profileData);
      }

      // Fetch stats
      const { data: quizHistory } = await supabase
        .from("quiz_history")
        .select("*")
        .eq("user_id", session.user.id);

      if (quizHistory && quizHistory.length > 0) {
        const totalQuizzes = quizHistory.length;
        const totalScore = quizHistory.reduce((sum, q) => sum + q.score, 0);
        const avgScore = Math.round(totalScore / totalQuizzes);
        const bestScore = Math.max(...quizHistory.map(q => q.score));

        setStats({ totalQuizzes, totalScore, avgScore, bestScore });
      }

      // Fetch achievements
      const userAchievements = await getUserAchievements(session.user.id);
      setAchievements(userAchievements);
    };

    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <header className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-4">
            <Button onClick={handleLogout} variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
          <div className="text-center">
            <User className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">प्रोफाइल</h1>
            <p className="text-sm md:text-base text-primary-foreground/90">
              {profile?.username || user?.email}
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* League and Streak Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <LeagueCard 
            league={profile?.league || 'bronze'} 
            leaguePoints={profile?.league_points || 0} 
          />
          <StreakCounter 
            currentStreak={profile?.current_streak || 0}
            longestStreak={profile?.longest_streak || 0}
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Card className="p-6 text-center border-border shadow-lg">
            <Target className="w-12 h-12 mx-auto mb-3 text-primary" />
            <h3 className="text-3xl font-bold text-foreground mb-1">{stats.totalQuizzes}</h3>
            <p className="text-muted-foreground">कुल क्विज़</p>
          </Card>

          <Card className="p-6 text-center border-border shadow-lg">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-accent" />
            <h3 className="text-3xl font-bold text-foreground mb-1">{stats.bestScore}</h3>
            <p className="text-muted-foreground">सर्वश्रेष्ठ स्कोर</p>
          </Card>

          <Card className="p-6 text-center border-border shadow-lg">
            <TrendingUp className="w-12 h-12 mx-auto mb-3 text-secondary" />
            <h3 className="text-3xl font-bold text-foreground mb-1">{stats.avgScore}%</h3>
            <p className="text-muted-foreground">औसत स्कोर</p>
          </Card>

          <Card className="p-6 text-center border-border shadow-lg">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-primary" />
            <h3 className="text-3xl font-bold text-foreground mb-1">{stats.totalScore}</h3>
            <p className="text-muted-foreground">कुल अंक</p>
          </Card>
        </div>

        <Card className="mt-6 p-6">
          <CardHeader>
            <CardTitle>अकाउंट जानकारी</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Username</p>
              <p className="text-lg font-medium">{profile?.username || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-lg font-medium">{user?.email}</p>
            </div>
            {profile?.class_level && (
              <div>
                <p className="text-sm text-muted-foreground">कक्षा</p>
                <p className="text-lg font-medium">कक्षा {profile.class_level}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Achievements Section */}
        {achievements.length > 0 && (
          <Card className="mt-6 p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                उपलब्धियाँ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="p-4 border border-border rounded-lg text-center space-y-2 hover:bg-accent/50 transition-colors"
                  >
                    <div className="text-4xl">{achievement.metadata?.icon || "🏆"}</div>
                    <h3 className="font-semibold text-sm">{achievement.achievement_name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {achievement.achievement_description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(achievement.earned_at).toLocaleDateString("hi-IN")}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
