import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getLeagueIcon, getLeagueColor, getNextLeague } from "@/utils/pointsCalculator";

interface LeagueCardProps {
  league: string;
  leaguePoints: number;
}

const LeagueCard = ({ league, leaguePoints }: LeagueCardProps) => {
  const nextLeague = getNextLeague(league);
  const leagueColor = getLeagueColor(league);
  const leagueIcon = getLeagueIcon(league);

  const getProgressToNextLeague = () => {
    if (!nextLeague) return 100;
    
    let currentMin = 0;
    switch (league) {
      case 'bronze': currentMin = 0; break;
      case 'silver': currentMin = 500; break;
      case 'gold': currentMin = 1000; break;
    }
    
    const progress = ((leaguePoints - currentMin) / (nextLeague.pointsNeeded - currentMin)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  return (
    <Card className="bg-gradient-to-br from-background to-muted/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <span style={{ color: leagueColor }}>{leagueIcon}</span>
          <span className="capitalize">{league} League</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">League Points</span>
            <span className="text-2xl font-bold text-primary">{leaguePoints}</span>
          </div>
          
          {nextLeague && (
            <>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>अगली League तक</span>
                  <span>{nextLeague.pointsNeeded - leaguePoints} points</span>
                </div>
                <Progress value={getProgressToNextLeague()} className="h-2" />
              </div>
              <p className="text-xs text-center text-muted-foreground">
                {getLeagueIcon(nextLeague.name)} {nextLeague.name.charAt(0).toUpperCase() + nextLeague.name.slice(1)} League में पहुंचें
              </p>
            </>
          )}
          
          {!nextLeague && (
            <p className="text-xs text-center text-primary font-semibold">
              🎉 आप सर्वोच्च League में हैं!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeagueCard;
