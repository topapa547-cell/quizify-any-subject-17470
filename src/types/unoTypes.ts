// UNO Card Colors
export type UnoColor = 'red' | 'blue' | 'green' | 'yellow';
export type WildColor = 'wild';

// UNO Card Types
export type UnoCardType = 
  | 'number'
  | 'skip'
  | 'reverse'
  | 'draw2'
  | 'draw4'
  | 'draw6'      // Mercy special
  | 'draw10'     // Mercy special
  | 'wild'
  | 'wild_roulette';  // Mercy special - random player draws random cards

// UNO Card Interface
export interface UnoCard {
  id: string;
  type: UnoCardType;
  color: UnoColor | WildColor;
  value?: number;  // 0-9 for number cards
  displayValue: string;
}

// Player Interface
export interface UnoPlayer {
  id: string;
  room_id: string;
  user_id: string;
  username: string;
  hand: UnoCard[];
  position: number;
  is_active: boolean;
  is_bot: boolean;
  has_called_uno: boolean;
}

// Room Status
export type UnoRoomStatus = 'waiting' | 'playing' | 'finished';

// Game Direction
export type GameDirection = 1 | -1;  // 1 = clockwise, -1 = counter-clockwise

// Room Interface
export interface UnoRoom {
  id: string;
  room_code: string;
  host_id: string;
  host_username: string;
  status: UnoRoomStatus;
  current_player_index: number;
  direction: GameDirection;
  current_card: UnoCard | null;
  draw_pile: UnoCard[];
  discard_pile: UnoCard[];
  is_bot_game: boolean;
  max_players: number;
  created_at: string;
  started_at: string | null;
  finished_at: string | null;
  winner_id: string | null;
  winner_username: string | null;
}

// Game Action Types
export type GameAction = 
  | { type: 'PLAY_CARD'; card: UnoCard; playerId: string }
  | { type: 'DRAW_CARD'; playerId: string }
  | { type: 'CALL_UNO'; playerId: string }
  | { type: 'CHALLENGE_UNO'; challengerId: string; targetId: string }
  | { type: 'SELECT_COLOR'; color: UnoColor }
  | { type: 'SKIP_TURN'; playerId: string };

// Card Stacking State
export interface StackState {
  isStacking: boolean;
  stackCount: number;
  stackType: 'draw2' | 'draw4' | 'draw6' | 'draw10' | null;
}

// Color Display Names
export const colorDisplayNames: Record<UnoColor, { en: string; hi: string }> = {
  red: { en: 'Red', hi: 'लाल' },
  blue: { en: 'Blue', hi: 'नीला' },
  green: { en: 'Green', hi: 'हरा' },
  yellow: { en: 'Yellow', hi: 'पीला' },
};

// Card Type Display Names
export const cardTypeDisplayNames: Record<UnoCardType, { en: string; hi: string }> = {
  number: { en: 'Number', hi: 'नंबर' },
  skip: { en: 'Skip', hi: 'स्किप' },
  reverse: { en: 'Reverse', hi: 'रिवर्स' },
  draw2: { en: 'Draw 2', hi: '+2' },
  draw4: { en: 'Draw 4', hi: '+4' },
  draw6: { en: 'Draw 6', hi: '+6' },
  draw10: { en: 'Draw 10', hi: '+10' },
  wild: { en: 'Wild', hi: 'वाइल्ड' },
  wild_roulette: { en: 'Roulette', hi: 'रूलेट' },
};

// Generate a full UNO deck with Mercy cards
export const generateUnoDeck = (): UnoCard[] => {
  const deck: UnoCard[] = [];
  const colors: UnoColor[] = ['red', 'blue', 'green', 'yellow'];
  let cardId = 0;

  // Number cards (0-9) for each color
  colors.forEach(color => {
    // One 0 per color
    deck.push({
      id: `card_${cardId++}`,
      type: 'number',
      color,
      value: 0,
      displayValue: '0',
    });

    // Two of each 1-9 per color
    for (let num = 1; num <= 9; num++) {
      for (let i = 0; i < 2; i++) {
        deck.push({
          id: `card_${cardId++}`,
          type: 'number',
          color,
          value: num,
          displayValue: num.toString(),
        });
      }
    }

    // 2 Skip cards per color
    for (let i = 0; i < 2; i++) {
      deck.push({
        id: `card_${cardId++}`,
        type: 'skip',
        color,
        displayValue: '⊘',
      });
    }

    // 2 Reverse cards per color
    for (let i = 0; i < 2; i++) {
      deck.push({
        id: `card_${cardId++}`,
        type: 'reverse',
        color,
        displayValue: '↻',
      });
    }

    // 2 Draw 2 cards per color
    for (let i = 0; i < 2; i++) {
      deck.push({
        id: `card_${cardId++}`,
        type: 'draw2',
        color,
        displayValue: '+2',
      });
    }

    // 1 Draw 6 card per color (Mercy special)
    deck.push({
      id: `card_${cardId++}`,
      type: 'draw6',
      color,
      displayValue: '+6',
    });
  });

  // 4 Wild cards
  for (let i = 0; i < 4; i++) {
    deck.push({
      id: `card_${cardId++}`,
      type: 'wild',
      color: 'wild',
      displayValue: '🌈',
    });
  }

  // 4 Wild Draw 4 cards
  for (let i = 0; i < 4; i++) {
    deck.push({
      id: `card_${cardId++}`,
      type: 'draw4',
      color: 'wild',
      displayValue: '+4',
    });
  }

  // 2 Draw 10 cards (Mercy special) - wild
  for (let i = 0; i < 2; i++) {
    deck.push({
      id: `card_${cardId++}`,
      type: 'draw10',
      color: 'wild',
      displayValue: '+10',
    });
  }

  // 2 Wild Roulette cards (Mercy special)
  for (let i = 0; i < 2; i++) {
    deck.push({
      id: `card_${cardId++}`,
      type: 'wild_roulette',
      color: 'wild',
      displayValue: '🎰',
    });
  }

  return deck;
};

// Shuffle deck
export const shuffleDeck = (deck: UnoCard[]): UnoCard[] => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Check if a card can be played
export const canPlayCard = (card: UnoCard, topCard: UnoCard | null, stackState: StackState): boolean => {
  if (!topCard) return true;

  // If stacking is active, only matching draw cards can be played
  if (stackState.isStacking) {
    if (stackState.stackType === 'draw2' && (card.type === 'draw2' || card.type === 'draw4' || card.type === 'draw6' || card.type === 'draw10')) {
      return true;
    }
    if (stackState.stackType === 'draw4' && (card.type === 'draw4' || card.type === 'draw6' || card.type === 'draw10')) {
      return true;
    }
    if (stackState.stackType === 'draw6' && (card.type === 'draw6' || card.type === 'draw10')) {
      return true;
    }
    if (stackState.stackType === 'draw10' && card.type === 'draw10') {
      return true;
    }
    return false;
  }

  // Wild cards can always be played
  if (card.color === 'wild') return true;

  // Match color
  if (card.color === topCard.color) return true;

  // Match number/type
  if (card.type === 'number' && topCard.type === 'number' && card.value === topCard.value) return true;
  if (card.type !== 'number' && card.type === topCard.type) return true;

  return false;
};

// Get draw count for a card type
export const getDrawCount = (type: UnoCardType): number => {
  switch (type) {
    case 'draw2': return 2;
    case 'draw4': return 4;
    case 'draw6': return 6;
    case 'draw10': return 10;
    default: return 0;
  }
};
