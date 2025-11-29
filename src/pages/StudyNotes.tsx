import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, BookOpen, Calculator, FlaskConical, Lightbulb, FileText, Star, Shuffle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { allStudyNotes, StudyNote } from "@/data/studyNotes";
import BottomNav from "@/components/BottomNav";

const StudyNotes = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const filteredNotes = useMemo(() => {
    return allStudyNotes.filter(note => {
      const matchesSearch = searchQuery === "" || 
        note.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.topic_english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content_hindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content_english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSubject = selectedSubject === "all" || note.subject === selectedSubject;
      const matchesType = selectedType === "all" || note.type === selectedType;
      
      return matchesSearch && matchesSubject && matchesType;
    });
  }, [searchQuery, selectedSubject, selectedType]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "definition": return <BookOpen className="w-4 h-4" />;
      case "formula": return <Calculator className="w-4 h-4" />;
      case "concept": return <FlaskConical className="w-4 h-4" />;
      case "tip": return <Lightbulb className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "definition": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "formula": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "concept": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "tip": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case "math": return "from-blue-600 to-indigo-600";
      case "science": return "from-green-600 to-emerald-600";
      default: return "from-primary to-primary/80";
    }
  };

  const nextFlashcard = () => {
    setShowAnswer(false);
    setCurrentFlashcardIndex((prev) => (prev + 1) % filteredNotes.length);
  };

  const prevFlashcard = () => {
    setShowAnswer(false);
    setCurrentFlashcardIndex((prev) => (prev - 1 + filteredNotes.length) % filteredNotes.length);
  };

  const shuffleFlashcards = () => {
    setShowAnswer(false);
    setCurrentFlashcardIndex(Math.floor(Math.random() * filteredNotes.length));
  };

  const currentFlashcard = filteredNotes[currentFlashcardIndex];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="text-white hover:bg-white/20">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">
              {language === "hindi" ? "📒 स्टडी नोट्स" : "📒 Study Notes"}
            </h1>
            <p className="text-sm text-white/80">
              {language === "hindi" ? "परिभाषाएं, सूत्र और महत्वपूर्ण अवधारणाएं" : "Definitions, Formulas & Key Concepts"}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder={language === "hindi" ? "खोजें..." : "Search..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder={language === "hindi" ? "विषय" : "Subject"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === "hindi" ? "सभी विषय" : "All Subjects"}</SelectItem>
                <SelectItem value="math">{language === "hindi" ? "गणित" : "Math"}</SelectItem>
                <SelectItem value="science">{language === "hindi" ? "विज्ञान" : "Science"}</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder={language === "hindi" ? "प्रकार" : "Type"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{language === "hindi" ? "सभी प्रकार" : "All Types"}</SelectItem>
                <SelectItem value="definition">{language === "hindi" ? "परिभाषा" : "Definition"}</SelectItem>
                <SelectItem value="formula">{language === "hindi" ? "सूत्र" : "Formula"}</SelectItem>
                <SelectItem value="concept">{language === "hindi" ? "अवधारणा" : "Concept"}</SelectItem>
                <SelectItem value="tip">{language === "hindi" ? "टिप्स" : "Tips"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {filteredNotes.length} {language === "hindi" ? "नोट्स मिले" : "notes found"}
          </p>
          <Button 
            variant={flashcardMode ? "default" : "outline"} 
            size="sm"
            onClick={() => setFlashcardMode(!flashcardMode)}
            className="gap-2"
          >
            <Shuffle className="w-4 h-4" />
            {language === "hindi" ? "फ्लैशकार्ड" : "Flashcard"}
          </Button>
        </div>

        {/* Flashcard Mode */}
        {flashcardMode && filteredNotes.length > 0 && currentFlashcard ? (
          <div className="space-y-4">
            <Card 
              className="min-h-[300px] cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => setShowAnswer(!showAnswer)}
            >
              <CardHeader className={`bg-gradient-to-r ${getSubjectColor(currentFlashcard.subject)} text-white rounded-t-lg`}>
                <div className="flex justify-between items-start">
                  <Badge className={getTypeColor(currentFlashcard.type)}>
                    {getTypeIcon(currentFlashcard.type)}
                    <span className="ml-1 capitalize">{currentFlashcard.type}</span>
                  </Badge>
                  <span className="text-sm opacity-80">
                    {currentFlashcardIndex + 1} / {filteredNotes.length}
                  </span>
                </div>
                <CardTitle className="mt-2">
                  {language === "hindi" ? currentFlashcard.topic : currentFlashcard.topic_english}
                </CardTitle>
                <p className="text-sm opacity-80">
                  {language === "hindi" ? currentFlashcard.chapter : currentFlashcard.chapter_english}
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {showAnswer ? (
                  <div className="whitespace-pre-line text-foreground">
                    {language === "hindi" ? currentFlashcard.content_hindi : currentFlashcard.content_english}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-32 text-muted-foreground">
                    {language === "hindi" ? "उत्तर देखने के लिए क्लिक करें" : "Click to reveal answer"}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="flex justify-center gap-3">
              <Button variant="outline" onClick={prevFlashcard}>
                {language === "hindi" ? "← पिछला" : "← Previous"}
              </Button>
              <Button variant="outline" onClick={shuffleFlashcards}>
                <Shuffle className="w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={nextFlashcard}>
                {language === "hindi" ? "अगला →" : "Next →"}
              </Button>
            </div>
          </div>
        ) : (
          /* List Mode */
          <div className="space-y-3">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${getSubjectColor(note.subject)}`} />
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={getTypeColor(note.type)} variant="outline">
                          {getTypeIcon(note.type)}
                          <span className="ml-1 capitalize text-xs">
                            {note.type === "definition" ? (language === "hindi" ? "परिभाषा" : "Definition") :
                             note.type === "formula" ? (language === "hindi" ? "सूत्र" : "Formula") :
                             note.type === "concept" ? (language === "hindi" ? "अवधारणा" : "Concept") :
                             (language === "hindi" ? "टिप्स" : "Tips")}
                          </span>
                        </Badge>
                        {note.important && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
                      </div>
                      <CardTitle className="text-base">
                        {language === "hindi" ? note.topic : note.topic_english}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">
                        {language === "hindi" ? note.chapter : note.chapter_english}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm whitespace-pre-line text-muted-foreground leading-relaxed">
                    {language === "hindi" ? note.content_hindi : note.content_english}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {note.keywords.slice(0, 4).map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredNotes.length === 0 && (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">
                  {language === "hindi" ? "कोई नोट्स नहीं मिले" : "No notes found"}
                </p>
              </Card>
            )}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default StudyNotes;
