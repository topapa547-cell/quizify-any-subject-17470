-- Create daily_challenges table for tracking daily quiz completion
CREATE TABLE IF NOT EXISTS public.daily_challenges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  challenge_date DATE NOT NULL DEFAULT CURRENT_DATE,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL DEFAULT 20,
  answered_questions INTEGER NOT NULL,
  time_taken INTEGER,
  points_earned INTEGER NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  CONSTRAINT unique_user_daily_challenge UNIQUE (user_id, challenge_date)
);

-- Enable Row Level Security
ALTER TABLE public.daily_challenges ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own daily challenges"
ON public.daily_challenges
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own daily challenges"
ON public.daily_challenges
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_daily_challenges_user_date ON public.daily_challenges(user_id, challenge_date DESC);