import { supabase } from "@/integrations/supabase/client";

export interface SubjectStats {
  subject: string;
  subjectHindi: string;
  totalQuizzes: number;
  totalCorrect: number;
  totalQuestions: number;
  accuracy: number;
  avgTime: number;
  totalPoints: number;
  color: string;
}

export interface WeeklyTrend {
  week: string;
  weekLabel: string;
  avgScore: number;
  quizCount: number;
  totalPoints: number;
}

export interface DifficultyStats {
  difficulty: string;
  difficultyHindi: string;
  count: number;
  accuracy: number;
  color: string;
}

export interface SpeedStats {
  avgTimePerQuestion: number;
  fastestQuiz: number;
  slowestQuiz: number;
  totalSpeedBonus: number;
  speedCategory: 'fast' | 'medium' | 'slow';
}

export interface ActivityDay {
  date: string;
  quizCount: number;
  points: number;
  intensity: number; // 0-4 for heatmap
}

export interface PersonalizedInsight {
  type: 'strength' | 'improvement' | 'tip' | 'achievement';
  icon: string;
  title: string;
  description: string;
}

const subjectConfig: Record<string, { hindi: string; color: string }> = {
  math: { hindi: 'गणित', color: 'hsl(var(--chart-1))' },
  science: { hindi: 'विज्ञान', color: 'hsl(var(--chart-2))' },
  english: { hindi: 'अंग्रेज़ी', color: 'hsl(var(--chart-3))' },
  hindi: { hindi: 'हिंदी', color: 'hsl(var(--chart-4))' },
  social_science: { hindi: 'सामाजिक विज्ञान', color: 'hsl(var(--chart-5))' },
  it_ites: { hindi: 'IT/ITes', color: 'hsl(210, 80%, 55%)' },
  all: { hindi: 'सभी विषय', color: 'hsl(var(--primary))' },
};

const difficultyConfig: Record<string, { hindi: string; color: string }> = {
  easy: { hindi: 'आसान', color: 'hsl(142, 76%, 36%)' },
  medium: { hindi: 'मध्यम', color: 'hsl(48, 96%, 53%)' },
  hard: { hindi: 'कठिन', color: 'hsl(0, 84%, 60%)' },
  all: { hindi: 'सभी', color: 'hsl(var(--muted))' },
};

export async function getSubjectWiseStats(userId: string): Promise<SubjectStats[]> {
  const { data: quizHistory } = await supabase
    .from("quiz_history")
    .select("*")
    .eq("user_id", userId);

  if (!quizHistory || quizHistory.length === 0) return [];

  const subjectMap = new Map<string, {
    totalQuizzes: number;
    totalCorrect: number;
    totalQuestions: number;
    totalTime: number;
    totalPoints: number;
  }>();

  quizHistory.forEach(quiz => {
    const subject = quiz.subject || 'all';
    const existing = subjectMap.get(subject) || {
      totalQuizzes: 0,
      totalCorrect: 0,
      totalQuestions: 0,
      totalTime: 0,
      totalPoints: 0,
    };

    existing.totalQuizzes += 1;
    existing.totalCorrect += quiz.score || 0;
    existing.totalQuestions += quiz.total_questions || 0;
    existing.totalTime += quiz.time_taken || 0;
    existing.totalPoints += quiz.points_earned || 0;

    subjectMap.set(subject, existing);
  });

  return Array.from(subjectMap.entries()).map(([subject, stats]) => ({
    subject,
    subjectHindi: subjectConfig[subject]?.hindi || subject,
    totalQuizzes: stats.totalQuizzes,
    totalCorrect: stats.totalCorrect,
    totalQuestions: stats.totalQuestions,
    accuracy: stats.totalQuestions > 0 
      ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) 
      : 0,
    avgTime: stats.totalQuestions > 0 
      ? Math.round(stats.totalTime / stats.totalQuestions) 
      : 0,
    totalPoints: stats.totalPoints,
    color: subjectConfig[subject]?.color || 'hsl(var(--muted))',
  })).sort((a, b) => b.accuracy - a.accuracy);
}

export async function getPerformanceTrend(userId: string): Promise<WeeklyTrend[]> {
  const { data: quizHistory } = await supabase
    .from("quiz_history")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  if (!quizHistory || quizHistory.length === 0) return [];

  const weekMap = new Map<string, {
    scores: number[];
    points: number;
    count: number;
  }>();

  const now = new Date();
  const fourWeeksAgo = new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000);

  quizHistory.forEach(quiz => {
    const quizDate = new Date(quiz.created_at);
    if (quizDate < fourWeeksAgo) return;

    const weekStart = getWeekStart(quizDate);
    const weekKey = weekStart.toISOString().split('T')[0];
    
    const existing = weekMap.get(weekKey) || { scores: [], points: 0, count: 0 };
    const scorePercent = quiz.total_questions > 0 
      ? (quiz.score / quiz.total_questions) * 100 
      : 0;
    
    existing.scores.push(scorePercent);
    existing.points += quiz.points_earned || 0;
    existing.count += 1;
    
    weekMap.set(weekKey, existing);
  });

  const weekLabels = ['4 सप्ताह पहले', '3 सप्ताह पहले', '2 सप्ताह पहले', 'पिछला सप्ताह'];
  
  return Array.from(weekMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-4)
    .map(([week, stats], index) => ({
      week,
      weekLabel: weekLabels[index] || `Week ${index + 1}`,
      avgScore: Math.round(stats.scores.reduce((a, b) => a + b, 0) / stats.scores.length),
      quizCount: stats.count,
      totalPoints: stats.points,
    }));
}

function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

export async function getDifficultyStats(userId: string): Promise<DifficultyStats[]> {
  const { data: quizHistory } = await supabase
    .from("quiz_history")
    .select("*")
    .eq("user_id", userId);

  if (!quizHistory || quizHistory.length === 0) return [];

  const difficultyMap = new Map<string, {
    count: number;
    correct: number;
    total: number;
  }>();

  quizHistory.forEach(quiz => {
    const difficulty = quiz.difficulty || 'all';
    const existing = difficultyMap.get(difficulty) || { count: 0, correct: 0, total: 0 };
    
    existing.count += 1;
    existing.correct += quiz.score || 0;
    existing.total += quiz.total_questions || 0;
    
    difficultyMap.set(difficulty, existing);
  });

  return Array.from(difficultyMap.entries()).map(([difficulty, stats]) => ({
    difficulty,
    difficultyHindi: difficultyConfig[difficulty]?.hindi || difficulty,
    count: stats.count,
    accuracy: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
    color: difficultyConfig[difficulty]?.color || 'hsl(var(--muted))',
  }));
}

export async function getSpeedStats(userId: string): Promise<SpeedStats> {
  const { data: quizHistory } = await supabase
    .from("quiz_history")
    .select("*")
    .eq("user_id", userId);

  if (!quizHistory || quizHistory.length === 0) {
    return {
      avgTimePerQuestion: 0,
      fastestQuiz: 0,
      slowestQuiz: 0,
      totalSpeedBonus: 0,
      speedCategory: 'medium',
    };
  }

  const timesPerQuestion = quizHistory
    .filter(q => q.time_taken && q.total_questions)
    .map(q => q.time_taken! / q.total_questions);

  const avgTime = timesPerQuestion.length > 0
    ? Math.round(timesPerQuestion.reduce((a, b) => a + b, 0) / timesPerQuestion.length)
    : 0;

  const quizTimes = quizHistory
    .filter(q => q.time_taken)
    .map(q => q.time_taken!);

  const totalSpeedBonus = quizHistory.reduce((sum, q) => sum + (q.speed_bonus || 0), 0);

  let speedCategory: 'fast' | 'medium' | 'slow' = 'medium';
  if (avgTime < 15) speedCategory = 'fast';
  else if (avgTime > 30) speedCategory = 'slow';

  return {
    avgTimePerQuestion: avgTime,
    fastestQuiz: quizTimes.length > 0 ? Math.min(...quizTimes) : 0,
    slowestQuiz: quizTimes.length > 0 ? Math.max(...quizTimes) : 0,
    totalSpeedBonus,
    speedCategory,
  };
}

export async function getActivityData(userId: string): Promise<ActivityDay[]> {
  const { data: quizHistory } = await supabase
    .from("quiz_history")
    .select("created_at, points_earned")
    .eq("user_id", userId);

  const { data: dailyChallenges } = await supabase
    .from("daily_challenges")
    .select("challenge_date, points_earned")
    .eq("user_id", userId);

  const activityMap = new Map<string, { quizCount: number; points: number }>();

  // Last 30 days
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    activityMap.set(dateKey, { quizCount: 0, points: 0 });
  }

  quizHistory?.forEach(quiz => {
    const dateKey = new Date(quiz.created_at).toISOString().split('T')[0];
    if (activityMap.has(dateKey)) {
      const existing = activityMap.get(dateKey)!;
      existing.quizCount += 1;
      existing.points += quiz.points_earned || 0;
    }
  });

  dailyChallenges?.forEach(challenge => {
    const dateKey = challenge.challenge_date;
    if (activityMap.has(dateKey)) {
      const existing = activityMap.get(dateKey)!;
      existing.quizCount += 1;
      existing.points += challenge.points_earned || 0;
    }
  });

  return Array.from(activityMap.entries()).map(([date, stats]) => {
    let intensity = 0;
    if (stats.quizCount >= 5) intensity = 4;
    else if (stats.quizCount >= 3) intensity = 3;
    else if (stats.quizCount >= 2) intensity = 2;
    else if (stats.quizCount >= 1) intensity = 1;

    return {
      date,
      quizCount: stats.quizCount,
      points: stats.points,
      intensity,
    };
  });
}

export async function getPersonalizedInsights(
  userId: string,
  subjectStats: SubjectStats[],
  speedStats: SpeedStats,
  streak: number
): Promise<PersonalizedInsight[]> {
  const insights: PersonalizedInsight[] = [];

  // Strongest subject
  if (subjectStats.length > 0) {
    const strongest = subjectStats[0];
    if (strongest.accuracy >= 70) {
      insights.push({
        type: 'strength',
        icon: '💪',
        title: `${strongest.subjectHindi} में माहिर!`,
        description: `${strongest.accuracy}% accuracy के साथ यह आपका सबसे मजबूत विषय है।`,
      });
    }
  }

  // Weakest subject - needs improvement
  if (subjectStats.length > 1) {
    const weakest = subjectStats[subjectStats.length - 1];
    if (weakest.accuracy < 60) {
      insights.push({
        type: 'improvement',
        icon: '📚',
        title: `${weakest.subjectHindi} पर ध्यान दें`,
        description: `${weakest.accuracy}% accuracy - इस विषय में अधिक अभ्यास करें।`,
      });
    }
  }

  // Speed insight
  if (speedStats.avgTimePerQuestion > 0) {
    if (speedStats.speedCategory === 'fast') {
      insights.push({
        type: 'achievement',
        icon: '⚡',
        title: 'Speed Star!',
        description: `औसत ${speedStats.avgTimePerQuestion} सेकंड/प्रश्न - बहुत तेज़!`,
      });
    } else if (speedStats.speedCategory === 'slow') {
      insights.push({
        type: 'tip',
        icon: '⏱️',
        title: 'गति बढ़ाएं',
        description: `औसत ${speedStats.avgTimePerQuestion} सेकंड/प्रश्न - थोड़ा तेज़ करें।`,
      });
    }
  }

  // Streak insight
  if (streak >= 7) {
    insights.push({
      type: 'achievement',
      icon: '🔥',
      title: `${streak} दिन की Streak!`,
      description: 'शानदार! 20% बोनस अंक मिल रहे हैं।',
    });
  } else if (streak > 0) {
    insights.push({
      type: 'tip',
      icon: '🎯',
      title: `${streak} दिन की Streak`,
      description: '7 दिन पूरे करके 20% बोनस पाएं!',
    });
  }

  return insights.slice(0, 4);
}
