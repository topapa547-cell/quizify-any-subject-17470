import { UnoCard as UnoCardType, canPlayCard, StackState } from "@/types/unoTypes";
import UnoCard from "./UnoCard";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface UnoPlayerHandProps {
  cards: UnoCardType[];
  onPlayCard: (card: UnoCardType) => void;
  isCurrentPlayer: boolean;
  topCard: UnoCardType | null;
  stackState: StackState;
  disabled?: boolean;
}

export const UnoPlayerHand = ({
  cards,
  onPlayCard,
  isCurrentPlayer,
  topCard,
  stackState,
  disabled = false,
}: UnoPlayerHandProps) => {
  const { language } = useLanguage();
  
  // Check if any card is playable
  const hasPlayableCard = cards.some(card => canPlayCard(card, topCard, stackState));

  return (
    <div className="w-full">
      {/* Hand label */}
      <div className="text-center mb-2">
        <span className="text-xs font-medium text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
          {language === 'hindi' ? 'आपके पत्ते' : 'Your Cards'} ({cards.length})
        </span>
      </div>

      <div className="overflow-x-auto pb-4">
        <div 
          className={cn(
            "flex justify-center items-end gap-1 min-w-max px-4",
          )}
          style={{
            perspective: '1000px',
          }}
        >
          {cards.map((card, index) => {
            const isPlayable = isCurrentPlayer && canPlayCard(card, topCard, stackState);
            const totalCards = cards.length;
            const middleIndex = (totalCards - 1) / 2;
            const rotation = (index - middleIndex) * 3;
            const translateY = Math.abs(index - middleIndex) * 2;

            return (
              <div
                key={card.id}
                style={{
                  transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
                  zIndex: isPlayable ? 50 + index : index,
                  marginLeft: index > 0 ? '-20px' : '0',
                }}
                className="transition-all duration-200 hover:z-[100]"
              >
                <UnoCard
                  card={card}
                  onClick={() => isPlayable && onPlayCard(card)}
                  isPlayable={isPlayable}
                  disabled={disabled || !isCurrentPlayer}
                  size="md"
                  glowing={isPlayable}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Hint text for current player */}
      {isCurrentPlayer && (
        <p className="text-center text-xs text-muted-foreground mt-1">
          {hasPlayableCard
            ? (language === 'hindi' ? '💡 चमकते हुए कार्ड पर टैप करें' : '💡 Tap a glowing card to play')
            : (language === 'hindi' ? '🃏 कोई कार्ड नहीं चल सकता - ड्रॉ करें' : '🃏 No playable cards - Draw from pile')}
        </p>
      )}
    </div>
  );
};

export default UnoPlayerHand;
