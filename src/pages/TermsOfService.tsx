import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

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

        <Card className="shadow-lg">
          <CardHeader className="text-center border-b">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">
              {t("सेवा की शर्तें", "Terms of Service")}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t("अंतिम अपडेट: फरवरी 2026", "Last Updated: February 2026")}
            </p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none p-6 space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("1. शर्तों की स्वीकृति", "1. Acceptance of Terms")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "QuizKnow का उपयोग करके, आप इन सेवा शर्तों से बंधे होने के लिए सहमत हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया हमारी सेवाओं का उपयोग न करें।",
                  "By using QuizKnow, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("2. सेवा का विवरण", "2. Description of Service")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "QuizKnow कक्षा 9 और 10 के छात्रों के लिए एक शैक्षिक प्लेटफॉर्म है जो क्विज़, NCERT समाधान, व्याकरण अभ्यास, और अन्य शैक्षिक संसाधन प्रदान करता है।",
                  "QuizKnow is an educational platform for Class 9 and 10 students that provides quizzes, NCERT solutions, grammar practice, and other educational resources."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("3. उपयोगकर्ता खाते", "3. User Accounts")}
              </h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>{t("आपको सटीक और पूर्ण जानकारी प्रदान करनी होगी", "You must provide accurate and complete information")}</li>
                <li>{t("आप अपने खाते की सुरक्षा के लिए जिम्मेदार हैं", "You are responsible for maintaining your account security")}</li>
                <li>{t("आपको 13 वर्ष या उससे अधिक आयु का होना चाहिए", "You must be 13 years of age or older")}</li>
                <li>{t("प्रति व्यक्ति केवल एक खाते की अनुमति है", "Only one account per person is allowed")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("4. स्वीकार्य उपयोग", "4. Acceptable Use")}
              </h2>
              <p className="text-muted-foreground mb-2">
                {t("आप सहमत हैं कि आप निम्नलिखित नहीं करेंगे:", "You agree not to:")}
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>{t("किसी भी गैरकानूनी उद्देश्य के लिए सेवा का उपयोग करना", "Use the service for any unlawful purpose")}</li>
                <li>{t("क्विज़ में धोखाधड़ी या अनुचित लाभ प्राप्त करने का प्रयास", "Attempt to cheat or gain unfair advantage in quizzes")}</li>
                <li>{t("अन्य उपयोगकर्ताओं को परेशान या धमकाना", "Harass or bully other users")}</li>
                <li>{t("सेवा की सुरक्षा को बाधित करने का प्रयास", "Attempt to disrupt the service's security")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("5. बौद्धिक संपदा", "5. Intellectual Property")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "QuizKnow पर सभी सामग्री, जिसमें प्रश्न, समाधान, और डिज़ाइन शामिल हैं, हमारी बौद्धिक संपदा है और कॉपीराइट कानूनों द्वारा संरक्षित है।",
                  "All content on QuizKnow, including questions, solutions, and designs, is our intellectual property and is protected by copyright laws."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("6. प्रीमियम सदस्यता", "6. Premium Subscription")}
              </h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>{t("प्रीमियम सुविधाओं के लिए सदस्यता आवश्यक है", "Subscription is required for premium features")}</li>
                <li>{t("सदस्यता शुल्क गैर-वापसी योग्य हैं", "Subscription fees are non-refundable")}</li>
                <li>{t("हम किसी भी समय कीमतें बदलने का अधिकार रखते हैं", "We reserve the right to change prices at any time")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("7. सेवा समाप्ति", "7. Termination")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "हम किसी भी समय, बिना पूर्व सूचना के, इन शर्तों के उल्लंघन के लिए आपके खाते को निलंबित या समाप्त कर सकते हैं।",
                  "We may suspend or terminate your account at any time, without prior notice, for violation of these terms."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("8. दायित्व की सीमा", "8. Limitation of Liability")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "QuizKnow शैक्षिक उद्देश्यों के लिए प्रदान किया जाता है। हम किसी भी प्रकार की वारंटी प्रदान नहीं करते हैं और किसी भी नुकसान के लिए उत्तरदायी नहीं हैं।",
                  "QuizKnow is provided for educational purposes. We do not provide any warranties and are not liable for any damages."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("9. शर्तों में परिवर्तन", "9. Changes to Terms")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "हम किसी भी समय इन शर्तों को अपडेट कर सकते हैं। परिवर्तनों के बाद सेवा का उपयोग जारी रखना नई शर्तों की स्वीकृति माना जाएगा।",
                  "We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms."
                )}
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
