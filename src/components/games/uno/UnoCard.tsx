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

  const getCardBodyStyle = () => {
    // Clean black card with subtle gradient for depth, no grunge texture
    return "bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 shadow-xl overflow-hidden";
  };

  const getInnerOvalClass = (color?: string) => {
    // Clean rotated oval
    const base = "absolute inset-0 m-1 rounded-[100%] rotate-[20deg] border-4 border-black/20";
    switch (color) {
      case 'red': return `${base} bg-gradient-to-br from-red-500 to-red-700`;
      case 'blue': return `${base} bg-gradient-to-br from-blue-500 to-blue-700`;
      case 'green': return `${base} bg-gradient-to-br from-green-500 to-green-700`;
      case 'yellow': return `${base} bg-gradient-to-br from-yellow-400 to-yellow-600`;
      // Wild: Rainbow gradient
      case 'wild': return `${base} bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-red-500 via-yellow-500 via-green-500 via-blue-500 to-red-500`;
      default: return `${base} bg-gray-700`;
    }
  };

  const getTextColor = (color?: string) => {
    // Clean white text with sharp shadow
    return "text-white drop-shadow-md";
  };

  const getActionSymbol = (action: string) => {
    switch (action) {
      case 'skip': return "⦸";
      case 'reverse': return "⇄";
      case 'draw2': return "+2";
      case 'draw4': return "+4";
      case 'draw6': return "+6";
      case 'draw10': return "+10";
      case 'discard_all': return "🗑️";
      case 'skip_everyone': return "⏭️";
      case 'wild': return "🌈";
      case 'wild_roulette': return "🎰";
      default: return "";
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.5, rotateY: 180 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      rotate: i * 3 - 6,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: i * 0.1
      }
    }),
    hover: {
      y: -40,
      zIndex: 50,
      scale: 1.2,
      rotate: 0,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const hiddenVariants = {
      initial: { scale: 0.5, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
      exit: { scale: 0, opacity: 0 }
  };

  // --- CARD BACK (Hidden) ---
  if (hidden) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={hiddenVariants}
        className={cn(
          "w-24 h-36 rounded-xl bg-black border-2 border-gray-700 shadow-2xl flex items-center justify-center relative overflow-hidden",
          className
        )}
      >
        {/* Clean Gradient Back */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black" />
        <div className="absolute inset-2 border-2 border-yellow-500/20 rounded-lg" />

        {/* Branding Logo - Clean Vector Style */}
        <div className="relative z-10 flex flex-col items-center justify-center transform rotate-12">
            <div className="bg-yellow-500 text-black font-black text-[10px] px-2 py-0.5 rounded shadow-sm transform -rotate-12 mb-1">
                OFFICIAL
            </div>
            <h1 className="text-2xl font-black text-white tracking-tighter drop-shadow-md">
                QUIZ
                <span className="text-yellow-400">KNOW</span>
            </h1>
            <div className="text-[8px] text-white/70 font-bold tracking-[0.2em] mt-1">NO MERCY</div>
        </div>
      </motion.div>
    );
  }

  if (!card) return null;

  // --- CARD FRONT ---
  const symbol = card.number !== undefined ? card.number : getActionSymbol(card.action);

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
        "w-24 h-36 rounded-xl relative select-none flex items-center justify-center",
        getCardBodyStyle(),
        playable ? "cursor-pointer ring-4 ring-yellow-400/50 ring-offset-2 ring-offset-black" : "",
        className
      )}
    >
      {/* Background Oval */}
      <div className={cn(getInnerOvalClass(card.color), "flex items-center justify-center shadow-inner")}>
           {/* Center Big Symbol */}
           <span
             className={cn(
                 "text-5xl font-black italic z-10",
                 getTextColor(card.color),
                 String(symbol).length > 2 ? "text-3xl" : ""
             )}
             // Outline effect using text-shadow
             style={{ textShadow: "2px 2px 0px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}
           >
             {symbol}
           </span>
      </div>

      {/* Top Left Corner */}
      <div className="absolute top-1.5 left-2 flex flex-col items-center leading-none">
          <span className={cn("text-lg font-bold drop-shadow-sm", getTextColor(card.color))}>
             {symbol}
          </span>
      </div>

      {/* Bottom Right Corner (Rotated) */}
      <div className="absolute bottom-1.5 right-2 flex flex-col items-center leading-none rotate-180">
          <span className={cn("text-lg font-bold drop-shadow-sm", getTextColor(card.color))}>
             {symbol}
          </span>
      </div>

      {/* Branding Watermark on Front (Clean) */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[5px] text-white/20 font-bold tracking-widest pointer-events-none">
        QUIZKNOW
      </div>
    </motion.div>
  );
};

export default UnoCard;
