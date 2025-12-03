import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trophy, RotateCcw, Home, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { QuizQuestion } from "@/data/quizData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { checkAndAwardAchievements, Achievement } from "@/utils/achievements";
import HamburgerMenu from "@/components/HamburgerMenu";
import { calculateQuizPoints } from "@/utils/pointsCalculator";
import { useLanguage } from "@/contexts/LanguageContext";
import AchievementCelebration from "@/components/AchievementCelebration";

interface LocationState {
  score: number;
  total: number;
  answered: number;
  answers: Record<number, number>;
  questions: QuizQuestion[];
  timeElapsed?: number;
  subject?: string;
  difficulty?: string;
  classLevel?: number;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [saved, setSaved] = useState(false);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const { score, total, answered, answers, questions, timeElapsed, subject, difficulty, classLevel } = (location.state as LocationState) || {
    score: 0, 
    total: 5, 
    answered: 0,
    answers: {},
    questions: []
  };

  // Calculate points breakdown
  const pointsResult = calculateQuizPoints(
    score,
    total,
    difficulty || 'all',
    timeElapsed || 0,
    currentStreak
  );

  useEffect(() => {
    if (!location.state) {
      navigate("/");
      return;
    }

    const saveQuizHistory = async () => {
      if (saved) return;
      
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user?.id) {
          console.error('User must be authenticated to save quiz');
          toast({
            title: "त्रुटि",
            description: "परिणाम सहेजने के लिए लॉगिन आवश्यक है",
            variant: "destructive",
          });
          return;
        }

        // Get user's current streak
        const { data: profile } = await supabase
          .from('profiles')
          .select('current_streak')
          .eq('id', user.id)
          .single();
        
        if (profile) {
          setCurrentStreak(profile.current_streak || 0);
        }

        // Use the secure database function with validation
        const { data, error } = await supabase.rpc('submit_quiz_result', {
          p_score: score,
          p_total_questions: total,
          p_answered_questions: answered,
          p_time_taken: timeElapsed || 0,
          p_subject: subject || 'all',
          p_difficulty: difficulty || 'all',
          p_class_level: classLevel || 10
        });

        if (error) {
          console.error('Error saving quiz:', error);
          toast({
            title: "त्रुटि",
            description: "परिणाम सहेजने में समस्या आई",
            variant: "destructive",
          });
          return;
        }
        
        setSaved(true);

        // Check and award achievements
        const achievements = await checkAndAwardAchievements(user.id, {
          score,
          totalQuestions: total,
          subject: subject || 'all',
          timeTaken: timeElapsed,
        });

        if (achievements.length > 0) {
          setNewAchievements(achievements);
          setShowCelebration(true);
        }
      } catch (error) {
        console.error('Error saving quiz:', error);
        toast({
          title: "त्रुटि",
          description: "परिणाम सहेजने में समस्या आई",
          variant: "destructive",
        });
      }
    };

    saveQuizHistory();
  }, [location.state, navigate, saved, score, total, answered, timeElapsed, subject, difficulty, classLevel]);

  const percentage = Math.round((score / total) * 100);
  const unanswered = total - answered;
  
  const getResultMessage = () => {
    if (percentage >= 80) return "बहुत बढ़िया! 🎉";
    if (percentage >= 60) return "अच्छा प्रदर्शन! 👍";
    if (percentage >= 40) return "अच्छा प्रयास! 💪";
    return "अधिक अभ्यास करें! 📚";
  };

  const getResultColor = () => {
    if (percentage >= 80) return "text-secondary";
    if (percentage >= 60) return "text-primary";
    return "text-accent";
  };

  return (
    <>
      {/* Achievement Celebration Popup */}
      {showCelebration && newAchievements.length > 0 && (
        <AchievementCelebration 
          achievements={newAchievements} 
          onClose={() => setShowCelebration(false)} 
        />
      )}
      
    <div className="min-h-screen bg-background p-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold">परिणाम</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => navigate("/")} variant="outline" size="sm">
              <Home className="w-4 h-4 mr-2" />
              होम
            </Button>
            <HamburgerMenu />
          </div>
        </div>
        
        {/* Main Results Card */}
        <Card className="p-8 shadow-[var(--card-shadow)] border-border">
        <div className="text-center space-y-6">
          {/* Trophy Icon */}
          <div className="flex justify-center">
            <div className="bg-primary/10 p-6 rounded-full">
              <Trophy className="w-16 h-16 text-primary" />
            </div>
          </div>

          {/* Result Message */}
          <div>
            <h1 className={`text-3xl font-bold mb-2 ${getResultColor()}`}>
              {getResultMessage()}
            </h1>
            <p className="text-muted-foreground text-lg">परीक्षा परिणाम</p>
          </div>

          {/* Score Display */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
            <p className="text-lg text-foreground mb-2">आपका स्कोर</p>
            <p className="text-5xl font-bold text-foreground">
              {score} / {total}
            </p>
            <p className="text-2xl font-semibold text-primary mt-2">
              {percentage}%
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-secondary/10 rounded-lg border border-secondary/20">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold text-foreground">{score}</p>
              <p className="text-sm text-muted-foreground">{t("सही", "Correct")}</p>
            </div>
            <div className="text-center p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <XCircle className="w-8 h-8 mx-auto mb-2 text-destructive" />
              <p className="text-2xl font-bold text-foreground">{answered - score}</p>
              <p className="text-sm text-muted-foreground">{t("गलत", "Wrong")}</p>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
              <AlertCircle className="w-8 h-8 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold text-foreground">{unanswered}</p>
              <p className="text-sm text-muted-foreground">{t("छोड़े गए", "Skipped")}</p>
            </div>
          </div>

          {/* Points Breakdown */}
          <Card className="mt-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-4 text-center">
                📊 {t("Points Breakdown", "Points Breakdown")}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t("Base Points", "Base Points")} (1 × {score})</span>
                  <span className="font-bold">{pointsResult.breakdown.basePoints}</span>
                </div>
                <div className="flex justify-between items-center text-blue-600 dark:text-blue-400">
                  <span className="text-sm">⚡ {t("Speed Bonus", "Speed Bonus")}</span>
                  <span className="font-bold">+{pointsResult.speedBonus}</span>
                </div>
                <div className="flex justify-between items-center text-green-600 dark:text-green-400">
                  <span className="text-sm">
                    🎯 {t("Accuracy Bonus", "Accuracy Bonus")} ({Math.round((score/total)*100)}%)
                  </span>
                  <span className="font-bold">+{pointsResult.accuracyBonus}</span>
                </div>
                {pointsResult.breakdown.streakBonus > 1.0 && (
                  <div className="flex justify-between items-center text-orange-600 dark:text-orange-400">
                    <span className="text-sm">
                      🔥 {t("Streak Bonus", "Streak Bonus")} (×{pointsResult.breakdown.streakBonus})
                    </span>
                    <span className="font-bold">+20%</span>
                  </div>
                )}
                <Separator className="my-2" />
                <div className="flex justify-between items-center text-lg font-bold text-primary">
                  <span>{t("Total Points Earned", "Total Points Earned")}</span>
                  <span className="text-2xl">{pointsResult.pointsEarned}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={() => navigate("/leaderboard")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              size="lg"
            >
              <Trophy className="w-5 h-5 mr-2" />
              Leaderboard देखें
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              size="lg"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              फिर से प्रयास करें
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/10 font-semibold"
              size="lg"
            >
              <Home className="w-5 h-5 mr-2" />
              होम पेज पर जाएं
            </Button>
          </div>
        </div>
        </Card>

        {/* Answer Review */}
        <Card className="p-6 shadow-[var(--card-shadow)] border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">उत्तर समीक्षा</h2>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = answers[question.question_id];
              const isCorrect = userAnswer === question.correct_option_id;
              const wasAnswered = userAnswer !== undefined;
              
              return (
                <div
                  key={question.question_id}
                  className={`p-4 rounded-lg border-2 ${
                    !wasAnswered
                      ? "border-accent/30 bg-accent/5"
                      : isCorrect
                      ? "border-secondary/30 bg-secondary/5"
                      : "border-destructive/30 bg-destructive/5"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    {!wasAnswered ? (
                      <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    ) : isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-1">
                        प्रश्न {index + 1}: {question.text}
                      </p>
                      {!wasAnswered ? (
                        <p className="text-sm text-muted-foreground">❌ उत्तर नहीं दिया</p>
                      ) : (
                        <>
                          <p className="text-sm text-muted-foreground">
                            आपका उत्तर: <span className={isCorrect ? "text-secondary font-medium" : "text-destructive font-medium"}>
                              {question.options.find(opt => opt.option_id === userAnswer)?.option_text}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-secondary font-medium mt-1">
                              सही उत्तर: {question.options.find(opt => opt.option_id === question.correct_option_id)?.option_text}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
    </>
  );
};

export default Results;
