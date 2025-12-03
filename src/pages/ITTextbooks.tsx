import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Book, Download, ExternalLink, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";
import HamburgerMenu from "@/components/HamburgerMenu";

interface Textbook {
  id: string;
  titleHi: string;
  titleEn: string;
  class_level: number;
  book: string;
  chapters: number;
  pdfUrl: string;
  description: string;
}

const textbooks: Textbook[] = [
  // Class 10
  {
    id: "it10-comm",
    titleHi: "संचार कौशल (Communication Skills)",
    titleEn: "Communication Skills - Class 10",
    class_level: 10,
    book: "Book 1",
    chapters: 6,
    pdfUrl: "https://cbseacademic.nic.in/web_material/Curriculum21/publication/secondary/402_Information_Technology.pdf",
    description: "मौखिक संचार, सुनने का कौशल, लेखन कौशल, ईमेल लेखन, प्रस्तुति कौशल"
  },
  {
    id: "it10-it",
    titleHi: "सूचना प्रौद्योगिकी (Information Technology)",
    titleEn: "Information Technology - Class 10",
    class_level: 10,
    book: "Book 2",
    chapters: 8,
    pdfUrl: "https://cbseacademic.nic.in/web_material/Curriculum21/publication/secondary/402_Information_Technology.pdf",
    description: "कंप्यूटर परिचय, हार्डवेयर-सॉफ्टवेयर, MS Word, MS Excel, MS PowerPoint, इंटरनेट"
  },
  // Class 9
  {
    id: "it9-comm",
    titleHi: "संचार कौशल (Communication Skills)",
    titleEn: "Communication Skills - Class 9",
    class_level: 9,
    book: "Book 1",
    chapters: 5,
    pdfUrl: "https://cbseacademic.nic.in/web_material/Curriculum21/publication/secondary/402_Information_Technology.pdf",
    description: "संचार की मूल बातें, मौखिक-अमौखिक संचार, सुनना और पढ़ना"
  },
  {
    id: "it9-it",
    titleHi: "सूचना प्रौद्योगिकी (Information Technology)",
    titleEn: "Information Technology - Class 9",
    class_level: 9,
    book: "Book 2",
    chapters: 7,
    pdfUrl: "https://cbseacademic.nic.in/web_material/Curriculum21/publication/secondary/402_Information_Technology.pdf",
    description: "कंप्यूटर बेसिक्स, Input-Output, Memory, OS, MS Word, MS Excel"
  },
];

const ITTextbooks = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [selectedClass, setSelectedClass] = useState<number>(10);

  const filteredBooks = textbooks.filter(book => book.class_level === selectedClass);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold flex items-center gap-2">
                  📚 {t("IT किताबें", "IT Textbooks")}
                </h1>
                <p className="text-xs text-white/80">
                  {t("CBSE IT/ITes पाठ्यपुस्तकें PDF", "CBSE IT/ITes Textbooks PDF")}
                </p>
              </div>
            </div>
            <HamburgerMenu />
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Class Filter */}
        <div className="flex gap-2">
          {[9, 10].map((cls) => (
            <Button
              key={cls}
              variant={selectedClass === cls ? "default" : "outline"}
              onClick={() => setSelectedClass(cls)}
              className="flex-1"
            >
              {t(`कक्षा ${cls}`, `Class ${cls}`)}
            </Button>
          ))}
        </div>

        {/* Info Card */}
        <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 border-cyan-200 dark:border-cyan-800">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-cyan-100 dark:bg-cyan-900/50 rounded-full">
                <FileText className="h-5 w-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-semibold text-cyan-800 dark:text-cyan-200">
                  {t("CBSE आधिकारिक किताबें", "CBSE Official Books")}
                </h3>
                <p className="text-sm text-cyan-700 dark:text-cyan-300">
                  {t(
                    "IT/ITes विषय के लिए CBSE द्वारा निर्धारित आधिकारिक पाठ्यपुस्तकें",
                    "Official textbooks prescribed by CBSE for IT/ITes subject"
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Textbook Cards */}
        <div className="space-y-4">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs bg-white/20 px-2 py-0.5 rounded-full w-fit mb-2">
                      {book.book} - {t(`कक्षा ${book.class_level}`, `Class ${book.class_level}`)}
                    </p>
                    <CardTitle className="text-lg">
                      {language === "hindi" ? book.titleHi : book.titleEn}
                    </CardTitle>
                  </div>
                  <Book className="h-8 w-8 opacity-80" />
                </div>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <p className="text-sm text-muted-foreground">{book.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded">
                    {book.chapters} {t("अध्याय", "Chapters")}
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                    PDF
                  </span>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="default"
                    className="flex-1 bg-cyan-600 hover:bg-cyan-700"
                    onClick={() => window.open(book.pdfUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("PDF देखें", "View PDF")}
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = book.pdfUrl;
                      link.download = `${book.id}.pdf`;
                      link.click();
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {t("डाउनलोड", "Download")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              🔗 {t("अन्य संसाधन", "Other Resources")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => window.open("https://cbseacademic.nic.in/curriculum_2023.html", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {t("CBSE आधिकारिक वेबसाइट", "CBSE Official Website")}
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate("/ncert-solutions")}
            >
              <FileText className="h-4 w-4 mr-2" />
              {t("NCERT समाधान", "NCERT Solutions")}
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => navigate("/long-questions")}
            >
              <Book className="h-4 w-4 mr-2" />
              {t("IT लंबे प्रश्न", "IT Long Questions")}
            </Button>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default ITTextbooks;
