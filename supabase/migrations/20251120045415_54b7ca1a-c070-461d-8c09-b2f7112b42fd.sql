-- Create grammar progress tracking table
CREATE TABLE grammar_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  topic_id TEXT NOT NULL,
  class_level INTEGER CHECK (class_level IN (9, 10)),
  questions_attempted INTEGER DEFAULT 0,
  questions_correct INTEGER DEFAULT 0,
  score_percentage DECIMAL(5,2),
  last_attempted TIMESTAMP WITH TIME ZONE DEFAULT now(),
  completed BOOLEAN DEFAULT false,
  weak_areas TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, topic_id)
);

-- Enable RLS
ALTER TABLE grammar_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own grammar progress"
  ON grammar_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own grammar progress"
  ON grammar_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own grammar progress"
  ON grammar_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX idx_grammar_progress_user_id ON grammar_progress(user_id);
CREATE INDEX idx_grammar_progress_topic_id ON grammar_progress(topic_id);