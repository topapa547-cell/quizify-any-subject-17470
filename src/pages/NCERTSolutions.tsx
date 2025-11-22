import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Maximize2, Minimize2 } from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import BottomNav from "@/components/BottomNav";
import { ChapterCard } from "@/components/ChapterCard";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface NCERTSolution {
  id: string;
  class_level: number;
  subject: string;
  chapter_number: number;
  chapter_name: string;
  chapter_name_english: string | null;
  exercise_number: string;
  question_number: string;
  question_type: string | null;
  question_text: string;
  question_text_english: string | null;
  solution_text: string;
  solution_text_english: string | null;
  difficulty: string | null;
  marks: number | null;
  ncert_page_number: number | null;
}

interface GroupedSolutions {
  [chapterNumber: number]: {
    chapterNameHindi: string;
    chapterNameEnglish: string;
    exercises: {
      [exerciseNumber: string]: {
        exerciseName: string;
        questions: NCERTSolution[];
      };
    };
  };
}

const NCERTSolutions = () => {
  const { language } = useLanguage();
  const [solutions, setSolutions] = useState<NCERTSolution[]>([]);
  const [classLevel, setClassLevel] = useState<string>("10");
  const [subject, setSubject] = useState<string>("math");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchSolutions = async () => {
    try {
      const { data, error } = await supabase
        .from("ncert_solutions")
        .select("*")
        .eq("class_level", parseInt(classLevel))
        .eq("subject", subject)
        .order("chapter_number", { ascending: true })
        .order("exercise_number", { ascending: true })
        .order("question_number", { ascending: true });

      if (error) throw error;
      setSolutions(data || []);
    } catch (error) {
      console.error("Error fetching NCERT solutions:", error);
      toast.error("Failed to load NCERT solutions");
    }
  };

  const groupSolutionsByChapter = (): GroupedSolutions => {
    const grouped: GroupedSolutions = {};

    let filteredSolutions = solutions;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredSolutions = filteredSolutions.filter(
        (s) =>
          s.question_text.toLowerCase().includes(query) ||
          s.question_text_english?.toLowerCase().includes(query) ||
          s.chapter_name.toLowerCase().includes(query) ||
          s.chapter_name_english?.toLowerCase().includes(query)
      );
    }

    filteredSolutions.forEach((solution) => {
      const chapterNum = solution.chapter_number;

      if (!grouped[chapterNum]) {
        grouped[chapterNum] = {
          chapterNameHindi: solution.chapter_name,
          chapterNameEnglish: solution.chapter_name_english || solution.chapter_name,
          exercises: {},
        };
      }

      const exerciseNum = solution.exercise_number;
      if (!grouped[chapterNum].exercises[exerciseNum]) {
        grouped[chapterNum].exercises[exerciseNum] = {
          exerciseName: exerciseNum,
          questions: [],
        };
      }

      grouped[chapterNum].exercises[exerciseNum].questions.push(solution);
    });

    return grouped;
  };

  useEffect(() => {
    fetchSolutions();
  }, [classLevel, subject]);

  const groupedSolutions = groupSolutionsByChapter();
  const chapterNumbers = Object.keys(groupedSolutions)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HamburgerMenu />
      
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-5xl mx-auto p-4 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">
              {language === "hindi" ? "📚 NCERT समाधान" : "📚 NCERT Solutions"}
            </h1>
          </div>

          {/* Filters - Only Class and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={classLevel} onValueChange={setClassLevel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">कक्षा 9 | Class 9</SelectItem>
                <SelectItem value="10">कक्षा 10 | Class 10</SelectItem>
              </SelectContent>
            </Select>

            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">गणित | Math</SelectItem>
                <SelectItem value="science">विज्ञान | Science</SelectItem>
                <SelectItem value="social_science">सामाजिक विज्ञान | Social Science</SelectItem>
                <SelectItem value="english">अंग्रेज़ी | English</SelectItem>
                <SelectItem value="hindi">हिंदी | Hindi</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder={language === "hindi" ? "खोजें..." : "Search..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Chapter Cards */}
          <div className="space-y-4">
            {chapterNumbers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {language === "hindi"
                    ? "कोई समाधान नहीं मिला"
                    : "No solutions found"}
                </p>
              </div>
            ) : (
              chapterNumbers.map((chapterNum) => {
                const chapterData = groupedSolutions[chapterNum];
                return (
                  <ChapterCard
                    key={chapterNum}
                    chapterNumber={chapterNum}
                    chapterNameHindi={chapterData.chapterNameHindi}
                    chapterNameEnglish={chapterData.chapterNameEnglish}
                    exercises={chapterData.exercises}
                    subject={subject}
                    preferredLanguage={language}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default NCERTSolutions;
