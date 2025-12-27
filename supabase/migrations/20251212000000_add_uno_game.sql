-- Create Uno Rooms table
CREATE TABLE IF NOT EXISTS public.uno_rooms (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    room_code TEXT NOT NULL UNIQUE,
    host_id UUID NOT NULL REFERENCES auth.users(id),
    host_username TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'waiting', -- waiting, playing, ended
    current_player_index INTEGER DEFAULT 0,
    direction TEXT DEFAULT 'clockwise', -- clockwise, counter-clockwise
    top_card JSONB, -- The card currently on top of the discard pile
    draw_pile_count INTEGER DEFAULT 0, -- Just the count, actual deck might be stored or generated
    last_action_card JSONB, -- To track stacking state (e.g. { type: 'draw', value: 2, count: 1 })
    winner_id UUID,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    settings JSONB DEFAULT '{"mercy_rule": true, "stacking": true}'::jsonb
);

-- Create Uno Players table
CREATE TABLE IF NOT EXISTS public.uno_players (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    room_id UUID NOT NULL REFERENCES public.uno_rooms(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id), -- Null for bots
    username TEXT NOT NULL,
    is_bot BOOLEAN DEFAULT FALSE,
    avatar_url TEXT,
    card_count INTEGER DEFAULT 0,
    hand JSONB DEFAULT '[]'::jsonb, -- Array of cards
    is_spectator BOOLEAN DEFAULT FALSE,
    turn_index INTEGER, -- Position in the turn order
    is_eliminated BOOLEAN DEFAULT FALSE, -- Mercy rule elimination
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_uno_rooms_code ON public.uno_rooms(room_code);
CREATE INDEX IF NOT EXISTS idx_uno_players_room ON public.uno_players(room_id);

-- Enable RLS
ALTER TABLE public.uno_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.uno_players ENABLE ROW LEVEL SECURITY;

-- Policies for uno_rooms
CREATE POLICY "Anyone can view rooms" ON public.uno_rooms
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create rooms" ON public.uno_rooms
    FOR INSERT WITH CHECK (auth.uid() = host_id);

CREATE POLICY "Room participants can update room" ON public.uno_rooms
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.uno_players
            WHERE room_id = public.uno_rooms.id
            AND user_id = auth.uid()
        )
    );

-- Policies for uno_players
CREATE POLICY "Anyone can view players" ON public.uno_players
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can join" ON public.uno_players
    FOR INSERT WITH CHECK (
        auth.uid() = user_id OR is_bot = true
    );

CREATE POLICY "Players can update their own state or host can update bots" ON public.uno_players
    FOR UPDATE USING (
        auth.uid() = user_id OR
        EXISTS (
            SELECT 1 FROM public.uno_rooms
            WHERE id = room_id
            AND host_id = auth.uid()
        )
    );

-- Add realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.uno_rooms;
ALTER PUBLICATION supabase_realtime ADD TABLE public.uno_players;
