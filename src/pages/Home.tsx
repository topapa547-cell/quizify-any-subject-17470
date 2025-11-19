import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Flame, Trophy, Target, TrendingUp, Sparkles, ChevronRight } from "lucide-react";
import { subjects } from "@/data/quizData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { getLeagueIcon, getLeagueName } from "@/utils/pointsCalculator";
import BottomNav from "@/components/BottomNav";
import HamburgerMenu from "@/components/HamburgerMenu";
import UserAvatar from "@/components/UserAvatar";
import { DailyChallengeDialog } from "@/components/DailyChallengeDialog";
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
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [todayStats, setTodayStats] = useState({ quizzes: 0, accuracy: 0, points: 0 });
  const [loading, setLoading] = useState(true);
  const [showQuizSetup, setShowQuizSetup] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(10);
  const [dailyChallengeOpen, setDailyChallengeOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      
      if (session?.user) {
        // Fetch profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        
        if (profileData) {
          setProfile(profileData);
        }

        // Fetch today's stats
        const today = new Date().toISOString().split('T')[0];
        const { data: quizHistory } = await supabase
          .from('quiz_history')
          .select('*')
          .eq('user_id', session.user.id)
          .gte('created_at', today);

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

        // Check if daily challenge is completed
        checkDailyChallenge(session.user.id);
      }
      setLoading(false);
    };

    fetchUserData();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkDailyChallenge = async (userId: string) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const { data, error } = await supabase
        .from("daily_challenges")
        .select("id")
        .eq("user_id", userId)
        .eq("challenge_date", today)
        .maybeSingle();

      if (error) throw error;

      // If no challenge completed today, show dialog after 1 second
      if (!data) {
        setTimeout(() => {
          setDailyChallengeOpen(true);
        }, 1000);
      }
    } catch (error) {
      console.error("Error checking daily challenge:", error);
    }
  };

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
          <HamburgerMenu />
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
                      👋 नमस्ते, {profile.username}!
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      कक्षा {profile.class_level}
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

        {/* Daily Mission Card */}
        <Card className="border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/5 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-secondary" />
                  <h3 className="text-lg font-bold text-foreground">⭐ Daily Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  आज 10 प्रश्नों का अभ्यास पूरा करें
                </p>
                <p className="text-xs text-secondary font-semibold">
                  ⚡ Reward: 50 bonus points
                </p>
              </div>
              <Button 
                onClick={() => navigate("/quiz", { state: { questionCount: 10, difficulty: 'all' } })}
                className="bg-secondary hover:bg-secondary/90"
              >
                Start
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Subject Cards */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">📚 अपना विषय चुनें</h2>
          <div className="grid grid-cols-2 gap-4">
            {subjects.filter(s => s.id !== 'all').map((subject) => (
              <Card 
                key={subject.id}
                className="group cursor-pointer border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={() => handleSubjectClick(subject.id)}
              >
                <CardContent className={`p-6 bg-gradient-to-br ${subjectGradients[subject.id]} relative`}>
                  <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors" />
                  <div className="relative z-10">
                    <div className="text-4xl mb-3">
                      {subjectEmojis[subject.id]}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {subject.name}
                    </h3>
                    <div className="flex items-center justify-end text-white/90">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Today's Progress */}
        {todayStats.quizzes > 0 && (
          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">📊 आज की प्रगति</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-lg bg-primary/5">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {todayStats.quizzes}
                  </div>
                  <p className="text-xs text-muted-foreground">Quizzes</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/5">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {todayStats.accuracy}%
                  </div>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent/5">
                  <div className="text-2xl font-bold text-accent mb-1">
                    +{todayStats.points}
                  </div>
                  <p className="text-xs text-muted-foreground">Points</p>
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
            <DialogTitle className="text-2xl">🎯 Quiz Setup</DialogTitle>
            <DialogDescription className="text-base">
              {subjects.find(s => s.id === selectedSubject)?.name} के लिए प्रश्नों की संख्या चुनें
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
                {count} प्रश्न
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
              🚀 Quiz शुरू करें
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
