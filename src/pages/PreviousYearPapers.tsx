import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
  pdf_url?: string;
  marking_scheme_url?: string;
  source?: string;
  is_sample_paper?: boolean;
}

const PreviousYearPapers = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [papers, setPapers] = useState<PreviousYearPaper[]>([]);
  const [filteredPapers, setFilteredPapers] = useState<PreviousYearPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [classLevel, setClassLevel] = useState<string>("10");
  const [subject, setSubject] = useState<string>("all");
  const [year, setYear] = useState<string>("all");

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
    filtered = filtered.filter((p) => p.class_level === parseInt(classLevel));
    if (subject !== "all") {
      filtered = filtered.filter((p) => p.subject === subject);
    }
    if (year !== "all") {
      filtered = filtered.filter((p) => p.year === parseInt(year));
    }
    setFilteredPapers(filtered);
  };

  const handleViewPDF = (pdfUrl?: string) => {
    if (!pdfUrl) {
      toast({
        title: t("त्रुटि", "Error"),
        description: t("PDF उपलब्ध नहीं है", "PDF not available"),
        variant: "destructive",
      });
      return;
    }
    window.open(pdfUrl, '_blank');
  };

  const handleDownloadPDF = async (paper: PreviousYearPaper) => {
    try {
      if (!paper.pdf_url) {
        toast({
          title: t("त्रुटि", "Error"),
          description: t("PDF उपलब्ध नहीं है", "PDF not available"),
          variant: "destructive",
        });
        return;
      }

      const response = await fetch(paper.pdf_url);
      const pdfBlob = await response.blob();
      
      await saveDownload(paper.id, {
        subject: paper.subject,
        class_level: paper.class_level,
        year: paper.year,
        type: 'previous_year_paper',
        pdf_url: paper.pdf_url
      }, pdfBlob);

      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfBlob);
      link.download = `${paper.board}_${paper.subject}_${paper.year}_Class${paper.class_level}.pdf`;
      link.click();

      toast({
        title: t("सफलता", "Success"),
        description: t("पेपर डाउनलोड हो गया!", "Paper downloaded!"),
      });
    } catch (error) {
      console.error('Error downloading PDF:', error);
      toast({
        title: t("त्रुटि", "Error"),
        description: t("PDF डाउनलोड करने में समस्या", "Error downloading PDF"),
        variant: "destructive",
      });
    }
  };

  const availableSubjects = useMemo(() => {
    return [...new Set(papers.filter(p => p.class_level === parseInt(classLevel)).map(p => p.subject))];
  }, [papers, classLevel]);

  const availableYears = useMemo(() => {
    return [...new Set(papers
      .filter(p => p.class_level === parseInt(classLevel) && (subject === "all" || p.subject === subject))
      .map(p => p.year))].sort((a, b) => b - a);
  }, [papers, classLevel, subject]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">{t("पिछले वर्ष के प्रश्न पत्र", "Previous Year Papers")}</h1>
          <p className="text-muted-foreground">
            {t("CBSE के आधिकारिक सैंपल प्रश्न पत्र देखें", "View official CBSE sample papers")}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("फ़िल्टर", "Filters")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("कक्षा", "Class")}</label>
                <Select value={classLevel} onValueChange={setClassLevel}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">{t("कक्षा 10", "Class 10")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("विषय", "Subject")}</label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("सभी विषय", "All Subjects")}</SelectItem>
                    {availableSubjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("वर्ष", "Year")}</label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("सभी वर्ष", "All Years")}</SelectItem>
                    {availableYears.map(y => <SelectItem key={y} value={y.toString()}>{y}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPapers.length === 0 ? (
            <Card className="col-span-full">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground">{t("कोई पत्र नहीं मिला", "No papers found")}</p>
              </CardContent>
            </Card>
          ) : (
            filteredPapers.map((paper) => (
              <Card key={paper.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {paper.board} {paper.year}
                        {paper.is_sample_paper && (
                          <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {t("सैंपल", "Sample")}
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {paper.subject} - {t("कक्षा", "Class")} {paper.class_level}
                      </CardDescription>
                    </div>
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">{t("समय:", "Duration:")}</span>
                      <span className="ml-2 font-medium">{paper.duration_minutes} {t("मिनट", "min")}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{t("अंक:", "Marks:")}</span>
                      <span className="ml-2 font-medium">{paper.total_marks}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Button variant="default" className="flex-1" onClick={() => handleViewPDF(paper.pdf_url)}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t("देखें", "View")}
                      </Button>
                      <Button variant="outline" className="flex-1" onClick={() => handleDownloadPDF(paper)}>
                        <Download className="h-4 w-4 mr-2" />
                        {t("डाउनलोड", "Download")}
                      </Button>
                    </div>
                    {paper.marking_scheme_url && (
                      <Button variant="secondary" className="w-full" onClick={() => handleViewPDF(paper.marking_scheme_url)}>
                        <FileText className="h-4 w-4 mr-2" />
                        {t("मार्किंग स्कीम", "Marking Scheme")}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviousYearPapers;