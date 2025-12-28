import { UnoCard as UnoCardType, canPlayCard, StackState } from "@/types/unoTypes";
import UnoCard from "./UnoCard";
import { cn } from "@/lib/utils";

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
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div 
        className={cn(
          "flex justify-center items-end gap-1 min-w-max px-4",
          isCurrentPlayer && "animate-pulse-subtle"
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
                zIndex: index,
                marginLeft: index > 0 ? '-20px' : '0',
              }}
              className="transition-all duration-200 hover:z-50"
            >
              <UnoCard
                card={card}
                onClick={() => isPlayable && onPlayCard(card)}
                isPlayable={isPlayable}
                disabled={disabled || !isCurrentPlayer}
                size="md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnoPlayerHand;
