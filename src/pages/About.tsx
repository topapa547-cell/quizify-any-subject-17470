import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Trophy, Users, Sparkles, Target, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      titleHi: "व्यापक अध्ययन सामग्री",
      titleEn: "Comprehensive Study Material",
      descHi: "NCERT समाधान, व्याकरण लैब, और पिछले वर्ष के प्रश्न पत्र",
      descEn: "NCERT solutions, Grammar Lab, and previous year papers",
    },
    {
      icon: Trophy,
      titleHi: "गेमिफाइड लर्निंग",
      titleEn: "Gamified Learning",
      descHi: "लीडरबोर्ड, स्ट्रीक्स, और उपलब्धियों के साथ मज़ेदार सीखने का अनुभव",
      descEn: "Fun learning with leaderboards, streaks, and achievements",
    },
    {
      icon: Users,
      titleHi: "मल्टीप्लेयर बैटल",
      titleEn: "Multiplayer Battles",
      descHi: "दोस्तों के साथ क्विज़ में प्रतिस्पर्धा करें और जीतें",
      descEn: "Compete with friends in quiz battles and win",
    },
    {
      icon: Sparkles,
      titleHi: "AI सहायता",
      titleEn: "AI Assistance",
      descHi: "स्मार्ट हेल्प असिस्टेंट और कॉन्सेप्ट एक्सप्लेनर",
      descEn: "Smart help assistant and concept explainer",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("वापस जाएं", "Go Back")}
        </Button>

        {/* Hero Section */}
        <Card className="shadow-lg mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">QuizKnow</h1>
            <p className="text-lg opacity-90">
              {t(
                "कक्षा 9 और 10 के छात्रों के लिए सबसे बेहतर शैक्षिक ऐप",
                "The Best Educational App for Class 9 & 10 Students"
              )}
            </p>
          </div>
        </Card>

        {/* Mission Section */}
        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {t("हमारा मिशन", "Our Mission")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "QuizKnow का मिशन है भारत के हर छात्र को गुणवत्तापूर्ण शिक्षा सुलभ बनाना। हम CBSE पाठ्यक्रम के अनुसार इंटरैक्टिव क्विज़, NCERT समाधान, और व्यापक अध्ययन सामग्री प्रदान करते हैं जो सीखने को मज़ेदार और प्रभावी बनाती है।",
                "QuizKnow's mission is to make quality education accessible to every student in India. We provide interactive quizzes, NCERT solutions, and comprehensive study material aligned with the CBSE curriculum that makes learning fun and effective."
              )}
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <h2 className="text-xl font-semibold mb-4">
          {t("हमारी विशेषताएं", "Our Features")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t(feature.titleHi, feature.titleEn)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(feature.descHi, feature.descEn)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">
                  {t("प्रश्न", "Questions")}
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">
                  {t("विषय", "Subjects")}
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">
                  {t("गेम्स", "Games")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Made with Love */}
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span>{t("भारत में", "Made in India with")}</span>
              <Heart className="h-5 w-5 text-red-500 fill-red-500" />
              <span>{t("के साथ बनाया गया", "")}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              © 2026 QuizKnow. {t("सर्वाधिकार सुरक्षित।", "All rights reserved.")}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
