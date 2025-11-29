import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Target } from "lucide-react";
import { DifficultyStats } from "@/utils/profileAnalytics";

interface DifficultyPieChartProps {
  data: DifficultyStats[];
}

const DifficultyPieChart = ({ data }: DifficultyPieChartProps) => {
  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="h-5 w-5 text-primary" />
            कठिनाई स्तर
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            कोई डेटा नहीं
          </p>
        </CardContent>
      </Card>
    );
  }

  // Filter out 'all' difficulty and prepare chart data
  const chartData = data
    .filter(d => d.difficulty !== 'all')
    .map(d => ({
      name: d.difficultyHindi,
      value: d.count,
      accuracy: d.accuracy,
      fill: d.color,
    }));

  const totalQuizzes = chartData.reduce((sum, d) => sum + d.value, 0);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Target className="h-5 w-5 text-primary" />
          कठिनाई स्तर
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={4}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number, name: string, props: any) => [
                  `${value} क्विज़ (${props.payload.accuracy}% accuracy)`, 
                  name
                ]}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend with accuracy */}
        <div className="flex justify-center gap-4 mt-2">
          {chartData.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.fill }}
              />
              <span>{item.name}</span>
              <span className="text-muted-foreground">({item.accuracy}%)</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DifficultyPieChart;
