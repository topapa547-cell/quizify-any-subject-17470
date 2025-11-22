import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ExerciseSection } from "./ExerciseSection";

interface ChapterCardProps {
  chapterNumber: number;
  chapterNameHindi: string;
  chapterNameEnglish: string;
  exercises: {
    [exerciseNumber: string]: {
      exerciseName: string;
      questions: any[];
    };
  };
  subject: string;
  preferredLanguage: string;
}

const subjectGradients = {
  math: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-200",
  science: "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200",
  social_science: "bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-200",
  english: "bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-200",
  hindi: "bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-200",
};

export const ChapterCard = ({
  chapterNumber,
  chapterNameHindi,
  chapterNameEnglish,
  exercises,
  subject,
  preferredLanguage,
}: ChapterCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const totalQuestions = Object.values(exercises).reduce(
    (sum, exercise) => sum + exercise.questions.length,
    0
  );

  const exerciseCount = Object.keys(exercises).length;

  const gradientClass = subjectGradients[subject as keyof typeof subjectGradients] || subjectGradients.math;

  return (
    <Card className={`${gradientClass} border-2 transition-all duration-300 hover:shadow-lg`}>
      <CardHeader
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="default" className="text-sm">
                  अध्याय {chapterNumber}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {totalQuestions} प्रश्न
                </Badge>
              </div>
              <CardTitle className="text-xl">
                {preferredLanguage === "hindi" ? chapterNameHindi : chapterNameEnglish}
              </CardTitle>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {exerciseCount} exercises
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4 pt-0">
          {Object.entries(exercises).map(([exerciseNumber, exerciseData]) => (
            <ExerciseSection
              key={exerciseNumber}
              exerciseNumber={exerciseNumber}
              exerciseName={exerciseData.exerciseName}
              questions={exerciseData.questions}
              chapterNumber={chapterNumber}
              preferredLanguage={preferredLanguage}
            />
          ))}
        </CardContent>
      )}
    </Card>
  );
};
