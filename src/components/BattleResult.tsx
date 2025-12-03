import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import UserAvatar from "./UserAvatar";
import { Trophy, Home, RotateCcw, Star, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BattleResultProps {
  hostUsername: string;
  hostId: string;
  hostScore: number;
  opponentUsername: string;
  opponentId: string;
  opponentScore: number;
  isHost: boolean;
  pointsEarned: number;
  onPlayAgain?: () => void;
}

export const BattleResult = ({
  hostUsername,
  hostId,
  hostScore,
  opponentUsername,
  opponentId,
  opponentScore,
  isHost,
  pointsEarned,
  onPlayAgain,
}: BattleResultProps) => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  const myScore = isHost ? hostScore : opponentScore;
  const theirScore = isHost ? opponentScore : hostScore;
  const myUsername = isHost ? hostUsername : opponentUsername;
  const myId = isHost ? hostId : opponentId;
  const theirUsername = isHost ? opponentUsername : hostUsername;
  const theirId = isHost ? opponentId : hostId;

  const isWinner = myScore > theirScore;
  const isDraw = myScore === theirScore;

  useEffect(() => {
    if (isWinner) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isWinner]);

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Confetti for winner */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                backgroundColor: ["#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"][Math.floor(Math.random() * 5)],
                borderRadius: Math.random() > 0.5 ? "50%" : "0",
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `fall ${2 + Math.random() * 3}s linear forwards`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <Card className="w-full max-w-md p-6 bg-card border-border">
        {/* Result Header */}
        <div className="text-center mb-6">
          {isWinner ? (
            <>
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-scale-in">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                🎉 विजय! 🎉
              </h2>
              <p className="text-muted-foreground">You Won the Battle!</p>
            </>
          ) : isDraw ? (
            <>
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-scale-in">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                🤝 बराबरी! 🤝
              </h2>
              <p className="text-muted-foreground">It's a Draw!</p>
            </>
          ) : (
            <>
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center animate-scale-in">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-black text-muted-foreground">
                अच्छा प्रयास!
              </h2>
              <p className="text-muted-foreground">Better Luck Next Time!</p>
            </>
          )}
        </div>

        {/* Score Comparison */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {/* Your Score */}
          <div className="text-center">
            <div className={`relative ${isWinner ? "ring-4 ring-yellow-400 ring-offset-2 ring-offset-background" : ""} rounded-full`}>
              <UserAvatar userId={myId} size="md" />
            </div>
            <p className="font-semibold mt-2 text-foreground">{myUsername}</p>
            <p className="text-3xl font-black text-primary">{myScore}</p>
          </div>

          {/* VS */}
          <div className="text-2xl font-bold text-muted-foreground">VS</div>

          {/* Opponent Score */}
          <div className="text-center">
            <div className={`relative ${!isWinner && !isDraw ? "ring-4 ring-yellow-400 ring-offset-2 ring-offset-background" : ""} rounded-full`}>
              <UserAvatar userId={theirId} size="md" />
            </div>
            <p className="font-semibold mt-2 text-foreground">{theirUsername}</p>
            <p className="text-3xl font-black text-destructive">{theirScore}</p>
          </div>
        </div>

        {/* Points Earned */}
        <div className="bg-muted/50 rounded-lg p-4 mb-6 text-center">
          <p className="text-sm text-muted-foreground">Points Earned</p>
          <p className="text-2xl font-bold text-primary">+{pointsEarned}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4 mr-2" />
            होम
          </Button>
          <Button
            className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
            onClick={onPlayAgain || (() => navigate("/multiplayer"))}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            फिर से खेलें
          </Button>
        </div>
      </Card>

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BattleResult;
