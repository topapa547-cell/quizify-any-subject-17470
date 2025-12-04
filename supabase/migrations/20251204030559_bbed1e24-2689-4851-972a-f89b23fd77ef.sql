
-- Add is_public column to battle_rooms table
ALTER TABLE public.battle_rooms ADD COLUMN is_public BOOLEAN NOT NULL DEFAULT false;

-- Create index for faster public room queries
CREATE INDEX idx_battle_rooms_public_status ON public.battle_rooms(is_public, status) WHERE is_public = true AND status = 'waiting';
