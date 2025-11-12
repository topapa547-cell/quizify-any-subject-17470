import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy, Sparkles, LogOut } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { questionBank, subjects, classes } from "@/data/quizData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import BottomNav from "@/components/BottomNav";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [selectedCount, setSelectedCount] = useState<number>(10);
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedClass, setSelectedClass] = useState<number | undefined>(undefined);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "लॉगिन में त्रुटि",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "लॉगिन सफल!",
        description: "आपका स्वागत है।",
      });
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast({
        title: "Username आवश्यक है",
        description: "कृपया एक username दर्ज करें।",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          username: username.trim(),
        }
      }
    });

    setLoading(false);

    if (error) {
      toast({
        title: "साइनअप में त्रुटि",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "साइनअप सफल!",
        description: "आप लॉगिन कर सकते हैं।",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      }
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Google साइनइन में त्रुटि",
        description: error.message,
        variant: "destructive",
      });
    }
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
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-8 md:py-12 shadow-lg">
        <div className="container mx-auto px-4">
          {user && (
            <div className="flex justify-end mb-4">
              <Button onClick={handleLogout} variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </Button>
            </div>
          )}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-12 h-12 md:w-14 md:h-14" />
              <h1 className="text-3xl md:text-5xl font-bold">Quiz App</h1>
            </div>
            <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              अपने ज्ञान का परीक्षण करें - English, Hindi, गणित, विज्ञान और सामाजिक विज्ञान
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        {/* Authentication Section */}
        {!user && (
          <Card className="p-6 md:p-8 shadow-lg border-border mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">क्विज़ शुरू करने के लिए लॉगिन करें</h2>
              <p className="text-muted-foreground">अपने स्कोर को सेव करें और leaderboard में compete करें</p>
            </div>
            
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">लॉगिन</TabsTrigger>
                <TabsTrigger value="signup">साइनअप</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">ईमेल</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">पासवर्ड</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "लॉगिन हो रहा है..." : "लॉगिन करें"}
                  </Button>
                  
                  <div className="relative my-4">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                      या
                    </span>
                  </div>

                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google से साइनइन करें
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-username">Username</Label>
                    <Input
                      id="signup-username"
                      type="text"
                      placeholder="आपका username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">ईमेल</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">पासवर्ड</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "साइनअप हो रहा है..." : "साइनअप करें"}
                  </Button>
                  
                  <div className="relative my-4">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                      या
                    </span>
                  </div>

                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google से साइनअप करें
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        )}
        {user && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <Card className="p-4 md:p-6 text-center border-border shadow-[var(--card-shadow)] hover:shadow-lg transition-all">
                <BookOpen className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-primary" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{questionBank.length}+</h3>
                <p className="text-sm md:text-base text-muted-foreground">प्रश्न उपलब्ध</p>
              </Card>
              
              <Card className="p-4 md:p-6 text-center border-border shadow-[var(--card-shadow)] hover:shadow-lg transition-all">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-secondary" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">5</h3>
                <p className="text-sm md:text-base text-muted-foreground">विषय</p>
              </Card>
              
              <Card className="p-4 md:p-6 text-center border-border shadow-[var(--card-shadow)] hover:shadow-lg transition-all">
                <Trophy className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-accent" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">तत्काल</h3>
                <p className="text-sm md:text-base text-muted-foreground">परिणाम देखें</p>
              </Card>
            </div>

            {/* Quiz Setup Card */}
            <Card className="p-6 md:p-8 shadow-[var(--card-shadow)] border-border">
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
          </>
        )}

        {/* Features */}
        {user && (
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex gap-4 items-start">
              <div className="bg-primary/10 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">विविध विषय</h3>
                <p className="text-sm text-muted-foreground">
                  English, Hindi, गणित, विज्ञान और सामाजिक विज्ञान
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
                  5 से 50 प्रश्नों तक चुनें और अपनी गति से अभ्यास करें
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
                  कक्षा 9-10 के CBSE पाठ्यक्रम के अनुसार प्रश्न
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Home;
