-- Add preferred_language column to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS preferred_language text DEFAULT 'hindi';

-- Create long_questions table
CREATE TABLE IF NOT EXISTS public.long_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject TEXT NOT NULL,
  class_level INTEGER NOT NULL,
  question_text TEXT NOT NULL,
  question_text_english TEXT,
  answer_text TEXT NOT NULL,
  answer_text_english TEXT,
  marks INTEGER DEFAULT 5,
  chapter TEXT,
  difficulty TEXT DEFAULT 'medium',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for long_questions
ALTER TABLE public.long_questions ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can view long questions
CREATE POLICY "Anyone can view long questions"
  ON public.long_questions FOR SELECT
  USING (true);

-- Create downloaded_questions table
CREATE TABLE IF NOT EXISTS public.downloaded_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  question_id UUID REFERENCES long_questions(id) ON DELETE CASCADE,
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  question_data JSONB
);

-- Enable RLS for downloaded_questions
ALTER TABLE public.downloaded_questions ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view own downloads
CREATE POLICY "Users can view own downloads"
  ON public.downloaded_questions FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert own downloads
CREATE POLICY "Users can insert own downloads"
  ON public.downloaded_questions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete own downloads
CREATE POLICY "Users can delete own downloads"
  ON public.downloaded_questions FOR DELETE
  USING (auth.uid() = user_id);