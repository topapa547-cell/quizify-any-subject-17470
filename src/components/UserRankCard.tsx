import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { getLeagueIcon } from "@/utils/pointsCalculator";

interface UserRankCardProps {
  rank: number;
  username: string;
  totalScore: number;
  league: string;
  currentStreak: number;
}

const UserRankCard = ({ rank, username, totalScore, league, currentStreak }: UserRankCardProps) => {
  return (
    <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border-primary/50 sticky top-0 z-10">
      <CardContent className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
              #{rank}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{username}</span>
                <span className="text-xs bg-primary/20 px-2 py-0.5 rounded">आप</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-muted-foreground">{getLeagueIcon(league)} {league}</span>
                {currentStreak > 0 && (
                  <span className="text-sm text-orange-600">🔥 {currentStreak}</span>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-1 text-primary font-bold text-xl">
              <Trophy className="w-5 h-5" />
              {totalScore}
            </div>
            <p className="text-xs text-muted-foreground">कुल अंक</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserRankCard;
