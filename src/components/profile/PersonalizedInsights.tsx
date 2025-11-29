import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { PersonalizedInsight } from "@/utils/profileAnalytics";

interface PersonalizedInsightsProps {
  insights: PersonalizedInsight[];
}

const PersonalizedInsights = ({ insights }: PersonalizedInsightsProps) => {
  if (insights.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lightbulb className="h-5 w-5 text-primary" />
            व्यक्तिगत सुझाव
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-4">
            अधिक क्विज़ खेलें सुझाव पाने के लिए!
          </p>
        </CardContent>
      </Card>
    );
  }

  const getTypeStyle = (type: PersonalizedInsight['type']) => {
    switch (type) {
      case 'strength':
        return 'bg-green-500/10 border-green-500/30';
      case 'improvement':
        return 'bg-orange-500/10 border-orange-500/30';
      case 'achievement':
        return 'bg-yellow-500/10 border-yellow-500/30';
      case 'tip':
        return 'bg-blue-500/10 border-blue-500/30';
      default:
        return 'bg-muted/50 border-border';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          व्यक्तिगत सुझाव
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border ${getTypeStyle(insight.type)}`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{insight.icon}</span>
              <div>
                <h4 className="font-semibold text-sm">{insight.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PersonalizedInsights;
