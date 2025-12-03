import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Bell, Clock, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNav from "@/components/BottomNav";

interface ExamTimetable {
  id: string;
  class_level: number;
  subject: string;
  subject_hi: string;
  exam_date: string;
  exam_time: string;
  exam_duration: string;
  year: number;
  is_practical: boolean;
  notes: string | null;
  notes_hi: string | null;
}

interface CBSENews {
  id: string;
  title_hi: string;
  title_en: string;
  description_hi: string | null;
  description_en: string | null;
  source_url: string | null;
  category: string;
  is_important: boolean;
  publish_date: string;
}

const CBSEUpdates = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [timetable, setTimetable] = useState<ExamTimetable[]>([]);
  const [news, setNews] = useState<CBSENews[]>([]);
  const [loading, setLoading] = useState(true);
  const [userClassLevel, setUserClassLevel] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      // Get user's class level
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('class_level')
          .eq('id', user.id)
          .single();
        if (profile?.class_level) {
          setUserClassLevel(profile.class_level);
        }
      }

      // Fetch exam timetable
      const { data: timetableData } = await supabase
        .from('exam_timetable')
        .select('*')
        .order('exam_date', { ascending: true });
      
      if (timetableData) {
        setTimetable(timetableData);
      }

      // Fetch news
      const { data: newsData } = await supabase
        .from('cbse_news')
        .select('*')
        .order('publish_date', { ascending: false });
      
      if (newsData) {
        setNews(newsData);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const getDaysRemaining = (examDate: string): number => {
    const today = new Date();
    const exam = new Date(examDate);
    const diffTime = exam.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredTimetable = timetable.filter(exam => exam.class_level === userClassLevel);

  const getCategoryBadge = (category: string) => {
    const colors: Record<string, string> = {
      exam: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      result: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      syllabus: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      circular: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      general: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300',
    };
    return colors[category] || colors.general;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pb-20">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {t("📰 CBSE अपडेट्स", "📰 CBSE Updates")}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t("परीक्षा तिथियां और समाचार", "Exam dates & news")}
            </p>
          </div>
        </div>

        <Tabs defaultValue="timetable" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="timetable" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {t("परीक्षा तिथियां", "Exam Dates")}
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              {t("समाचार", "News")}
            </TabsTrigger>
          </TabsList>

          {/* Exam Timetable Tab */}
          <TabsContent value="timetable" className="space-y-4">
            {/* Class Selector */}
            <div className="flex gap-2 mb-4">
              {[9, 10].map((classNum) => (
                <Button
                  key={classNum}
                  variant={userClassLevel === classNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUserClassLevel(classNum)}
                >
                  {t(`कक्षा ${classNum}`, `Class ${classNum}`)}
                </Button>
              ))}
            </div>

            {/* Next Exam Countdown */}
            {filteredTimetable.length > 0 && (
              <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t("अगली परीक्षा", "Next Exam")}
                      </p>
                      <h3 className="text-lg font-bold text-foreground">
                        {language === 'hindi' ? filteredTimetable[0].subject_hi : filteredTimetable[0].subject}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(filteredTimetable[0].exam_date).toLocaleDateString(language === 'hindi' ? 'hi-IN' : 'en-IN', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">
                        {getDaysRemaining(filteredTimetable[0].exam_date)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {t("दिन शेष", "days left")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Timetable List */}
            <div className="space-y-3">
              {filteredTimetable.map((exam) => {
                const daysLeft = getDaysRemaining(exam.exam_date);
                const isPast = daysLeft < 0;
                
                return (
                  <Card 
                    key={exam.id} 
                    className={`transition-all ${isPast ? 'opacity-50' : 'hover:shadow-md'}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            isPast ? 'bg-muted' : 'bg-primary/10'
                          }`}>
                            <Calendar className={`h-6 w-6 ${isPast ? 'text-muted-foreground' : 'text-primary'}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {language === 'hindi' ? exam.subject_hi : exam.subject}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {new Date(exam.exam_date).toLocaleDateString(language === 'hindi' ? 'hi-IN' : 'en-IN', {
                                weekday: 'short',
                                day: 'numeric',
                                month: 'short'
                              })}
                              {exam.exam_time && ` • ${exam.exam_time}`}
                            </p>
                            {exam.notes && (
                              <p className="text-xs text-muted-foreground mt-1">
                                💡 {language === 'hindi' ? exam.notes_hi : exam.notes}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          {!isPast && (
                            <Badge variant={daysLeft <= 7 ? "destructive" : "secondary"}>
                              {daysLeft} {t("दिन", "days")}
                            </Badge>
                          )}
                          {isPast && (
                            <Badge variant="outline">
                              {t("समाप्त", "Done")}
                            </Badge>
                          )}
                          {exam.exam_duration && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                              <Clock className="h-3 w-3" />
                              {exam.exam_duration}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredTimetable.length === 0 && (
              <Card className="border-dashed">
                <CardContent className="p-8 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {t("इस कक्षा के लिए कोई परीक्षा तिथि उपलब्ध नहीं है", "No exam dates available for this class")}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-4">
            {news.map((item) => (
              <Card 
                key={item.id} 
                className={`transition-all hover:shadow-md ${item.is_important ? 'border-l-4 border-l-primary' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {item.is_important && (
                      <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={getCategoryBadge(item.category)}>
                          {item.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(item.publish_date).toLocaleDateString(language === 'hindi' ? 'hi-IN' : 'en-IN')}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {language === 'hindi' ? item.title_hi : item.title_en}
                      </h4>
                      {(item.description_hi || item.description_en) && (
                        <p className="text-sm text-muted-foreground">
                          {language === 'hindi' ? item.description_hi : item.description_en}
                        </p>
                      )}
                      {item.source_url && (
                        <a 
                          href={item.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t("स्रोत देखें", "View Source")}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {news.length === 0 && (
              <Card className="border-dashed">
                <CardContent className="p-8 text-center">
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {t("कोई समाचार उपलब्ध नहीं है", "No news available")}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
      <BottomNav />
    </div>
  );
};

export default CBSEUpdates;
