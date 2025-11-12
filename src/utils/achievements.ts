import { supabase } from "@/integrations/supabase/client";

export type AchievementType = 
  | "first_quiz"
  | "perfect_score"
  | "quiz_master_10"
  | "quiz_master_25"
  | "quiz_master_50"
  | "subject_expert"
  | "speed_demon"
  | "consistent_learner";

export interface Achievement {
  type: AchievementType;
  name: string;
  description: string;
  icon: string;
}

export const ACHIEVEMENTS: Record<AchievementType, Achievement> = {
  first_quiz: {
    type: "first_quiz",
    name: "पहला कदम",
    description: "पहली बार क्विज़ पूरी की",
    icon: "🎯"
  },
  perfect_score: {
    type: "perfect_score",
    name: "परफेक्ट स्कोर",
    description: "100% अंक प्राप्त किए",
    icon: "💯"
  },
  quiz_master_10: {
    type: "quiz_master_10",
    name: "क्विज़ मास्टर",
    description: "10 क्विज़ पूरी कीं",
    icon: "🏅"
  },
  quiz_master_25: {
    type: "quiz_master_25",
    name: "क्विज़ चैंपियन",
    description: "25 क्विज़ पूरी कीं",
    icon: "🏆"
  },
  quiz_master_50: {
    type: "quiz_master_50",
    name: "क्विज़ लीजेंड",
    description: "50 क्विज़ पूरी कीं",
    icon: "👑"
  },
  subject_expert: {
    type: "subject_expert",
    name: "विषय विशेषज्ञ",
    description: "एक विषय में 5 क्विज़ 80% से अधिक अंकों के साथ पूरी कीं",
    icon: "📚"
  },
  speed_demon: {
    type: "speed_demon",
    name: "तेज़ दिमाग",
    description: "5 मिनट से कम समय में क्विज़ पूरी की",
    icon: "⚡"
  },
  consistent_learner: {
    type: "consistent_learner",
    name: "नियमित अध्ययन",
    description: "लगातार 7 दिन क्विज़ हल की",
    icon: "📅"
  }
};

export async function checkAndAwardAchievements(
  userId: string,
  quizData: {
    score: number;
    totalQuestions: number;
    subject: string;
    timeTaken?: number;
  }
) {
  const achievements: AchievementType[] = [];

  // Check for perfect score
  if (quizData.score === quizData.totalQuestions) {
    achievements.push("perfect_score");
  }

  // Check for speed demon (less than 5 minutes = 300 seconds)
  if (quizData.timeTaken && quizData.timeTaken < 300) {
    achievements.push("speed_demon");
  }

  // Get user's quiz history
  const { data: history } = await supabase
    .from("quiz_history")
    .select("*")
    .eq("user_id", userId);

  if (history) {
    const totalQuizzes = history.length;

    // First quiz achievement
    if (totalQuizzes === 1) {
      achievements.push("first_quiz");
    }

    // Quiz master achievements
    if (totalQuizzes === 10) {
      achievements.push("quiz_master_10");
    } else if (totalQuizzes === 25) {
      achievements.push("quiz_master_25");
    } else if (totalQuizzes === 50) {
      achievements.push("quiz_master_50");
    }

    // Subject expert - 5 quizzes in same subject with 80%+ score
    const subjectQuizzes = history.filter(q => q.subject === quizData.subject);
    const highScoreQuizzes = subjectQuizzes.filter(
      q => (q.score / q.total_questions) >= 0.8
    );
    if (highScoreQuizzes.length >= 5) {
      achievements.push("subject_expert");
    }
  }

  // Check which achievements user already has
  const { data: existingAchievements } = await supabase
    .from("achievements")
    .select("achievement_type")
    .eq("user_id", userId);

  const existingTypes = new Set(
    existingAchievements?.map(a => a.achievement_type) || []
  );

  // Award new achievements
  const newAchievements = achievements.filter(
    type => !existingTypes.has(type)
  );

  if (newAchievements.length > 0) {
    const achievementRecords = newAchievements.map(type => ({
      user_id: userId,
      achievement_type: type,
      achievement_name: ACHIEVEMENTS[type].name,
      achievement_description: ACHIEVEMENTS[type].description,
      metadata: { icon: ACHIEVEMENTS[type].icon }
    }));

    await supabase.from("achievements").insert(achievementRecords);
  }

  return newAchievements.map(type => ACHIEVEMENTS[type]);
}

export async function getUserAchievements(userId: string) {
  const { data } = await supabase
    .from("achievements")
    .select("*")
    .eq("user_id", userId)
    .order("earned_at", { ascending: false });

  return data || [];
}
