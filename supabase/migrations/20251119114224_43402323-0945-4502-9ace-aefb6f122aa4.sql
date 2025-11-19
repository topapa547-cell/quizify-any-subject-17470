-- Add lesson/chapter metadata to long_questions table
ALTER TABLE long_questions 
ADD COLUMN IF NOT EXISTS lesson_number INTEGER,
ADD COLUMN IF NOT EXISTS unit_name TEXT,
ADD COLUMN IF NOT EXISTS ncert_page_number INTEGER,
ADD COLUMN IF NOT EXISTS question_type TEXT DEFAULT 'long_answer';

-- Create index for better filtering performance
CREATE INDEX IF NOT EXISTS idx_long_questions_chapter ON long_questions(subject, class_level, chapter);

-- Create NCERT Solutions table
CREATE TABLE IF NOT EXISTS ncert_solutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_level INTEGER NOT NULL,
  subject TEXT NOT NULL,
  chapter_number INTEGER NOT NULL,
  chapter_name TEXT NOT NULL,
  chapter_name_english TEXT,
  exercise_number TEXT NOT NULL,
  question_number TEXT NOT NULL,
  question_text TEXT NOT NULL,
  question_text_english TEXT,
  solution_text TEXT NOT NULL,
  solution_text_english TEXT,
  difficulty TEXT DEFAULT 'medium',
  marks INTEGER DEFAULT 3,
  ncert_page_number INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE ncert_solutions ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can read NCERT solutions
CREATE POLICY "Anyone can view NCERT solutions"
  ON ncert_solutions FOR SELECT
  USING (true);

-- Indexes for performance
CREATE INDEX idx_ncert_class_subject ON ncert_solutions(class_level, subject);
CREATE INDEX idx_ncert_chapter ON ncert_solutions(chapter_number);
CREATE INDEX idx_ncert_exercise ON ncert_solutions(chapter_number, exercise_number);