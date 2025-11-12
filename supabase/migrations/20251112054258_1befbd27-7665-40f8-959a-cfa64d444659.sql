-- Add class field to profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS class_level INTEGER;

-- Add comment explaining class levels
COMMENT ON COLUMN public.profiles.class_level IS 'Student class/grade level (9-12)';

-- Create achievements table
CREATE TABLE IF NOT EXISTS public.achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_type TEXT NOT NULL,
  achievement_name TEXT NOT NULL,
  achievement_description TEXT,
  earned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  metadata JSONB
);

-- Enable RLS on achievements
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

-- Create policies for achievements
CREATE POLICY "Users can view their own achievements" 
ON public.achievements 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own achievements" 
ON public.achievements 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_achievements_user_id ON public.achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_achievements_type ON public.achievements(achievement_type);

-- Add index on profiles class_level for faster leaderboard queries
CREATE INDEX IF NOT EXISTS idx_profiles_class_level ON public.profiles(class_level);

-- Add index on quiz_history for class-based queries
CREATE INDEX IF NOT EXISTS idx_quiz_history_class_level ON public.quiz_history(class_level);