import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Calendar, Clock, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generatePreviousYearPaperPDF } from "@/utils/previousYearPaperPDF";
import { saveDownload } from "@/utils/offlineStorage";

interface PreviousYearPaper {
  id: string;
  class_level: number;
  subject: string;
  year: number;
  paper_type: string;
  term: string;
  board: string;
  paper_data: any;
  total_marks: number;
  duration_minutes: number;
  created_at: string;
}

const PreviousYearPapers = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [papers, setPapers] = useState<PreviousYearPaper[]>([]);
  const [filteredPapers, setFilteredPapers] = useState<PreviousYearPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [classLevel, setClassLevel] = useState<string>("10");
  const [subject, setSubject] = useState<string>("all");
  const [year, setYear] = useState<string>("all");

  const subjects = [
    { value: "all", label: t("सभी विषय", "All Subjects") },
    { value: "गणित", label: t("गणित", "Mathematics") },
    { value: "विज्ञान", label: t("विज्ञान", "Science") },
    { value: "सामाजिक विज्ञान", label: t("सामाजिक विज्ञान", "Social Science") },
    { value: "अंग्रेजी", label: t("अंग्रेजी", "English") },
    { value: "हिंदी", label: t("हिंदी", "Hindi") },
    { value: "IT/ITes", label: "IT/ITes" },
  ];

  const years = [
    { value: "all", label: t("सभी वर्ष", "All Years") },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
  ];

  useEffect(() => {
    fetchPapers();
  }, []);

  useEffect(() => {
    filterPapers();
  }, [papers, classLevel, subject, year]);

  const fetchPapers = async () => {
    try {
      const { data, error } = await supabase
        .from("previous_year_papers")
        .select("*")
        .order("year", { ascending: false });

      if (error) throw error;
      setPapers(data || []);
    } catch (error) {
      console.error("Error fetching papers:", error);
      toast({
        title: t("त्रुटि", "Error"),
        description: t("पेपर लोड करने में विफल", "Failed to load papers"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterPapers = () => {
    let filtered = [...papers];

    // Filter by class
    filtered = filtered.filter((p) => p.class_level === parseInt(classLevel));

    // Filter by subject
    if (subject !== "all") {
      filtered = filtered.filter((p) => p.subject === subject);
    }

    // Filter by year
    if (year !== "all") {
      filtered = filtered.filter((p) => p.year === parseInt(year));
    }

    setFilteredPapers(filtered);
  };

  const handleViewPDF = (paper: PreviousYearPaper) => {
    try {
      const doc = generatePreviousYearPaperPDF(paper, language as 'hindi' | 'english', false);
      doc.output("dataurlnewwindow");
      
      toast({
        title: t("सफलता", "Success"),
        description: t("पेपर खोला गया", "Paper opened in new window"),
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: t("त्रुटि", "Error"),
        description: t("PDF बनाने में विफल", "Failed to generate PDF"),
        variant: "destructive",
      });
    }
  };

  const handleDownloadPDF = async (paper: PreviousYearPaper) => {
    try {
      const doc = generatePreviousYearPaperPDF(paper, language as 'hindi' | 'english', true);
      const pdfBlob = doc.output("blob");
      
      // Save to IndexedDB
      await saveDownload(
        `paper-${paper.id}`,
        {
          type: "previous_year_paper",
          title: `${paper.subject} ${paper.year} - ${t("कक्षा", "Class")} ${paper.class_level}`,
          ...paper,
        },
        pdfBlob
      );

      // Also download immediately
      doc.save(`${paper.subject}_${paper.year}_Class${paper.class_level}.pdf`);

      toast({
        title: t("डाउनलोड सफल", "Download Successful"),
        description: t("पेपर डाउनलोड और सहेजा गया", "Paper downloaded and saved"),
      });
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast({
        title: t("त्रुटि", "Error"),
        description: t("डाउनलोड करने में विफल", "Failed to download"),
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">{t("लोड हो रहा है...", "Loading...")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 shadow-lg">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FileText className="h-8 w-8" />
          {t("पिछले वर्ष के प्रश्न पत्र", "Previous Year Papers")}
        </h1>
        <p className="text-primary-foreground/90 mt-2">
          {t("CBSE बोर्ड परीक्षा के पिछले 6 वर्षों के प्रश्न पत्र", "Last 6 years CBSE Board exam papers")}
        </p>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t("फ़िल्टर", "Filters")}</CardTitle>
            <CardDescription>
              {t("अपनी आवश्यकता के अनुसार पेपर चुनें", "Select papers as per your requirement")}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                {t("कक्षा", "Class")}
              </label>
              <Select value={classLevel} onValueChange={setClassLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">{t("कक्षा 9", "Class 9")}</SelectItem>
                  <SelectItem value="10">{t("कक्षा 10", "Class 10")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                {t("विषय", "Subject")}
              </label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {s.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                {t("वर्ष", "Year")}
              </label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {years.map((y) => (
                    <SelectItem key={y.value} value={y.value}>
                      {y.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Papers List */}
        {filteredPapers.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">
                {t("कोई पेपर नहीं मिला", "No papers found")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t("फ़िल्टर बदलकर देखें", "Try changing filters")}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredPapers.map((paper) => (
              <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">
                          {paper.board} {t("बोर्ड परीक्षा", "Board Exam")} {paper.year}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-muted-foreground mb-3">
                        {paper.subject} - {t("कक्षा", "Class")} {paper.class_level}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{paper.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{paper.duration_minutes} {t("मिनट", "minutes")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          <span>{paper.total_marks} {t("अंक", "marks")}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewPDF(paper)}
                        className="whitespace-nowrap"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {t("देखें", "View")}
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleDownloadPDF(paper)}
                        className="whitespace-nowrap"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {t("डाउनलोड", "Download")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviousYearPapers;