import { UnoCard as UnoCardType, UnoColor } from "@/types/unoTypes";
import { cn } from "@/lib/utils";

interface UnoCardProps {
  card: UnoCardType;
  onClick?: () => void;
  disabled?: boolean;
  isPlayable?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  faceDown?: boolean;
  className?: string;
  animate?: 'deal' | 'play' | 'draw' | 'none';
  glowing?: boolean;
}

// Premium Quizknow card colors - matching the reference image
const colorClasses: Record<UnoColor | 'wild', { bg: string; oval: string; border: string }> = {
  red: { 
    bg: 'bg-gradient-to-b from-red-600 to-red-700', 
    oval: 'bg-gradient-to-b from-red-500 to-red-600',
    border: 'border-red-800'
  },
  blue: { 
    bg: 'bg-gradient-to-b from-blue-600 to-blue-700', 
    oval: 'bg-gradient-to-b from-blue-500 to-blue-600',
    border: 'border-blue-800'
  },
  green: { 
    bg: 'bg-gradient-to-b from-green-600 to-green-700', 
    oval: 'bg-gradient-to-b from-green-500 to-green-600',
    border: 'border-green-800'
  },
  yellow: { 
    bg: 'bg-gradient-to-b from-yellow-400 to-yellow-500', 
    oval: 'bg-gradient-to-b from-yellow-300 to-yellow-400',
    border: 'border-yellow-600'
  },
  wild: { 
    bg: 'bg-gradient-to-b from-slate-800 to-slate-900', 
    oval: 'bg-gradient-to-br from-red-500 via-yellow-400 via-green-500 to-blue-500',
    border: 'border-slate-700'
  },
};

const sizeClasses = {
  sm: { card: 'w-10 h-14', text: 'text-sm', corner: 'text-[6px]', brand: 'text-[5px]', oval: 'h-6' },
  md: { card: 'w-14 h-20', text: 'text-lg', corner: 'text-[8px]', brand: 'text-[6px]', oval: 'h-8' },
  lg: { card: 'w-20 h-28', text: 'text-2xl', corner: 'text-xs', brand: 'text-[8px]', oval: 'h-12' },
  xl: { card: 'w-28 h-40', text: 'text-4xl', corner: 'text-sm', brand: 'text-[10px]', oval: 'h-16' },
};

const animationClasses = {
  deal: 'animate-[dealCard_0.4s_ease-out_forwards]',
  play: 'animate-[playCard_0.3s_ease-out_forwards]',
  draw: 'animate-[drawCard_0.3s_ease-out_forwards]',
  none: '',
};

export const UnoCard = ({ 
  card, 
  onClick, 
  disabled = false, 
  isPlayable = true,
  size = 'md',
  faceDown = false,
  className,
  animate = 'none',
  glowing = false,
}: UnoCardProps) => {
  const sizeConfig = sizeClasses[size];

  // Card back with Quizknow branding
  if (faceDown) {
    return (
      <div 
        className={cn(
          sizeConfig.card,
          "rounded-xl border-2 border-slate-600 shadow-lg",
          "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800",
          "flex flex-col items-center justify-center relative overflow-hidden",
          "select-none",
          glowing && "ring-4 ring-yellow-400 ring-opacity-75 animate-pulse shadow-[0_0_20px_rgba(250,204,21,0.5)]",
          animationClasses[animate],
          className
        )}
      >
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-2 border-2 border-white rounded-lg" />
          <div className="absolute inset-4 border border-white/50 rounded" />
        </div>
        
        {/* Quizknow branding */}
        <div className="relative z-10 flex flex-col items-center">
          <span className={cn(
            "font-black text-white tracking-tight",
            size === 'sm' ? 'text-[6px]' : size === 'md' ? 'text-[8px]' : size === 'lg' ? 'text-xs' : 'text-sm'
          )}>
            Quizknow
          </span>
          <span className={cn(
            "text-yellow-400 font-bold",
            size === 'sm' ? 'text-[4px]' : size === 'md' ? 'text-[5px]' : size === 'lg' ? 'text-[7px]' : 'text-[9px]'
          )}>
            MERCY
          </span>
        </div>
        
        {/* Corner decorations */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-yellow-400/50 rounded-tl" />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-yellow-400/50 rounded-tr" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-yellow-400/50 rounded-bl" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-yellow-400/50 rounded-br" />
      </div>
    );
  }

  const colorConfig = colorClasses[card.color];

  const getCardContent = () => {
    switch (card.type) {
      case 'number':
        return (
          <span className={cn("font-black drop-shadow-lg text-white", sizeConfig.text)}>
            {card.value}
          </span>
        );
      case 'skip':
        return (
          <div className="flex flex-col items-center text-white">
            <span className={cn("font-bold", size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-3xl')}>⊘</span>
            <span className={cn(sizeConfig.corner, "font-bold mt-0.5")}>SKIP</span>
          </div>
        );
      case 'reverse':
        return (
          <div className="flex flex-col items-center text-white">
            <span className={cn(size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-3xl')}>↻</span>
            <span className={cn(sizeConfig.corner, "font-bold mt-0.5")}>REVERSE</span>
          </div>
        );
      case 'draw2':
        return (
          <div className="flex flex-col items-center text-white">
            <span className={cn("font-black", sizeConfig.text)}>+2</span>
            <span className={cn(sizeConfig.corner, "font-bold")}>DRAW</span>
          </div>
        );
      case 'draw4':
        return (
          <div className="flex flex-col items-center text-white">
            <span className={cn("font-black", sizeConfig.text)}>+4</span>
            <span className={cn(sizeConfig.corner, "font-bold")}>WILD</span>
          </div>
        );
      case 'draw6':
        return (
          <div className="flex flex-col items-center">
            <span className={cn("font-black text-orange-200", sizeConfig.text)}>+6</span>
            <span className={cn(sizeConfig.corner, "font-bold text-orange-200")}>MERCY</span>
          </div>
        );
      case 'draw10':
        return (
          <div className="flex flex-col items-center">
            <span className={cn("font-black text-red-200", sizeConfig.text)}>+10</span>
            <span className={cn(sizeConfig.corner, "font-bold text-red-200")}>MEGA</span>
          </div>
        );
      case 'wild':
        return (
          <div className="flex flex-col items-center text-white">
            <span className={cn(size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-3xl')}>🌈</span>
            <span className={cn(sizeConfig.corner, "font-bold")}>WILD</span>
          </div>
        );
      case 'wild_roulette':
        return (
          <div className="flex flex-col items-center text-white">
            <span className={cn(size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-3xl', "animate-spin-slow")}>🎰</span>
            <span className={cn(sizeConfig.corner, "font-bold")}>ROULETTE</span>
          </div>
        );
      default:
        return null;
    }
  };

  const isMercyCard = card.type === 'draw6' || card.type === 'draw10' || card.type === 'wild_roulette';
  const isWildCard = card.color === 'wild';

  return (
    <button
      onClick={onClick}
      disabled={disabled || !isPlayable}
      className={cn(
        sizeConfig.card,
        "rounded-xl border-2 shadow-lg",
        "flex flex-col items-center justify-between relative overflow-hidden",
        "transition-all duration-200 transform",
        "select-none",
        colorConfig.bg,
        colorConfig.border,
        isPlayable && !disabled && "hover:scale-110 hover:-translate-y-3 hover:shadow-2xl cursor-pointer",
        !isPlayable && !glowing && "opacity-60 cursor-not-allowed",
        disabled && "cursor-not-allowed",
        glowing && "ring-4 ring-yellow-400 ring-opacity-90 animate-pulse shadow-[0_0_25px_rgba(250,204,21,0.6)]",
        isMercyCard && !glowing && "ring-2 ring-yellow-300 ring-opacity-50",
        animationClasses[animate],
        className
      )}
    >
      {/* Top left branding */}
      <div className="absolute top-1 left-1 z-20">
        <span className={cn(
          "font-black text-white drop-shadow-md italic",
          sizeConfig.brand
        )}>
          Quizknow
        </span>
      </div>

      {/* Top right corner value */}
      {card.type === 'number' && (
        <span className={cn(
          "absolute top-1 right-1.5 font-black text-white drop-shadow z-20",
          sizeConfig.corner
        )}>
          {card.value}
        </span>
      )}

      {/* Central oval with card content */}
      <div className="flex-1 flex items-center justify-center w-full p-1">
        <div className={cn(
          "w-full rounded-full flex items-center justify-center transform -rotate-12",
          sizeConfig.oval,
          isWildCard ? 'bg-gradient-to-br from-red-500 via-yellow-400 via-green-500 to-blue-500' : colorConfig.oval
        )}>
          {getCardContent()}
        </div>
      </div>

      {/* Bottom left corner value (rotated) */}
      {card.type === 'number' && (
        <span className={cn(
          "absolute bottom-1 left-1.5 font-black text-white drop-shadow rotate-180 z-20",
          sizeConfig.corner
        )}>
          {card.value}
        </span>
      )}

      {/* Bottom right branding (rotated) */}
      <div className="absolute bottom-1 right-1 z-20 rotate-180">
        <span className={cn(
          "font-black text-white drop-shadow-md italic",
          sizeConfig.brand
        )}>
          Quizknow
        </span>
      </div>

      {/* Mercy badge for special cards */}
      {isMercyCard && (
        <div className={cn(
          "absolute -top-0.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 font-bold px-1.5 rounded-full z-30",
          size === 'sm' ? 'text-[5px]' : size === 'md' ? 'text-[6px]' : 'text-[8px]'
        )}>
          MERCY
        </div>
      )}

      {/* White border inner glow effect */}
      <div className="absolute inset-0.5 rounded-lg border border-white/20 pointer-events-none" />
    </button>
  );
};

export default UnoCard;
