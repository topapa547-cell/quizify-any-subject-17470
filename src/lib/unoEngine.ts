import { UnoCard, UnoColor, UnoAction } from "@/data/games/unoTypes";

// Helper to create a card
const createCard = (color: UnoColor, action: UnoAction = 'none', number?: number): UnoCard => ({
  id: Math.random().toString(36).substr(2, 9),
  color,
  action,
  number,
  value: 0 // Simplification for now
});

export const generateDeck = (): UnoCard[] => {
  const deck: UnoCard[] = [];
  const colors: UnoColor[] = ['red', 'blue', 'green', 'yellow'];

  colors.forEach(color => {
    // 0-9
    deck.push(createCard(color, 'none', 0)); // Only one 0
    for (let i = 1; i <= 9; i++) {
      deck.push(createCard(color, 'none', i));
      deck.push(createCard(color, 'none', i));
    }

    // Action Cards (2 of each)
    ['skip', 'reverse', 'draw2', 'discard_all', 'skip_everyone'].forEach(action => {
      deck.push(createCard(color, action as UnoAction));
      deck.push(createCard(color, action as UnoAction));
    });
  });

  // Wild Cards (4 of each standard wild)
  for (let i = 0; i < 4; i++) {
    deck.push(createCard('wild', 'wild'));
    deck.push(createCard('wild', 'draw4'));
  }

  // Mercy Cards (Brutal) - 4 of each
  for (let i = 0; i < 4; i++) {
    deck.push(createCard('wild', 'draw6'));
    deck.push(createCard('wild', 'draw10'));
    deck.push(createCard('wild', 'wild_roulette'));
  }

  // Shuffle
  return shuffleDeck(deck);
};

export const shuffleDeck = (deck: UnoCard[]): UnoCard[] => {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
};

export const isValidMove = (card: UnoCard, topCard: UnoCard, currentStack = 0): boolean => {
  // If there is an active stack (draw penalty), player MUST play a stacking card
  if (currentStack > 0) {
    // Can only stack Draw cards
    if (card.action === 'draw2' && topCard.action === 'draw2') return true; // +2 on +2
    if (card.action === 'draw4' && (topCard.action === 'draw2' || topCard.action === 'draw4')) return true; // +4 on +2 or +4
    if (card.action === 'draw6' && ['draw2', 'draw4', 'draw6'].includes(topCard.action)) return true;
    if (card.action === 'draw10' && ['draw2', 'draw4', 'draw6', 'draw10'].includes(topCard.action)) return true;

    // Cannot play non-draw cards when stacked
    return false;
  }

  // Normal play
  if (card.color === 'wild') return true; // Wilds always playable
  if (card.color === topCard.color) return true; // Match color
  if (card.number !== undefined && card.number === topCard.number) return true; // Match number
  if (card.action !== 'none' && card.action === topCard.action) return true; // Match symbol/action

  return false;
};

export const getDrawAmount = (action: UnoAction): number => {
  switch (action) {
    case 'draw2': return 2;
    case 'draw4': return 4;
    case 'draw6': return 6;
    case 'draw10': return 10;
    default: return 0;
  }
};
