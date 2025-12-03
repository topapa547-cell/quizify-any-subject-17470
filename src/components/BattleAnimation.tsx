import { useEffect, useState } from "react";
import UserAvatar from "./UserAvatar";

interface BattleAnimationProps {
  hostUsername: string;
  hostId: string;
  opponentUsername: string;
  opponentId: string;
  onComplete: () => void;
}

export const BattleAnimation = ({
  hostUsername,
  hostId,
  opponentUsername,
  opponentId,
  onComplete,
}: BattleAnimationProps) => {
  const [countdown, setCountdown] = useState<number | string>("VS");
  const [showVS, setShowVS] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Show VS for 1.5 seconds
      await new Promise((r) => setTimeout(r, 1500));
      setShowVS(false);
      
      // Countdown 3-2-1-GO
      for (const num of [3, 2, 1, "GO!"]) {
        setCountdown(num);
        await new Promise((r) => setTimeout(r, 800));
      }
      
      // Complete animation
      await new Promise((r) => setTimeout(r, 500));
      onComplete();
    };
    
    sequence();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-center gap-8 md:gap-16">
        {/* Host Player */}
        <div className="flex flex-col items-center animate-slide-in-right" style={{ animationDirection: "reverse" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse" />
            <UserAvatar userId={hostId} size="lg" />
          </div>
          <span className="mt-3 font-bold text-lg text-foreground">{hostUsername}</span>
          <span className="text-xs text-blue-500 font-semibold">HOST</span>
        </div>

        {/* VS / Countdown */}
        <div className="relative">
          {showVS ? (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 blur-2xl opacity-50 animate-pulse" />
              <div className="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent animate-scale-in">
                ⚔️
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-2xl font-black text-foreground">
                VS
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-3xl animate-pulse" />
              <div 
                className="relative text-7xl md:text-9xl font-black bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent animate-scale-in"
                key={countdown}
              >
                {countdown}
              </div>
            </div>
          )}
        </div>

        {/* Opponent Player */}
        <div className="flex flex-col items-center animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/30 rounded-full blur-xl animate-pulse" />
            <UserAvatar userId={opponentId} size="lg" />
          </div>
          <span className="mt-3 font-bold text-lg text-foreground">{opponentUsername}</span>
          <span className="text-xs text-red-500 font-semibold">CHALLENGER</span>
        </div>
      </div>

      {/* Sword clash effects */}
      {showVS && (
        <>
          <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce">⚡</div>
          <div className="absolute bottom-1/4 right-1/4 text-4xl animate-bounce" style={{ animationDelay: "0.5s" }}>⚡</div>
          <div className="absolute top-1/3 right-1/3 text-3xl animate-ping">✨</div>
          <div className="absolute bottom-1/3 left-1/3 text-3xl animate-ping" style={{ animationDelay: "0.3s" }}>✨</div>
        </>
      )}
    </div>
  );
};

export default BattleAnimation;