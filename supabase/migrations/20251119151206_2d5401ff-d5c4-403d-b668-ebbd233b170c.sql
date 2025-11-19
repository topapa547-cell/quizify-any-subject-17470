-- Create previous year papers table
CREATE TABLE previous_year_papers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_level integer NOT NULL CHECK (class_level IN (9, 10)),
  subject text NOT NULL,
  year integer NOT NULL CHECK (year >= 2019 AND year <= 2024),
  paper_type text NOT NULL DEFAULT 'annual',
  term text DEFAULT 'annual',
  board text DEFAULT 'CBSE',
  paper_data jsonb NOT NULL,
  total_marks integer NOT NULL DEFAULT 80,
  duration_minutes integer NOT NULL DEFAULT 180,
  created_at timestamptz DEFAULT now(),
  UNIQUE(class_level, subject, year, paper_type, term)
);

-- Enable RLS
ALTER TABLE previous_year_papers ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view papers
CREATE POLICY "Anyone can view previous year papers"
  ON previous_year_papers FOR SELECT
  USING (true);