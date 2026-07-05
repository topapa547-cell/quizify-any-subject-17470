import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Home, Clock, Infinity as InfIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useLanguage } from "@/contexts/LanguageContext";

interface PQ {
  id: string;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_option: number;
  explanation: string | null;
}

const InfinitePracticeQuiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const state = location.state as {
    questions?: PQ[]; subject?: string; classLevel?: number; language?: string;
  } | null;

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startTime] = useState(Date.now());
  const [submitting, setSubmitting] = useState(false);

  const questions = state?.questions ?? [];

  useEffect(() => {
    if (!state?.questions?.length) {
      navigate("/infinite-practice", { replace: true });
    }
  }, [state, navigate]);

  useEffect(() => {
    const t = setInterval(() => setTimeElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(t);
  }, [startTime]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const answered = Object.keys(answers).length;
  const progress = questions.length ? (answered / questions.length) * 100 : 0;

  const handleSubmit = async () => {
    if (answered === 0) {
      toast({ title: t("कम से कम एक उत्तर दें", "Answer at least one question"), variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      let score = 0;
      const detailedQs = questions.map((q, i) => {
        const opts = [q.option_a, q.option_b, q.option_c, q.option_d];
        const selected = answers[q.id];
        if (selected === q.correct_option) score++;
        return {
          question_id: i + 1,
          text: q.question_text,
          options: opts.map((text, idx) => ({ option_id: idx, option_text: text })),
          correct_option_id: q.correct_option,
          explanation: q.explanation ?? undefined,
        };
      });

      const answersById: Record<number, number> = {};
      questions.forEach((q, i) => {
        if (answers[q.id] !== undefined) answersById[i + 1] = answers[q.id];
      });

      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Mark seen
        await supabase.from("practice_question_seen").upsert(
          questions.map((q) => ({ user_id: user.id, question_id: q.id })),
          { onConflict: "user_id,question_id" }
        );
        // Points: 1 per correct + accuracy bonus
        const acc = score / questions.length;
        const points = Math.round(score * 1 + (acc >= 0.9 ? score * 0.2 : acc >= 0.8 ? score * 0.1 : 0));
        await supabase.from("practice_attempts").insert({
          user_id: user.id,
          subject: state?.subject ?? "all",
          class_level: state?.classLevel ?? 10,
          language: state?.language ?? "hindi",
          question_count: questions.length,
          score,
          time_taken: timeElapsed,
          points_earned: points,
        });
        // Also add to profile league points for leaderboard XP
        const { data: prof } = await supabase.from("profiles").select("league_points").eq("id", user.id).single();
        if (prof) {
          await supabase.from("profiles").update({ league_points: (prof.league_points ?? 0) + points }).eq("id", user.id);
        }
      }

      navigate("/results", {
        state: {
          score,
          total: questions.length,
          answered,
          answers: answersById,
          questions: detailedQs,
          timeElapsed,
          subject: state?.subject,
          classLevel: state?.classLevel,
          difficulty: "mixed",
        },
      });
    } catch (e: any) {
      console.error(e);
      toast({ title: t("त्रुटि", "Error"), description: e.message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  if (!questions.length) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Button onClick={() => navigate("/infinite-practice")} variant="ghost" className="text-white hover:bg-white/10">
              <Home className="w-5 h-5 mr-2" />{t("वापस", "Back")}
            </Button>
            <div className="flex items-center gap-2">
              <InfIcon className="w-7 h-7" />
              <h1 className="text-xl md:text-2xl font-bold">{t("अनंत अभ्यास", "Infinite Practice")}</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">{formatTime(timeElapsed)}</span>
              </div>
              <HamburgerMenu />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{t("उत्तर", "Answered")}: {answered} / {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl space-y-6">
        {questions.map((q, idx) => (
          <Card key={q.id} className="p-6">
            <h3 className="text-lg font-semibold mb-2">{t("प्रश्न", "Question")} {idx + 1}</h3>
            <p className="mb-4">{q.question_text}</p>
            <RadioGroup
              value={answers[q.id]?.toString() ?? ""}
              onValueChange={(v) => setAnswers((p) => ({ ...p, [q.id]: Number(v) }))}
              className="space-y-3"
            >
              {[q.option_a, q.option_b, q.option_c, q.option_d].map((opt, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value={i.toString()} id={`${q.id}_${i}`} />
                  <Label htmlFor={`${q.id}_${i}`} className="flex-1 cursor-pointer">{opt}</Label>
                </div>
              ))}
            </RadioGroup>
          </Card>
        ))}

        <div className="flex justify-center pt-4">
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={submitting || answered === 0}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12"
          >
            {submitting ? t("जमा हो रहा है...", "Submitting...") : t("स्कोर देखें", "See Score")} ({answered})
          </Button>
        </div>
      </main>
    </div>
  );
};

export default InfinitePracticeQuiz;
