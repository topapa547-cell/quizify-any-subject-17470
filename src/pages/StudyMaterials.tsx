import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, BookOpen, Eye, Calendar, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { studyMaterials } from "@/data/studyNotes";
import { saveDownload } from "@/utils/offlineStorage";
import { toast } from "@/hooks/use-toast";
import BottomNav from "@/components/BottomNav";

const StudyMaterials = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (materialId: string, title: string) => {
    setDownloading(materialId);
    try {
      // Save to IndexedDB for offline access
      await saveDownload(materialId, {
        id: materialId,
        title,
        downloadedAt: new Date().toISOString()
      });
      
      toast({
        title: language === "hindi" ? "सफलतापूर्वक डाउनलोड हुआ" : "Downloaded Successfully",
        description: language === "hindi" ? "ऑफ़लाइन उपलब्ध" : "Available offline"
      });
    } catch (error) {
      toast({
        title: language === "hindi" ? "त्रुटि" : "Error",
        description: language === "hindi" ? "डाउनलोड विफल" : "Download failed",
        variant: "destructive"
      });
    } finally {
      setDownloading(null);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "complete_guide": return "from-purple-600 to-indigo-600";
      case "chapter_notes": return "from-blue-600 to-cyan-600";
      case "formula_sheet": return "from-green-600 to-emerald-600";
      case "sample_paper": return "from-orange-600 to-red-600";
      default: return "from-primary to-primary/80";
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, { hindi: string; english: string }> = {
      complete_guide: { hindi: "संपूर्ण गाइड", english: "Complete Guide" },
      chapter_notes: { hindi: "अध्याय नोट्स", english: "Chapter Notes" },
      formula_sheet: { hindi: "सूत्र पत्रक", english: "Formula Sheet" },
      sample_paper: { hindi: "सैंपल पेपर", english: "Sample Paper" }
    };
    return language === "hindi" ? labels[type]?.hindi || type : labels[type]?.english || type;
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="text-white hover:bg-white/20">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">
              {language === "hindi" ? "📚 अध्ययन सामग्री" : "📚 Study Materials"}
            </h1>
            <p className="text-sm text-white/80">
              {language === "hindi" ? "PDF गाइड और नोट्स डाउनलोड करें" : "Download PDF guides and notes"}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Info Card */}
        <Card className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <BookOpen className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  {language === "hindi" ? "बोर्ड परीक्षा 2025-26 के लिए" : "For Board Exam 2025-26"}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "hindi" 
                    ? "सभी सामग्री NCERT पाठ्यक्रम के अनुसार है और बोर्ड परीक्षा के लिए महत्वपूर्ण है।" 
                    : "All materials are aligned with NCERT curriculum and important for board exams."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Materials List */}
        <div className="space-y-4">
          {studyMaterials.map((material) => (
            <Card key={material.id} className="overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${getTypeColor(material.type)}`} />
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      {getTypeLabel(material.type)}
                    </Badge>
                    <CardTitle className="text-lg">
                      {language === "hindi" ? material.title : material.title_english}
                    </CardTitle>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getTypeColor(material.type)}`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {language === "hindi" ? material.description : material.description_english}
                </p>
                
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <School className="w-4 h-4" />
                    <span>{language === "hindi" ? `कक्षा ${material.class_level}` : `Class ${material.class_level}`}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{material.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{material.pages} {language === "hindi" ? "पेज" : "pages"}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 gap-2"
                    onClick={() => navigate("/study-notes")}
                  >
                    <Eye className="w-4 h-4" />
                    {language === "hindi" ? "देखें" : "View"}
                  </Button>
                  <Button 
                    className={`flex-1 gap-2 bg-gradient-to-r ${getTypeColor(material.type)} hover:opacity-90`}
                    onClick={() => handleDownload(material.id, material.title)}
                    disabled={downloading === material.id}
                  >
                    <Download className="w-4 h-4" />
                    {downloading === material.id 
                      ? (language === "hindi" ? "डाउनलोड हो रहा..." : "Downloading...")
                      : (language === "hindi" ? "डाउनलोड" : "Download")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <Card className="border-dashed border-2">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              {language === "hindi" ? "और सामग्री जल्द आ रही है" : "More Materials Coming Soon"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === "hindi" 
                ? "कक्षा 9 और अन्य विषयों की सामग्री जल्द जोड़ी जाएगी।" 
                : "Class 9 and other subject materials will be added soon."}
            </p>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default StudyMaterials;
