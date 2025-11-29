import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { ActivityDay } from "@/utils/profileAnalytics";

interface ActivityCalendarProps {
  data: ActivityDay[];
}

const ActivityCalendar = ({ data }: ActivityCalendarProps) => {
  const getIntensityColor = (intensity: number) => {
    switch (intensity) {
      case 0: return 'bg-muted';
      case 1: return 'bg-green-200 dark:bg-green-900';
      case 2: return 'bg-green-400 dark:bg-green-700';
      case 3: return 'bg-green-500 dark:bg-green-600';
      case 4: return 'bg-green-600 dark:bg-green-500';
      default: return 'bg-muted';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('hi-IN', { day: 'numeric', month: 'short' });
  };

  const totalQuizzes = data.reduce((sum, d) => sum + d.quizCount, 0);
  const totalPoints = data.reduce((sum, d) => sum + d.points, 0);
  const activeDays = data.filter(d => d.quizCount > 0).length;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calendar className="h-5 w-5 text-primary" />
          30 दिन की गतिविधि
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Activity Grid */}
        <div className="grid grid-cols-10 gap-1 mb-4">
          {data.map((day, index) => (
            <div
              key={index}
              className={`w-full aspect-square rounded-sm ${getIntensityColor(day.intensity)} cursor-pointer transition-transform hover:scale-110`}
              title={`${formatDate(day.date)}: ${day.quizCount} क्विज़, ${day.points} अंक`}
            />
          ))}
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span>कम</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(i => (
              <div key={i} className={`w-3 h-3 rounded-sm ${getIntensityColor(i)}`} />
            ))}
          </div>
          <span>ज़्यादा</span>
        </div>
        
        {/* Summary */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 bg-muted/50 rounded-lg">
            <p className="text-lg font-bold">{activeDays}</p>
            <p className="text-xs text-muted-foreground">सक्रिय दिन</p>
          </div>
          <div className="p-2 bg-muted/50 rounded-lg">
            <p className="text-lg font-bold">{totalQuizzes}</p>
            <p className="text-xs text-muted-foreground">कुल क्विज़</p>
          </div>
          <div className="p-2 bg-muted/50 rounded-lg">
            <p className="text-lg font-bold">{totalPoints}</p>
            <p className="text-xs text-muted-foreground">कुल अंक</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCalendar;
