import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { allKeyPoints, KeyPoint } from "@/data/keyPoints";
import KeyPointCard from "@/components/KeyPointCard";

const KeyPoints = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [selectedClass, setSelectedClass] = useState<number>(10);
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedImportance, setSelectedImportance] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const subjects = [
    { id: "all", labelHi: "सभी", labelEn: "All", icon: "📚" },
    { id: "math", labelHi: "गणित", labelEn: "Math", icon: "🔢" },
    { id: "science", labelHi: "विज्ञान", labelEn: "Science", icon: "🔬" },
    { id: "it_ites", labelHi: "IT/ITes", labelEn: "IT/ITes", icon: "💻" },
  ];

  const filteredKeyPoints = useMemo(() => {
    return allKeyPoints.filter((kp) => {
      const classMatch = kp.class_level === selectedClass;
      const subjectMatch = selectedSubject === "all" || kp.subject === selectedSubject;
      const importanceMatch = selectedImportance === "all" || kp.importance === selectedImportance;
      const searchMatch = searchQuery === "" || 
        kp.point_hindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kp.point_english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        kp.chapter.toLowerCase().includes(searchQuery.toLowerCase());
      
      return classMatch && subjectMatch && importanceMatch && searchMatch;
    });
  }, [selectedClass, selectedSubject, selectedImportance, searchQuery]);

  // Group by chapter
  const groupedByChapter = useMemo(() => {
    const groups: Record<string, KeyPoint[]> = {};
    filteredKeyPoints.forEach((kp) => {
      const key = `${kp.chapter_number}-${kp.chapter}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(kp);
    });
    
    // Sort chapters by number
    const sortedKeys = Object.keys(groups).sort((a, b) => {
      const numA = parseInt(a.split("-")[0]);
      const numB = parseInt(b.split("-")[0]);
      return numA - numB;
    });
    
    return sortedKeys.map((key) => ({
      chapterKey: key,
      chapterNumber: parseInt(key.split("-")[0]),
      chapterName: key.split("-").slice(1).join("-"),
      points: groups[key],
    }));
  }, [filteredKeyPoints]);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold flex items-center gap-2">
                📍 {t("मुख्य बिंदु", "Key Points")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("NCERT से महत्वपूर्ण बिंदु", "Important points from NCERT")}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("खोजें...", "Search...")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Class Filter */}
        <div className="flex gap-2">
          {[9, 10].map((cls) => (
            <Button
              key={cls}
              variant={selectedClass === cls ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedClass(cls)}
              className="flex-1"
            >
              {t(`कक्षा ${cls}`, `Class ${cls}`)}
            </Button>
          ))}
        </div>

        {/* Subject Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {subjects.map((subject) => (
            <Button
              key={subject.id}
              variant={selectedSubject === subject.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSubject(subject.id)}
              className="whitespace-nowrap"
            >
              <span className="mr-1">{subject.icon}</span>
              {language === "hindi" ? subject.labelHi : subject.labelEn}
            </Button>
          ))}
        </div>

        {/* Importance Filter */}
        <div className="flex gap-2 items-center">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Button
            variant={selectedImportance === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedImportance("all")}
          >
            {t("सभी", "All")}
          </Button>
          <Button
            variant={selectedImportance === "high" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedImportance("high")}
            className="text-red-600"
          >
            🔴 {t("अति महत्वपूर्ण", "High")}
          </Button>
          <Button
            variant={selectedImportance === "medium" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedImportance("medium")}
            className="text-amber-600"
          >
            🟡 {t("महत्वपूर्ण", "Medium")}
          </Button>
        </div>

        {/* Stats */}
        <div className="bg-muted/50 rounded-lg p-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {t("कुल बिंदु:", "Total Points:")} <strong>{filteredKeyPoints.length}</strong>
          </span>
          <span className="text-xs text-muted-foreground">
            🔴 {filteredKeyPoints.filter(p => p.importance === "high").length} | 
            🟡 {filteredKeyPoints.filter(p => p.importance === "medium").length}
          </span>
        </div>

        {/* Chapter-wise Key Points */}
        {groupedByChapter.length > 0 ? (
          <Accordion type="multiple" className="space-y-3">
            {groupedByChapter.map(({ chapterKey, chapterNumber, chapterName, points }) => (
              <AccordionItem
                key={chapterKey}
                value={chapterKey}
                className="border rounded-xl overflow-hidden bg-card"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center gap-3 text-left">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      {chapterNumber}
                    </span>
                    <div>
                      <p className="font-medium text-sm">{chapterName}</p>
                      <p className="text-xs text-muted-foreground">
                        {points.length} {t("बिंदु", "points")}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3">
                    {points.map((point) => (
                      <KeyPointCard key={point.id} keyPoint={point} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-muted-foreground">
              {t("कोई मुख्य बिंदु नहीं मिला", "No key points found")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyPoints;
