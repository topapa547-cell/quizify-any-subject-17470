
-- Create uploaded_games table
CREATE TABLE public.uploaded_games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  description_hi text,
  thumbnail_url text,
  game_file_path text NOT NULL,
  category text DEFAULT 'action',
  tags text[] DEFAULT '{}',
  rating numeric DEFAULT 4.0,
  play_count integer DEFAULT 0,
  is_published boolean DEFAULT true,
  uploaded_by uuid NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.uploaded_games ENABLE ROW LEVEL SECURITY;

-- Admin check function
CREATE OR REPLACE FUNCTION public.is_admin_user(p_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = p_user_id AND email = 'radhgupta2013@gmail.com'
  );
$$;

-- RLS policies
CREATE POLICY "Anyone can view published games"
ON public.uploaded_games FOR SELECT
USING (is_published = true);

CREATE POLICY "Admin can insert games"
ON public.uploaded_games FOR INSERT
TO authenticated
WITH CHECK (public.is_admin_user(auth.uid()));

CREATE POLICY "Admin can update games"
ON public.uploaded_games FOR UPDATE
TO authenticated
USING (public.is_admin_user(auth.uid()));

CREATE POLICY "Admin can delete games"
ON public.uploaded_games FOR DELETE
TO authenticated
USING (public.is_admin_user(auth.uid()));

-- Storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES ('game-files', 'game-files', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('game-thumbnails', 'game-thumbnails', true);

-- Storage policies for game-files
CREATE POLICY "Anyone can read game files"
ON storage.objects FOR SELECT
USING (bucket_id = 'game-files');

CREATE POLICY "Admin can upload game files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'game-files' AND public.is_admin_user(auth.uid()));

CREATE POLICY "Admin can delete game files"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'game-files' AND public.is_admin_user(auth.uid()));

-- Storage policies for game-thumbnails
CREATE POLICY "Anyone can read game thumbnails"
ON storage.objects FOR SELECT
USING (bucket_id = 'game-thumbnails');

CREATE POLICY "Admin can upload game thumbnails"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'game-thumbnails' AND public.is_admin_user(auth.uid()));

CREATE POLICY "Admin can delete game thumbnails"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'game-thumbnails' AND public.is_admin_user(auth.uid()));

-- Enable realtime for uploaded_games
ALTER PUBLICATION supabase_realtime ADD TABLE public.uploaded_games;
