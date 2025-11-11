-- Create quiz_history table to track user quiz attempts
CREATE TABLE IF NOT EXISTS public.quiz_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  class_level INTEGER NOT NULL,
  subject TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  answered_questions INTEGER NOT NULL,
  time_taken INTEGER, -- in seconds
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.quiz_history ENABLE ROW LEVEL SECURITY;

-- Create policies for quiz history (public access for now, no auth required)
CREATE POLICY "Anyone can view quiz history" 
ON public.quiz_history 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create quiz history" 
ON public.quiz_history 
FOR INSERT 
WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_quiz_history_created_at ON public.quiz_history(created_at DESC);
CREATE INDEX idx_quiz_history_class_subject ON public.quiz_history(class_level, subject);