import UserAvatar from "./UserAvatar";
import { Progress } from "./ui/progress";

interface BattleScoreBoardProps {
  hostUsername: string;
  hostId: string;
  hostScore: number;
  opponentUsername: string;
  opponentId: string;
  opponentScore: number;
  totalQuestions: number;
  currentQuestion: number;
  isHost: boolean;
}

export const BattleScoreBoard = ({
  hostUsername,
  hostId,
  hostScore,
  opponentUsername,
  opponentId,
  opponentScore,
  totalQuestions,
  currentQuestion,
  isHost,
}: BattleScoreBoardProps) => {
  const maxScore = totalQuestions;
  const hostProgress = (hostScore / maxScore) * 100;
  const opponentProgress = (opponentScore / maxScore) * 100;

  return (
    <div className="bg-card rounded-xl p-4 border border-border shadow-lg">
      <div className="flex items-center justify-between gap-4">
        {/* Host Side */}
        <div className={`flex-1 ${isHost ? "order-1" : "order-3"}`}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <UserAvatar userId={hostId} size="sm" />
              {isHost && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-primary-foreground font-bold">YOU</span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate text-foreground">{hostUsername}</p>
              <div className="flex items-center gap-2">
                <Progress value={hostProgress} className="h-2 flex-1" />
                <span className="text-lg font-bold text-primary">{hostScore}</span>
              </div>
            </div>
          </div>
        </div>

        {/* VS Badge */}
        <div className="order-2 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
            <span className="text-white font-bold text-xs">VS</span>
          </div>
          <span className="text-xs text-muted-foreground mt-1">
            Q{currentQuestion}/{totalQuestions}
          </span>
        </div>

        {/* Opponent Side */}
        <div className={`flex-1 ${isHost ? "order-3" : "order-1"}`}>
          <div className="flex items-center gap-3 flex-row-reverse">
            <div className="relative">
              <UserAvatar userId={opponentId} size="sm" />
              {!isHost && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-primary-foreground font-bold">YOU</span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate text-right text-foreground">{opponentUsername}</p>
              <div className="flex items-center gap-2 flex-row-reverse">
                <Progress value={opponentProgress} className="h-2 flex-1" />
                <span className="text-lg font-bold text-destructive">{opponentScore}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleScoreBoard;
