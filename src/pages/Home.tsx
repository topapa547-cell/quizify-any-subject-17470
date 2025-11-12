import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy, Sparkles, LogOut, LogIn } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { questionBank, subjects, classes } from "@/data/quizData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [selectedCount, setSelectedCount] = useState<number>(10);
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedClass, setSelectedClass] = useState<number | undefined>(undefined);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
  };

  const questionOptions = [5, 10, 15, 20, 25, 30, 40, 50];

  const handleStartQuiz = () => {
    navigate("/quiz", { 
      state: { 
        questionCount: selectedCount,
        subject: selectedSubject,
        classLevel: selectedClass,
        difficulty: selectedDifficulty
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <Button onClick={() => navigate("/leaderboard")} variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Trophy className="w-5 h-5 mr-2" />
              Leaderboard
            </Button>
            {user ? (
              <Button onClick={handleLogout} variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </Button>
            ) : (
              <Button onClick={() => navigate("/auth")} variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <LogIn className="w-5 h-5 mr-2" />
                Login
              </Button>
            )}
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-14 h-14" />
              <h1 className="text-4xl md:text-5xl font-bold">गणित क्विज़ ऐप</h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              कक्षा 10वीं के गणित के प्रश्नों से अपनी तैयारी को मजबूत करें
            </p>
          </div>
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
              विषय, कक्षा और प्रश्नों की संख्या चुनें
            </p>
          </div>

          <div className="space-y-8">
            {/* Subject Selection */}
            <div>
              <Label className="text-lg font-semibold text-foreground mb-4 block">
                विषय चुनें
              </Label>
              <RadioGroup
                value={selectedSubject}
                onValueChange={setSelectedSubject}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {subjects.map((subject) => (
                  <div key={subject.id} className="relative">
                    <RadioGroupItem
                      value={subject.id}
                      id={`subj-${subject.id}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`subj-${subject.id}`}
                      className="flex flex-col items-center justify-center p-4 border-2 border-border rounded-lg cursor-pointer transition-all hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:shadow-[var(--success-glow)]"
                    >
                      <span className="text-3xl mb-2">{subject.icon}</span>
                      <span className="text-sm font-medium text-foreground text-center">{subject.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Class Selection */}
            <div>
              <Label className="text-lg font-semibold text-foreground mb-4 block">
                कक्षा चुनें (Optional)
              </Label>
              <RadioGroup
                value={selectedClass?.toString() || "all"}
                onValueChange={(value) => setSelectedClass(value === "all" ? undefined : Number(value))}
                className="grid grid-cols-3 md:grid-cols-5 gap-4"
              >
                <div className="relative">
                  <RadioGroupItem value="all" id="class-all" className="peer sr-only" />
                  <Label
                    htmlFor="class-all"
                    className="flex flex-col items-center justify-center p-4 border-2 border-border rounded-lg cursor-pointer transition-all hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                  >
                    <span className="text-xl font-bold text-foreground">सभी</span>
                  </Label>
                </div>
                {classes.map((cls) => (
                  <div key={cls} className="relative">
                    <RadioGroupItem value={cls.toString()} id={`class-${cls}`} className="peer sr-only" />
                    <Label
                      htmlFor={`class-${cls}`}
                      className="flex flex-col items-center justify-center p-4 border-2 border-border rounded-lg cursor-pointer transition-all hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                    >
                      <span className="text-xl font-bold text-foreground">{cls}वीं</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Difficulty Selection */}
            <div>
              <Label className="text-lg font-semibold text-foreground mb-4 block">
                कठिनाई स्तर
              </Label>
              <RadioGroup
                value={selectedDifficulty}
                onValueChange={setSelectedDifficulty}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { id: "all", name: "सभी", icon: "🎯" },
                  { id: "easy", name: "आसान", icon: "🟢" },
                  { id: "medium", name: "मध्यम", icon: "🟡" },
                  { id: "hard", name: "कठिन", icon: "🔴" }
                ].map((difficulty) => (
                  <div key={difficulty.id} className="relative">
                    <RadioGroupItem value={difficulty.id} id={`diff-${difficulty.id}`} className="peer sr-only" />
                    <Label
                      htmlFor={`diff-${difficulty.id}`}
                      className="flex flex-col items-center justify-center p-4 border-2 border-border rounded-lg cursor-pointer transition-all hover:border-primary hover:bg-primary/5 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                    >
                      <span className="text-2xl mb-1">{difficulty.icon}</span>
                      <span className="text-sm font-medium text-foreground">{difficulty.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Question Count */}
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
