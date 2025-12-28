import React, { useEffect } from "react";
import { UnoCard as UnoCardType, UnoPlayer } from "@/data/games/unoTypes";
import UnoCard from "./UnoCard";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";
import { useUnoSound } from "@/hooks/useUnoSound";

interface UnoBoardProps {
  gameState: {
    players: UnoPlayer[];
    currentPlayerId: string; // The ID of the player whose turn it is
    topCard: UnoCardType | null;
    direction: 'clockwise' | 'counter-clockwise';
    stackCount: number;
    winnerId?: string;
  };
  myPlayerId: string;
  onPlayCard: (card: UnoCardType) => void;
  onDrawCard: () => void;
  onUnoShout?: () => void;
}

const UnoBoard: React.FC<UnoBoardProps> = ({
  gameState,
  myPlayerId,
  onPlayCard,
  onDrawCard,
  onUnoShout
}) => {
  const { playSound } = useUnoSound();
  const myPlayer = gameState.players.find(p => p.id === myPlayerId);
  const otherPlayers = gameState.players.filter(p => p.id !== myPlayerId);

  // Play sound on turn change or card play (simplified check)
  useEffect(() => {
      // Logic to detect changes and play sound can be refined
      // For now, we rely on event handlers in parent, but effects can track state
  }, [gameState.topCard]);

  const handleDraw = () => {
      playSound('draw');
      onDrawCard();
  };

  const handlePlay = (card: UnoCardType) => {
      playSound('play');
      onPlayCard(card);
  };

  return (
    <div className="relative w-full h-[600px] sm:h-[800px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-xl p-4 shadow-2xl border border-white/10">

      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-black to-black" />

      {/* Center Table Area */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full border-4 border-white/5 bg-white/5 backdrop-blur-sm flex items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">

          {/* Direction Indicator */}
          <motion.div
            animate={{ rotate: gameState.direction === 'clockwise' ? 360 : -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-r-2 border-dashed border-white/10 rounded-full"
          />

          {/* Discard Pile */}
          <div className="relative z-10 pointer-events-auto">
            <AnimatePresence mode="popLayout">
              {gameState.topCard && (
                <motion.div
                    key={gameState.topCard.id}
                    initial={{ scale: 1.5, opacity: 0, y: -100, rotate: Math.random() * 20 - 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <UnoCard
                      card={gameState.topCard}
                      className="shadow-2xl hover:scale-105 transition-transform"
                    />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Draw Pile */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-[-100px] cursor-pointer pointer-events-auto"
            onClick={handleDraw}
          >
             <div className="relative group">
                {/* Stack depth visual */}
                <UnoCard hidden className="absolute top-1 left-1 rotate-3 shadow-lg" />
                <UnoCard hidden className="absolute top-2 left-2 -rotate-2 shadow-lg" />
                <UnoCard hidden className="relative z-10 shadow-2xl group-hover:-translate-y-2 transition-transform" />

                <div className="absolute -top-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">DRAW</span>
                </div>
             </div>
          </motion.div>

          {/* Stack Counter */}
          <AnimatePresence>
          {gameState.stackCount > 0 && (
             <motion.div
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: -60 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute z-50 pointer-events-none"
             >
                <div className="relative">
                    <div className="absolute inset-0 bg-red-500 blur-lg opacity-50 animate-pulse" />
                    <div className="relative bg-gradient-to-b from-red-600 to-red-800 text-white font-black text-3xl px-6 py-2 rounded-xl border-4 border-white shadow-[0_0_20px_rgba(255,0,0,0.5)] transform rotate-[-5deg]">
                    +{gameState.stackCount}
                    </div>
                </div>
                <div className="text-red-500 text-sm font-black mt-2 text-center tracking-widest drop-shadow-md">STACKED!</div>
             </motion.div>
          )}
          </AnimatePresence>

          {/* Current Turn Indicator */}
          <div className="absolute bottom-[-40px] text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
             {gameState.currentPlayerId === myPlayerId ? (
                 <span className="text-green-400 animate-pulse">YOUR TURN</span>
             ) : (
                 <span>Opponent's Turn</span>
             )}
          </div>
        </div>
      </div>

      {/* Opponents Area */}
      <div className="relative z-20 w-full h-1/4 flex justify-between items-start px-4 sm:px-8 pt-4">
         {otherPlayers.map((player, idx) => (
           <motion.div
             key={player.id}
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className={cn(
               "flex flex-col items-center gap-2 p-3 rounded-2xl backdrop-blur-md transition-all duration-300",
               gameState.currentPlayerId === player.id ? "bg-white/10 ring-1 ring-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]" : "bg-black/20"
             )}
           >
              <div className="relative">
                  <UserAvatar userId={player.user_id || ""} username={player.username} className={cn(
                    "border-2 w-10 h-10 sm:w-12 sm:h-12",
                    gameState.currentPlayerId === player.id ? "border-green-400 shadow-[0_0_10px_#4ade80]" : "border-white/20"
                  )} />
                  {gameState.currentPlayerId === player.id && (
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      />
                  )}
              </div>
              <div className="text-white text-xs font-bold text-center w-20 truncate">{player.username}</div>

              {/* Opponent Cards Mini Representation */}
              <div className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded-full">
                 <div className="w-3 h-4 bg-red-500 rounded-sm" />
                 <span className="text-white font-mono font-bold text-xs">{player.card_count}</span>
              </div>

              {player.is_eliminated && (
                  <motion.div
                    initial={{ scale: 2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-2xl"
                  >
                      <span className="text-red-600 font-black text-xs rotate-[-10deg] border-2 border-red-600 px-1">ELIMINATED</span>
                  </motion.div>
              )}
           </motion.div>
         ))}
      </div>

      {/* Player Hand */}
      <div className="relative z-30 w-full min-h-[180px] flex items-end justify-center pb-6 px-4 overflow-visible">
        {myPlayer && (
          <div className="flex items-center justify-center -space-x-12 hover:space-x-[-20px] transition-[margin] duration-300 perspective-[1000px]">
            <AnimatePresence mode="popLayout">
              {myPlayer.hand.map((card, idx) => {
                const isMyTurn = gameState.currentPlayerId === myPlayerId;
                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ y: 100, opacity: 0, rotate: 0 }}
                    animate={{ y: 0, opacity: 1, rotate: idx - (myPlayer.hand.length/2) }} // Simple fan curve
                    exit={{ y: -200, opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                    whileHover={{
                        y: -30,
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 100,
                        transition: { duration: 0.1 }
                    }}
                    className={cn(
                        "relative transform-gpu origin-bottom",
                        !isMyTurn && "opacity-80 grayscale-[0.3]"
                    )}
                    style={{ zIndex: idx }}
                  >
                    <UnoCard
                      card={card}
                      index={idx}
                      playable={isMyTurn}
                      onClick={() => isMyTurn && handlePlay(card)}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

       {/* Uno Shout Button */}
       <AnimatePresence>
       {myPlayer && myPlayer.hand.length === 1 && (
         <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            className="absolute bottom-40 right-4 sm:right-10 z-50"
         >
           <button
             onClick={() => {
                 playSound('uno');
                 onUnoShout?.();
             }}
             className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-black text-xl px-8 py-4 rounded-full shadow-[0_0_20px_rgba(255,200,0,0.6)] border-4 border-white animate-bounce active:scale-95 transition-transform"
           >
             UNO!
           </button>
         </motion.div>
       )}
       </AnimatePresence>
    </div>
  );
};

export default UnoBoard;
