-- Fix quiz_history RLS policies - check and drop existing first
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Anyone can view quiz history" ON quiz_history;
  DROP POLICY IF EXISTS "Anyone can create quiz history" ON quiz_history;
  DROP POLICY IF EXISTS "Users can view own quiz history" ON quiz_history;
  DROP POLICY IF EXISTS "Users can create own quiz history" ON quiz_history;
END $$;

-- Make user_id NOT NULL
ALTER TABLE quiz_history 
ALTER COLUMN user_id SET NOT NULL;

-- Create restrictive RLS policies
CREATE POLICY "Users can view own quiz history"
ON quiz_history FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own quiz history"
ON quiz_history FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Add username validation constraint to profiles
ALTER TABLE profiles
DROP CONSTRAINT IF EXISTS username_length_check;

ALTER TABLE profiles
ADD CONSTRAINT username_length_check 
CHECK (char_length(username) >= 3 AND char_length(username) <= 20);