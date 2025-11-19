import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, BookOpen } from "lucide-react";
import { generateLongQuestionPDF, downloadPDF, LongQuestion } from "@/utils/pdfGenerator";
import { saveDownload } from "@/utils/offlineStorage";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Json } from "@/integrations/supabase/types";
import { mathLongQuestions } from "@/data/longQuestions/mathLongQuestions";
import { scienceLongQuestions } from "@/data/longQuestions/scienceLongQuestions";
import { socialScienceLongQuestions } from "@/data/longQuestions/socialScienceLongQuestions";
import { englishLongQuestions } from "@/data/longQuestions/englishLongQuestions";
import { hindiLongQuestions } from "@/data/longQuestions/hindiLongQuestions";
import HamburgerMenu from "@/components/HamburgerMenu";
import BottomNav from "@/components/BottomNav";

const LongQuestions = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [questions, setQuestions] = useState<LongQuestion[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<LongQuestion[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [selectedMarks, setSelectedMarks] = useState<string>("all");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const allQuestions = [
      ...mathLongQuestions,
      ...scienceLongQuestions,
      ...socialScienceLongQuestions,
      ...englishLongQuestions,
      ...hindiLongQuestions,
    ];
    setQuestions(allQuestions);
    setFilteredQuestions(allQuestions);

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) setUserId(user.id);
    });
  }, []);

  useEffect(() => {
    let filtered = questions;

    if (selectedSubject !== "all") {
      filtered = filtered.filter((q) => q.subject === selectedSubject);
    }

    if (selectedClass !== "all") {
      filtered = filtered.filter((q) => q.class_level === parseInt(selectedClass));
    }

    if (selectedMarks !== "all") {
      filtered = filtered.filter((q) => q.marks === parseInt(selectedMarks));
    }

    if (selectedChapter !== "all") {
      filtered = filtered.filter((q) => q.chapter === selectedChapter);
    }

    setFilteredQuestions(filtered);
  }, [selectedSubject, selectedClass, selectedMarks, selectedChapter, questions]);

  const handleDownload = async (question: LongQuestion) => {
    try {
      const pdf = generateLongQuestionPDF([question], language);
      const pdfBlob = pdf.output('blob');
      
      await saveDownload(question.id, question, pdfBlob);
      
      if (userId) {
        await supabase.from('downloaded_questions').insert([{
          user_id: userId,
          question_id: question.id,
          question_data: question as unknown as Json,
        }]);
      }

      downloadPDF(pdf, `${question.subject}-${question.id}`);

      toast({
        title: t("सफलतापूर्वक डाउनलोड किया गया", "Downloaded Successfully"),
        description: t("प्रश्न ऑफलाइन उपलब्ध है", "Question available offline"),
      });
    } catch (error) {
      toast({
        title: t("त्रुटि", "Error"),
        description: t("डाउनलोड विफल", "Download failed"),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{t("लंबे उत्तर वाले प्रश्न", "Long Answer Questions")}</h1>
          <HamburgerMenu />
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t("फ़िल्टर", "Filters")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Select value={selectedSubject} onValueChange={(val) => { setSelectedSubject(val); setSelectedChapter("all"); }}>
                <SelectTrigger>
                  <SelectValue placeholder={t("विषय चुनें", "Select Subject")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("सभी विषय", "All Subjects")}</SelectItem>
                  <SelectItem value="गणित">गणित / Math</SelectItem>
                  <SelectItem value="विज्ञान">विज्ञान / Science</SelectItem>
                  <SelectItem value="सामाजिक विज्ञान">सामाजिक विज्ञान / Social Science</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="हिंदी">हिंदी / Hindi</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder={t("कक्षा चुनें", "Select Class")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("सभी कक्षाएं", "All Classes")}</SelectItem>
                  <SelectItem value="9">{t("कक्षा 9", "Class 9")}</SelectItem>
                  <SelectItem value="10">{t("कक्षा 10", "Class 10")}</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                <SelectTrigger>
                  <SelectValue placeholder={t("अध्याय चुनें", "Select Chapter")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("सभी अध्याय", "All Chapters")}</SelectItem>
                  {Array.from(new Set(
                    questions
                      .filter(q => 
                        (selectedSubject === "all" || q.subject === selectedSubject) &&
                        (selectedClass === "all" || q.class_level === parseInt(selectedClass))
                      )
                      .map(q => q.chapter)
                  )).sort().map(chapter => (
                    <SelectItem key={chapter} value={chapter}>
                      {chapter}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMarks} onValueChange={setSelectedMarks}>
                <SelectTrigger>
                  <SelectValue placeholder={t("अंक चुनें", "Select Marks")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("सभी अंक", "All Marks")}</SelectItem>
                  <SelectItem value="3">3 {t("अंक", "marks")}</SelectItem>
                  <SelectItem value="5">5 {t("अंक", "marks")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredQuestions.map((question) => (
            <Card key={question.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">
                      {language === 'hindi' ? question.question_text : (question.question_text_english || question.question_text)}
                    </CardTitle>
                    <CardDescription>
                      {question.subject} | {t("कक्षा", "Class")} {question.class_level} | {question.marks} {t("अंक", "marks")}
                    </CardDescription>
                  </div>
                  <Button size="icon" variant="outline" onClick={() => handleDownload(question)}>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-primary">{t("उत्तर:", "Answer:")}</p>
                  <p className="text-sm whitespace-pre-line">
                    {language === 'hindi' ? question.answer_text : (question.answer_text_english || question.answer_text)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default LongQuestions;
