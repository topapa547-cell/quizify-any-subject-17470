import { UnoCard as UnoCardType, UnoPlayer, GameDirection, StackState } from "@/types/unoTypes";
import UnoCard from "./UnoCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { RotateCcw, RotateCw } from "lucide-react";
import UserAvatar from "@/components/UserAvatar";

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

  const currentPlayer = players[currentPlayerIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square p-4">
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
            {/* Player Avatar - no bot indicators, looks like real player */}
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

      {/* Center area - Current card + Draw pile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-6">
          {/* Draw pile */}
          <div className="relative">
            <button
              onClick={onDrawCard}
              disabled={!isCurrentPlayer}
              className={cn(
                "relative transition-transform duration-200",
                isCurrentPlayer && "hover:scale-105 cursor-pointer",
                !isCurrentPlayer && "cursor-not-allowed opacity-70"
              )}
            >
              <UnoCard
                card={{ id: 'draw', type: 'number', color: 'blue', value: 0, displayValue: '' }}
                faceDown
                size="lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 text-slate-800 px-2 py-1 rounded-lg text-sm font-bold shadow">
                  {drawPileCount}
                </span>
              </div>
            </button>
            <p className="text-center text-xs text-muted-foreground mt-1">
              {language === 'hindi' ? 'ड्रॉ करें' : 'Draw'}
            </p>
          </div>

          {/* Direction indicator */}
          <div className="flex flex-col items-center">
            {direction === 1 ? (
              <RotateCw className="w-6 h-6 text-primary animate-spin-slow" />
            ) : (
              <RotateCcw className="w-6 h-6 text-primary animate-spin-slow" />
            )}
          </div>

          {/* Current card / Discard pile */}
          <div className="relative">
            {currentCard ? (
              <UnoCard card={currentCard} size="lg" disabled />
            ) : (
              <div className="w-20 h-30 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <span className="text-muted-foreground text-xs">
                  {language === 'hindi' ? 'खाली' : 'Empty'}
                </span>
              </div>
            )}
            
            {/* Stack indicator */}
            {stackState.isStacking && (
              <div className="absolute -top-3 -right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold animate-bounce">
                +{stackState.stackCount}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Current player indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="bg-primary/10 px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-primary">
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
