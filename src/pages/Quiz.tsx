import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { generateQuiz } from "@/data/quizData";
import { QuestionCard } from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import { GraduationCap, Home } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [quizData, setQuizData] = useState(generateQuiz(5));

  useEffect(() => {
    const state = location.state as { 
      questionCount?: number;
      subject?: string;
      classLevel?: number;
      difficulty?: string;
    };
    
    const questionCount = state?.questionCount || 5;
    const subject = state?.subject || "all";
    const classLevel = state?.classLevel;
    const difficulty = state?.difficulty || "all";
    
    setQuizData(generateQuiz(questionCount, subject, classLevel, difficulty));
  }, [location.state]);

  const handleAnswerChange = (questionId: number, optionId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(answers).length;
    
    // Allow submission even with partial answers
    if (answeredCount === 0) {
      toast({
        title: "कोई उत्तर नहीं दिया",
        description: "कृपया कम से कम एक प्रश्न का उत्तर दें।",
        variant: "destructive",
      });
      return;
    }

    // Calculate score
    let score = 0;
    quizData.questions.forEach((question) => {
      const selectedAnswer = answers[question.question_id];
      if (selectedAnswer === question.correct_option_id) {
        score++;
      }
    });

    // Navigate to results page with detailed data
    navigate("/results", { 
      state: { 
        score, 
        total: quizData.total_questions,
        answered: answeredCount,
        answers,
        questions: quizData.questions
      } 
    });
  };

  const answeredCount = Object.keys(answers).length;
  const progressPercentage = (answeredCount / quizData.total_questions) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-8 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Home className="w-5 h-5 mr-2" />
              होम
            </Button>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-10 h-10" />
              <h1 className="text-2xl md:text-3xl font-bold">{quizData.quiz_title}</h1>
            </div>
            <div className="w-24"></div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-primary-foreground/90">
              <span>उत्तर दिए गए: {answeredCount} / {quizData.total_questions}</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-primary-foreground/20" />
          </div>
        </div>
      </header>

      {/* Quiz Content */}
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-6">
          {quizData.questions.map((question, index) => (
            <QuestionCard
              key={question.question_id}
              question={question}
              questionNumber={index + 1}
              selectedAnswer={answers[question.question_id] || null}
              onAnswerChange={(optionId) =>
                handleAnswerChange(question.question_id, optionId)
              }
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {answeredCount < quizData.total_questions && (
            <p className="text-muted-foreground text-center">
              💡 आप {quizData.total_questions - answeredCount} प्रश्न छोड़कर भी परिणाम देख सकते हैं
            </p>
          )}
          <Button
            onClick={handleSubmit}
            size="lg"
            disabled={answeredCount === 0}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
          >
            स्कोर देखें ({answeredCount} उत्तर)
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
