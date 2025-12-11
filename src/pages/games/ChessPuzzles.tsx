import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Flame, Target, Lightbulb, Clock, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HamburgerMenu from "@/components/HamburgerMenu";
import { ChessPuzzleBoard } from "@/components/chess/ChessPuzzleBoard";
import { ChessLeaderboard } from "@/components/chess/ChessLeaderboard";
import { chessPuzzles, getDailyPuzzle, getPuzzlesByDifficulty, getUniqueThemes, ChessPuzzle } from "@/data/games/chessPuzzles";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ChessPuzzles = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("daily");
  const [selectedPuzzle, setSelectedPuzzle] = useState<ChessPuzzle | null>(null);
  const [userStats, setUserStats] = useState({
    totalPoints: 0,
    puzzlesSolved: 0,
    currentStreak: 0,
    eloRating: 800
  });
  const [solvedPuzzleIds, setSolvedPuzzleIds] = useState<string[]>([]);
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [loading, setLoading] = useState(true);

  const dailyPuzzle = getDailyPuzzle();

  useEffect(() => {
    fetchUserStats();
    fetchSolvedPuzzles();
  }, []);

  const fetchUserStats = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('chess_leaderboard')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (data) {
        setUserStats({
          totalPoints: data.total_points,
          puzzlesSolved: data.puzzles_solved,
          currentStreak: data.current_streak,
          eloRating: data.elo_rating
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSolvedPuzzles = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from('chess_puzzle_attempts')
        .select('puzzle_id')
        .eq('user_id', user.id)
        .eq('solved', true);

      if (data) {
        // Note: puzzle_id in DB is UUID, but our local puzzles use string IDs
        // We'll need to map them
        setSolvedPuzzleIds(data.map(d => d.puzzle_id));
      }
    } catch (error) {
      console.error('Error fetching solved puzzles:', error);
    }
  };

  const handlePuzzleSolved = async (puzzle: ChessPuzzle, timeMs: number, hintsUsed: number) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Calculate points
      let points = puzzle.points;
      const timeSec = Math.floor(timeMs / 1000);
      
      // Speed bonus
      if (timeSec < 30) points += 3;
      else if (timeSec < 60) points += 2;
      else if (timeSec < 120) points += 1;

      // Daily bonus
      const isDailyPuzzle = puzzle.id === dailyPuzzle.id;
      if (isDailyPuzzle) points += 5;

      // Hint penalty
      points -= (hintsUsed * 2);
      points = Math.max(1, points);

      // Get user profile for username
      const { data: profile } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', user.id)
        .single();

      // Upsert chess leaderboard entry
      const { data: existingEntry } = await supabase
        .from('chess_leaderboard')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (existingEntry) {
        await supabase
          .from('chess_leaderboard')
          .update({
            total_points: existingEntry.total_points + points,
            puzzles_solved: existingEntry.puzzles_solved + 1,
            best_time: existingEntry.best_time ? Math.min(existingEntry.best_time, timeSec) : timeSec,
            elo_rating: existingEntry.elo_rating + (puzzle.difficulty === 'hard' ? 15 : puzzle.difficulty === 'medium' ? 10 : 5),
            updated_at: new Date().toISOString()
          })
          .eq('user_id', user.id);

        // Update streak
        await supabase.rpc('update_chess_streak', { p_user_id: user.id });
      } else {
        await supabase
          .from('chess_leaderboard')
          .insert({
            user_id: user.id,
            username: profile?.username || 'Player',
            total_points: points,
            puzzles_solved: 1,
            current_streak: 1,
            longest_streak: 1,
            best_time: timeSec,
            elo_rating: 800 + (puzzle.difficulty === 'hard' ? 15 : puzzle.difficulty === 'medium' ? 10 : 5),
            last_puzzle_date: new Date().toISOString().split('T')[0]
          });
      }

      setUserStats(prev => ({
        ...prev,
        totalPoints: prev.totalPoints + points,
        puzzlesSolved: prev.puzzlesSolved + 1
      }));

      setSolvedPuzzleIds(prev => [...prev, puzzle.id]);

      toast.success(
        language === 'hindi' 
          ? `🎉 बधाई! +${points} अंक अर्जित किए`
          : `🎉 Congratulations! Earned +${points} points`
      );

      setSelectedPuzzle(null);
    } catch (error) {
      console.error('Error saving puzzle result:', error);
      toast.error(language === 'hindi' ? 'परिणाम सहेजने में त्रुटि' : 'Error saving result');
    }
  };

  const getFilteredPuzzles = () => {
    if (difficultyFilter === 'all') return chessPuzzles;
    return getPuzzlesByDifficulty(difficultyFilter);
  };

  if (selectedPuzzle) {
    return (
      <ChessPuzzleBoard
        puzzle={selectedPuzzle}
        onSolved={(timeMs, hintsUsed) => handlePuzzleSolved(selectedPuzzle, timeMs, hintsUsed)}
        onBack={() => setSelectedPuzzle(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-white hover:bg-white/20">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">
              {language === 'hindi' ? '♟️ शतरंज पहेलियाँ' : '♟️ Chess Puzzles'}
            </h1>
          </div>
          <HamburgerMenu />
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <Trophy className="h-4 w-4 mx-auto mb-1" />
            <p className="text-xs opacity-80">{language === 'hindi' ? 'अंक' : 'Points'}</p>
            <p className="font-bold">{userStats.totalPoints}</p>
          </div>
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <Target className="h-4 w-4 mx-auto mb-1" />
            <p className="text-xs opacity-80">{language === 'hindi' ? 'हल' : 'Solved'}</p>
            <p className="font-bold">{userStats.puzzlesSolved}</p>
          </div>
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <Flame className="h-4 w-4 mx-auto mb-1" />
            <p className="text-xs opacity-80">{language === 'hindi' ? 'स्ट्रीक' : 'Streak'}</p>
            <p className="font-bold">{userStats.currentStreak}</p>
          </div>
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <Crown className="h-4 w-4 mx-auto mb-1" />
            <p className="text-xs opacity-80">ELO</p>
            <p className="font-bold">{userStats.eloRating}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="p-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="daily">
            {language === 'hindi' ? '🎯 दैनिक' : '🎯 Daily'}
          </TabsTrigger>
          <TabsTrigger value="browse">
            {language === 'hindi' ? '📚 ब्राउज़' : '📚 Browse'}
          </TabsTrigger>
          <TabsTrigger value="leaderboard">
            {language === 'hindi' ? '🏆 रैंकिंग' : '🏆 Rankings'}
          </TabsTrigger>
        </TabsList>

        {/* Daily Puzzle Tab */}
        <TabsContent value="daily" className="mt-4">
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  {language === 'hindi' ? 'आज की पहेली' : "Today's Puzzle"}
                </CardTitle>
                <Badge variant="secondary" className="bg-amber-500 text-white">
                  +{dailyPuzzle.points + 5} {language === 'hindi' ? 'अंक' : 'pts'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h3 className="font-semibold">
                  {language === 'hindi' ? dailyPuzzle.title_hindi : dailyPuzzle.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Badge variant={
                    dailyPuzzle.difficulty === 'easy' ? 'secondary' :
                    dailyPuzzle.difficulty === 'medium' ? 'default' : 'destructive'
                  }>
                    {dailyPuzzle.difficulty === 'easy' ? (language === 'hindi' ? 'आसान' : 'Easy') :
                     dailyPuzzle.difficulty === 'medium' ? (language === 'hindi' ? 'मध्यम' : 'Medium') :
                     (language === 'hindi' ? 'कठिन' : 'Hard')}
                  </Badge>
                  <Badge variant="outline">{dailyPuzzle.theme}</Badge>
                </div>
                <Button 
                  className="w-full bg-amber-500 hover:bg-amber-600"
                  onClick={() => setSelectedPuzzle(dailyPuzzle)}
                  disabled={solvedPuzzleIds.includes(dailyPuzzle.id)}
                >
                  {solvedPuzzleIds.includes(dailyPuzzle.id) 
                    ? (language === 'hindi' ? '✅ हल हो गया' : '✅ Solved')
                    : (language === 'hindi' ? '🎮 हल करें' : '🎮 Solve Now')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Card>
              <CardContent className="p-4 text-center">
                <Clock className="h-6 w-6 mx-auto text-blue-500 mb-2" />
                <p className="text-sm text-muted-foreground">
                  {language === 'hindi' ? 'स्पीड बोनस' : 'Speed Bonus'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'hindi' ? '<30s = +3 अंक' : '<30s = +3 pts'}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Lightbulb className="h-6 w-6 mx-auto text-yellow-500 mb-2" />
                <p className="text-sm text-muted-foreground">
                  {language === 'hindi' ? 'हिंट खर्च' : 'Hint Cost'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'hindi' ? '-2 अंक प्रति हिंट' : '-2 pts per hint'}
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Browse Puzzles Tab */}
        <TabsContent value="browse" className="mt-4">
          {/* Difficulty Filter */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {(['all', 'easy', 'medium', 'hard'] as const).map((diff) => (
              <Button
                key={diff}
                variant={difficultyFilter === diff ? 'default' : 'outline'}
                size="sm"
                onClick={() => setDifficultyFilter(diff)}
              >
                {diff === 'all' ? (language === 'hindi' ? 'सभी' : 'All') :
                 diff === 'easy' ? (language === 'hindi' ? 'आसान' : 'Easy') :
                 diff === 'medium' ? (language === 'hindi' ? 'मध्यम' : 'Medium') :
                 (language === 'hindi' ? 'कठिन' : 'Hard')}
              </Button>
            ))}
          </div>

          {/* Puzzle Grid */}
          <div className="grid gap-3">
            {getFilteredPuzzles().map((puzzle, index) => {
              const isSolved = solvedPuzzleIds.includes(puzzle.id);
              return (
                <Card 
                  key={puzzle.id} 
                  className={`cursor-pointer hover:shadow-md transition-shadow ${isSolved ? 'opacity-60' : ''}`}
                  onClick={() => !isSolved && setSelectedPuzzle(puzzle)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          puzzle.difficulty === 'easy' ? 'bg-green-100 text-green-600' :
                          puzzle.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          #{index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">
                            {language === 'hindi' ? puzzle.title_hindi : puzzle.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {puzzle.theme}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              +{puzzle.points} {language === 'hindi' ? 'अंक' : 'pts'}
                            </span>
                          </div>
                        </div>
                      </div>
                      {isSolved && (
                        <Badge variant="secondary" className="bg-green-100 text-green-600">
                          ✅
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard" className="mt-4">
          <ChessLeaderboard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChessPuzzles;
