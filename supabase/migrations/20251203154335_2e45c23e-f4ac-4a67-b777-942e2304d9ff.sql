-- Create battle_rooms table for real-time battles
CREATE TABLE public.battle_rooms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  room_code TEXT NOT NULL UNIQUE,
  host_id UUID NOT NULL,
  opponent_id UUID,
  host_username TEXT NOT NULL,
  opponent_username TEXT,
  status TEXT NOT NULL DEFAULT 'waiting' CHECK (status IN ('waiting', 'ready', 'battle', 'finished', 'cancelled')),
  subject TEXT NOT NULL DEFAULT 'all',
  class_level INTEGER NOT NULL DEFAULT 10,
  total_questions INTEGER NOT NULL DEFAULT 10,
  questions JSONB,
  host_score INTEGER DEFAULT 0,
  opponent_score INTEGER DEFAULT 0,
  host_answers JSONB DEFAULT '[]'::jsonb,
  opponent_answers JSONB DEFAULT '[]'::jsonb,
  current_question INTEGER DEFAULT 0,
  winner_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  started_at TIMESTAMP WITH TIME ZONE,
  finished_at TIMESTAMP WITH TIME ZONE
);

-- Create battle_history table for tracking user battle stats
CREATE TABLE public.battle_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  room_id UUID REFERENCES public.battle_rooms(id) ON DELETE CASCADE,
  opponent_id UUID,
  opponent_username TEXT,
  is_winner BOOLEAN,
  is_draw BOOLEAN DEFAULT false,
  user_score INTEGER NOT NULL DEFAULT 0,
  opponent_score INTEGER NOT NULL DEFAULT 0,
  points_earned INTEGER NOT NULL DEFAULT 0,
  subject TEXT,
  total_questions INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.battle_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.battle_history ENABLE ROW LEVEL SECURITY;

-- RLS Policies for battle_rooms
CREATE POLICY "Anyone can view active battle rooms"
ON public.battle_rooms
FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can create battle rooms"
ON public.battle_rooms
FOR INSERT
WITH CHECK (auth.uid() = host_id);

CREATE POLICY "Participants can update their battle room"
ON public.battle_rooms
FOR UPDATE
USING (auth.uid() = host_id OR auth.uid() = opponent_id);

CREATE POLICY "Host can delete their battle room"
ON public.battle_rooms
FOR DELETE
USING (auth.uid() = host_id);

-- RLS Policies for battle_history
CREATE POLICY "Users can view their own battle history"
ON public.battle_history
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own battle history"
ON public.battle_history
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Enable Realtime for battle_rooms
ALTER PUBLICATION supabase_realtime ADD TABLE public.battle_rooms;

-- Create indexes for performance
CREATE INDEX idx_battle_rooms_room_code ON public.battle_rooms(room_code);
CREATE INDEX idx_battle_rooms_status ON public.battle_rooms(status);
CREATE INDEX idx_battle_rooms_host_id ON public.battle_rooms(host_id);
CREATE INDEX idx_battle_history_user_id ON public.battle_history(user_id);