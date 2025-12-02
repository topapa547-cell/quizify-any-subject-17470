import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Trophy, Clock, Star, RefreshCw, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface QuickQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
}

const quickFireData: QuickQuestion[] = [
  { id: "1", question: "2 + 2 = ?", options: ["3", "4", "5", "6"], correct: 1 },
  { id: "2", question: "H₂O क्या है?", options: ["नमक", "जल", "अम्ल", "गैस"], correct: 1 },
  { id: "3", question: "भारत की राजधानी?", options: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"], correct: 1 },
  { id: "4", question: "sin 30° = ?", options: ["0", "1/2", "1", "√3/2"], correct: 1 },
  { id: "5", question: "सबसे बड़ा ग्रह?", options: ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"], correct: 2 },
  { id: "6", question: "10 × 10 = ?", options: ["10", "20", "100", "1000"], correct: 2 },
  { id: "7", question: "O₂ का नाम?", options: ["नाइट्रोजन", "ऑक्सीजन", "कार्बन", "हीलियम"], correct: 1 },
  { id: "8", question: "cos 0° = ?", options: ["0", "1", "1/2", "√2"], correct: 1 },
  { id: "9", question: "15 अगस्त किस वर्ष?", options: ["1945", "1947", "1950", "1952"], correct: 1 },
  { id: "10", question: "√16 = ?", options: ["2", "4", "8", "16"], correct: 1 },
  { id: "11", question: "सोने का प्रतीक?", options: ["Ag", "Au", "Fe", "Cu"], correct: 1 },
  { id: "12", question: "tan 45° = ?", options: ["0", "1/2", "1", "∞"], correct: 2 },
];

const QuickFire = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<QuickQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showResult, setShowResult] = useState<number | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setQuestions([...quickFireData].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (gameStarted && timer > 0 && !gameOver) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      endGame();
    }
  }, [gameStarted, timer, gameOver]);

  const startGame = () => {
    setGameStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setTimer(30);
    setStreak(0);
    setGameOver(false);
    setQuestions([...quickFireData].sort(() => Math.random() - 0.5));
  };

  const handleAnswer = (selectedIndex: number) => {
    const current = questions[currentIndex];
    const isCorrect = selectedIndex === current.correct;

    setShowResult(selectedIndex);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      const streakBonus = newStreak >= 3 ? 5 : 0;
      setScore(prev => prev + 10 + streakBonus);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setShowResult(null);
      if (currentIndex + 1 >= questions.length) {
        endGame();
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }, 300);
  };

  const endGame = async () => {
    setGameOver(true);
    
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user && score > 0) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('league_points')
        .eq('id', session.user.id)
        .single();
      
      if (profile) {
        const newPoints = (profile.league_points || 0) + Math.floor(score / 2);
        await supabase
          .from('profiles')
          .update({ league_points: newPoints })
          .eq('id', session.user.id);
      }
    }

    toast({
      title: "⚡ Quick Fire समाप्त!",
      description: `स्कोर: ${score} | +${Math.floor(score / 2)} पॉइंट्स`,
    });
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500/10 via-background to-yellow-500/10 p-4">
        <div className="max-w-lg mx-auto">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            वापस जाएं
          </Button>

          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-8 text-center text-white">
                <span className="text-6xl">⚡</span>
                <h1 className="text-2xl font-bold mt-4">Quick Fire</h1>
                <p className="text-white/80 mt-2">30 सेकंड में जितने हो सके!</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                    <p className="text-sm text-muted-foreground">30 सेकंड</p>
                  </div>
                  <div>
                    <Star className="w-6 h-6 mx-auto text-yellow-500 mb-1" />
                    <p className="text-sm text-muted-foreground">+10 प्रति सही</p>
                  </div>
                  <div>
                    <Zap className="w-6 h-6 mx-auto text-orange-500 mb-1" />
                    <p className="text-sm text-muted-foreground">Streak बोनस</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">कैसे खेलें:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 30 सेकंड में जितने प्रश्न हो सकें हल करें</li>
                    <li>• जल्दी सही उत्तर दें</li>
                    <li>• 3 सही लगातार = +5 बोनस</li>
                    <li>• गलत उत्तर से streak टूट जाती है</li>
                  </ul>
                </div>

                <Button onClick={startGame} className="w-full h-12 text-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                  ⚡ गेम शुरू करें
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500/10 via-background to-yellow-500/10 p-4 flex items-center justify-center">
        <Card className="w-full max-w-md border-none shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold mb-2">समाप्त!</h2>
            <p className="text-4xl font-bold text-primary mb-2">{score} अंक</p>
            <p className="text-muted-foreground mb-6">
              {currentIndex} प्रश्न हल किए
            </p>
            <div className="space-y-3">
              <Button onClick={startGame} className="w-full bg-gradient-to-r from-orange-500 to-yellow-500">
                <RefreshCw className="w-4 h-4 mr-2" />
                फिर से खेलें
              </Button>
              <Button variant="outline" onClick={() => navigate("/")} className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                होम पर जाएं
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500/10 via-background to-yellow-500/10 p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {streak >= 3 && (
              <div className="flex items-center gap-1 bg-orange-500/20 px-2 py-1 rounded-full animate-pulse">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-orange-500">{streak}x</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-bold">{score}</span>
            </div>
            <div className={cn(
              "flex items-center gap-1 px-3 py-1 rounded-full text-lg font-bold",
              timer <= 10 ? "bg-destructive/20 text-destructive animate-pulse" : "bg-orange-500/20 text-orange-500"
            )}>
              <Clock className="w-5 h-5" />
              <span>{timer}s</span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="border-none shadow-xl">
          <CardContent className="p-6">
            <p className="text-xl text-center font-bold mb-6">
              {currentQuestion?.question}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {currentQuestion?.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={cn(
                    "h-14 text-base transition-all",
                    showResult === index 
                      ? index === currentQuestion.correct 
                        ? "bg-green-500 hover:bg-green-500" 
                        : "bg-red-500 hover:bg-red-500"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  )}
                  disabled={showResult !== null}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuickFire;
