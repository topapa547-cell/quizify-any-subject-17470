import { supabase } from "@/integrations/supabase/client";

export type AchievementType = 
  | "first_quiz"
  | "perfect_score"
  | "quiz_master_10"
  | "quiz_master_25"
  | "quiz_master_50"
  | "subject_expert"
  | "speed_demon"
  | "consistent_learner"
  // New achievements
  | "game_master"
  | "fire_streak"
  | "diamond_league"
  | "superstar"
  | "rocket_start"
  | "bookworm"
  | "sharpshooter"
  | "all_rounder"
  | "game_king"
  | "notes_hero"
  | "daily_champion"
  | "it_expert";

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
  },
  // 12 New Achievements
  game_master: {
    type: "game_master",
    name: "गेम मास्टर",
    description: "10 games खेले",
    icon: "🎮"
  },
  fire_streak: {
    type: "fire_streak",
    name: "फायर स्ट्रीक",
    description: "14 दिन लगातार अभ्यास किया",
    icon: "🔥"
  },
  diamond_league: {
    type: "diamond_league",
    name: "हीरे की लीग",
    description: "Diamond League में पहुंचे",
    icon: "💎"
  },
  superstar: {
    type: "superstar",
    name: "सुपरस्टार",
    description: "1000 पॉइंट्स कमाए",
    icon: "🌟"
  },
  rocket_start: {
    type: "rocket_start",
    name: "रॉकेट स्टार्ट",
    description: "पहले दिन 5 क्विज़ पूरी कीं",
    icon: "🚀"
  },
  bookworm: {
    type: "bookworm",
    name: "बुकवर्म",
    description: "50 NCERT Solutions देखे",
    icon: "📖"
  },
  sharpshooter: {
    type: "sharpshooter",
    name: "शार्पशूटर",
    description: "लगातार 20 सही उत्तर दिए",
    icon: "🎯"
  },
  all_rounder: {
    type: "all_rounder",
    name: "ऑल-राउंडर",
    description: "सभी 6 विषयों में क्विज़ खेली",
    icon: "🌈"
  },
  game_king: {
    type: "game_king",
    name: "खेल राजा",
    description: "सभी 5 games खेले",
    icon: "🎪"
  },
  notes_hero: {
    type: "notes_hero",
    name: "नोट्स नायक",
    description: "30 Key Points देखे",
    icon: "📝"
  },
  daily_champion: {
    type: "daily_champion",
    name: "दैनिक चैंपियन",
    description: "7 Daily Challenges पूरे किए",
    icon: "⭐"
  },
  it_expert: {
    type: "it_expert",
    name: "IT विशेषज्ञ",
    description: "IT में 10 क्विज़ 90%+ अंकों के साथ पूरी कीं",
    icon: "💻"
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

  // Get user profile for streak and league
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

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

    // IT Expert - 10 IT quizzes with 90%+ score
    const itQuizzes = history.filter(q => q.subject === "it_ites");
    const itHighScoreQuizzes = itQuizzes.filter(
      q => (q.score / q.total_questions) >= 0.9
    );
    if (itHighScoreQuizzes.length >= 10) {
      achievements.push("it_expert");
    }

    // All-rounder - quizzes in all 6 subjects
    const uniqueSubjects = new Set(history.map(q => q.subject));
    const requiredSubjects = ["math", "science", "social", "english", "hindi", "it_ites"];
    if (requiredSubjects.every(s => uniqueSubjects.has(s))) {
      achievements.push("all_rounder");
    }

    // Rocket start - 5 quizzes on first day
    const firstQuizDate = history[0]?.created_at?.split('T')[0];
    const firstDayQuizzes = history.filter(
      q => q.created_at?.split('T')[0] === firstQuizDate
    );
    if (firstDayQuizzes.length >= 5) {
      achievements.push("rocket_start");
    }

    // Calculate total points for superstar
    const totalPoints = history.reduce((sum, q) => sum + (q.points_earned || 0), 0);
    if (totalPoints >= 1000) {
      achievements.push("superstar");
    }
  }

  // Profile-based achievements
  if (profile) {
    // Fire streak - 14 day streak
    if (profile.current_streak && profile.current_streak >= 14) {
      achievements.push("fire_streak");
    }

    // Consistent learner - 7 day streak
    if (profile.current_streak && profile.current_streak >= 7) {
      achievements.push("consistent_learner");
    }

    // Diamond league
    if (profile.league === "diamond") {
      achievements.push("diamond_league");
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

// Award game-related achievements
export async function checkGameAchievements(userId: string, gamesPlayed: number, uniqueGamesPlayed: string[]) {
  const achievements: AchievementType[] = [];

  // Game master - 10 games played
  if (gamesPlayed >= 10) {
    achievements.push("game_master");
  }

  // Game king - all 5 games played
  const allGames = ["match-pair", "quick-fire", "memory-cards", "true-false", "fill-blanks"];
  if (allGames.every(g => uniqueGamesPlayed.includes(g))) {
    achievements.push("game_king");
  }

  // Check existing and award new
  const { data: existing } = await supabase
    .from("achievements")
    .select("achievement_type")
    .eq("user_id", userId);

  const existingTypes = new Set(existing?.map(a => a.achievement_type) || []);
  const newAchievements = achievements.filter(type => !existingTypes.has(type));

  if (newAchievements.length > 0) {
    const records = newAchievements.map(type => ({
      user_id: userId,
      achievement_type: type,
      achievement_name: ACHIEVEMENTS[type].name,
      achievement_description: ACHIEVEMENTS[type].description,
      metadata: { icon: ACHIEVEMENTS[type].icon }
    }));

    await supabase.from("achievements").insert(records);
  }

  return newAchievements.map(type => ACHIEVEMENTS[type]);
}
