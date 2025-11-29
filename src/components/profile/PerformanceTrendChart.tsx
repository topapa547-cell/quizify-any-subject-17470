import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, AreaChart } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";
import { WeeklyTrend } from "@/utils/profileAnalytics";

interface PerformanceTrendChartProps {
  data: WeeklyTrend[];
}

const PerformanceTrendChart = ({ data }: PerformanceTrendChartProps) => {
  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            साप्ताहिक प्रगति
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            अभी तक पर्याप्त डेटा नहीं
          </p>
        </CardContent>
      </Card>
    );
  }

  const latestScore = data[data.length - 1]?.avgScore || 0;
  const previousScore = data.length > 1 ? data[data.length - 2]?.avgScore || 0 : 0;
  const trend = latestScore - previousScore;
  const isImproving = trend >= 0;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            साप्ताहिक प्रगति
          </span>
          <div className={`flex items-center gap-1 text-sm ${isImproving ? 'text-green-500' : 'text-red-500'}`}>
            {isImproving ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            {Math.abs(trend)}%
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="weekLabel" 
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                domain={[0, 100]} 
                tick={{ fontSize: 10 }}
                tickFormatter={(v) => `${v}%`}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'औसत स्कोर']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="avgScore" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fill="url(#colorScore)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Weekly Summary */}
        <div className="flex justify-between mt-4 text-xs text-muted-foreground">
          {data.map((week, i) => (
            <div key={i} className="text-center">
              <p className="font-medium text-foreground">{week.quizCount}</p>
              <p>क्विज़</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceTrendChart;
