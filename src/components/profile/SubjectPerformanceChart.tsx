import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { BookOpen } from "lucide-react";
import { SubjectStats } from "@/utils/profileAnalytics";

interface SubjectPerformanceChartProps {
  data: SubjectStats[];
}

const SubjectPerformanceChart = ({ data }: SubjectPerformanceChartProps) => {
  if (data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5 text-primary" />
            विषयवार प्रदर्शन
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            कोई डेटा नहीं - क्विज़ खेलें!
          </p>
        </CardContent>
      </Card>
    );
  }

  const strongest = data[0];
  const weakest = data[data.length - 1];

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            विषयवार प्रदर्शन
          </span>
          <div className="flex gap-2">
            {data.length > 1 && (
              <>
                <Badge variant="default" className="bg-green-500 text-xs">
                  💪 {strongest.subjectHindi}
                </Badge>
                <Badge variant="outline" className="text-orange-600 border-orange-400 text-xs">
                  📚 {weakest.subjectHindi}
                </Badge>
              </>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30 }}>
              <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <YAxis 
                type="category" 
                dataKey="subjectHindi" 
                width={80}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value: number) => [`${value}%`, 'Accuracy']}
                labelFormatter={(label) => label}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="accuracy" radius={[0, 4, 4, 0]}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.accuracy >= 70 ? 'hsl(142, 76%, 36%)' : entry.accuracy >= 50 ? 'hsl(48, 96%, 53%)' : 'hsl(0, 84%, 60%)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 text-xs">
          {data.slice(0, 3).map((stat) => (
            <div key={stat.subject} className="p-2 bg-muted/50 rounded-lg text-center">
              <p className="font-medium">{stat.subjectHindi}</p>
              <p className="text-muted-foreground">{stat.totalQuizzes} क्विज़ • {stat.totalPoints} अंक</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectPerformanceChart;
