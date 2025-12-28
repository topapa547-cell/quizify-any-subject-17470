-- Add avatar_style column to uno_players for bot avatars
ALTER TABLE public.uno_players ADD COLUMN IF NOT EXISTS avatar_style text DEFAULT 'adventurer';

-- Add is_public column to uno_rooms for public room browser
ALTER TABLE public.uno_rooms ADD COLUMN IF NOT EXISTS is_public boolean DEFAULT false;