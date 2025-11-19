export interface QuizPointsResult {
  pointsEarned: number;
  speedBonus: number;
  accuracyBonus: number;
  breakdown: {
    basePoints: number;
    speedBonus: number;
    accuracyBonus: number;
    streakBonus: number;
    totalPoints: number;
  };
}

export const calculateQuizPoints = (
  score: number,
  totalQuestions: number,
  difficulty: string,
  timeTaken: number,
  currentStreak: number
): QuizPointsResult => {
  // Base points: 1 per correct answer
  const basePoints = score * 1;
  
  // Calculate average time per question
  const avgTimePerQuestion = timeTaken / (totalQuestions || 1);
  
  // Speed bonus per correct answer based on average time
  let speedBonusPerQuestion = 0;
  if (avgTimePerQuestion < 10) {
    speedBonusPerQuestion = 0.5;
  } else if (avgTimePerQuestion < 20) {
    speedBonusPerQuestion = 0.3;
  } else if (avgTimePerQuestion < 30) {
    speedBonusPerQuestion = 0.1;
  }
  const speedBonus = score * speedBonusPerQuestion;
  
  // Calculate accuracy percentage
  const accuracyPercent = (score / totalQuestions) * 100;
  
  // Accuracy bonus based on percentage
  let accuracyMultiplier = 0;
  if (accuracyPercent >= 90) {
    accuracyMultiplier = 0.20;  // 20% bonus
  } else if (accuracyPercent >= 80) {
    accuracyMultiplier = 0.10;  // 10% bonus
  }
  const accuracyBonus = basePoints * accuracyMultiplier;
  
  // Streak bonus (20% extra if streak > 7)
  const streakBonus = currentStreak > 7 ? 1.2 : 1.0;
  
  // Calculate total points
  const totalPoints = Math.round((basePoints + speedBonus + accuracyBonus) * streakBonus);
  
  return {
    pointsEarned: totalPoints,
    speedBonus: parseFloat(speedBonus.toFixed(1)),
    accuracyBonus: parseFloat(accuracyBonus.toFixed(1)),
    breakdown: {
      basePoints,
      speedBonus: parseFloat(speedBonus.toFixed(1)),
      accuracyBonus: parseFloat(accuracyBonus.toFixed(1)),
      streakBonus,
      totalPoints,
    },
  };
};

export const getLeagueName = (leaguePoints: number): string => {
  if (leaguePoints >= 2000) return 'diamond';
  if (leaguePoints >= 1000) return 'gold';
  if (leaguePoints >= 500) return 'silver';
  return 'bronze';
};

export const getLeagueColor = (league: string): string => {
  switch (league) {
    case 'diamond':
      return 'hsl(190, 100%, 85%)';
    case 'gold':
      return 'hsl(43, 100%, 50%)';
    case 'silver':
      return 'hsl(0, 0%, 75%)';
    case 'bronze':
    default:
      return 'hsl(25, 50%, 50%)';
  }
};

export const getLeagueIcon = (league: string): string => {
  switch (league) {
    case 'diamond':
      return '💎';
    case 'gold':
      return '🥇';
    case 'silver':
      return '🥈';
    case 'bronze':
    default:
      return '🥉';
  }
};

export const getNextLeague = (currentLeague: string): { name: string; pointsNeeded: number } | null => {
  switch (currentLeague) {
    case 'bronze':
      return { name: 'silver', pointsNeeded: 500 };
    case 'silver':
      return { name: 'gold', pointsNeeded: 1000 };
    case 'gold':
      return { name: 'diamond', pointsNeeded: 2000 };
    case 'diamond':
    default:
      return null;
  }
};
