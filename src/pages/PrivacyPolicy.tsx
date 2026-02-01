import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">
              {t("गोपनीयता नीति", "Privacy Policy")}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t("अंतिम अपडेट: फरवरी 2026", "Last Updated: February 2026")}
            </p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none p-6 space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("1. परिचय", "1. Introduction")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "QuizKnow में आपका स्वागत है। हम आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि हम आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।",
                  "Welcome to QuizKnow. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("2. हम कौन सी जानकारी एकत्र करते हैं", "2. Information We Collect")}
              </h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>{t("खाता जानकारी: ईमेल, उपयोगकर्ता नाम, कक्षा स्तर", "Account Information: Email, username, class level")}</li>
                <li>{t("प्रगति डेटा: क्विज़ स्कोर, स्ट्रीक्स, उपलब्धियां", "Progress Data: Quiz scores, streaks, achievements")}</li>
                <li>{t("उपयोग डेटा: ऐप उपयोग पैटर्न और प्राथमिकताएं", "Usage Data: App usage patterns and preferences")}</li>
                <li>{t("डिवाइस जानकारी: ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम", "Device Information: Browser type, operating system")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("3. हम आपकी जानकारी का उपयोग कैसे करते हैं", "3. How We Use Your Information")}
              </h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>{t("शैक्षिक सेवाएं और व्यक्तिगत सीखने का अनुभव प्रदान करना", "Providing educational services and personalized learning experience")}</li>
                <li>{t("आपकी प्रगति को ट्रैक करना और लीडरबोर्ड बनाए रखना", "Tracking your progress and maintaining leaderboards")}</li>
                <li>{t("हमारी सेवाओं में सुधार और नई सुविधाएं विकसित करना", "Improving our services and developing new features")}</li>
                <li>{t("महत्वपूर्ण अपडेट और सूचनाएं भेजना", "Sending important updates and notifications")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("4. डेटा सुरक्षा", "4. Data Security")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "हम आपके डेटा की सुरक्षा के लिए उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं, जिसमें एन्क्रिप्शन, सुरक्षित सर्वर और नियमित सुरक्षा ऑडिट शामिल हैं।",
                  "We use industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("5. तृतीय-पक्ष सेवाएं", "5. Third-Party Services")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "हम विश्लेषण और विज्ञापन के लिए तृतीय-पक्ष सेवाओं का उपयोग कर सकते हैं, जिसमें Google AdSense और Google Analytics शामिल हैं। इन सेवाओं की अपनी गोपनीयता नीतियां हैं।",
                  "We may use third-party services for analytics and advertising, including Google AdSense and Google Analytics. These services have their own privacy policies."
                )}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("6. आपके अधिकार", "6. Your Rights")}
              </h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                <li>{t("अपना डेटा एक्सेस करने और डाउनलोड करने का अधिकार", "Right to access and download your data")}</li>
                <li>{t("अपनी जानकारी को सही करने का अधिकार", "Right to correct your information")}</li>
                <li>{t("अपना खाता हटाने का अनुरोध करने का अधिकार", "Right to request deletion of your account")}</li>
                <li>{t("मार्केटिंग संचार से बाहर निकलने का अधिकार", "Right to opt-out of marketing communications")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground">
                {t("7. संपर्क करें", "7. Contact Us")}
              </h2>
              <p className="text-muted-foreground">
                {t(
                  "गोपनीयता संबंधी किसी भी प्रश्न के लिए, कृपया हमसे संपर्क पृष्ठ के माध्यम से संपर्क करें।",
                  "For any privacy-related questions, please contact us through our Contact page."
                )}
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
