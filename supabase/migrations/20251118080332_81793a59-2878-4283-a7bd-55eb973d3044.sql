-- Add league and streak columns to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS league text DEFAULT 'bronze',
ADD COLUMN IF NOT EXISTS league_points integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS current_streak integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS longest_streak integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_quiz_date date,
ADD COLUMN IF NOT EXISTS streak_freeze_available boolean DEFAULT false;

-- Add points tracking columns to quiz_history table
ALTER TABLE quiz_history
ADD COLUMN IF NOT EXISTS points_earned integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS speed_bonus integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS difficulty_multiplier decimal DEFAULT 1.0;

-- Function to get weekly leaderboard
CREATE OR REPLACE FUNCTION public.get_weekly_leaderboard(class_num integer)
RETURNS TABLE(username text, total_score bigint, quiz_count bigint, avg_score numeric, league text, current_streak integer, user_id uuid)
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT 
    p.username,
    SUM(qh.points_earned) as total_score,
    COUNT(*) as quiz_count,
    ROUND(AVG(qh.score * 100.0 / NULLIF(qh.total_questions, 0)), 2) as avg_score,
    p.league,
    p.current_streak,
    p.id as user_id
  FROM quiz_history qh
  JOIN profiles p ON qh.user_id = p.id
  WHERE qh.class_level = class_num
    AND qh.created_at >= DATE_TRUNC('week', NOW())
  GROUP BY p.id, p.username, p.league, p.current_streak
  ORDER BY total_score DESC, avg_score DESC
  LIMIT 100;
$function$;

-- Function to get monthly leaderboard
CREATE OR REPLACE FUNCTION public.get_monthly_leaderboard(class_num integer)
RETURNS TABLE(username text, total_score bigint, quiz_count bigint, avg_score numeric, league text, current_streak integer, user_id uuid)
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT 
    p.username,
    SUM(qh.points_earned) as total_score,
    COUNT(*) as quiz_count,
    ROUND(AVG(qh.score * 100.0 / NULLIF(qh.total_questions, 0)), 2) as avg_score,
    p.league,
    p.current_streak,
    p.id as user_id
  FROM quiz_history qh
  JOIN profiles p ON qh.user_id = p.id
  WHERE qh.class_level = class_num
    AND qh.created_at >= DATE_TRUNC('month', NOW())
  GROUP BY p.id, p.username, p.league, p.current_streak
  ORDER BY total_score DESC, avg_score DESC
  LIMIT 100;
$function$;

-- Function to get subject-wise leaderboard
CREATE OR REPLACE FUNCTION public.get_subject_leaderboard(class_num integer, subject_name text)
RETURNS TABLE(username text, total_score bigint, quiz_count bigint, avg_score numeric, league text, current_streak integer, user_id uuid)
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT 
    p.username,
    SUM(qh.points_earned) as total_score,
    COUNT(*) as quiz_count,
    ROUND(AVG(qh.score * 100.0 / NULLIF(qh.total_questions, 0)), 2) as avg_score,
    p.league,
    p.current_streak,
    p.id as user_id
  FROM quiz_history qh
  JOIN profiles p ON qh.user_id = p.id
  WHERE qh.class_level = class_num
    AND qh.subject = subject_name
  GROUP BY p.id, p.username, p.league, p.current_streak
  ORDER BY total_score DESC, avg_score DESC
  LIMIT 100;
$function$;

-- Function to get user's rank in class leaderboard
CREATE OR REPLACE FUNCTION public.get_user_rank(p_user_id uuid, class_num integer)
RETURNS TABLE(rank bigint, username text, total_score bigint, quiz_count bigint, avg_score numeric, league text, current_streak integer)
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  WITH ranked_users AS (
    SELECT 
      p.id,
      p.username,
      SUM(qh.points_earned) as total_score,
      COUNT(*) as quiz_count,
      ROUND(AVG(qh.score * 100.0 / NULLIF(qh.total_questions, 0)), 2) as avg_score,
      p.league,
      p.current_streak,
      RANK() OVER (ORDER BY SUM(qh.points_earned) DESC, ROUND(AVG(qh.score * 100.0 / NULLIF(qh.total_questions, 0)), 2) DESC) as user_rank
    FROM quiz_history qh
    JOIN profiles p ON qh.user_id = p.id
    WHERE qh.class_level = class_num
    GROUP BY p.id, p.username, p.league, p.current_streak
  )
  SELECT user_rank, username, total_score, quiz_count, avg_score, league, current_streak
  FROM ranked_users
  WHERE id = p_user_id;
$function$;

-- Function to calculate quiz points
CREATE OR REPLACE FUNCTION public.calculate_quiz_points(
  p_score integer,
  p_total_questions integer,
  p_difficulty text,
  p_time_taken integer,
  p_current_streak integer
)
RETURNS TABLE(points_earned integer, speed_bonus integer, difficulty_multiplier decimal)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  v_base_points integer;
  v_speed_bonus integer := 0;
  v_diff_multiplier decimal;
  v_streak_bonus decimal := 1.0;
  v_avg_time_per_question integer;
  v_total_points integer;
BEGIN
  -- Base points: 10 per correct answer
  v_base_points := p_score * 10;
  
  -- Calculate average time per question
  v_avg_time_per_question := p_time_taken / NULLIF(p_total_questions, 0);
  
  -- Speed bonus per correct answer
  IF v_avg_time_per_question < 10 THEN
    v_speed_bonus := p_score * 5;
  ELSIF v_avg_time_per_question < 20 THEN
    v_speed_bonus := p_score * 3;
  ELSIF v_avg_time_per_question < 30 THEN
    v_speed_bonus := p_score * 1;
  END IF;
  
  -- Difficulty multiplier
  CASE p_difficulty
    WHEN 'easy' THEN v_diff_multiplier := 1.0;
    WHEN 'medium' THEN v_diff_multiplier := 1.5;
    WHEN 'hard' THEN v_diff_multiplier := 2.0;
    ELSE v_diff_multiplier := 1.0;
  END CASE;
  
  -- Streak bonus (20% extra if streak > 7)
  IF p_current_streak > 7 THEN
    v_streak_bonus := 1.2;
  END IF;
  
  -- Calculate total points
  v_total_points := ROUND((v_base_points + v_speed_bonus) * v_diff_multiplier * v_streak_bonus);
  
  RETURN QUERY SELECT v_total_points, v_speed_bonus, v_diff_multiplier;
END;
$function$;

-- Function to update user league based on league points
CREATE OR REPLACE FUNCTION public.update_user_league(p_user_id uuid)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  v_league_points integer;
  v_new_league text;
BEGIN
  -- Get current league points
  SELECT league_points INTO v_league_points
  FROM profiles
  WHERE id = p_user_id;
  
  -- Determine league
  IF v_league_points >= 2000 THEN
    v_new_league := 'diamond';
  ELSIF v_league_points >= 1000 THEN
    v_new_league := 'gold';
  ELSIF v_league_points >= 500 THEN
    v_new_league := 'silver';
  ELSE
    v_new_league := 'bronze';
  END IF;
  
  -- Update league
  UPDATE profiles
  SET league = v_new_league
  WHERE id = p_user_id;
  
  RETURN v_new_league;
END;
$function$;

-- Function to update user streak
CREATE OR REPLACE FUNCTION public.update_user_streak(p_user_id uuid)
RETURNS TABLE(current_streak integer, longest_streak integer, streak_maintained boolean)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  v_last_quiz_date date;
  v_current_streak integer;
  v_longest_streak integer;
  v_today date := CURRENT_DATE;
  v_streak_maintained boolean := false;
BEGIN
  -- Get current streak info
  SELECT last_quiz_date, profiles.current_streak, profiles.longest_streak
  INTO v_last_quiz_date, v_current_streak, v_longest_streak
  FROM profiles
  WHERE id = p_user_id;
  
  -- Check if this is a consecutive day
  IF v_last_quiz_date IS NULL THEN
    -- First quiz ever
    v_current_streak := 1;
    v_streak_maintained := true;
  ELSIF v_last_quiz_date = v_today THEN
    -- Already played today, maintain streak
    v_streak_maintained := true;
    -- Don't increment, just return current
    RETURN QUERY SELECT v_current_streak, v_longest_streak, v_streak_maintained;
    RETURN;
  ELSIF v_last_quiz_date = v_today - INTERVAL '1 day' THEN
    -- Consecutive day
    v_current_streak := v_current_streak + 1;
    v_streak_maintained := true;
  ELSE
    -- Streak broken
    v_current_streak := 1;
    v_streak_maintained := false;
  END IF;
  
  -- Update longest streak if needed
  IF v_current_streak > v_longest_streak THEN
    v_longest_streak := v_current_streak;
  END IF;
  
  -- Update profile
  UPDATE profiles
  SET current_streak = v_current_streak,
      longest_streak = v_longest_streak,
      last_quiz_date = v_today
  WHERE id = p_user_id;
  
  RETURN QUERY SELECT v_current_streak, v_longest_streak, v_streak_maintained;
END;
$function$;

-- Update the submit_quiz_result function to include points calculation and streak update
CREATE OR REPLACE FUNCTION public.submit_quiz_result(
  p_score integer, 
  p_total_questions integer, 
  p_answered_questions integer, 
  p_time_taken integer, 
  p_subject text, 
  p_difficulty text, 
  p_class_level integer
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  v_user_id UUID;
  v_username TEXT;
  v_quiz_id UUID;
  v_points_earned integer;
  v_speed_bonus integer;
  v_diff_multiplier decimal;
  v_current_streak integer;
  v_new_league text;
BEGIN
  -- Get authenticated user
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Must be authenticated';
  END IF;

  -- Validate inputs
  IF p_score < 0 OR p_score > p_total_questions THEN
    RAISE EXCEPTION 'Invalid score: score cannot be negative or exceed total questions';
  END IF;
  
  IF p_answered_questions < 0 OR p_answered_questions > p_total_questions THEN
    RAISE EXCEPTION 'Invalid answered count: cannot be negative or exceed total questions';
  END IF;
  
  IF p_class_level < 1 OR p_class_level > 12 THEN
    RAISE EXCEPTION 'Invalid class level: must be between 1 and 12';
  END IF;
  
  IF p_subject NOT IN ('all', 'math', 'science', 'english', 'hindi', 'social_science') THEN
    RAISE EXCEPTION 'Invalid subject';
  END IF;

  IF p_difficulty NOT IN ('all', 'easy', 'medium', 'hard') THEN
    RAISE EXCEPTION 'Invalid difficulty';
  END IF;

  IF p_time_taken < 0 OR p_time_taken > 7200 THEN
    RAISE EXCEPTION 'Invalid time taken';
  END IF;

  -- Get username and current streak from profile
  SELECT username, current_streak INTO v_username, v_current_streak
  FROM profiles
  WHERE id = v_user_id;

  IF v_username IS NULL THEN
    RAISE EXCEPTION 'User profile not found';
  END IF;

  -- Calculate points
  SELECT cp.points_earned, cp.speed_bonus, cp.difficulty_multiplier
  INTO v_points_earned, v_speed_bonus, v_diff_multiplier
  FROM calculate_quiz_points(p_score, p_total_questions, p_difficulty, p_time_taken, v_current_streak) cp;

  -- Insert quiz history with points
  INSERT INTO quiz_history (
    user_id,
    username,
    score,
    total_questions,
    answered_questions,
    time_taken,
    subject,
    difficulty,
    class_level,
    points_earned,
    speed_bonus,
    difficulty_multiplier
  ) VALUES (
    v_user_id,
    v_username,
    p_score,
    p_total_questions,
    p_answered_questions,
    p_time_taken,
    p_subject,
    p_difficulty,
    p_class_level,
    v_points_earned,
    v_speed_bonus,
    v_diff_multiplier
  ) RETURNING id INTO v_quiz_id;

  -- Update league points in profile
  UPDATE profiles
  SET league_points = league_points + v_points_earned
  WHERE id = v_user_id;

  -- Update user league
  SELECT update_user_league(v_user_id) INTO v_new_league;

  -- Update streak
  PERFORM update_user_streak(v_user_id);

  RETURN v_quiz_id;
END;
$function$;