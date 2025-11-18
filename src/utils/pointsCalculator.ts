export interface QuizPointsResult {
  pointsEarned: number;
  speedBonus: number;
  difficultyMultiplier: number;
  breakdown: {
    basePoints: number;
    speedBonus: number;
    difficultyMultiplier: number;
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
  // Base points: 10 per correct answer
  const basePoints = score * 10;
  
  // Calculate average time per question
  const avgTimePerQuestion = timeTaken / (totalQuestions || 1);
  
  // Speed bonus per correct answer
  let speedBonus = 0;
  if (avgTimePerQuestion < 10) {
    speedBonus = score * 5;
  } else if (avgTimePerQuestion < 20) {
    speedBonus = score * 3;
  } else if (avgTimePerQuestion < 30) {
    speedBonus = score * 1;
  }
  
  // Difficulty multiplier
  let difficultyMultiplier = 1.0;
  switch (difficulty) {
    case 'easy':
      difficultyMultiplier = 1.0;
      break;
    case 'medium':
      difficultyMultiplier = 1.5;
      break;
    case 'hard':
      difficultyMultiplier = 2.0;
      break;
    default:
      difficultyMultiplier = 1.0;
  }
  
  // Streak bonus (20% extra if streak > 7)
  const streakBonus = currentStreak > 7 ? 1.2 : 1.0;
  
  // Calculate total points
  const totalPoints = Math.round((basePoints + speedBonus) * difficultyMultiplier * streakBonus);
  
  return {
    pointsEarned: totalPoints,
    speedBonus,
    difficultyMultiplier,
    breakdown: {
      basePoints,
      speedBonus,
      difficultyMultiplier,
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
