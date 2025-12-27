export type UnoColor = 'red' | 'blue' | 'green' | 'yellow' | 'wild';
export type UnoAction = 'skip' | 'reverse' | 'draw2' | 'draw4' | 'draw6' | 'draw10' | 'wild' | 'discard_all' | 'skip_everyone' | 'wild_roulette' | 'none';

export interface UnoCard {
  id: string; // Unique ID for React keys
  color: UnoColor;
  number?: number; // 0-9
  action: UnoAction;
  value: number; // For scoring (optional)
}

export interface UnoPlayer {
  id: string;
  user_id?: string;
  username: string;
  is_bot: boolean;
  hand: UnoCard[];
  card_count: number;
  avatar_url?: string;
  is_eliminated: boolean;
  turn_index: number;
}

export interface UnoRoom {
  id: string;
  room_code: string;
  host_id: string;
  host_username: string;
  status: 'waiting' | 'playing' | 'ended';
  current_player_index: number;
  direction: 'clockwise' | 'counter-clockwise';
  top_card: UnoCard | null;
  draw_pile_count: number;
  winner_id?: string;
  stack_count: number; // Current accumulated draw penalty (e.g. 2, 4, 6, 16)
  last_action_source?: string; // Who played the last action
}

export interface GameSettings {
  mercy_rule: boolean;
  stacking: boolean;
  seven_swap: boolean;
  zero_rotate: boolean;
}
