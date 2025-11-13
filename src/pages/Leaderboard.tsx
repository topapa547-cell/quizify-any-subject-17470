import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award, Home } from "lucide-react";
import { Label } from "@/components/ui/label";
import BottomNav from "@/components/BottomNav";

interface LeaderboardEntry {
  username: string;
  total_score: number;
  quiz_count: number;
  avg_score: number;
}

const Leaderboard = () => {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState<number | null>(null);
  const [userClass, setUserClass] = useState<number | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/");
      } else {
        const { data: profile } = await supabase
          .from("profiles")
          .select("class_level")
          .eq("id", user.id)
          .single();
        
        if (profile?.class_level) {
          setUserClass(profile.class_level);
          setSelectedClass(profile.class_level);
        }
      }
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    fetchLeaderboard();
  }, [selectedClass]);

  const fetchLeaderboard = async () => {
    try {
      if (!selectedClass) {
        setLeaderboard([]);
        setLoading(false);
        return;
      }

      // Use the secure database function
      const { data, error } = await supabase.rpc('get_class_leaderboard', {
        class_num: selectedClass
      });

      if (error) throw error;

      setLeaderboard(data || []);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      setLeaderboard([]);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (index === 1) return <Medal className="w-6 h-6 text-gray-400" />;
    if (index === 2) return <Award className="w-6 h-6 text-amber-600" />;
    return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">#{index + 1}</span>;
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 hidden md:flex"
            >
              <Home className="w-5 h-5 mr-2" />
              होम
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold mx-auto md:mx-0">🏆 Leaderboard</h1>
            <div className="w-24 hidden md:block"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Class Filter */}
        <div className="mb-6 max-w-xs mx-auto">
          <Label htmlFor="class-filter" className="mb-2 block text-center">कक्षा चुनें</Label>
          <select
            id="class-filter"
            value={selectedClass || ""}
            onChange={(e) => setSelectedClass(e.target.value ? Number(e.target.value) : null)}
            className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">सभी कक्षाएं</option>
            <option value={9}>कक्षा 9</option>
            <option value={10}>कक्षा 10</option>
            <option value={11}>कक्षा 11</option>
            <option value={12}>कक्षा 12</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">लोड हो रहा है...</p>
          </div>
        ) : leaderboard.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">अभी तक कोई स्कोर नहीं है!</p>
              <p className="text-sm text-muted-foreground mt-2">पहले क्विज़ खेलें।</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {leaderboard.map((entry, index) => (
              <Card key={entry.username} className={`${index < 3 ? 'border-primary/50' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getRankIcon(index)}
                      <div>
                        <CardTitle className="text-lg">{entry.username}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {entry.quiz_count} क्विज़ खेला
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{entry.total_score}</div>
                      <p className="text-xs text-muted-foreground">कुल अंक</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">औसत स्कोर</span>
                    <span className="text-lg font-semibold">{entry.avg_score}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Leaderboard;
