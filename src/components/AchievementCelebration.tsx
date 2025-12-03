import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Achievement } from "@/utils/achievements";
import { cn } from "@/lib/utils";

interface AchievementCelebrationProps {
  achievements: Achievement[];
  onClose: () => void;
}

// Confetti particle component
const ConfettiParticle = ({ delay, color }: { delay: number; color: string }) => {
  const randomX = Math.random() * 100;
  const randomRotation = Math.random() * 360;
  const randomDuration = 2 + Math.random() * 2;
  
  return (
    <div
      className="absolute w-3 h-3 opacity-0"
      style={{
        left: `${randomX}%`,
        top: '-10px',
        backgroundColor: color,
        borderRadius: Math.random() > 0.5 ? '50%' : '0',
        animation: `confetti-fall ${randomDuration}s ease-out ${delay}s forwards`,
        transform: `rotate(${randomRotation}deg)`,
      }}
    />
  );
};

// Confetti colors
const confettiColors = [
  '#FFD700', // Gold
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Blue
  '#96CEB4', // Green
  '#FFEAA7', // Yellow
  '#DDA0DD', // Plum
  '#98D8C8', // Mint
  '#F7DC6F', // Light Gold
  '#BB8FCE', // Purple
];

const AchievementCelebration = ({ achievements, onClose }: AchievementCelebrationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [confettiParticles, setConfettiParticles] = useState<number[]>([]);

  useEffect(() => {
    // Generate confetti particles
    setConfettiParticles(Array.from({ length: 50 }, (_, i) => i));
  }, [currentIndex]);

  const currentAchievement = achievements[currentIndex];

  const handleNext = () => {
    if (currentIndex < achievements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsOpen(false);
      onClose();
    }
  };

  if (!currentAchievement) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        setIsOpen(false);
        onClose();
      }
    }}>
      <DialogContent className="sm:max-w-md border-none bg-transparent shadow-none overflow-visible">
        {/* Confetti container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {confettiParticles.map((i) => (
            <ConfettiParticle
              key={`${currentIndex}-${i}`}
              delay={Math.random() * 0.5}
              color={confettiColors[i % confettiColors.length]}
            />
          ))}
        </div>

        {/* Achievement card */}
        <div className="relative bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-3xl p-1 animate-scale-in">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/90 dark:to-yellow-900/90 rounded-3xl p-6 text-center">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-yellow-400/20 blur-xl -z-10" />
            
            {/* Trophy animation */}
            <div className="relative mb-4">
              <div className="text-7xl animate-bounce drop-shadow-lg">
                {currentAchievement.icon}
              </div>
              {/* Sparkles */}
              <div className="absolute -top-2 -left-2 text-2xl animate-pulse">✨</div>
              <div className="absolute -top-1 -right-3 text-xl animate-pulse" style={{ animationDelay: '0.3s' }}>⭐</div>
              <div className="absolute -bottom-1 left-0 text-lg animate-pulse" style={{ animationDelay: '0.6s' }}>✨</div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-2">
              🎉 नई उपलब्धि! 🎉
            </h2>

            {/* Achievement name */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-2xl mb-3 shadow-lg">
              <h3 className="text-xl font-bold">{currentAchievement.name}</h3>
            </div>

            {/* Description */}
            <p className="text-amber-700 dark:text-amber-300 mb-4 text-sm">
              {currentAchievement.description}
            </p>

            {/* Stars decoration */}
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span 
                  key={star} 
                  className="text-yellow-500 text-2xl drop-shadow animate-pulse"
                  style={{ animationDelay: `${star * 0.1}s` }}
                >
                  ⭐
                </span>
              ))}
            </div>

            {/* Action button */}
            <button
              onClick={handleNext}
              className={cn(
                "w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300",
                "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
                "hover:from-green-600 hover:to-emerald-700 hover:scale-105",
                "shadow-lg hover:shadow-xl active:scale-95"
              )}
            >
              {currentIndex < achievements.length - 1 ? (
                <>अगली उपलब्धि देखें ({currentIndex + 1}/{achievements.length}) →</>
              ) : (
                <>🎮 जारी रखें</>
              )}
            </button>

            {/* Achievement counter */}
            {achievements.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {achievements.map((_, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      idx === currentIndex 
                        ? "bg-amber-500 w-6" 
                        : idx < currentIndex 
                          ? "bg-green-500" 
                          : "bg-amber-300"
                    )}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>

      {/* CSS for confetti animation */}
      <style>{`
        @keyframes confetti-fall {
          0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(400px) rotate(720deg);
          }
        }
      `}</style>
    </Dialog>
  );
};

export default AchievementCelebration;
