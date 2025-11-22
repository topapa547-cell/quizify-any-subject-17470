import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Download } from "lucide-react";

interface QuestionItemProps {
  question: any;
  preferredLanguage: string;
}

export const QuestionItem = ({ question, preferredLanguage }: QuestionItemProps) => {
  const [showSolution, setShowSolution] = useState(false);

  const questionText =
    preferredLanguage === "hindi"
      ? question.question_text
      : question.question_text_english || question.question_text;

  const solutionText =
    preferredLanguage === "hindi"
      ? question.solution_text
      : question.solution_text_english || question.solution_text;

  return (
    <Card className="border border-border bg-background">
      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                प्रश्न {question.question_number}
              </Badge>
              {question.marks && (
                <Badge variant="outline" className="text-xs">
                  {question.marks} अंक
                </Badge>
              )}
              {question.difficulty && (
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    question.difficulty === "easy"
                      ? "border-green-500 text-green-700"
                      : question.difficulty === "medium"
                      ? "border-yellow-500 text-yellow-700"
                      : "border-red-500 text-red-700"
                  }`}
                >
                  {question.difficulty === "easy"
                    ? "आसान"
                    : question.difficulty === "medium"
                    ? "मध्यम"
                    : "कठिन"}
                </Badge>
              )}
            </div>
            <p className="text-foreground leading-relaxed">{questionText}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              // TODO: Download single question PDF
            }}
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => setShowSolution(!showSolution)}
        >
          {showSolution ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              समाधान छुपाएं
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              समाधान देखें
            </>
          )}
        </Button>

        {showSolution && (
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-sm mb-2 text-primary">समाधान:</h4>
            <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
              {solutionText}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};
