import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: t("संदेश भेजा गया!", "Message Sent!"),
      description: t(
        "हम जल्द ही आपसे संपर्क करेंगे।",
        "We will get back to you soon."
      ),
    });
  };

  const faqItems = [
    {
      questionHi: "क्या QuizKnow मुफ्त है?",
      questionEn: "Is QuizKnow free?",
      answerHi: "हाँ, बेसिक फीचर्स मुफ्त हैं। प्रीमियम फीचर्स के लिए सब्सक्रिप्शन की आवश्यकता है।",
      answerEn: "Yes, basic features are free. Premium features require a subscription.",
    },
    {
      questionHi: "कौन से विषय उपलब्ध हैं?",
      questionEn: "Which subjects are available?",
      answerHi: "अंग्रेजी, हिंदी, गणित, विज्ञान, सामाजिक विज्ञान, और IT/ITes।",
      answerEn: "English, Hindi, Math, Science, Social Science, and IT/ITes.",
    },
    {
      questionHi: "मैं अपना स्कोर कैसे सुधार सकता हूँ?",
      questionEn: "How can I improve my score?",
      answerHi: "रोज़ाना अभ्यास करें, स्ट्रीक बनाए रखें, और कठिन स्तर की क्विज़ लें।",
      answerEn: "Practice daily, maintain streaks, and take harder level quizzes.",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 pb-24">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("वापस जाएं", "Go Back")}
          </Button>

          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {t("धन्यवाद!", "Thank You!")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t(
                  "आपका संदेश सफलतापूर्वक भेज दिया गया है। हम 24-48 घंटों के भीतर जवाब देंगे।",
                  "Your message has been sent successfully. We will respond within 24-48 hours."
                )}
              </p>
              <Button onClick={() => navigate("/")}>
                {t("होम पर जाएं", "Go to Home")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 pb-24">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("वापस जाएं", "Go Back")}
        </Button>

        {/* Contact Form */}
        <Card className="shadow-lg mb-6">
          <CardHeader className="text-center border-b">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">
              {t("हमसे संपर्क करें", "Contact Us")}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t(
                "कोई सवाल या सुझाव? हमें लिखें!",
                "Have questions or suggestions? Write to us!"
              )}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("नाम", "Name")} *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("अपना नाम दर्ज करें", "Enter your name")}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("ईमेल", "Email")} *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("अपना ईमेल दर्ज करें", "Enter your email")}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">{t("विषय", "Subject")} *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t("विषय दर्ज करें", "Enter subject")}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("संदेश", "Message")} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("अपना संदेश लिखें...", "Write your message...")}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    {t("भेज रहे हैं...", "Sending...")}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    {t("संदेश भेजें", "Send Message")}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              {t("अक्सर पूछे जाने वाले प्रश्न", "Frequently Asked Questions")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="p-4 bg-muted/50 rounded-lg"
              >
                <h3 className="font-semibold mb-2">
                  {t(faq.questionHi, faq.questionEn)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(faq.answerHi, faq.answerEn)}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
