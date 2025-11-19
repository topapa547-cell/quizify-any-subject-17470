import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Download, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import HamburgerMenu from "@/components/HamburgerMenu";
import BottomNav from "@/components/BottomNav";
import { toast } from "@/hooks/use-toast";

interface NCERTSolution {
  id: string;
  class_level: number;
  subject: string;
  chapter_number: number;
  chapter_name: string;
  chapter_name_english: string | null;
  exercise_number: string;
  question_number: string;
  question_text: string;
  question_text_english: string | null;
  solution_text: string;
  solution_text_english: string | null;
  difficulty: string | null;
  marks: number | null;
  ncert_page_number: number | null;
}

const NCERTSolutions = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = (hindi: string, english: string) => language === "hindi" ? hindi : english;

  const [solutions, setSolutions] = useState<NCERTSolution[]>([]);
  const [filteredSolutions, setFilteredSolutions] = useState<NCERTSolution[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>("10");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [selectedExercise, setSelectedExercise] = useState<string>("all");
  const [openSolutions, setOpenSolutions] = useState<Set<string>>(new Set());

  const subjects = [
    { value: "all", label: t("सभी विषय", "All Subjects") },
    { value: "गणित", label: t("गणित", "Mathematics") },
    { value: "विज्ञान", label: t("विज्ञान", "Science") },
    { value: "सामाजिक विज्ञान", label: t("सामाजिक विज्ञान", "Social Science") },
    { value: "अंग्रेज़ी", label: t("अंग्रेज़ी", "English") },
    { value: "हिंदी", label: t("हिंदी", "Hindi") },
  ];

  useEffect(() => {
    fetchSolutions();
  }, []);

  useEffect(() => {
    filterSolutions();
  }, [solutions, selectedClass, selectedSubject, selectedChapter, selectedExercise]);

  const fetchSolutions = async () => {
    const { data, error } = await supabase
      .from("ncert_solutions")
      .select("*")
      .order("class_level", { ascending: true })
      .order("chapter_number", { ascending: true })
      .order("exercise_number", { ascending: true })
      .order("question_number", { ascending: true });

    if (error) {
      console.error("Error fetching NCERT solutions:", error);
      toast({
        title: t("त्रुटि", "Error"),
        description: t("NCERT समाधान लोड करने में समस्या", "Error loading NCERT solutions"),
        variant: "destructive",
      });
    } else {
      setSolutions(data || []);
    }
  };

  const filterSolutions = () => {
    let filtered = solutions;

    if (selectedClass !== "all") {
      filtered = filtered.filter(s => s.class_level === parseInt(selectedClass));
    }

    if (selectedSubject !== "all") {
      filtered = filtered.filter(s => s.subject === selectedSubject);
    }

    if (selectedChapter !== "all") {
      filtered = filtered.filter(s => s.chapter_number === parseInt(selectedChapter));
    }

    if (selectedExercise !== "all") {
      filtered = filtered.filter(s => s.exercise_number === selectedExercise);
    }

    setFilteredSolutions(filtered);
  };

  const getUniqueChapters = () => {
    const filtered = solutions.filter(s => 
      (selectedClass === "all" || s.class_level === parseInt(selectedClass)) &&
      (selectedSubject === "all" || s.subject === selectedSubject)
    );
    
    const chapters = Array.from(new Set(filtered.map(s => s.chapter_number))).sort((a, b) => a - b);
    return chapters.map(ch => {
      const sol = filtered.find(s => s.chapter_number === ch);
      return {
        number: ch,
        name: language === "hindi" ? sol?.chapter_name : sol?.chapter_name_english || sol?.chapter_name
      };
    });
  };

  const getUniqueExercises = () => {
    const filtered = solutions.filter(s => 
      (selectedClass === "all" || s.class_level === parseInt(selectedClass)) &&
      (selectedSubject === "all" || s.subject === selectedSubject) &&
      (selectedChapter === "all" || s.chapter_number === parseInt(selectedChapter))
    );
    
    return Array.from(new Set(filtered.map(s => s.exercise_number))).sort();
  };

  const toggleSolution = (id: string) => {
    setOpenSolutions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleDownloadPDF = (solution: NCERTSolution) => {
    toast({
      title: t("जल्द आ रहा है", "Coming Soon"),
      description: t("PDF डाउनलोड सुविधा जल्द ही उपलब्ध होगी", "PDF download feature coming soon"),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pb-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t("NCERT समाधान", "NCERT Solutions")}
          </h1>
          <HamburgerMenu />
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t("फ़िल्टर", "Filters")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t("कक्षा", "Class")}
                </label>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("सभी कक्षाएं", "All Classes")}</SelectItem>
                    <SelectItem value="9">{t("कक्षा 9", "Class 9")}</SelectItem>
                    <SelectItem value="10">{t("कक्षा 10", "Class 10")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t("विषय", "Subject")}
                </label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map(subject => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t("अध्याय", "Chapter")}
                </label>
                <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("सभी अध्याय", "All Chapters")}</SelectItem>
                    {getUniqueChapters().map(ch => (
                      <SelectItem key={ch.number} value={ch.number.toString()}>
                        {t(`अध्याय ${ch.number}`, `Chapter ${ch.number}`)} - {ch.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  {t("अभ्यास", "Exercise")}
                </label>
                <Select value={selectedExercise} onValueChange={setSelectedExercise}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("सभी अभ्यास", "All Exercises")}</SelectItem>
                    {getUniqueExercises().map(ex => (
                      <SelectItem key={ex} value={ex}>
                        {ex}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {filteredSolutions.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                {t("कोई समाधान नहीं मिला। जल्द ही अधिक समाधान जोड़े जाएंगे!", "No solutions found. More solutions will be added soon!")}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredSolutions.map((solution) => (
              <Card key={solution.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">
                        {t(
                          `प्रश्न ${solution.question_number} - ${solution.exercise_number}`,
                          `Question ${solution.question_number} - ${solution.exercise_number}`
                        )}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t(
                          `कक्षा ${solution.class_level} - ${solution.subject} - अध्याय ${solution.chapter_number}: ${solution.chapter_name}`,
                          `Class ${solution.class_level} - ${solution.subject} - Chapter ${solution.chapter_number}: ${solution.chapter_name_english || solution.chapter_name}`
                        )}
                      </p>
                      <p className="text-base">
                        {language === "hindi" ? solution.question_text : solution.question_text_english || solution.question_text}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDownloadPDF(solution)}
                      className="ml-2"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Collapsible open={openSolutions.has(solution.id)}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => toggleSolution(solution.id)}
                      >
                        {openSolutions.has(solution.id) 
                          ? t("समाधान छुपाएं", "Hide Solution")
                          : t("समाधान देखें", "Show Solution")}
                        <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${openSolutions.has(solution.id) ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-semibold mb-2">{t("समाधान:", "Solution:")}</h4>
                      <div className="whitespace-pre-wrap">
                        {language === "hindi" ? solution.solution_text : solution.solution_text_english || solution.solution_text}
                      </div>
                      {solution.marks && (
                        <p className="text-sm text-muted-foreground mt-3">
                          {t(`अंक: ${solution.marks}`, `Marks: ${solution.marks}`)}
                        </p>
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default NCERTSolutions;