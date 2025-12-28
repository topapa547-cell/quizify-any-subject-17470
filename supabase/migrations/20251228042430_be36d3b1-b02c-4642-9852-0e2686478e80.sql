-- Create uno_rooms table for QuizKnow Mercy game
CREATE TABLE public.uno_rooms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  room_code TEXT NOT NULL UNIQUE,
  host_id UUID NOT NULL,
  host_username TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'waiting',
  current_player_index INTEGER DEFAULT 0,
  direction INTEGER DEFAULT 1,
  current_card JSONB,
  draw_pile JSONB DEFAULT '[]'::jsonb,
  discard_pile JSONB DEFAULT '[]'::jsonb,
  is_bot_game BOOLEAN DEFAULT false,
  max_players INTEGER DEFAULT 4,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  started_at TIMESTAMP WITH TIME ZONE,
  finished_at TIMESTAMP WITH TIME ZONE,
  winner_id UUID,
  winner_username TEXT
);

-- Create uno_players table
CREATE TABLE public.uno_players (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id UUID NOT NULL REFERENCES public.uno_rooms(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  username TEXT NOT NULL,
  hand JSONB DEFAULT '[]'::jsonb,
  position INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true,
  is_bot BOOLEAN DEFAULT false,
  has_called_uno BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.uno_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.uno_players ENABLE ROW LEVEL SECURITY;

-- RLS Policies for uno_rooms
CREATE POLICY "Anyone can view uno rooms" 
ON public.uno_rooms 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can create uno rooms" 
ON public.uno_rooms 
FOR INSERT 
WITH CHECK (auth.uid() = host_id);

CREATE POLICY "Participants can update uno room" 
ON public.uno_rooms 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.uno_players 
    WHERE uno_players.room_id = uno_rooms.id 
    AND uno_players.user_id = auth.uid()
  ) OR auth.uid() = host_id
);

CREATE POLICY "Host can delete uno room" 
ON public.uno_rooms 
FOR DELETE 
USING (auth.uid() = host_id);

-- RLS Policies for uno_players
CREATE POLICY "Anyone can view uno players" 
ON public.uno_players 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can join uno games" 
ON public.uno_players 
FOR INSERT 
WITH CHECK (auth.uid() = user_id OR is_bot = true);

CREATE POLICY "Players can update their own record" 
ON public.uno_players 
FOR UPDATE 
USING (auth.uid() = user_id OR EXISTS (
  SELECT 1 FROM public.uno_rooms 
  WHERE uno_rooms.id = uno_players.room_id 
  AND uno_rooms.host_id = auth.uid()
));

CREATE POLICY "Players can leave games" 
ON public.uno_players 
FOR DELETE 
USING (auth.uid() = user_id OR EXISTS (
  SELECT 1 FROM public.uno_rooms 
  WHERE uno_rooms.id = uno_players.room_id 
  AND uno_rooms.host_id = auth.uid()
));

-- Enable Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.uno_rooms;
ALTER PUBLICATION supabase_realtime ADD TABLE public.uno_players;