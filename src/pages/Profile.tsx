import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trophy, Target, TrendingUp, Award, Edit, X, Save, BarChart3 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomNav from "@/components/BottomNav";
import HamburgerMenu from "@/components/HamburgerMenu";
import { toast } from "@/hooks/use-toast";
import { getUserAchievements } from "@/utils/achievements";
import LeagueCard from "@/components/LeagueCard";
import StreakCounter from "@/components/StreakCounter";
import UserAvatar from "@/components/UserAvatar";
import SubjectPerformanceChart from "@/components/profile/SubjectPerformanceChart";
import PerformanceTrendChart from "@/components/profile/PerformanceTrendChart";
import DifficultyPieChart from "@/components/profile/DifficultyPieChart";
import SpeedAnalysisCard from "@/components/profile/SpeedAnalysisCard";
import ActivityCalendar from "@/components/profile/ActivityCalendar";
import PersonalizedInsights from "@/components/profile/PersonalizedInsights";
import {
  getSubjectWiseStats,
  getPerformanceTrend,
  getDifficultyStats,
  getSpeedStats,
  getActivityData,
  getPersonalizedInsights,
  SubjectStats,
  WeeklyTrend,
  DifficultyStats,
  SpeedStats,
  ActivityDay,
  PersonalizedInsight,
} from "@/utils/profileAnalytics";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState("");
  const [editClassLevel, setEditClassLevel] = useState<number>(10);
  const [editLanguage, setEditLanguage] = useState("hindi");

  // Analytics state
  const [subjectStats, setSubjectStats] = useState<SubjectStats[]>([]);
  const [weeklyTrend, setWeeklyTrend] = useState<WeeklyTrend[]>([]);
  const [difficultyStats, setDifficultyStats] = useState<DifficultyStats[]>([]);
  const [speedStats, setSpeedStats] = useState<SpeedStats>({
    avgTimePerQuestion: 0,
    fastestQuiz: 0,
    slowestQuiz: 0,
    totalSpeedBonus: 0,
    speedCategory: 'medium',
  });
  const [activityData, setActivityData] = useState<ActivityDay[]>([]);
  const [insights, setInsights] = useState<PersonalizedInsight[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/");
        return;
      }
      setUser(session.user);

      // Fetch profile
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .maybeSingle();
      
      if (profileData) {
        setProfile(profileData);
        setEditUsername(profileData.username || "");
        setEditClassLevel(profileData.class_level || 10);
        setEditLanguage(profileData.preferred_language || "hindi");
      } else if (!profileError || profileError.code === 'PGRST116') {
        setEditUsername(session.user.email?.split('@')[0] || "");
        setEditClassLevel(10);
        setEditLanguage("hindi");
      }

      // Fetch stats
      const { data: quizHistory } = await supabase
        .from("quiz_history")
        .select("*")
        .eq("user_id", session.user.id);

      if (quizHistory && quizHistory.length > 0) {
        const totalQuizzes = quizHistory.length;
        const totalScore = quizHistory.reduce((sum, q) => sum + (q.points_earned || 0), 0);
        const avgScore = Math.round(
          quizHistory.reduce((sum, q) => sum + (q.score / q.total_questions) * 100, 0) / totalQuizzes
        );
        const bestScore = Math.max(...quizHistory.map(q => Math.round((q.score / q.total_questions) * 100)));

        setStats({ totalQuizzes, totalScore, avgScore, bestScore });
      }

      // Fetch achievements
      const userAchievements = await getUserAchievements(session.user.id);
      setAchievements(userAchievements);

      // Fetch analytics data
      const [subjects, trend, difficulty, speed, activity] = await Promise.all([
        getSubjectWiseStats(session.user.id),
        getPerformanceTrend(session.user.id),
        getDifficultyStats(session.user.id),
        getSpeedStats(session.user.id),
        getActivityData(session.user.id),
      ]);

      setSubjectStats(subjects);
      setWeeklyTrend(trend);
      setDifficultyStats(difficulty);
      setSpeedStats(speed);
      setActivityData(activity);

      // Generate insights
      const personalizedInsights = await getPersonalizedInsights(
        session.user.id,
        subjects,
        speed,
        profileData?.current_streak || 0
      );
      setInsights(personalizedInsights);
    };

    checkUser();
  }, [navigate]);

  const retryWithBackoff = async (fn: () => Promise<any>, maxRetries = 3) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const result = await fn();
        return result;
      } catch (error: any) {
        const isNetworkError = error.message?.includes('fetch') || 
                               error.message?.includes('network') ||
                               error.code === 'PGRST301';
        
        if (i === maxRetries - 1 || !isNetworkError) throw error;
        
        const delay = Math.min(1000 * Math.pow(2, i), 5000);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editUsername.trim() || editUsername.length < 3) {
      toast({
        title: "त्रुटि",
        description: "Username कम से कम 3 अक्षर का होना चाहिए",
        variant: "destructive",
      });
      return;
    }

    if (!user?.id) {
      toast({
        title: "त्रुटि",
        description: "User ID नहीं मिली",
        variant: "destructive",
      });
      return;
    }

    try {
      const updateData = {
        id: user.id,
        username: editUsername.trim(),
        class_level: editClassLevel,
        preferred_language: editLanguage,
        updated_at: new Date().toISOString(),
      };

      setProfile(prev => prev ? { ...prev, ...updateData } : null);

      const result = await retryWithBackoff(async () => {
        const { data, error } = await supabase
          .from("profiles")
          .upsert(updateData, { onConflict: 'id' })
          .select()
          .single();
        return { data, error };
      });

      const { data, error } = result;

      if (error) {
        toast({
          title: "अपडेट में त्रुटि",
          description: error.message,
          variant: "destructive",
        });
        const { data: revertedProfile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        if (revertedProfile) setProfile(revertedProfile);
        return;
      }

      toast({
        title: "सफल!",
        description: "प्रोफाइल अपडेट हो गया है",
      });

      const refreshResult = await retryWithBackoff(async () => {
        const { data: refreshedProfile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        return refreshedProfile;
      });

      if (refreshResult) {
        setProfile(refreshResult);
        setEditUsername(refreshResult.username);
        setEditClassLevel(refreshResult.class_level);
        setEditLanguage(refreshResult.preferred_language);
      }

      setIsEditing(false);

    } catch (err: any) {
      const isNetworkError = err.message?.includes('fetch') || 
                             err.message?.includes('network');
      toast({
        title: isNetworkError ? "नेटवर्क त्रुटि" : "अप्रत्याशित त्रुटि",
        description: isNetworkError ? "इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें" : "कृपया पुनः प्रयास करें",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <header className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-4">
            <HamburgerMenu />
          </div>
          <div className="text-center">
            <UserAvatar 
              userId={user?.id || ''}
              avatarStyle={profile?.avatar_style}
              size="xl"
              fallbackText={profile?.username?.charAt(0) || "U"}
              className="mx-auto mb-4 border-4 border-primary-foreground/20"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{profile?.username || 'प्रोफाइल'}</h1>
            <p className="text-sm md:text-base text-primary-foreground/90">
              कक्षा {profile?.class_level || 10} • {profile?.league === 'diamond' ? '💎' : profile?.league === 'gold' ? '🥇' : profile?.league === 'silver' ? '🥈' : '🥉'} {profile?.league || 'bronze'} League
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-6xl">
        {/* League and Streak Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <LeagueCard 
            league={profile?.league || 'bronze'} 
            leaguePoints={profile?.league_points || 0} 
          />
          <StreakCounter 
            currentStreak={profile?.current_streak || 0}
            longestStreak={profile?.longest_streak || 0}
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <Card className="p-4 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
            <h3 className="text-2xl font-bold">{stats.totalQuizzes}</h3>
            <p className="text-xs text-muted-foreground">कुल क्विज़</p>
          </Card>
          <Card className="p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <h3 className="text-2xl font-bold">{stats.bestScore}%</h3>
            <p className="text-xs text-muted-foreground">सर्वश्रेष्ठ</p>
          </Card>
          <Card className="p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <h3 className="text-2xl font-bold">{stats.avgScore}%</h3>
            <p className="text-xs text-muted-foreground">औसत</p>
          </Card>
          <Card className="p-4 text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <h3 className="text-2xl font-bold">{stats.totalScore}</h3>
            <p className="text-xs text-muted-foreground">कुल अंक</p>
          </Card>
        </div>

        {/* Tabs for Analytics */}
        <Tabs defaultValue="analytics" className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              विश्लेषण
            </TabsTrigger>
            <TabsTrigger value="account">खाता</TabsTrigger>
            <TabsTrigger value="achievements">
              <Award className="h-4 w-4 mr-1" />
              उपलब्धियाँ
            </TabsTrigger>
          </TabsList>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6 mt-4">
            {/* Personalized Insights */}
            <PersonalizedInsights insights={insights} />

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <SubjectPerformanceChart data={subjectStats} />
              <PerformanceTrendChart data={weeklyTrend} />
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <DifficultyPieChart data={difficultyStats} />
              <SpeedAnalysisCard data={speedStats} />
            </div>

            {/* Activity Calendar */}
            <ActivityCalendar data={activityData} />
          </TabsContent>

          {/* Account Tab */}
          <TabsContent value="account" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    खाता जानकारी
                  </span>
                  {!isEditing && (
                    <Button onClick={() => setIsEditing(true)} size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-2" />
                      संपादित करें
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isEditing ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Username:</span>
                      <span className="font-semibold">{profile?.username || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-semibold">{user?.email || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">कक्षा:</span>
                      <span className="font-semibold">कक्षा {profile?.class_level || "N/A"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">भाषा:</span>
                      <span className="font-semibold">{profile?.preferred_language === "hindi" ? "हिंदी" : "English"}</span>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={editUsername}
                        onChange={(e) => setEditUsername(e.target.value)}
                        required
                        minLength={3}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="class">कक्षा</Label>
                      <Select value={editClassLevel.toString()} onValueChange={(val) => setEditClassLevel(Number(val))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9">कक्षा 9</SelectItem>
                          <SelectItem value="10">कक्षा 10</SelectItem>
                          <SelectItem value="11">कक्षा 11</SelectItem>
                          <SelectItem value="12">कक्षा 12</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="language">भाषा</Label>
                      <Select value={editLanguage} onValueChange={setEditLanguage}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hindi">हिंदी</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button type="submit" size="sm">
                        <Save className="w-4 h-4 mr-2" />
                        सहेजें
                      </Button>
                      <Button type="button" variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                        <X className="w-4 h-4 mr-2" />
                        रद्द करें
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  उपलब्धियाँ ({achievements.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {achievements.length > 0 ? (
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
                ) : (
                  <p className="text-center text-muted-foreground py-8">
                    अभी तक कोई उपलब्धि नहीं - क्विज़ खेलें और badges कमाएं! 🎯
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
