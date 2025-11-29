import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Timer, Award } from "lucide-react";
import { SpeedStats } from "@/utils/profileAnalytics";

interface SpeedAnalysisCardProps {
  data: SpeedStats;
}

const SpeedAnalysisCard = ({ data }: SpeedAnalysisCardProps) => {
  const getCategoryBadge = () => {
    switch (data.speedCategory) {
      case 'fast':
        return <Badge className="bg-green-500">⚡ तेज़</Badge>;
      case 'slow':
        return <Badge variant="outline" className="text-orange-600 border-orange-400">🐢 धीमा</Badge>;
      default:
        return <Badge variant="secondary">⏱️ मध्यम</Badge>;
    }
  };

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            गति विश्लेषण
          </span>
          {getCategoryBadge()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {/* Average Time */}
          <div className="p-3 bg-muted/50 rounded-lg text-center">
            <Timer className="h-6 w-6 mx-auto mb-1 text-blue-500" />
            <p className="text-2xl font-bold">{data.avgTimePerQuestion}s</p>
            <p className="text-xs text-muted-foreground">औसत/प्रश्न</p>
          </div>
          
          {/* Speed Bonus */}
          <div className="p-3 bg-muted/50 rounded-lg text-center">
            <Zap className="h-6 w-6 mx-auto mb-1 text-yellow-500" />
            <p className="text-2xl font-bold">+{data.totalSpeedBonus}</p>
            <p className="text-xs text-muted-foreground">Speed Bonus</p>
          </div>
          
          {/* Fastest Quiz */}
          <div className="p-3 bg-green-500/10 rounded-lg text-center">
            <Award className="h-5 w-5 mx-auto mb-1 text-green-500" />
            <p className="text-lg font-semibold text-green-600">{formatTime(data.fastestQuiz)}</p>
            <p className="text-xs text-muted-foreground">सबसे तेज़</p>
          </div>
          
          {/* Slowest Quiz */}
          <div className="p-3 bg-orange-500/10 rounded-lg text-center">
            <Clock className="h-5 w-5 mx-auto mb-1 text-orange-500" />
            <p className="text-lg font-semibold text-orange-600">{formatTime(data.slowestQuiz)}</p>
            <p className="text-xs text-muted-foreground">सबसे धीमा</p>
          </div>
        </div>
        
        {/* Speed Tip */}
        <div className="mt-4 p-2 bg-primary/5 rounded-lg text-xs text-center">
          {data.speedCategory === 'fast' 
            ? '🎉 शानदार गति! Speed bonus कमा रहे हैं।'
            : data.speedCategory === 'slow'
            ? '💡 Tip: 20 सेकंड/प्रश्न से कम में जवाब दें।'
            : '👍 अच्छी गति! थोड़ा और तेज़ करें।'
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeedAnalysisCard;
