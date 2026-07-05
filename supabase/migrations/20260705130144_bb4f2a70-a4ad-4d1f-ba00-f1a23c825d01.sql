
-- Practice questions pool
CREATE TABLE public.practice_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  subject TEXT NOT NULL,
  class_level INTEGER NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('hindi','english')),
  difficulty TEXT NOT NULL DEFAULT 'medium',
  question_text TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_option INTEGER NOT NULL CHECK (correct_option BETWEEN 0 AND 3),
  explanation TEXT,
  topic_tag TEXT,
  verified BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX idx_practice_questions_filter ON public.practice_questions(subject, class_level, language, verified);

GRANT SELECT ON public.practice_questions TO authenticated;
GRANT ALL ON public.practice_questions TO service_role;
ALTER TABLE public.practice_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read verified practice questions"
ON public.practice_questions FOR SELECT
TO authenticated
USING (verified = true);

-- Seen tracking
CREATE TABLE public.practice_question_seen (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.practice_questions(id) ON DELETE CASCADE,
  seen_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, question_id)
);
CREATE INDEX idx_practice_seen_user ON public.practice_question_seen(user_id, seen_at DESC);

GRANT SELECT, INSERT, DELETE ON public.practice_question_seen TO authenticated;
GRANT ALL ON public.practice_question_seen TO service_role;
ALTER TABLE public.practice_question_seen ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own seen"
ON public.practice_question_seen FOR ALL
TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Attempts
CREATE TABLE public.practice_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  class_level INTEGER NOT NULL,
  language TEXT NOT NULL,
  question_count INTEGER NOT NULL,
  score INTEGER NOT NULL,
  time_taken INTEGER NOT NULL DEFAULT 0,
  points_earned INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
CREATE INDEX idx_practice_attempts_user ON public.practice_attempts(user_id, created_at DESC);

GRANT SELECT, INSERT ON public.practice_attempts TO authenticated;
GRANT ALL ON public.practice_attempts TO service_role;
ALTER TABLE public.practice_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own attempts"
ON public.practice_attempts FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users insert own attempts"
ON public.practice_attempts FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.update_practice_questions_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_practice_questions_updated_at
BEFORE UPDATE ON public.practice_questions
FOR EACH ROW EXECUTE FUNCTION public.update_practice_questions_updated_at();
