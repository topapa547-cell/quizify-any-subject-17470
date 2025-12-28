import { UnoCard as UnoCardType, UnoPlayer, GameDirection, StackState, canPlayCard } from "@/types/unoTypes";
import UnoCard from "./UnoCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { RotateCcw, RotateCw } from "lucide-react";
import UserAvatar from "@/components/UserAvatar";
import { useState, useEffect } from "react";

interface UnoBoardProps {
  currentCard: UnoCardType | null;
  drawPileCount: number;
  players: UnoPlayer[];
  currentPlayerIndex: number;
  direction: GameDirection;
  currentUserId: string;
  stackState: StackState;
  onDrawCard: () => void;
  isCurrentPlayer: boolean;
}

export const UnoBoard = ({
  currentCard,
  drawPileCount,
  players,
  currentPlayerIndex,
  direction,
  currentUserId,
  stackState,
  onDrawCard,
  isCurrentPlayer,
}: UnoBoardProps) => {
  const { language } = useLanguage();
  const [lastPlayedCard, setLastPlayedCard] = useState<UnoCardType | null>(null);
  const [showPlayAnimation, setShowPlayAnimation] = useState(false);

  const currentPlayer = players[currentPlayerIndex];
  const currentUserPlayer = players.find(p => p.user_id === currentUserId);

  // Check if user has any playable cards
  const userHasPlayableCard = currentUserPlayer?.hand.some(card => 
    canPlayCard(card, currentCard, stackState)
  ) ?? false;

  // Deck should glow when it's user's turn and they have no playable cards
  const deckShouldGlow = isCurrentPlayer && !userHasPlayableCard;

  // Track card changes for play animation
  useEffect(() => {
    if (currentCard && currentCard.id !== lastPlayedCard?.id) {
      setShowPlayAnimation(true);
      setLastPlayedCard(currentCard);
      const timer = setTimeout(() => setShowPlayAnimation(false), 400);
      return () => clearTimeout(timer);
    }
  }, [currentCard, lastPlayedCard]);

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-square p-4">
      {/* Players arranged in circle */}
      {players.map((player, index) => {
        const angle = (360 / players.length) * index - 90;
        const radius = 42;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
        const isCurrentTurn = index === currentPlayerIndex;
        const isMe = player.user_id === currentUserId;

        return (
          <div
            key={player.id}
            className={cn(
              "absolute transform -translate-x-1/2 -translate-y-1/2",
              "flex flex-col items-center gap-1"
            )}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {/* Player Avatar */}
            <div
              className={cn(
                "relative transition-all duration-300",
                isCurrentTurn && "ring-2 ring-yellow-400 ring-offset-2 ring-offset-transparent animate-pulse rounded-full"
              )}
            >
              <UserAvatar
                userId={player.user_id}
                avatarStyle={(player as any).avatar_style || 'adventurer'}
                size="md"
                fallbackText={player.username.charAt(0).toUpperCase()}
                className={cn(
                  isMe && "ring-2 ring-primary"
                )}
              />
              {player.has_called_uno && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-1 rounded animate-bounce">
                  UNO!
                </span>
              )}
            </div>

            {/* Player name */}
            <div
              className={cn(
                "px-2 py-0.5 rounded-full text-xs font-medium",
                "transition-all duration-300 max-w-[80px] truncate",
                isMe
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/80 text-secondary-foreground"
              )}
            >
              {isMe ? (language === 'hindi' ? 'आप' : 'You') : player.username}
            </div>

            {/* Card count */}
            <div className="flex items-center gap-1 text-xs text-white/80 bg-black/30 px-2 py-0.5 rounded-full">
              <span>🎴</span>
              <span className="font-bold">{player.hand.length}</span>
            </div>
          </div>
        );
      })}

      {/* Center area - A4 size discard area + Draw pile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-8">
          {/* Draw pile with stacked card effect */}
          <div className="relative">
            {/* Stacked cards behind */}
            <div className="absolute top-1 left-1 opacity-60">
              <UnoCard
                card={{ id: 'stack1', type: 'number', color: 'blue', value: 0, displayValue: '' }}
                faceDown
                size="lg"
              />
            </div>
            <div className="absolute top-0.5 left-0.5 opacity-80">
              <UnoCard
                card={{ id: 'stack2', type: 'number', color: 'blue', value: 0, displayValue: '' }}
                faceDown
                size="lg"
              />
            </div>
            
            {/* Top draw card */}
            <button
              onClick={onDrawCard}
              disabled={!isCurrentPlayer}
              className={cn(
                "relative transition-all duration-300",
                isCurrentPlayer && "hover:scale-105 cursor-pointer",
                !isCurrentPlayer && "cursor-not-allowed opacity-70"
              )}
            >
              <UnoCard
                card={{ id: 'draw', type: 'number', color: 'blue', value: 0, displayValue: '' }}
                faceDown
                size="lg"
                glowing={deckShouldGlow}
                animate={deckShouldGlow ? 'none' : 'none'}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-white/90 text-slate-800 px-2 py-1 rounded-lg text-sm font-bold shadow">
                  {drawPileCount}
                </span>
              </div>
            </button>
            <p className="text-center text-xs text-muted-foreground mt-2 font-medium">
              {language === 'hindi' ? 'ड्रॉ करें' : 'Draw Pile'}
            </p>
          </div>

          {/* Direction indicator */}
          <div className="flex flex-col items-center">
            {direction === 1 ? (
              <RotateCw className="w-8 h-8 text-primary animate-spin-slow" />
            ) : (
              <RotateCcw className="w-8 h-8 text-primary animate-spin-slow" />
            )}
            <span className="text-[10px] text-muted-foreground mt-1">
              {direction === 1 
                ? (language === 'hindi' ? 'दक्षिणावर्त' : 'Clockwise')
                : (language === 'hindi' ? 'वामावर्त' : 'Counter')}
            </span>
          </div>

          {/* Discard pile - A4 size area */}
          <div className="relative">
            {/* A4 aspect ratio discard area */}
            <div className={cn(
              "w-32 h-44 rounded-2xl border-2 border-dashed border-white/20",
              "bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm",
              "flex items-center justify-center relative overflow-hidden shadow-xl"
            )}>
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,white_10px,white_11px)]" />
              </div>
              
              {/* Stacked discard cards effect */}
              {currentCard && (
                <>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] opacity-30">
                    <UnoCard card={currentCard} size="lg" disabled />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[5deg] opacity-50">
                    <UnoCard card={currentCard} size="lg" disabled />
                  </div>
                </>
              )}
              
              {/* Current card on top */}
              {currentCard ? (
                <div className={cn(
                  "relative z-10 transform",
                  showPlayAnimation && "animate-[cardDrop_0.4s_ease-out]"
                )}>
                  <UnoCard card={currentCard} size="lg" disabled />
                </div>
              ) : (
                <div className="text-center">
                  <span className="text-muted-foreground text-sm">
                    {language === 'hindi' ? 'खाली' : 'Empty'}
                  </span>
                </div>
              )}
              
              {/* Stack indicator */}
              {stackState.isStacking && (
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce shadow-lg z-20">
                  +{stackState.stackCount}
                </div>
              )}
            </div>
            
            <p className="text-center text-xs text-muted-foreground mt-2 font-medium">
              {language === 'hindi' ? 'डिस्कार्ड पाइल' : 'Discard Pile'}
            </p>
          </div>
        </div>
      </div>

      {/* Current player indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className={cn(
          "px-4 py-2 rounded-full",
          isCurrentPlayer 
            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50" 
            : "bg-primary/10"
        )}>
          <span className={cn(
            "text-sm font-medium",
            isCurrentPlayer ? "text-yellow-400" : "text-primary"
          )}>
            {currentPlayer?.user_id === currentUserId
              ? language === 'hindi' ? '🎯 आपकी बारी!' : "🎯 Your Turn!"
              : language === 'hindi' 
                ? `⏳ ${currentPlayer?.username} की बारी` 
                : `⏳ ${currentPlayer?.username}'s turn`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UnoBoard;
