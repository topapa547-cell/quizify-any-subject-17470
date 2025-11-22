import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Download } from "lucide-react";
import { QuestionItem } from "./QuestionItem";

interface ExerciseSectionProps {
  exerciseNumber: string;
  exerciseName: string;
  questions: any[];
  chapterNumber: number;
  preferredLanguage: string;
}

export const ExerciseSection = ({
  exerciseNumber,
  exerciseName,
  questions,
  chapterNumber,
  preferredLanguage,
}: ExerciseSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border border-border/50 bg-muted/30">
      <div
        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-sm font-medium">
              {exerciseName}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {questions.length} प्रश्न
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                // TODO: Download exercise PDF
              }}
            >
              <Download className="w-4 h-4" />
            </Button>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-3">
          {questions
            .sort((a, b) => {
              const numA = parseFloat(a.question_number) || 0;
              const numB = parseFloat(b.question_number) || 0;
              return numA - numB;
            })
            .map((question) => (
              <QuestionItem
                key={question.id}
                question={question}
                preferredLanguage={preferredLanguage}
              />
            ))}
        </div>
      )}
    </Card>
  );
};
