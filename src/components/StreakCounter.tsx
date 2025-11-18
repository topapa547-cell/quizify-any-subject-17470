import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

interface StreakCounterProps {
  currentStreak: number;
  longestStreak: number;
}

const StreakCounter = ({ currentStreak, longestStreak }: StreakCounterProps) => {
  return (
    <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Flame className="w-8 h-8 text-orange-500 fill-orange-500" />
              {currentStreak > 0 && (
                <div className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {currentStreak}
                </div>
              )}
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">{currentStreak}</div>
              <p className="text-xs text-muted-foreground">दिन की Streak</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-semibold text-muted-foreground">{longestStreak}</div>
            <p className="text-xs text-muted-foreground">सर्वश्रेष्ठ Streak</p>
          </div>
        </div>
        
        {currentStreak > 7 && (
          <div className="mt-3 pt-3 border-t border-orange-500/20">
            <p className="text-xs text-center text-orange-600 font-semibold">
              🎉 +20% Bonus Points सक्रिय है!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StreakCounter;
