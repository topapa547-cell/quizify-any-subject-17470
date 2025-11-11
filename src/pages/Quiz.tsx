import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizData } from "@/data/quizData";
import { QuestionCard } from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Quiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswerChange = (questionId: number, optionId: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    if (Object.keys(answers).length < quizData.total_questions) {
      toast({
        title: "सभी प्रश्नों के उत्तर दें",
        description: "कृपया सभी प्रश्नों के उत्तर देने के बाद जमा करें।",
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

    // Navigate to results page with score
    navigate("/results", { state: { score, total: quizData.total_questions } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold">{quizData.quiz_title}</h1>
          </div>
          <p className="text-center mt-2 text-primary-foreground/90">
            कुल प्रश्न: {quizData.total_questions}
          </p>
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
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleSubmit}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            स्कोर देखें
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
