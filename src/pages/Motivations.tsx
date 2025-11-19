import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shuffle, Heart, Share2, Lightbulb, Sparkles } from "lucide-react";
import { motivationalQuotes, MotivationalQuote } from "@/data/motivationalQuotes";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNav from "@/components/BottomNav";
import HamburgerMenu from "@/components/HamburgerMenu";

const Motivations = () => {
  const { t, language } = useLanguage();
  const isHindi = language === "hindi";
  const [filteredQuotes, setFilteredQuotes] = useState(motivationalQuotes);
  const [selectedAuthor, setSelectedAuthor] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dailyQuote, setDailyQuote] = useState<MotivationalQuote | null>(null);

  // Get unique authors
  const authors = Array.from(new Set(motivationalQuotes.map(q => q.author)));

  // Daily quote - changes every day
  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('dailyQuoteDate');
    const savedQuote = localStorage.getItem('dailyQuote');

    if (savedDate === today && savedQuote) {
      setDailyQuote(JSON.parse(savedQuote));
    } else {
      const random = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
      setDailyQuote(random);
      localStorage.setItem('dailyQuoteDate', today);
      localStorage.setItem('dailyQuote', JSON.stringify(random));
    }
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = motivationalQuotes;

    if (selectedAuthor !== "all") {
      filtered = filtered.filter(q => q.author === selectedAuthor);
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(q =>
        q.quote_hindi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.quote_english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredQuotes(filtered);
  }, [selectedAuthor, selectedCategory, searchTerm]);

  const getRandomQuote = () => {
    const random = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setDailyQuote(random);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pb-20">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-foreground">
              {t("महान व्यक्तियों से प्रेरणा", "Motivation from Legends")}
            </h1>
          </div>
          <HamburgerMenu />
        </div>

        {/* Daily Quote Highlight */}
        {dailyQuote && (
          <Card className="border-2 border-amber-400 bg-gradient-to-r from-amber-100 to-orange-100 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-amber-600" />
                <h2 className="text-xl font-bold text-amber-900">
                  {t("आज की प्रेरणा", "Today's Inspiration")}
                </h2>
              </div>
              <p className="text-lg italic text-gray-800 mb-3 leading-relaxed">
                "{isHindi ? dailyQuote.quote_hindi : dailyQuote.quote_english}"
              </p>
              <p className="text-sm text-amber-700 font-semibold">
                - {dailyQuote.author}
              </p>
              <Button 
                onClick={getRandomQuote} 
                variant="outline" 
                size="sm" 
                className="mt-4 border-amber-600 text-amber-700 hover:bg-amber-50"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                {t("नया उद्धरण", "New Quote")}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <div className="space-y-4">
          <Input 
            placeholder={t("खोजें...", "Search quotes...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white"
          />

          <div className="flex gap-4">
            <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder={t("लेखक चुनें", "Select Author")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("सभी लेखक", "All Authors")}</SelectItem>
                {authors.map(author => (
                  <SelectItem key={author} value={author}>{author}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid grid-cols-7 w-full bg-white">
              <TabsTrigger value="all">{t("सभी", "All")}</TabsTrigger>
              <TabsTrigger value="success">{t("सफलता", "Success")}</TabsTrigger>
              <TabsTrigger value="education">{t("शिक्षा", "Education")}</TabsTrigger>
              <TabsTrigger value="leadership">{t("नेतृत्व", "Leadership")}</TabsTrigger>
              <TabsTrigger value="life">{t("जीवन", "Life")}</TabsTrigger>
              <TabsTrigger value="courage">{t("साहस", "Courage")}</TabsTrigger>
              <TabsTrigger value="hardwork">{t("मेहनत", "Hard Work")}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Quote Count */}
        <p className="text-sm text-muted-foreground">
          {t(`${filteredQuotes.length} प्रेरक उद्धरण मिले`, `${filteredQuotes.length} motivational quotes found`)}
        </p>

        {/* Quotes Grid */}
        <div className="grid gap-4">
          {filteredQuotes.map(quote => (
            <Card key={quote.id} className="hover:shadow-lg transition-shadow bg-white border-l-4 border-l-amber-500">
              <CardContent className="p-5">
                <p className="text-base italic text-gray-800 mb-3 leading-relaxed">
                  💡 "{isHindi ? quote.quote_hindi : quote.quote_english}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-amber-700">
                    - {quote.author}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
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

export default Motivations;
