import { UnoCard as UnoCardType, UnoColor } from "@/types/unoTypes";
import { cn } from "@/lib/utils";

interface UnoCardProps {
  card: UnoCardType;
  onClick?: () => void;
  disabled?: boolean;
  isPlayable?: boolean;
  size?: 'sm' | 'md' | 'lg';
  faceDown?: boolean;
}

const colorClasses: Record<UnoColor | 'wild', string> = {
  red: 'from-red-500 to-red-600 border-red-700',
  blue: 'from-blue-500 to-blue-600 border-blue-700',
  green: 'from-green-500 to-green-600 border-green-700',
  yellow: 'from-yellow-400 to-yellow-500 border-yellow-600',
  wild: 'from-purple-500 via-pink-500 to-orange-500 border-purple-700',
};

const sizeClasses = {
  sm: 'w-12 h-18 text-lg',
  md: 'w-16 h-24 text-xl',
  lg: 'w-20 h-30 text-2xl',
};

export const UnoCard = ({ 
  card, 
  onClick, 
  disabled = false, 
  isPlayable = true,
  size = 'md',
  faceDown = false 
}: UnoCardProps) => {
  if (faceDown) {
    return (
      <div 
        className={cn(
          sizeClasses[size],
          "rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600",
          "flex items-center justify-center shadow-lg",
          "select-none"
        )}
      >
        <div className="text-white font-bold opacity-50">
          <span className="text-3xl">🎴</span>
        </div>
      </div>
    );
  }

  const getCardContent = () => {
    switch (card.type) {
      case 'number':
        return (
          <span className="font-bold drop-shadow-lg">{card.value}</span>
        );
      case 'skip':
        return (
          <div className="flex flex-col items-center">
            <span className="text-2xl">⊘</span>
            <span className="text-[8px] font-medium mt-0.5">SKIP</span>
          </div>
        );
      case 'reverse':
        return (
          <div className="flex flex-col items-center">
            <span className="text-2xl">↻</span>
            <span className="text-[8px] font-medium mt-0.5">REVERSE</span>
          </div>
        );
      case 'draw2':
        return (
          <div className="flex flex-col items-center">
            <span className="font-bold">+2</span>
            <span className="text-[8px] font-medium">DRAW</span>
          </div>
        );
      case 'draw4':
        return (
          <div className="flex flex-col items-center">
            <span className="font-bold">+4</span>
            <span className="text-[8px] font-medium">WILD</span>
          </div>
        );
      case 'draw6':
        return (
          <div className="flex flex-col items-center">
            <span className="font-bold text-orange-200">+6</span>
            <span className="text-[8px] font-medium text-orange-200">MERCY</span>
          </div>
        );
      case 'draw10':
        return (
          <div className="flex flex-col items-center">
            <span className="font-bold text-red-200">+10</span>
            <span className="text-[8px] font-medium text-red-200">MEGA</span>
          </div>
        );
      case 'wild':
        return (
          <div className="flex flex-col items-center">
            <span className="text-2xl">🌈</span>
            <span className="text-[8px] font-medium">WILD</span>
          </div>
        );
      case 'wild_roulette':
        return (
          <div className="flex flex-col items-center">
            <span className="text-2xl animate-spin-slow">🎰</span>
            <span className="text-[8px] font-medium">ROULETTE</span>
          </div>
        );
      default:
        return null;
    }
  };

  const isMercyCard = card.type === 'draw6' || card.type === 'draw10' || card.type === 'wild_roulette';

  return (
    <button
      onClick={onClick}
      disabled={disabled || !isPlayable}
      className={cn(
        sizeClasses[size],
        "rounded-xl bg-gradient-to-br border-2 shadow-lg",
        "flex items-center justify-center",
        "transition-all duration-200 transform",
        "text-white font-bold select-none",
        colorClasses[card.color],
        isPlayable && !disabled && "hover:scale-110 hover:-translate-y-2 hover:shadow-xl cursor-pointer",
        !isPlayable && "opacity-50 cursor-not-allowed",
        disabled && "cursor-not-allowed",
        isMercyCard && "ring-2 ring-yellow-300 ring-opacity-50 animate-pulse"
      )}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Oval background */}
        <div className="absolute inset-2 bg-white/20 rounded-full transform rotate-12" />
        
        {/* Card content */}
        <div className="relative z-10">
          {getCardContent()}
        </div>

        {/* Corner values for number cards */}
        {card.type === 'number' && (
          <>
            <span className="absolute top-1 left-1.5 text-xs font-bold opacity-80">
              {card.value}
            </span>
            <span className="absolute bottom-1 right-1.5 text-xs font-bold opacity-80 rotate-180">
              {card.value}
            </span>
          </>
        )}

        {/* Mercy badge for special cards */}
        {isMercyCard && (
          <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-[6px] font-bold px-1 rounded-full">
            MERCY
          </div>
        )}
      </div>
    </button>
  );
};

export default UnoCard;
