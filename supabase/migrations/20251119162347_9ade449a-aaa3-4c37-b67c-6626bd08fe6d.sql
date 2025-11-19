-- Update calculate_quiz_points function with new balanced formula
CREATE OR REPLACE FUNCTION public.calculate_quiz_points(
  p_score integer,
  p_total_questions integer,
  p_difficulty text,
  p_time_taken integer,
  p_current_streak integer
)
RETURNS TABLE(
  points_earned integer, 
  speed_bonus integer, 
  difficulty_multiplier numeric
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  v_base_points integer;
  v_speed_bonus decimal := 0.0;
  v_accuracy_bonus decimal := 0.0;
  v_accuracy_percent decimal;
  v_streak_bonus decimal := 1.0;
  v_avg_time_per_question decimal;
  v_total_points integer;
BEGIN
  -- Base points: 1 per correct answer
  v_base_points := p_score * 1;
  
  -- Calculate average time per question
  v_avg_time_per_question := p_time_taken::decimal / NULLIF(p_total_questions, 0);
  
  -- Speed bonus per correct answer based on average time
  IF v_avg_time_per_question < 10 THEN
    v_speed_bonus := p_score * 0.5;
  ELSIF v_avg_time_per_question < 20 THEN
    v_speed_bonus := p_score * 0.3;
  ELSIF v_avg_time_per_question < 30 THEN
    v_speed_bonus := p_score * 0.1;
  ELSE
    v_speed_bonus := 0;
  END IF;
  
  -- Calculate accuracy percentage
  v_accuracy_percent := (p_score::decimal / NULLIF(p_total_questions, 0)) * 100;
  
  -- Accuracy bonus based on percentage
  IF v_accuracy_percent >= 90 THEN
    v_accuracy_bonus := v_base_points * 0.20;
  ELSIF v_accuracy_percent >= 80 THEN
    v_accuracy_bonus := v_base_points * 0.10;
  ELSE
    v_accuracy_bonus := 0;
  END IF;
  
  -- Streak bonus (20% extra if streak > 7)
  IF p_current_streak > 7 THEN
    v_streak_bonus := 1.2;
  END IF;
  
  -- Calculate total points
  v_total_points := ROUND((v_base_points + v_speed_bonus + v_accuracy_bonus) * v_streak_bonus);
  
  -- Return values (reusing existing columns for compatibility)
  -- difficulty_multiplier now stores accuracy_bonus
  RETURN QUERY SELECT 
    v_total_points, 
    ROUND(v_speed_bonus)::integer,
    v_accuracy_bonus;
END;
$function$;