-- Fix quiz_history RLS policies and add validation
-- Step 1: Make user_id NOT NULL (allow NULL temporarily for migration)
ALTER TABLE quiz_history 
ALTER COLUMN user_id SET NOT NULL;

-- Step 2: Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can view quiz history" ON quiz_history;
DROP POLICY IF EXISTS "Anyone can create quiz history" ON quiz_history;

-- Step 3: Create restrictive RLS policies
CREATE POLICY "Users can view own quiz history"
ON quiz_history FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own quiz history"
ON quiz_history FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Step 4: Create secure leaderboard function
CREATE OR REPLACE FUNCTION get_class_leaderboard(class_num INTEGER)
RETURNS TABLE(
  username TEXT,
  total_score BIGINT,
  quiz_count BIGINT,
  avg_score NUMERIC
)
SECURITY DEFINER
SET search_path = public
LANGUAGE SQL
AS $$
  SELECT 
    username,
    SUM(score) as total_score,
    COUNT(*) as quiz_count,
    ROUND(AVG(score * 100.0 / NULLIF(total_questions, 0)), 2) as avg_score
  FROM quiz_history
  WHERE class_level = class_num
  GROUP BY username
  ORDER BY total_score DESC, avg_score DESC
  LIMIT 100;
$$;

-- Step 5: Create validated quiz submission function
CREATE OR REPLACE FUNCTION submit_quiz_result(
  p_score INTEGER,
  p_total_questions INTEGER,
  p_answered_questions INTEGER,
  p_time_taken INTEGER,
  p_subject TEXT,
  p_difficulty TEXT,
  p_class_level INTEGER
)
RETURNS UUID
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  v_user_id UUID;
  v_username TEXT;
  v_quiz_id UUID;
BEGIN
  -- Get authenticated user
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Must be authenticated';
  END IF;

  -- Validate score
  IF p_score < 0 OR p_score > p_total_questions THEN
    RAISE EXCEPTION 'Invalid score: score cannot be negative or exceed total questions';
  END IF;
  
  -- Validate answered questions
  IF p_answered_questions < 0 OR p_answered_questions > p_total_questions THEN
    RAISE EXCEPTION 'Invalid answered count: cannot be negative or exceed total questions';
  END IF;
  
  -- Validate class level (1-12)
  IF p_class_level < 1 OR p_class_level > 12 THEN
    RAISE EXCEPTION 'Invalid class level: must be between 1 and 12';
  END IF;
  
  -- Validate subject
  IF p_subject NOT IN ('all', 'math', 'science', 'english', 'hindi', 'social_science') THEN
    RAISE EXCEPTION 'Invalid subject';
  END IF;

  -- Validate difficulty
  IF p_difficulty NOT IN ('all', 'easy', 'medium', 'hard') THEN
    RAISE EXCEPTION 'Invalid difficulty';
  END IF;

  -- Validate time (reasonable range: 0 to 2 hours)
  IF p_time_taken < 0 OR p_time_taken > 7200 THEN
    RAISE EXCEPTION 'Invalid time taken';
  END IF;

  -- Get username from profile
  SELECT username INTO v_username
  FROM profiles
  WHERE id = v_user_id;

  IF v_username IS NULL THEN
    RAISE EXCEPTION 'User profile not found';
  END IF;

  -- Insert with validated data
  INSERT INTO quiz_history (
    user_id,
    username,
    score,
    total_questions,
    answered_questions,
    time_taken,
    subject,
    difficulty,
    class_level
  ) VALUES (
    v_user_id,
    v_username,
    p_score,
    p_total_questions,
    p_answered_questions,
    p_time_taken,
    p_subject,
    p_difficulty,
    p_class_level
  ) RETURNING id INTO v_quiz_id;

  RETURN v_quiz_id;
END;
$$;

-- Step 6: Add username validation constraint to profiles
ALTER TABLE profiles
DROP CONSTRAINT IF EXISTS username_length_check;

ALTER TABLE profiles
ADD CONSTRAINT username_length_check 
CHECK (char_length(username) >= 3 AND char_length(username) <= 20);