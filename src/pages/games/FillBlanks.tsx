import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Home, RotateCcw, Check, X, Timer } from "lucide-react";
import { fillBlanksData, FillBlankQuestion } from "@/data/games/fillBlanksData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const FillBlanks = () => {
  const navigate = useNavigate();
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<FillBlankQuestion[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [totalCorrect, setTotalCorrect] = useState(0);

  useEffect(() => {
    if (gameStarted && !gameOver && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted, gameOver, timeLeft]);

  const startGame = () => {
    const shuffled = [...fillBlanksData].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setTotalCorrect(0);
    setTimeLeft(60);
    setGameStarted(true);
    setGameOver(false);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === questions[currentIndex].answer;
    
    if (isCorrect) {
      setScore(prev => prev + 10);
      setTotalCorrect(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        endGame();
      }
    }, 1000);
  };

  const endGame = async () => {
    setGameOver(true);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user && score > 0) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('league_points')
          .eq('id', session.user.id)
          .single();

        if (profile) {
          await supabase
            .from('profiles')
            .update({ league_points: (profile.league_points || 0) + score })
            .eq('id', session.user.id);
          
          toast.success(`+${score} points earned!`);
        }
      }
    } catch (error) {
      console.error('Error updating points:', error);
    }
  };

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  // Render sentence with blank highlighted
  const renderSentence = (sentence: string) => {
    const parts = sentence.split('_______');
    return (
      <span>
        {parts[0]}
        <span className="inline-block min-w-[80px] border-b-2 border-primary mx-1 text-primary font-bold">
          {showResult ? currentQuestion.answer : '______'}
        </span>
        {parts[1]}
      </span>
    );
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-600 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="text-white">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-white">खाली भरो</h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <Card className="p-8 text-center max-w-md w-full bg-white/95">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-4">Fill the Blanks</h2>
            <p className="text-muted-foreground mb-6">
              वाक्यों में खाली स्थान भरें और अपना ज्ञान परखें!
            </p>
            <div className="space-y-3 text-left mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Timer className="h-4 w-4 text-cyan-600" />
                </div>
                <span>60 सेकंड का समय</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>10 प्रश्न</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-600 font-bold text-sm">+10</span>
                </div>
                <span>प्रति सही उत्तर 10 अंक</span>
              </div>
            </div>
            <Button onClick={startGame} size="lg" className="w-full bg-cyan-500 hover:bg-cyan-600">
              खेल शुरू करें 🚀
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-600 p-4 flex flex-col items-center justify-center">
        <Card className="p-8 text-center max-w-md w-full bg-white/95">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-2">खेल समाप्त!</h2>
          <div className="text-4xl font-bold text-cyan-600 mb-4">{score} अंक</div>
          <p className="text-muted-foreground mb-6">
            {totalCorrect}/{questions.length} सही उत्तर
          </p>
          <div className="flex gap-3">
            <Button onClick={startGame} className="flex-1 bg-cyan-500 hover:bg-cyan-600">
              <RotateCcw className="h-4 w-4 mr-2" />
              फिर से खेलें
            </Button>
            <Button variant="outline" onClick={() => navigate('/')} className="flex-1">
              <Home className="h-4 w-4 mr-2" />
              होम
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-blue-600 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="text-white">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
          <Timer className="h-4 w-4 text-white" />
          <span className="text-white font-bold">{timeLeft}s</span>
        </div>
        <div className="bg-white/20 rounded-full px-4 py-2">
          <span className="text-white font-bold">{score} pts</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-white text-sm mb-2">
          <span>प्रश्न {currentIndex + 1}/{questions.length}</span>
          <span>{totalCorrect} सही</span>
        </div>
        <Progress value={progress} className="h-3 bg-white/30" />
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <Card className="p-6 bg-white/95">
          <div className="text-center mb-6">
            <p className="text-lg leading-relaxed">
              {renderSentence(currentQuestion.sentence)}
            </p>
            {currentQuestion.sentence_english && (
              <p className="text-sm text-muted-foreground mt-2 italic">
                {currentQuestion.sentence_english}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = option === currentQuestion.answer;
              const isSelected = selectedAnswer === option;
              
              let buttonStyle = "border-2 border-border hover:border-cyan-400 hover:bg-cyan-50";
              
              if (showResult) {
                if (isCorrect) {
                  buttonStyle = "border-2 border-green-500 bg-green-100";
                } else if (isSelected && !isCorrect) {
                  buttonStyle = "border-2 border-red-500 bg-red-100";
                }
              }
              
              return (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-auto py-4 px-3 text-sm ${buttonStyle}`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                >
                  <span className="flex items-center gap-2">
                    {showResult && isCorrect && <Check className="h-4 w-4 text-green-600" />}
                    {showResult && isSelected && !isCorrect && <X className="h-4 w-4 text-red-600" />}
                    {option}
                  </span>
                </Button>
              );
            })}
          </div>

          {/* Chapter info */}
          {currentQuestion.chapter && (
            <div className="mt-4 text-center">
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {currentQuestion.chapter}
              </span>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default FillBlanks;
