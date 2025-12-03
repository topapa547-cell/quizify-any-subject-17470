
-- Create friends table for friend relationships
CREATE TABLE public.friends (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  friend_id UUID NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, friend_id)
);

-- Create battle_invitations table for battle invites
CREATE TABLE public.battle_invitations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sender_id UUID NOT NULL,
  receiver_id UUID NOT NULL,
  room_id UUID REFERENCES public.battle_rooms(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'expired')),
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + INTERVAL '5 minutes'),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.friends ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.battle_invitations ENABLE ROW LEVEL SECURITY;

-- Friends RLS policies
CREATE POLICY "Users can view their own friend relationships"
ON public.friends FOR SELECT
USING (auth.uid() = user_id OR auth.uid() = friend_id);

CREATE POLICY "Users can send friend requests"
ON public.friends FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update friend requests they received"
ON public.friends FOR UPDATE
USING (auth.uid() = friend_id);

CREATE POLICY "Users can delete their own friend relationships"
ON public.friends FOR DELETE
USING (auth.uid() = user_id OR auth.uid() = friend_id);

-- Battle invitations RLS policies
CREATE POLICY "Users can view invitations they sent or received"
ON public.battle_invitations FOR SELECT
USING (auth.uid() = sender_id OR auth.uid() = receiver_id);

CREATE POLICY "Users can send battle invitations"
ON public.battle_invitations FOR INSERT
WITH CHECK (auth.uid() = sender_id);

CREATE POLICY "Users can update invitations they received"
ON public.battle_invitations FOR UPDATE
USING (auth.uid() = receiver_id);

CREATE POLICY "Users can delete their own invitations"
ON public.battle_invitations FOR DELETE
USING (auth.uid() = sender_id);

-- Enable Realtime for both tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.friends;
ALTER PUBLICATION supabase_realtime ADD TABLE public.battle_invitations;
