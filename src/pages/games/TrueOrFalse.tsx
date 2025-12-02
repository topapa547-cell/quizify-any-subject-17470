import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Trophy, Clock, Star, RefreshCw, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { trueFalseData as importedTrueFalseData } from "@/data/games/trueFalseData";

interface GameQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

// Transform imported data to match component's expected format
const trueFalseData: GameQuestion[] = importedTrueFalseData.map(q => ({
  id: q.id,
  statement: q.statement,
  isTrue: q.answer,
  explanation: q.explanation || (q.answer ? "यह कथन सही है" : "यह कथन गलत है")
}));

const TrueOrFalse = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(45);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setQuestions([...trueFalseData].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (gameStarted && timer > 0 && !gameOver && !answered) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !answered) {
      handleAnswer(null);
    }
  }, [gameStarted, timer, gameOver, answered]);

  const startGame = () => {
    setGameStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setLives(3);
    setTimer(45);
    setGameOver(false);
    setQuestions([...trueFalseData].sort(() => Math.random() - 0.5));
  };

  const handleAnswer = async (answer: boolean | null) => {
    if (answered) return;
    setAnswered(true);
    
    const current = questions[currentIndex];
    const isCorrect = answer === current.isTrue;

    if (isCorrect) {
      setScore(prev => prev + 10);
      setShowResult('correct');
    } else {
      setLives(prev => prev - 1);
      setShowResult('wrong');
    }

    setTimeout(() => {
      setShowResult(null);
      setAnswered(false);
      
      if (lives <= 1 && !isCorrect) {
        endGame();
      } else if (currentIndex + 1 >= questions.length) {
        endGame();
      } else {
        setCurrentIndex(prev => prev + 1);
        setTimer(45);
      }
    }, 1500);
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
      title: "🎮 गेम समाप्त!",
      description: `स्कोर: ${score} | +${Math.floor(score / 2)} पॉइंट्स`,
    });
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500/10 via-background to-red-500/10 p-4">
        <div className="max-w-lg mx-auto">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            वापस जाएं
          </Button>

          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-8 text-center text-white">
                <span className="text-6xl">✓✗</span>
                <h1 className="text-2xl font-bold mt-4">सही या गलत</h1>
                <p className="text-white/80 mt-2">True or False</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                    <p className="text-sm text-muted-foreground">45 सेकंड/प्रश्न</p>
                  </div>
                  <div>
                    <Star className="w-6 h-6 mx-auto text-yellow-500 mb-1" />
                    <p className="text-sm text-muted-foreground">+10 प्रति सही</p>
                  </div>
                  <div>
                    <Trophy className="w-6 h-6 mx-auto text-red-500 mb-1" />
                    <p className="text-sm text-muted-foreground">3 जीवन</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">कैसे खेलें:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• कथन पढ़ें और सही या गलत चुनें</li>
                    <li>• सही उत्तर पर +10 अंक</li>
                    <li>• गलत उत्तर पर एक जीवन कम</li>
                    <li>• 3 जीवन समाप्त होने पर खेल खत्म</li>
                  </ul>
                </div>

                <Button onClick={startGame} className="w-full h-12 text-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                  🎮 गेम शुरू करें
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
      <div className="min-h-screen bg-gradient-to-br from-green-500/10 via-background to-red-500/10 p-4 flex items-center justify-center">
        <Card className="w-full max-w-md border-none shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold mb-2">गेम समाप्त!</h2>
            <p className="text-4xl font-bold text-primary mb-2">{score} अंक</p>
            <p className="text-muted-foreground mb-6">
              {currentIndex}/{questions.length} प्रश्न | {lives} जीवन शेष
            </p>
            <div className="space-y-3">
              <Button onClick={startGame} className="w-full bg-gradient-to-r from-green-500 to-emerald-500">
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
    <div className="min-h-screen bg-gradient-to-br from-green-500/10 via-background to-red-500/10 p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <span key={i} className={cn("text-xl", i < lives ? "opacity-100" : "opacity-30")}>
                ❤️
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-bold">{score}</span>
            </div>
            <div className={cn(
              "flex items-center gap-1 px-3 py-1 rounded-full",
              timer <= 10 ? "bg-destructive/20 text-destructive" : "bg-muted"
            )}>
              <Clock className="w-4 h-4" />
              <span className="font-bold">{timer}s</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground">
            प्रश्न {currentIndex + 1} / {questions.length}
          </p>
        </div>

        {/* Question Card */}
        <Card className={cn(
          "border-none shadow-xl transition-all duration-300",
          showResult === 'correct' && "ring-4 ring-green-500",
          showResult === 'wrong' && "ring-4 ring-red-500"
        )}>
          <CardContent className="p-8">
            <p className="text-lg text-center font-medium mb-8">
              {currentQuestion?.statement}
            </p>

            {showResult && (
              <div className={cn(
                "text-center p-4 rounded-lg mb-4",
                showResult === 'correct' ? "bg-green-500/20" : "bg-red-500/20"
              )}>
                <p className={cn(
                  "font-bold",
                  showResult === 'correct' ? "text-green-600" : "text-red-600"
                )}>
                  {showResult === 'correct' ? "✓ सही!" : "✗ गलत!"}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {currentQuestion?.explanation}
                </p>
              </div>
            )}

            {!showResult && (
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => handleAnswer(true)}
                  disabled={answered}
                  className="h-16 text-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  <Check className="w-6 h-6 mr-2" />
                  सही
                </Button>
                <Button
                  onClick={() => handleAnswer(false)}
                  disabled={answered}
                  className="h-16 text-lg bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600"
                >
                  <X className="w-6 h-6 mr-2" />
                  गलत
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrueOrFalse;
