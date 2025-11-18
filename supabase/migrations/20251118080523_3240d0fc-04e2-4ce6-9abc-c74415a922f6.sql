-- Drop old get_class_leaderboard function and recreate with new signature
DROP FUNCTION IF EXISTS public.get_class_leaderboard(integer);

CREATE OR REPLACE FUNCTION public.get_class_leaderboard(class_num integer)
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
  GROUP BY p.id, p.username, p.league, p.current_streak
  ORDER BY total_score DESC, avg_score DESC
  LIMIT 100;
$function$;