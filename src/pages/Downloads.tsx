import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, FileText } from "lucide-react";
import { getAllDownloads, deleteDownload, clearAllDownloads } from "@/utils/offlineStorage";
import { useToast } from "@/hooks/use-toast";
import HamburgerMenu from "@/components/HamburgerMenu";
import BottomNav from "@/components/BottomNav";

const Downloads = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [downloads, setDownloads] = useState<any[]>([]);

  useEffect(() => {
    loadDownloads();
  }, []);

  const loadDownloads = async () => {
    const allDownloads = await getAllDownloads();
    setDownloads(allDownloads);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDownload(id);
      await loadDownloads();
      toast({
        title: t("हटा दिया गया", "Deleted"),
        description: t("प्रश्न हटा दिया गया", "Question deleted"),
      });
    } catch (error) {
      toast({
        title: t("त्रुटि", "Error"),
        description: t("हटाने में विफल", "Failed to delete"),
        variant: "destructive",
      });
    }
  };

  const handleClearAll = async () => {
    try {
      await clearAllDownloads();
      await loadDownloads();
      toast({
        title: t("सभी हटा दिए गए", "All Deleted"),
        description: t("सभी डाउनलोड हटा दिए गए", "All downloads deleted"),
      });
    } catch (error) {
      toast({
        title: t("त्रुटि", "Error"),
        description: t("हटाने में विफल", "Failed to delete"),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{t("डाउनलोड किए गए प्रश्न", "Downloaded Questions")}</h1>
          <HamburgerMenu />
        </div>

        {downloads.length > 0 && (
          <div className="mb-4 flex justify-end">
            <Button variant="destructive" onClick={handleClearAll}>
              {t("सभी हटाएं", "Clear All")}
            </Button>
          </div>
        )}

        <div className="space-y-4">
          {downloads.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  {t("कोई डाउनलोड नहीं", "No downloads yet")}
                </p>
              </CardContent>
            </Card>
          ) : (
            downloads.map((download) => (
              <Card key={download.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">
                        {language === 'hindi' 
                          ? download.questionData.question_text 
                          : (download.questionData.question_text_english || download.questionData.question_text)}
                      </CardTitle>
                      <CardDescription>
                        {download.questionData.subject} | {t("कक्षा", "Class")} {download.questionData.class_level}
                      </CardDescription>
                    </div>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleDelete(download.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Downloads;
