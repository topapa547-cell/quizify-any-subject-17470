
-- Create chess puzzles table with 100+ tactical puzzles
CREATE TABLE public.chess_puzzles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  puzzle_fen TEXT NOT NULL,
  solution TEXT[] NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'medium',
  theme TEXT NOT NULL DEFAULT 'tactics',
  points INTEGER NOT NULL DEFAULT 10,
  hint_text TEXT,
  hint_text_hindi TEXT,
  title TEXT,
  title_hindi TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chess puzzle attempts table for user progress
CREATE TABLE public.chess_puzzle_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  puzzle_id UUID REFERENCES public.chess_puzzles(id) ON DELETE CASCADE NOT NULL,
  solved BOOLEAN NOT NULL DEFAULT false,
  attempts INTEGER NOT NULL DEFAULT 1,
  time_taken INTEGER,
  points_earned INTEGER NOT NULL DEFAULT 0,
  hints_used INTEGER NOT NULL DEFAULT 0,
  solved_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, puzzle_id)
);

-- Create separate chess leaderboard table
CREATE TABLE public.chess_leaderboard (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  username TEXT NOT NULL,
  total_points INTEGER NOT NULL DEFAULT 0,
  puzzles_solved INTEGER NOT NULL DEFAULT 0,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  best_time INTEGER,
  elo_rating INTEGER NOT NULL DEFAULT 800,
  last_puzzle_date DATE,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.chess_puzzles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chess_puzzle_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chess_leaderboard ENABLE ROW LEVEL SECURITY;

-- Chess puzzles: Anyone can view
CREATE POLICY "Anyone can view chess puzzles" 
ON public.chess_puzzles 
FOR SELECT 
USING (true);

-- Chess puzzle attempts: Users can manage own attempts
CREATE POLICY "Users can view own puzzle attempts" 
ON public.chess_puzzle_attempts 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own puzzle attempts" 
ON public.chess_puzzle_attempts 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own puzzle attempts" 
ON public.chess_puzzle_attempts 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Chess leaderboard: Anyone can view, users can manage own
CREATE POLICY "Anyone can view chess leaderboard" 
ON public.chess_leaderboard 
FOR SELECT 
USING (true);

CREATE POLICY "Users can insert own leaderboard entry" 
ON public.chess_leaderboard 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own leaderboard entry" 
ON public.chess_leaderboard 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Function to get chess leaderboard rankings
CREATE OR REPLACE FUNCTION public.get_chess_leaderboard(limit_count INTEGER DEFAULT 100)
RETURNS TABLE(
  rank BIGINT,
  user_id UUID,
  username TEXT,
  total_points INTEGER,
  puzzles_solved INTEGER,
  current_streak INTEGER,
  elo_rating INTEGER
)
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT 
    ROW_NUMBER() OVER (ORDER BY total_points DESC, puzzles_solved DESC) as rank,
    cl.user_id,
    cl.username,
    cl.total_points,
    cl.puzzles_solved,
    cl.current_streak,
    cl.elo_rating
  FROM chess_leaderboard cl
  ORDER BY total_points DESC, puzzles_solved DESC
  LIMIT limit_count;
$$;

-- Function to update chess streak
CREATE OR REPLACE FUNCTION public.update_chess_streak(p_user_id UUID)
RETURNS TABLE(current_streak INTEGER, longest_streak INTEGER, streak_maintained BOOLEAN)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_last_puzzle_date DATE;
  v_current_streak INTEGER;
  v_longest_streak INTEGER;
  v_today DATE := CURRENT_DATE;
  v_streak_maintained BOOLEAN := false;
BEGIN
  SELECT last_puzzle_date, chess_leaderboard.current_streak, chess_leaderboard.longest_streak
  INTO v_last_puzzle_date, v_current_streak, v_longest_streak
  FROM chess_leaderboard
  WHERE chess_leaderboard.user_id = p_user_id;
  
  IF v_last_puzzle_date IS NULL THEN
    v_current_streak := 1;
    v_streak_maintained := true;
  ELSIF v_last_puzzle_date = v_today THEN
    v_streak_maintained := true;
    RETURN QUERY SELECT v_current_streak, v_longest_streak, v_streak_maintained;
    RETURN;
  ELSIF v_last_puzzle_date = v_today - INTERVAL '1 day' THEN
    v_current_streak := v_current_streak + 1;
    v_streak_maintained := true;
  ELSE
    v_current_streak := 1;
    v_streak_maintained := false;
  END IF;
  
  IF v_current_streak > v_longest_streak THEN
    v_longest_streak := v_current_streak;
  END IF;
  
  UPDATE chess_leaderboard
  SET current_streak = v_current_streak,
      longest_streak = v_longest_streak,
      last_puzzle_date = v_today,
      updated_at = now()
  WHERE chess_leaderboard.user_id = p_user_id;
  
  RETURN QUERY SELECT v_current_streak, v_longest_streak, v_streak_maintained;
END;
$$;
