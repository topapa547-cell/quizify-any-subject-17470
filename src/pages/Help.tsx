import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu";
import BottomNav from "@/components/BottomNav";
import HelpChatAssistant from "@/components/HelpChatAssistant";

const Help = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold flex-1">{t("सहायता", "Help")}</h1>
          <HamburgerMenu />
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{t("अक्सर पूछे जाने वाले प्रश्न", "Frequently Asked Questions")}</CardTitle>
            <CardDescription>{t("ऐप का उपयोग कैसे करें", "How to use the app")}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>{t("MCQ प्रश्नोत्तरी कैसे शुरू करें?", "How to start MCQ quiz?")}</AccordionTrigger>
                <AccordionContent>
                  {t(
                    "होम पेज पर जाएं, प्रश्नों की संख्या, विषय और कठिनाई चुनें, फिर 'प्रश्नोत्तरी शुरू करें' पर क्लिक करें।",
                    "Go to home page, select number of questions, subject and difficulty, then click 'Start Quiz'."
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>{t("लंबे उत्तर वाले प्रश्न कहाँ मिलेंगे?", "Where to find long answer questions?")}</AccordionTrigger>
                <AccordionContent>
                  {t(
                    "ऊपर दाईं ओर मेनू (तीन लाइनें) पर क्लिक करें और 'लंबे उत्तर वाले प्रश्न' चुनें।",
                    "Click on menu (three lines) at top right and select 'Long Answer Questions'."
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>{t("प्रश्न कैसे डाउनलोड करें?", "How to download questions?")}</AccordionTrigger>
                <AccordionContent>
                  {t(
                    "लंबे उत्तर वाले प्रश्न पेज पर जाएं, किसी भी प्रश्न के सामने डाउनलोड आइकन पर क्लिक करें। यह PDF के रूप में डाउनलोड हो जाएगा और ऑफलाइन भी उपलब्ध होगा।",
                    "Go to long answer questions page, click download icon next to any question. It will download as PDF and be available offline."
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>{t("भाषा कैसे बदलें?", "How to change language?")}</AccordionTrigger>
                <AccordionContent>
                  {t(
                    "लॉगिन पेज पर या प्रोफ़ाइल सेटिंग में भाषा चयन विकल्प उपलब्ध है। हिंदी या अंग्रेजी चुनें।",
                    "Language selection is available on login page or in profile settings. Choose Hindi or English."
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>{t("लीडरबोर्ड कैसे काम करता है?", "How does leaderboard work?")}</AccordionTrigger>
                <AccordionContent>
                  {t(
                    "लीडरबोर्ड में आपकी कक्षा के सभी छात्रों की रैंकिंग दिखाई देती है। जितने अधिक अंक, उतनी ऊंची रैंक।",
                    "Leaderboard shows ranking of all students in your class. More points means higher rank."
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <HelpChatAssistant />
      </div>
      <BottomNav />
    </div>
  );
};

export default Help;
