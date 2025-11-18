import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy, Sparkles, LogOut } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { subjects } from "@/data/quizData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import BottomNav from "@/components/BottomNav";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [selectedCount, setSelectedCount] = useState<number>(10);
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [userClassLevel, setUserClassLevel] = useState<number | undefined>(undefined);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('class_level')
          .eq('id', session.user.id)
          .single();
        
        if (profile?.class_level) {
          setUserClassLevel(profile.class_level);
        }
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('class_level')
          .eq('id', session.user.id)
          .single();
        
        if (profile?.class_level) {
          setUserClassLevel(profile.class_level);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({ title: "Logged out successfully" });
    navigate("/auth");
  };

  const questionOptions = [5, 10, 15, 20, 25, 30, 40, 50];

  const handleStartQuiz = () => {
    navigate("/quiz", { 
      state: { 
        questionCount: selectedCount,
        subject: selectedSubject,
        classLevel: userClassLevel,
        difficulty: selectedDifficulty 
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/20 p-4 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="flex items-center gap-2 md:gap-3">
            <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              क्विज़ ऐप
            </h1>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm" className="gap-2">
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">लॉगआउट</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="p-4 md:p-6 text-center border-border hover:shadow-lg transition-all">
            <BookOpen className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-primary" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">विषय</h3>
            <p className="text-sm md:text-base text-muted-foreground">5 विषय उपलब्ध</p>
          </Card>
          
          <Card className="p-4 md:p-6 text-center border-border hover:shadow-lg transition-all">
            <Trophy className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-accent" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">प्रतिस्पर्धा</h3>
            <p className="text-sm md:text-base text-muted-foreground">रैंकिंग देखें</p>
          </Card>
          
          <Card className="p-4 md:p-6 text-center border-border hover:shadow-lg transition-all">
            <Sparkles className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-primary" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">विशेषताएं</h3>
            <p className="text-sm md:text-base text-muted-foreground">असीमित अभ्यास</p>
          </Card>
        </div>

        <Card className="p-4 md:p-8 border-border mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">
            अपनी क्विज़ कस्टमाइज़ करें
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            <div>
              <Label className="text-sm md:text-base font-medium mb-2 md:mb-3 block text-foreground">
                प्रश्नों की संख्या चुनें
              </Label>
              <div className="grid grid-cols-4 gap-2 md:gap-3">
                {questionOptions.map((count) => (
                  <Button
                    key={count}
                    variant={selectedCount === count ? "default" : "outline"}
                    onClick={() => setSelectedCount(count)}
                    className="text-sm md:text-base"
                  >
                    {count}
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <Label className="text-sm md:text-base font-medium mb-2 md:mb-3 block text-foreground">
                विषय चुनें
              </Label>
              <RadioGroup value={selectedSubject} onValueChange={setSelectedSubject}>
                {subjects.map((subject) => (
                  <div key={subject.id} className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-accent/5 transition-colors">
                    <RadioGroupItem value={subject.id} id={subject.id} />
                    <Label 
                      htmlFor={subject.id} 
                      className="flex-1 cursor-pointer text-sm md:text-base text-foreground font-medium"
                    >
                      {subject.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator />

            <div>
              <Label className="text-sm md:text-base font-medium mb-2 md:mb-3 block text-foreground">
                कठिनाई स्तर
              </Label>
              <RadioGroup value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-accent/5 transition-colors">
                    <RadioGroupItem value="all" id="diff-all" />
                    <Label htmlFor="diff-all" className="flex-1 cursor-pointer text-sm md:text-base text-foreground font-medium">
                      सभी (Easy + Medium + Hard)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-accent/5 transition-colors">
                    <RadioGroupItem value="easy" id="diff-easy" />
                    <Label htmlFor="diff-easy" className="flex-1 cursor-pointer text-sm md:text-base text-foreground font-medium">
                      Easy
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-accent/5 transition-colors">
                    <RadioGroupItem value="medium" id="diff-medium" />
                    <Label htmlFor="diff-medium" className="flex-1 cursor-pointer text-sm md:text-base text-foreground font-medium">
                      Medium
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-accent/5 transition-colors">
                    <RadioGroupItem value="hard" id="diff-hard" />
                    <Label htmlFor="diff-hard" className="flex-1 cursor-pointer text-sm md:text-base text-foreground font-medium">
                      Hard
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </Card>

        <Button 
          onClick={handleStartQuiz}
          size="lg"
          className="w-full text-base md:text-lg py-4 md:py-6 shadow-lg hover:shadow-xl transition-all"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          क्विज़ शुरू करें
        </Button>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Home;
