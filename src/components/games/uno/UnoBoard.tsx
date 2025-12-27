import React from "react";
import { UnoCard as UnoCardType, UnoPlayer } from "@/data/games/unoTypes";
import UnoCard from "./UnoCard";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/UserAvatar";

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
  const myPlayer = gameState.players.find(p => p.id === myPlayerId);
  const otherPlayers = gameState.players.filter(p => p.id !== myPlayerId);

  // Helper to get relative position for opponents (Top, Left, Right)
  // This is a simplified positioning logic.
  const getPosition = (index: number, total: number) => {
    // For 2-4 players layout
    if (total === 1) return "top";
    if (total === 2) return index === 0 ? "left" : "right";
    if (total === 3) return index === 0 ? "left" : index === 1 ? "top" : "right";
    return "top"; // Fallback
  };

  return (
    <div className="relative w-full h-[600px] sm:h-[800px] flex flex-col justify-between overflow-hidden bg-green-800/20 rounded-xl p-4">
      {/* Center Table Area */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] rounded-full border-4 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center relative">

          {/* Direction Indicator */}
          <motion.div
            animate={{ rotate: gameState.direction === 'clockwise' ? 360 : -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-r-2 border-white/20 rounded-full"
          />

          {/* Discard Pile */}
          <div className="relative z-10 pointer-events-auto">
            <AnimatePresence mode="popLayout">
              {gameState.topCard && (
                <UnoCard
                  key={gameState.topCard.id}
                  card={gameState.topCard}
                  className="shadow-2xl scale-110"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Draw Pile */}
          <div
            className="absolute right-[-100px] cursor-pointer hover:scale-105 transition-transform pointer-events-auto"
            onClick={onDrawCard}
          >
             <div className="relative">
                {/* Simulated stack depth */}
                <UnoCard hidden className="absolute top-1 left-1 rotate-3" />
                <UnoCard hidden className="absolute top-2 left-2 -rotate-2" />
                <UnoCard hidden className="relative z-10" />
                <div className="absolute -top-4 left-0 right-0 text-center bg-black/50 text-white text-xs rounded-full px-2 py-0.5">
                  Draw
                </div>
             </div>
          </div>

          {/* Stack Counter */}
          {gameState.stackCount > 0 && (
             <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-12 text-center"
             >
                <div className="bg-red-600 text-white font-black text-2xl px-4 py-2 rounded-full border-4 border-white shadow-lg">
                  +{gameState.stackCount}
                </div>
                <div className="text-white text-xs font-bold mt-1">STACKED!</div>
             </motion.div>
          )}

          {/* Current Turn Indicator */}
          <div className="absolute top-0 text-white/50 text-sm font-bold uppercase tracking-widest mt-20">
             {gameState.currentPlayerId === myPlayerId ? "Your Turn" : "Opponent's Turn"}
          </div>
        </div>
      </div>

      {/* Opponents Area */}
      <div className="relative z-20 w-full h-1/4 flex justify-between items-start px-8">
         {otherPlayers.map((player, idx) => (
           <div key={player.id} className="flex flex-col items-center gap-2 bg-black/20 p-2 rounded-xl backdrop-blur-md">
              <UserAvatar userId={player.user_id || ""} username={player.username} className={cn(
                "border-2",
                gameState.currentPlayerId === player.id ? "border-green-400 ring-2 ring-green-400 ring-offset-2" : "border-transparent"
              )} />
              <div className="text-white text-xs font-bold text-center w-20 truncate">{player.username}</div>
              <div className="flex -space-x-4">
                 {[...Array(Math.min(player.card_count, 5))].map((_, i) => (
                    <div key={i} className="w-8 h-12 bg-indigo-900 border border-white/20 rounded-md shadow-sm" />
                 ))}
                 <div className="w-8 h-12 flex items-center justify-center bg-black/40 text-white text-xs font-bold rounded-md ml-2">
                    {player.card_count}
                 </div>
              </div>
              {player.is_eliminated && <span className="text-red-500 font-bold text-xs">ELIMINATED</span>}
           </div>
         ))}
      </div>

      {/* Player Hand */}
      <div className="relative z-30 w-full min-h-[160px] flex items-end justify-center pb-4 px-4">
        {myPlayer && (
          <div className="flex items-center justify-center -space-x-8 hover:space-x-1 transition-all duration-300">
            <AnimatePresence>
              {myPlayer.hand.map((card, idx) => {
                const isMyTurn = gameState.currentPlayerId === myPlayerId;
                // Simple validation check for UI feedback (actual validation in logic)
                // We'll rely on the parent to pass valid cards or just visual cue
                return (
                  <div
                    key={card.id}
                    className={cn(
                        "relative transition-transform duration-200",
                        isMyTurn ? "hover:-translate-y-8" : "opacity-80"
                    )}
                  >
                    <UnoCard
                      card={card}
                      index={idx}
                      animate
                      playable={isMyTurn}
                      onClick={() => isMyTurn && onPlayCard(card)}
                    />
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

       {/* Uno Shout Button (Only if 1 card left) */}
       {myPlayer && myPlayer.hand.length === 1 && (
         <div className="absolute bottom-40 right-10 z-50">
           <button
             onClick={onUnoShout}
             className="bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xl px-6 py-3 rounded-full shadow-lg border-4 border-white animate-bounce"
           >
             UNO!
           </button>
         </div>
       )}
    </div>
  );
};

export default UnoBoard;
