import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Flame, Trophy, Target, Sparkles, ChevronRight, Gamepad2, GraduationCap, TrendingUp, Languages, Award, Swords } from "lucide-react";
import { subjects, getSubjectName } from "@/data/quizData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { getLeagueIcon } from "@/utils/pointsCalculator";
import { ACHIEVEMENTS, getUserAchievements } from "@/utils/achievements";
import BottomNav from "@/components/BottomNav";
import HamburgerMenu from "@/components/HamburgerMenu";
import UserAvatar from "@/components/UserAvatar";
import { DailyChallengeDialog } from "@/components/DailyChallengeDialog";
import GameCard from "@/components/GameCard";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Home = () => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [todayStats, setTodayStats] = useState({ quizzes: 0, accuracy: 0, points: 0 });
  const [loading, setLoading] = useState(true);
  const [showQuizSetup, setShowQuizSetup] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(10);
  const [dailyChallengeOpen, setDailyChallengeOpen] = useState(false);
  const [showChallengePopup, setShowChallengePopup] = useState(false);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [totalAchievements] = useState(Object.keys(ACHIEVEMENTS).length);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const today = new Date().toISOString().split('T')[0];
        
        // Run ALL queries in parallel for faster loading
        const [profileRes, quizHistoryRes, dailyChallengeRes, achievementsRes] = await Promise.all([
          supabase.from('profiles').select('*').eq('id', session.user.id).single(),
          supabase.from('quiz_history').select('*').eq('user_id', session.user.id).gte('created_at', today),
          supabase.from('daily_challenges').select('id').eq('user_id', session.user.id).eq('challenge_date', today).maybeSingle(),
          getUserAchievements(session.user.id)
        ]);

        // Process profile
        if (profileRes.data) {
          setProfile(profileRes.data);
        }

        // Process today's stats
        const quizHistory = quizHistoryRes.data;
        if (quizHistory && quizHistory.length > 0) {
          const totalQuizzes = quizHistory.length;
          const totalCorrect = quizHistory.reduce((sum, quiz) => sum + quiz.score, 0);
          const totalQuestions = quizHistory.reduce((sum, quiz) => sum + quiz.total_questions, 0);
          const totalPoints = quizHistory.reduce((sum, quiz) => sum + (quiz.points_earned || 0), 0);
          const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

          setTodayStats({
            quizzes: totalQuizzes,
            accuracy,
            points: totalPoints,
          });
        }

        // Show daily challenge popup if not completed
        if (!dailyChallengeRes.data) {
          setTimeout(() => setShowChallengePopup(true), 1000);
        }

        // Set achievements
        setAchievements(achievementsRes);
      }
      setLoading(false);
    };

    fetchUserData();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);


  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setShowQuizSetup(true);
  };

  const subjectGradients: Record<string, string> = {
    math: 'from-[hsl(217,91%,60%)] to-[hsl(217,91%,50%)]',
    science: 'from-[hsl(142,76%,36%)] to-[hsl(142,76%,28%)]',
    social: 'from-[hsl(25,95%,53%)] to-[hsl(25,95%,43%)]',
    hindi: 'from-[hsl(271,81%,56%)] to-[hsl(271,81%,46%)]',
    english: 'from-[hsl(330,81%,60%)] to-[hsl(330,81%,50%)]',
    it_ites: 'from-[hsl(195,91%,60%)] to-[hsl(195,91%,50%)]',
  };

  const subjectEmojis: Record<string, string> = {
    math: '📐',
    science: '🔬',
    social: '🌍',
    hindi: '✍️',
    english: '📚',
    it_ites: '💻',
  };

  const games = [
    { id: "multiplayer", name: "⚔️ Multiplayer Battle", emoji: "⚔️", gradient: "bg-gradient-to-br from-[hsl(0,85%,55%)] to-[hsl(25,95%,50%)]", route: "/multiplayer", players: 320 },
    { id: "spy-game", name: "🕵️ Who is the Spy?", emoji: "🕵️", gradient: "bg-gradient-to-br from-[hsl(280,70%,50%)] to-[hsl(320,70%,45%)]", route: "/games/spy", players: 250 },
    { id: "match-pair", name: "सही जोड़ी मिलाओ", emoji: "🔗", gradient: "bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(217,91%,45%)]", route: "/games/match-pair", players: 150 },
    { id: "quick-fire", name: "Quick Fire", emoji: "⚡", gradient: "bg-gradient-to-br from-[hsl(25,95%,53%)] to-[hsl(25,95%,40%)]", route: "/games/quick-fire", players: 200 },
    { id: "memory-cards", name: "Memory Cards", emoji: "🧠", gradient: "bg-gradient-to-br from-[hsl(271,81%,56%)] to-[hsl(271,81%,40%)]", route: "/games/memory-cards", players: 120 },
    { id: "true-false", name: "सही या गलत", emoji: "✓✗", gradient: "bg-gradient-to-br from-[hsl(142,76%,36%)] to-[hsl(142,76%,25%)]", route: "/games/true-false", players: 180 },
    { id: "fill-blanks", name: "खाली भरो", emoji: "📝", gradient: "bg-gradient-to-br from-[hsl(195,91%,60%)] to-[hsl(195,91%,45%)]", route: "/games/fill-blanks", players: 95 },
    { id: "chess", name: "शतरंज", emoji: "♟️", gradient: "bg-gradient-to-br from-[hsl(220,15%,30%)] to-[hsl(220,15%,15%)]", route: "/games/chess", players: 85 },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pb-20">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              Quiz App
            </h1>
          </div>
          <div className="flex items-center gap-2">
            {/* Language Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'hindi' ? 'english' : 'hindi')}
              className="flex items-center gap-1 text-xs"
            >
              <Languages className="w-4 h-4" />
              {language === 'hindi' ? 'EN' : 'हि'}
            </Button>
            <HamburgerMenu />
          </div>
        </div>

        {/* Hero Card - User Stats */}
        {profile && (
          <Card className="overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <UserAvatar 
                      userId={user?.id} 
                      avatarStyle={profile.avatar_style}
                      size="lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {t("👋 नमस्ते", "👋 Hello")}, {profile.username}!
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {t("कक्षा", "Class")} {profile.class_level}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                    <span className="text-2xl font-bold text-orange-600">
                      {profile.current_streak || 0}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Trophy className="w-5 h-5 text-gold" />
                    <span className="text-2xl font-bold text-foreground">
                      {getLeagueIcon(profile.league || 'bronze')}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground capitalize">
                    {profile.league || 'Bronze'} League
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-primary">
                      {profile.league_points || 0}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Points</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Achievements Card */}
        {profile && (
          <Card 
            className="border-primary/30 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-yellow-950/30 hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{t("🏆 उपलब्धियां", "🏆 Achievements")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {achievements.length}/{totalAchievements} {t("अनलॉक", "Unlocked")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Progress 
                    value={(achievements.length / totalAchievements) * 100} 
                    className="w-20 h-2"
                  />
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
              
              {/* Recent Achievements Preview */}
              {achievements.length > 0 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {achievements.slice(0, 3).map((a: any) => (
                    <span 
                      key={a.id} 
                      className="px-2 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-xs font-medium flex items-center gap-1"
                    >
                      {a.metadata?.icon || "🏅"} {a.achievement_name}
                    </span>
                  ))}
                  {achievements.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                      +{achievements.length - 3} {t("और", "more")}
                    </span>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Games Section - WePlay Style */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{t("🎮 गेम्स", "🎮 Games")}</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              <Gamepad2 className="w-4 h-4 mr-1" />
              {t("गेम रूम", "Game Room")}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>

        {/* Subject Cards */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">{t("📚 अपना विषय चुनें", "📚 Choose Your Subject")}</h2>
          <div className="grid grid-cols-2 gap-3">
            {subjects.filter(s => s.id !== 'all').map((subject) => (
              <Card 
                key={subject.id}
                className="group cursor-pointer border-none overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => handleSubjectClick(subject.id)}
              >
                <CardContent className={`p-4 bg-gradient-to-br ${subjectGradients[subject.id]} relative aspect-[4/3]`}>
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10" />
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10" />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="text-3xl">
                      {subjectEmojis[subject.id]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {getSubjectName(subject, language)}
                      </h3>
                      <div className="flex items-center justify-end text-white/80 mt-1">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Olympiad Section */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">{t("🏆 ओलंपियाड प्रैक्टिस", "🏆 Olympiad Practice")}</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* IMO - Math Olympiad */}
            <Card 
              className="group cursor-pointer border-none overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => {
                setSelectedSubject('olympiad_math');
                setShowQuizSetup(true);
              }}
            >
              <CardContent className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 relative aspect-[4/3]">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-white/20 rounded-full text-xs text-white font-medium">
                  IMO
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {t("गणित ओलंपियाड", "Math Olympiad")}
                    </h3>
                    <p className="text-xs text-white/80">
                      {t("20 प्रश्न", "20 Questions")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NSO - Science Olympiad */}
            <Card 
              className="group cursor-pointer border-none overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 opacity-60"
              onClick={() => {
                toast({
                  title: t("जल्द आ रहा है!", "Coming Soon!"),
                  description: t("विज्ञान ओलंपियाड जल्द उपलब्ध होगा", "Science Olympiad will be available soon"),
                });
              }}
            >
              <CardContent className="p-4 bg-gradient-to-br from-emerald-500 to-emerald-600 relative aspect-[4/3]">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10" />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-white/20 rounded-full text-xs text-white font-medium">
                  NSO
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="text-3xl">🥇</div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {t("विज्ञान ओलंपियाड", "Science Olympiad")}
                    </h3>
                    <p className="text-xs text-white/80">
                      {t("जल्द आ रहा है", "Coming Soon")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Daily Mission Card - Compact */}
        <Card className="border-secondary/30 bg-gradient-to-r from-secondary/20 to-secondary/5 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{t("⭐ डेली मिशन", "⭐ Daily Mission")}</h3>
                  <p className="text-xs text-muted-foreground">
                    {t("+50 बोनस अंक", "+50 bonus points")}
                  </p>
                </div>
              </div>
              <Button 
                size="sm"
                onClick={() => navigate("/quiz", { state: { questionCount: 10, difficulty: 'all' } })}
                className="bg-secondary hover:bg-secondary/90"
              >
                {t("शुरू करें", "Start")}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Today's Progress */}
        {todayStats.quizzes > 0 && (
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">{t("📊 आज की प्रगति", "📊 Today's Progress")}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-primary/5">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {todayStats.quizzes}
                  </div>
                  <p className="text-xs text-muted-foreground">{t("क्विज़", "Quizzes")}</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/5">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {todayStats.accuracy}%
                  </div>
                  <p className="text-xs text-muted-foreground">{t("सटीकता", "Accuracy")}</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent/5">
                  <div className="text-2xl font-bold text-accent mb-1">
                    +{todayStats.points}
                  </div>
                  <p className="text-xs text-muted-foreground">{t("अंक", "Points")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Motivational Quote */}
        <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-foreground/80 italic">
              💡 "Success is the sum of small efforts repeated day in and day out"
            </p>
            <p className="text-xs text-muted-foreground mt-2">- APJ Abdul Kalam</p>
          </CardContent>
        </Card>
      </div>

      {/* Quiz Setup Dialog */}
      <Dialog open={showQuizSetup} onOpenChange={setShowQuizSetup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">{t("🎯 Quiz सेटअप", "🎯 Quiz Setup")}</DialogTitle>
            <DialogDescription className="text-base">
              {(() => {
                const subject = subjects.find(s => s.id === selectedSubject);
                return subject ? getSubjectName(subject, language) : '';
              })()} {t("के लिए प्रश्नों की संख्या चुनें", "- Select number of questions")}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-3 my-4">
            {[10, 20, 30, 50].map((count) => (
              <Button
                key={count}
                variant={selectedQuestionCount === count ? "default" : "outline"}
                onClick={() => setSelectedQuestionCount(count)}
                className="h-16 text-lg font-semibold"
              >
                {count} {t("प्रश्न", "Questions")}
              </Button>
            ))}
          </div>

          <DialogFooter>
            <Button 
              onClick={() => {
                navigate("/quiz", { 
                  state: { 
                    questionCount: selectedQuestionCount,
                    subject: selectedSubject,
                    classLevel: profile?.class_level,
                    difficulty: 'all'
                  } 
                });
                setShowQuizSetup(false);
              }}
              className="w-full h-12 text-base font-semibold"
            >
              {t("🚀 Quiz शुरू करें", "🚀 Start Quiz")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Daily Challenge Corner Popup */}
      {showChallengePopup && (
        <div className="fixed bottom-24 right-4 z-50 animate-slide-in-right">
          <Card className="w-72 shadow-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground text-sm">🎯 Daily Challenge</h4>
                  <p className="text-xs text-muted-foreground">आज का चैलेंज पूरा करें!</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                20 प्रश्नों का उत्तर दें और <span className="font-bold text-primary">40 अंक</span> कमाएं
              </p>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  onClick={() => {
                    setShowChallengePopup(false);
                    setDailyChallengeOpen(true);
                  }}
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  शुरू करें
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setShowChallengePopup(false)}
                >
                  बाद में
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Daily Challenge Dialog */}
      <DailyChallengeDialog 
        open={dailyChallengeOpen} 
        onOpenChange={setDailyChallengeOpen}
      />

      <BottomNav />
    </div>
  );
};

export default Home;
