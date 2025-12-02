import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Trophy, Clock, Star, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface MemoryCard {
  id: string;
  content: string;
  pairId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const memoryData = [
  { term: "H₂O", definition: "जल" },
  { term: "CO₂", definition: "कार्बन डाइऑक्साइड" },
  { term: "NaCl", definition: "नमक" },
  { term: "O₂", definition: "ऑक्सीजन" },
  { term: "sin 30°", definition: "1/2" },
  { term: "cos 60°", definition: "1/2" },
];

const MemoryCards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(90);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [canFlip, setCanFlip] = useState(true);

  useEffect(() => {
    initializeCards();
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

  const initializeCards = () => {
    const cardPairs: MemoryCard[] = [];
    memoryData.forEach((item, index) => {
      cardPairs.push({
        id: `term-${index}`,
        content: item.term,
        pairId: `pair-${index}`,
        isFlipped: false,
        isMatched: false,
      });
      cardPairs.push({
        id: `def-${index}`,
        content: item.definition,
        pairId: `pair-${index}`,
        isFlipped: false,
        isMatched: false,
      });
    });
    setCards(cardPairs.sort(() => Math.random() - 0.5));
  };

  const startGame = () => {
    setGameStarted(true);
    setTimer(90);
    setScore(0);
    setMoves(0);
    setMatchedPairs([]);
    setFlippedCards([]);
    setGameOver(false);
    initializeCards();
  };

  const handleCardClick = (cardId: string) => {
    if (!canFlip || flippedCards.length >= 2) return;
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isMatched || flippedCards.includes(cardId)) return;

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);
      setCanFlip(false);
      
      const [first, second] = newFlipped;
      const firstCard = cards.find(c => c.id === first);
      const secondCard = cards.find(c => c.id === second);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Match found
        setMatchedPairs(prev => [...prev, firstCard.pairId]);
        setScore(prev => prev + 15);
        setFlippedCards([]);
        setCanFlip(true);
        
        if (matchedPairs.length + 1 === memoryData.length) {
          setTimeout(() => endGame(), 500);
        }
      } else {
        // No match
        setTimeout(() => {
          setFlippedCards([]);
          setCanFlip(true);
        }, 1000);
      }
    }
  };

  const endGame = async () => {
    setGameOver(true);
    const bonus = timer > 0 ? Math.floor(timer / 2) : 0;
    const finalScore = score + bonus;
    
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('league_points')
        .eq('id', session.user.id)
        .single();
      
      if (profile) {
        const newPoints = (profile.league_points || 0) + Math.floor(finalScore / 3);
        await supabase
          .from('profiles')
          .update({ league_points: newPoints })
          .eq('id', session.user.id);
      }
    }

    toast({
      title: matchedPairs.length === memoryData.length ? "🎉 शानदार!" : "🎮 गेम समाप्त!",
      description: `स्कोर: ${finalScore} | +${Math.floor(finalScore / 3)} पॉइंट्स`,
    });
  };

  const isCardFlipped = (cardId: string) => {
    const card = cards.find(c => c.id === cardId);
    return flippedCards.includes(cardId) || (card && matchedPairs.includes(card.pairId));
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10 p-4">
        <div className="max-w-lg mx-auto">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            वापस जाएं
          </Button>

          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-center text-white">
                <span className="text-6xl">🧠</span>
                <h1 className="text-2xl font-bold mt-4">Memory Cards</h1>
                <p className="text-white/80 mt-2">याद करो और मिलाओ</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Clock className="w-6 h-6 mx-auto text-muted-foreground mb-1" />
                    <p className="text-sm text-muted-foreground">90 सेकंड</p>
                  </div>
                  <div>
                    <Star className="w-6 h-6 mx-auto text-yellow-500 mb-1" />
                    <p className="text-sm text-muted-foreground">+15 प्रति जोड़ी</p>
                  </div>
                  <div>
                    <Trophy className="w-6 h-6 mx-auto text-primary mb-1" />
                    <p className="text-sm text-muted-foreground">समय बोनस</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">कैसे खेलें:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• कार्ड पर टैप करके उसे पलटें</li>
                    <li>• शब्द और उसका अर्थ मिलाएं</li>
                    <li>• कम चालों में खेलने की कोशिश करें</li>
                    <li>• जल्दी खत्म करने पर बोनस अंक</li>
                  </ul>
                </div>

                <Button onClick={startGame} className="w-full h-12 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
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
      <div className="min-h-screen bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10 p-4 flex items-center justify-center">
        <Card className="w-full max-w-md border-none shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold mb-2">
              {matchedPairs.length === memoryData.length ? "शानदार!" : "गेम समाप्त!"}
            </h2>
            <p className="text-4xl font-bold text-primary mb-2">{score + Math.floor(timer / 2)} अंक</p>
            <p className="text-muted-foreground mb-6">
              {moves} चालें | {matchedPairs.length}/{memoryData.length} जोड़ियां
            </p>
            <div className="space-y-3">
              <Button onClick={startGame} className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
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
    <div className="min-h-screen bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10 p-4">
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
              timer <= 15 ? "bg-destructive/20 text-destructive" : "bg-muted"
            )}>
              <Clock className="w-4 h-4" />
              <span className="font-bold">{timer}s</span>
            </div>
          </div>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-2">
          {cards.map((card) => (
            <Card
              key={card.id}
              className={cn(
                "aspect-square cursor-pointer transition-all duration-300 transform",
                isCardFlipped(card.id) ? "rotate-y-180" : "",
                matchedPairs.includes(card.pairId) && "opacity-50 pointer-events-none"
              )}
              onClick={() => handleCardClick(card.id)}
            >
              <CardContent className={cn(
                "h-full flex items-center justify-center p-2",
                isCardFlipped(card.id) 
                  ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white" 
                  : "bg-gradient-to-br from-muted to-muted/80"
              )}>
                {isCardFlipped(card.id) ? (
                  <span className="text-xs font-medium text-center">{card.content}</span>
                ) : (
                  <span className="text-2xl">❓</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            चालें: {moves} | जोड़ियां: {matchedPairs.length}/{memoryData.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemoryCards;
