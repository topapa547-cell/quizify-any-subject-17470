import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { QuizQuestion, questionBank } from "@/data/quizData";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface DailyChallengeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DailyChallengeDialog = ({ open, onOpenChange }: DailyChallengeDialogProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate 20 random questions from all subjects
  useEffect(() => {
    if (open && questions.length === 0) {
      const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 20);
      setQuestions(selected);
      setStartTime(Date.now());
    }
  }, [open]);

  const handleAnswer = (optionId: number) => {
    setAnswers({ ...answers, [currentQuestion]: optionId });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const timeElapsed = Math.floor((Date.now() - startTime) / 1000);

    // Calculate score
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct_option_id) {
        score++;
      }
    });

    const pointsEarned = score * 2; // Fixed 2 points per correct
    const answeredCount = Object.keys(answers).length;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      // Save to daily_challenges table
      const { error } = await supabase.from("daily_challenges").insert({
        user_id: user.id,
        challenge_date: new Date().toISOString().split('T')[0],
        score,
        total_questions: 20,
        answered_questions: answeredCount,
        time_taken: timeElapsed,
        points_earned: pointsEarned,
      });

      if (error) throw error;

      // Update league points
      await supabase.rpc("update_user_league", { p_user_id: user.id });

      // Update user profile with points
      const { data: profile } = await supabase
        .from("profiles")
        .select("league_points")
        .eq("id", user.id)
        .single();

      if (profile) {
        await supabase
          .from("profiles")
          .update({ league_points: profile.league_points + pointsEarned })
          .eq("id", user.id);
      }

      toast.success(
        language === "hindi"
          ? `🎉 आज की चुनौती पूरी! ${pointsEarned} अंक मिले!`
          : `🎉 Daily Challenge Complete! Earned ${pointsEarned} points!`
      );

      onOpenChange(false);
      
      // Show results in a simple alert or navigate to a results view
      setTimeout(() => {
        toast.info(
          language === "hindi"
            ? `स्कोर: ${score}/20 | समय: ${Math.floor(timeElapsed / 60)}:${(timeElapsed % 60).toString().padStart(2, '0')}`
            : `Score: ${score}/20 | Time: ${Math.floor(timeElapsed / 60)}:${(timeElapsed % 60).toString().padStart(2, '0')}`
        );
      }, 500);

    } catch (error) {
      console.error("Error submitting daily challenge:", error);
      toast.error(
        language === "hindi"
          ? "चुनौती जमा करने में त्रुटि!"
          : "Error submitting challenge!"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (questions.length === 0) return null;

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            {language === "hindi" ? "🎯 आज की दैनिक चुनौती" : "🎯 Daily Challenge"}
          </DialogTitle>
          <DialogDescription>
            {language === "hindi"
              ? "20 प्रश्न | प्रत्येक सही उत्तर के लिए 2 अंक | अधिकतम 40 अंक"
              : "20 Questions | 2 Points per Correct Answer | Max 40 Points"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold">
                {language === "hindi" ? "प्रश्न" : "Question"} {currentQuestion + 1}/20
              </span>
              <span className="text-muted-foreground">
                {Object.keys(answers).length}/20 {language === "hindi" ? "उत्तर दिए" : "Answered"}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-6">
            <div className="mb-4">
              <p className="text-lg font-semibold text-foreground leading-relaxed">
                {currentQ.text}
              </p>
            </div>

            <RadioGroup
              value={answers[currentQuestion]?.toString() || ""}
              onValueChange={(value) => handleAnswer(Number(value))}
              className="space-y-3"
            >
              {currentQ.options.map((option) => (
                <div
                  key={option.option_id}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <RadioGroupItem
                    value={option.option_id.toString()}
                    id={`daily_option_${option.option_id}`}
                  />
                  <Label
                    htmlFor={`daily_option_${option.option_id}`}
                    className="flex-1 cursor-pointer font-medium"
                  >
                    {option.option_text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              {language === "hindi" ? "⬅️ पिछला" : "⬅️ Previous"}
            </Button>

            {currentQuestion === questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700"
              >
                {isSubmitting
                  ? language === "hindi"
                    ? "जमा हो रहा है..."
                    : "Submitting..."
                  : language === "hindi"
                  ? "✅ जमा करें"
                  : "✅ Submit"}
              </Button>
            ) : (
              <Button onClick={handleNext}>
                {language === "hindi" ? "अगला ➡️" : "Next ➡️"}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
