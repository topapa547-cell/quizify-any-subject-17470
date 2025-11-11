import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, RotateCcw, Home, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { QuizQuestion } from "@/data/quizData";

interface LocationState {
  score: number;
  total: number;
  answered: number;
  answers: Record<number, number>;
  questions: QuizQuestion[];
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, answered, answers, questions } = (location.state as LocationState) || { 
    score: 0, 
    total: 5, 
    answered: 0,
    answers: {},
    questions: []
  };

  useEffect(() => {
    // Redirect to home if accessed directly without state
    if (!location.state) {
      navigate("/");
    }
  }, [location.state, navigate]);

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
    <div className="min-h-screen bg-background p-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
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
              <p className="text-sm text-muted-foreground">सही</p>
            </div>
            <div className="text-center p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <XCircle className="w-8 h-8 mx-auto mb-2 text-destructive" />
              <p className="text-2xl font-bold text-foreground">{answered - score}</p>
              <p className="text-sm text-muted-foreground">गलत</p>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
              <AlertCircle className="w-8 h-8 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold text-foreground">{unanswered}</p>
              <p className="text-sm text-muted-foreground">छोड़े गए</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
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
  );
};

export default Results;
