import React from "react";
import { UnoCard as UnoCardType } from "@/data/games/unoTypes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface UnoCardProps {
  card?: UnoCardType;
  hidden?: boolean;
  onClick?: () => void;
  className?: string;
  playable?: boolean;
  animate?: boolean;
  index?: number;
}

const UnoCard: React.FC<UnoCardProps> = ({
  card,
  hidden = false,
  onClick,
  className,
  playable = false,
  animate = false,
  index = 0
}) => {
  const getColorClass = (color?: string) => {
    switch (color) {
      case 'red': return "bg-red-500 from-red-500 to-red-600 border-red-700";
      case 'blue': return "bg-blue-500 from-blue-500 to-blue-600 border-blue-700";
      case 'green': return "bg-green-500 from-green-500 to-green-600 border-green-700";
      case 'yellow': return "bg-yellow-400 from-yellow-400 to-yellow-500 border-yellow-600 text-black";
      case 'wild': return "bg-slate-900 from-slate-800 to-black border-slate-700 text-white"; // Wild
      default: return "bg-gray-800";
    }
  };

  const getActionSymbol = (action: string) => {
    switch (action) {
      case 'skip': return "🚫";
      case 'reverse': return "🔁";
      case 'draw2': return "+2";
      case 'draw4': return "+4";
      case 'draw6': return "+6";
      case 'draw10': return "+10";
      case 'discard_all': return "🚮";
      case 'skip_everyone': return "⏭️";
      case 'wild': return "🌈";
      case 'wild_roulette': return "🎰";
      default: return "";
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: i * 2 - 5, // Fanning effect
      transition: { delay: i * 0.05 }
    }),
    hover: {
      y: -20,
      zIndex: 10,
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  if (hidden) {
    return (
      <div
        className={cn(
          "w-20 h-32 rounded-xl bg-gradient-to-br from-indigo-900 to-purple-900 border-2 border-white/20 shadow-xl flex items-center justify-center relative overflow-hidden",
          className
        )}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="transform -rotate-45 font-bold text-white/50 text-xl tracking-wider">
          QUIZKNOW
        </div>
      </div>
    );
  }

  if (!card) return null;

  return (
    <motion.div
      layout
      custom={index}
      initial={animate ? "hidden" : false}
      animate={animate ? "visible" : false}
      whileHover={playable ? "hover" : undefined}
      whileTap={playable ? "tap" : undefined}
      variants={variants}
      onClick={playable ? onClick : undefined}
      className={cn(
        "w-20 h-32 rounded-xl border-4 shadow-xl flex flex-col items-center justify-between p-2 relative select-none bg-gradient-to-br",
        getColorClass(card.color),
        playable ? "cursor-pointer ring-2 ring-white/50" : "",
        className
      )}
    >
      {/* Top Left Corner */}
      <span className="self-start text-sm font-bold leading-none">
        {card.number !== undefined ? card.number : getActionSymbol(card.action)}
      </span>

      {/* Center Big Symbol */}
      <div className="text-3xl font-black drop-shadow-md">
        {card.number !== undefined ? card.number : getActionSymbol(card.action)}
      </div>

      {/* Bottom Right Corner (Rotated) */}
      <span className="self-end text-sm font-bold leading-none rotate-180">
        {card.number !== undefined ? card.number : getActionSymbol(card.action)}
      </span>

      {/* Wild Gradient Overlay for Wild Cards */}
      {card.color === 'wild' && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      )}

      {/* Branding watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <span className="text-[10px] transform -rotate-45 font-bold">QUIZKNOW</span>
      </div>
    </motion.div>
  );
};

export default UnoCard;
