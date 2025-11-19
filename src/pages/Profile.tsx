import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trophy, Target, TrendingUp, Award, Edit, X, Save } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BottomNav from "@/components/BottomNav";
import HamburgerMenu from "@/components/HamburgerMenu";
import { toast } from "@/hooks/use-toast";
import { getUserAchievements } from "@/utils/achievements";
import LeagueCard from "@/components/LeagueCard";
import StreakCounter from "@/components/StreakCounter";
import UserAvatar from "@/components/UserAvatar";

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
        setEditUsername(profileData.username || "");
        setEditClassLevel(profileData.class_level || 10);
        setEditLanguage(profileData.preferred_language || "hindi");
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
    
    if (!user?.id) return;
    
    const { error } = await supabase
      .from('profiles')
      .update({
        username: editUsername.trim(),
        class_level: editClassLevel,
        preferred_language: editLanguage,
      })
      .eq('id', user.id);
    
    if (error) {
      toast({
        title: "अपडेट में त्रुटि",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "सफल!",
        description: "प्रोफाइल अपडेट हो गया है",
      });
      setIsEditing(false);
      // Refresh profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (profileData) {
        setProfile(profileData);
      }
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

        {/* Account Information */}
        <Card className="shadow-[var(--card-shadow)] border-border">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                खाता जानकारी
              </div>
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
                  <span className="font-semibold text-foreground">{profile?.username || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-semibold text-foreground">{user?.email || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">कक्षा:</span>
                  <span className="font-semibold text-foreground">कक्षा {profile?.class_level || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">भाषा:</span>
                  <span className="font-semibold text-foreground">{profile?.preferred_language === "hindi" ? "हिंदी" : "English"}</span>
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
