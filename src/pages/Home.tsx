import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy, Sparkles } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { questionBank } from "@/data/quizData";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCount, setSelectedCount] = useState<number>(5);

  const questionOptions = [5, 10, 15, 20, 25];

  const handleStartQuiz = () => {
    navigate("/quiz", { state: { questionCount: selectedCount } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-12 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-14 h-14" />
            <h1 className="text-4xl md:text-5xl font-bold">गणित क्विज़ ऐप</h1>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            कक्षा 10वीं के गणित के प्रश्नों से अपनी तैयारी को मजबूत करें
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center border-border shadow-[var(--card-shadow)] hover:shadow-lg transition-all">
            <BookOpen className="w-12 h-12 mx-auto mb-3 text-primary" />
            <h3 className="text-2xl font-bold text-foreground mb-1">{questionBank.length}+</h3>
            <p className="text-muted-foreground">प्रश्न उपलब्ध</p>
          </Card>
          
          <Card className="p-6 text-center border-border shadow-[var(--card-shadow)] hover:shadow-lg transition-all">
            <Sparkles className="w-12 h-12 mx-auto mb-3 text-secondary" />
            <h3 className="text-2xl font-bold text-foreground mb-1">100%</h3>
            <p className="text-muted-foreground">अर्थपूर्ण प्रश्न</p>
          </Card>
          
          <Card className="p-6 text-center border-border shadow-[var(--card-shadow)] hover:shadow-lg transition-all">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-accent" />
            <h3 className="text-2xl font-bold text-foreground mb-1">तत्काल</h3>
            <p className="text-muted-foreground">परिणाम देखें</p>
          </Card>
        </div>

        {/* Quiz Setup Card */}
        <Card className="p-8 shadow-[var(--card-shadow)] border-border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">अपनी क्विज़ शुरू करें</h2>
            <p className="text-muted-foreground text-lg">
              प्रश्नों की संख्या चुनें और परीक्षा आरंभ करें
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold text-foreground mb-4 block">
                कितने प्रश्न चाहिए?
              </Label>
              <RadioGroup
                value={selectedCount.toString()}
                onValueChange={(value) => setSelectedCount(Number(value))}
                className="grid grid-cols-2 md:grid-cols-5 gap-4"
              >
                {questionOptions.map((count) => (
                  <div key={count} className="relative">
                    <RadioGroupItem
                      value={count.toString()}
                      id={`q${count}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`q${count}`}
                      className="flex flex-col items-center justify-center p-6 border-2 border-border rounded-lg cursor-pointer transition-all hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:shadow-[var(--success-glow)]"
                    >
                      <span className="text-3xl font-bold text-foreground">{count}</span>
                      <span className="text-sm text-muted-foreground mt-1">प्रश्न</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>ध्यान दें:</strong> आप सभी प्रश्नों के उत्तर न देकर भी परिणाम देख सकते हैं
              </p>
            </div>

            <Button
              onClick={handleStartQuiz}
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-xl shadow-lg hover:shadow-xl transition-all"
            >
              <GraduationCap className="w-6 h-6 mr-3" />
              क्विज़ शुरू करें
            </Button>
          </div>
        </Card>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">विविध प्रश्न</h3>
              <p className="text-sm text-muted-foreground">
                बीजगणित, ज्यामिति, त्रिकोणमिति और अधिक से प्रश्न
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-secondary/10 p-3 rounded-lg">
              <Trophy className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">तुरंत परिणाम</h3>
              <p className="text-sm text-muted-foreground">
                अपना स्कोर और प्रदर्शन तुरंत देखें
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-accent/10 p-3 rounded-lg">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">लचीला अभ्यास</h3>
              <p className="text-sm text-muted-foreground">
                5 से 25 प्रश्नों तक चुनें और अपनी गति से अभ्यास करें
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-primary/10 p-3 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">CBSE पाठ्यक्रम</h3>
              <p className="text-sm text-muted-foreground">
                कक्षा 10 के CBSE पाठ्यक्रम के अनुसार प्रश्न
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
