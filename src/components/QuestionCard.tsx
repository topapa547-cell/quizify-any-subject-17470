import { QuizQuestion } from "@/data/quizData";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  selectedAnswer: number | null;
  onAnswerChange: (optionId: number) => void;
}

export const QuestionCard = ({ 
  question, 
  questionNumber, 
  selectedAnswer, 
  onAnswerChange 
}: QuestionCardProps) => {
  return (
    <Card className="p-6 shadow-[var(--card-shadow)] transition-all duration-300 hover:shadow-lg border-border">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          प्रश्न {questionNumber}
        </h3>
        <p className="text-foreground leading-relaxed">{question.text}</p>
      </div>
      
      <RadioGroup
        value={selectedAnswer?.toString() || ""}
        onValueChange={(value) => onAnswerChange(Number(value))}
        name={`Q_${question.question_id}`}
        className="space-y-3"
      >
        {question.options.map((option) => (
          <div
            key={option.option_id}
            className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
          >
            <RadioGroupItem
              value={option.option_id.toString()}
              id={`option_${option.option_id}`}
              className="border-primary text-primary"
            />
            <Label
              htmlFor={`option_${option.option_id}`}
              className="flex-1 cursor-pointer text-foreground font-medium"
            >
              {option.option_text}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </Card>
  );
};
