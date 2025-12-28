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

  // --- Visual Helpers ---

  // SVG Noise Pattern for Texture
  const TextureOverlay = () => (
    <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay z-20">
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5"/>
      </svg>
    </div>
  );

  const getCardBodyStyle = () => {
    // Deep black with subtle gradient
    return "bg-gradient-to-br from-[#1a1a1a] via-black to-[#0a0a0a] border-[3px] border-[#2a2a2a] shadow-xl overflow-hidden";
  };

  const getInnerOvalClass = (color?: string) => {
    const base = "absolute inset-1 rounded-[50%] rotate-[20deg] border-2 border-black/40 shadow-inner";
    // Colors matching the reference image (Vibrant but with depth)
    switch (color) {
      case 'red': return `${base} bg-[#d91e18]`; // Deep Red
      case 'blue': return `${base} bg-[#0055d4]`; // Deep Blue
      case 'green': return `${base} bg-[#2d8a26]`; // Deep Green
      case 'yellow': return `${base} bg-[#f5b301]`; // Deep Yellow
      case 'wild': return `${base} bg-[conic-gradient(from_90deg,_#d91e18,_#f5b301,_#2d8a26,_#0055d4,_#d91e18)]`;
      default: return `${base} bg-gray-700`;
    }
  };

  const getTextColor = (color?: string) => {
    // White text with VERY thick black outline (simulated via drop shadows)
    return "text-white";
  };

  const getTextShadow = () => {
      // Multiple shadows to create a stroke effect
      return "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
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

  // --- Mini Card Visual Generator for +6, +10, etc ---
  const MiniCardStack = ({ count }: { count: number }) => {
      // Generates a little stack of cards for the visual
      return (
          <div className="relative w-12 h-12 flex items-center justify-center">
              {[...Array(Math.min(count, 5))].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-6 h-9 rounded-sm border border-black shadow-sm"
                    style={{
                        backgroundColor: ['#d91e18', '#0055d4', '#2d8a26', '#f5b301'][i % 4],
                        transform: `rotate(${i * 15 - 30}deg) translate(${i * 2}px, ${i * -2}px)`,
                        zIndex: i
                    }}
                  />
              ))}
              <span className="relative z-10 font-black text-2xl text-white drop-shadow-md" style={{ textShadow: getTextShadow() }}>
                  +{count}
              </span>
          </div>
      );
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
          "w-24 h-36 rounded-xl bg-[#111] border-2 border-[#333] shadow-2xl flex items-center justify-center relative overflow-hidden",
          className
        )}
      >
        <TextureOverlay />

        {/* Card Back Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#800] to-black opacity-80" />
        <div className="absolute inset-2 border-2 border-yellow-500/20 rounded-lg" />

        {/* Branding Logo */}
        <div className="relative z-30 flex flex-col items-center justify-center transform rotate-12">
            <div className="bg-[#ffcc00] text-black font-black text-[10px] px-2 py-0.5 rounded shadow-sm transform -rotate-12 mb-1 border border-black">
                OFFICIAL
            </div>
            <h1 className="text-2xl font-black text-white tracking-tighter drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
                QUIZ
                <span className="text-[#ffcc00]">KNOW</span>
            </h1>
            <div className="text-[8px] text-white/80 font-bold tracking-[0.2em] mt-1 drop-shadow-md">NO MERCY</div>
        </div>
      </motion.div>
    );
  }

  if (!card) return null;

  // --- CARD FRONT ---
  const symbol = card.number !== undefined ? card.number : getActionSymbol(card.action);
  const isDrawCard = ['draw6', 'draw10', 'draw2', 'draw4'].includes(card.action);
  const drawCount = card.action === 'draw10' ? 10 : card.action === 'draw6' ? 6 : card.action === 'draw4' ? 4 : 2;

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
      <TextureOverlay />

      {/* Background Oval */}
      <div className={cn(getInnerOvalClass(card.color), "flex items-center justify-center overflow-hidden")}>

           {/* Inner Texture Specific to Oval */}
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_transparent_20%,_#000_120%)]" />

           {/* Content */}
           {isDrawCard && (card.action === 'draw6' || card.action === 'draw10') ? (
               // Special Visuals for Mega Draws
               <div className="z-10 transform scale-75">
                   <MiniCardStack count={drawCount} />
               </div>
           ) : (
               // Standard Number/Symbol
               <span
                 className={cn(
                     "font-black italic z-10 leading-none",
                     getTextColor(card.color),
                     String(symbol).length > 2 ? "text-2xl" : "text-6xl"
                 )}
                 style={{ textShadow: getTextShadow() }}
               >
                 {symbol}
               </span>
           )}
      </div>

      {/* Top Left Corner */}
      <div className="absolute top-1.5 left-1.5 flex flex-col items-center leading-none z-30">
          <span className={cn("text-lg font-bold", getTextColor(card.color))} style={{ textShadow: "1px 1px 0 #000" }}>
             {symbol}
          </span>
      </div>

      {/* Bottom Right Corner (Rotated) */}
      <div className="absolute bottom-1.5 right-1.5 flex flex-col items-center leading-none rotate-180 z-30">
          <span className={cn("text-lg font-bold", getTextColor(card.color))} style={{ textShadow: "1px 1px 0 #000" }}>
             {symbol}
          </span>
      </div>

      {/* Subtle Branding */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[4px] text-white/30 font-bold tracking-widest pointer-events-none z-20">
        QUIZKNOW
      </div>
    </motion.div>
  );
};

export default UnoCard;
