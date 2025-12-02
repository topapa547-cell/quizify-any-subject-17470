import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Trophy, Clock, Star, RefreshCw } from "lucide-react";
import { getRandomMatchingSet, MatchingPair } from "@/data/games/matchingPairs";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const MatchThePair = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [currentSet, setCurrentSet] = useState(getRandomMatchingSet());
  const [leftItems, setLeftItems] = useState<MatchingPair[]>([]);
  const [rightItems, setRightItems] = useState<MatchingPair[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        if (data) setProfile(data);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    if (currentSet) {
      const shuffledLeft = [...currentSet.pairs].sort(() => Math.random() - 0.5);
      const shuffledRight = [...currentSet.pairs].sort(() => Math.random() - 0.5);
      setLeftItems(shuffledLeft);
      setRightItems(shuffledRight);
    }
  }, [currentSet]);

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
    setTimer(60);
    setScore(0);
    setMatchedPairs([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setGameOver(false);
    const newSet = getRandomMatchingSet(undefined, profile?.class_level);
    setCurrentSet(newSet);
  };

  const handleLeftClick = (id: string) => {
    if (matchedPairs.includes(id)) return;
    setSelectedLeft(id);
    if (selectedRight) {
      checkMatch(id, selectedRight);
    }
  };

  const handleRightClick = (id: string) => {
    if (matchedPairs.includes(id)) return;
    setSelectedRight(id);
    if (selectedLeft) {
      checkMatch(selectedLeft, id);
    }
  };

  const checkMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      // Correct match
      setMatchedPairs(prev => [...prev, leftId]);
      setScore(prev => prev + 10);
      setSelectedLeft(null);
      setSelectedRight(null);
      
      if (matchedPairs.length + 1 === currentSet.pairs.length) {
        // All matched - bonus points and new set
        setScore(prev => prev + 20);
        toast({
          title: "🎉 बहुत बढ़िया!",
          description: "+20 बोनस अंक! नया सेट आ रहा है...",
        });
        setTimeout(() => {
          const newSet = getRandomMatchingSet(undefined, profile?.class_level);
          setCurrentSet(newSet);
          setMatchedPairs([]);
        }, 1000);
      }
    } else {
      // Wrong match
      setWrongPair({ left: leftId, right: rightId });
      setScore(prev => Math.max(0, prev - 5));
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 500);
    }
  };

  const endGame = async () => {
    setGameOver(true);
    // Save score to profile
    if (profile && score > 0) {
      const newPoints = (profile.league_points || 0) + Math.floor(score / 2);
      await supabase
        .from('profiles')
        .update({ league_points: newPoints })
        .eq('id', profile.id);
      
      toast({
        title: "🎮 गेम समाप्त!",
        description: `आपने ${score} अंक प्राप्त किए और ${Math.floor(score / 2)} पॉइंट्स कमाए!`,
      });
    }
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
        <div className="max-w-lg mx-auto">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            वापस जाएं
          </Button>

          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-white">
                <span className="text-6xl">🔗</span>
                <h1 className="text-2xl font-bold mt-4">सही जोड़ी मिलाओ</h1>
                <p className="text-primary-foreground/80 mt-2">Match the correct pairs</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                    <p className="text-sm text-muted-foreground">60 सेकंड</p>
                  </div>
                  <div>
                    <Star className="w-6 h-6 mx-auto text-yellow-500 mb-1" />
                    <p className="text-sm text-muted-foreground">+10 प्रति जोड़ी</p>
                  </div>
                  <div>
                    <Trophy className="w-6 h-6 mx-auto text-primary mb-1" />
                    <p className="text-sm text-muted-foreground">बोनस अंक</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">कैसे खेलें:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• बाएं और दाएं कॉलम से सही जोड़ी चुनें</li>
                    <li>• सही मिलान पर +10 अंक</li>
                    <li>• गलत मिलान पर -5 अंक</li>
                    <li>• सभी जोड़ियां मिलाने पर +20 बोनस</li>
                  </ul>
                </div>

                <Button onClick={startGame} className="w-full h-12 text-lg">
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
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4 flex items-center justify-center">
        <Card className="w-full max-w-md border-none shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold mb-2">गेम समाप्त!</h2>
            <p className="text-4xl font-bold text-primary mb-4">{score} अंक</p>
            <p className="text-muted-foreground mb-6">
              आपने {Math.floor(score / 2)} पॉइंट्स कमाए!
            </p>
            <div className="space-y-3">
              <Button onClick={startGame} className="w-full">
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
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

        {/* Topic */}
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground">{currentSet.topic}</span>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-2">
            {leftItems.map((item) => (
              <Card
                key={`left-${item.id}`}
                className={cn(
                  "cursor-pointer transition-all duration-200",
                  matchedPairs.includes(item.id) && "opacity-30 pointer-events-none bg-secondary/20",
                  selectedLeft === item.id && "ring-2 ring-primary scale-105",
                  wrongPair?.left === item.id && "ring-2 ring-destructive animate-shake"
                )}
                onClick={() => handleLeftClick(item.id)}
              >
                <CardContent className="p-3 text-center">
                  <span className="text-sm font-medium">{item.left}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {rightItems.map((item) => (
              <Card
                key={`right-${item.id}`}
                className={cn(
                  "cursor-pointer transition-all duration-200",
                  matchedPairs.includes(item.id) && "opacity-30 pointer-events-none bg-secondary/20",
                  selectedRight === item.id && "ring-2 ring-primary scale-105",
                  wrongPair?.right === item.id && "ring-2 ring-destructive animate-shake"
                )}
                onClick={() => handleRightClick(item.id)}
              >
                <CardContent className="p-3 text-center">
                  <span className="text-sm font-medium">{item.right}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {matchedPairs.length} / {currentSet.pairs.length} जोड़ियां मिलाई
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchThePair;
