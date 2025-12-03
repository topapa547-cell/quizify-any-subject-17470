import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import BattleAnimation from "@/components/BattleAnimation";
import BattleScoreBoard from "@/components/BattleScoreBoard";
import BattleResult from "@/components/BattleResult";
import { Loader2, Clock } from "lucide-react";
import { toast } from "sonner";
import { questionBank, QuizQuestion } from "@/data/quizData";

const QUESTION_TIME = 15; // seconds per question

export default function BattleRoom() {
  const { roomCode } = useParams<{ roomCode: string }>();
  const navigate = useNavigate();
  
  const [user, setUser] = useState<any>(null);
  const [room, setRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [battleStarted, setBattleStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [myScore, setMyScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);

  const isHost = room?.host_id === user?.id;

  // Fetch user and room data
  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }
      setUser(user);

      // Fetch room
      const { data: roomData, error } = await supabase
        .from("battle_rooms")
        .select("*")
        .eq("room_code", roomCode)
        .single();

      if (error || !roomData) {
        toast.error("Battle room not found");
        navigate("/multiplayer");
        return;
      }

      // Check if user is participant
      if (roomData.host_id !== user.id && roomData.opponent_id !== user.id) {
        // Try to join as opponent
        if (roomData.status === "waiting" && !roomData.opponent_id) {
          const { data: profile } = await supabase
            .from("profiles")
            .select("username")
            .eq("id", user.id)
            .single();

          await supabase
            .from("battle_rooms")
            .update({
              opponent_id: user.id,
              opponent_username: profile?.username,
              status: "ready",
            })
            .eq("id", roomData.id);
        } else {
          toast.error("Cannot join this battle");
          navigate("/multiplayer");
          return;
        }
      }

      setRoom(roomData);
      setLoading(false);

      // If room is ready, start animation
      if (roomData.status === "ready" && roomData.opponent_id) {
        setShowAnimation(true);
      }
    };

    init();
  }, [roomCode, navigate]);

  // Subscribe to room updates
  useEffect(() => {
    if (!room?.id) return;

    const channel = supabase
      .channel(`battle_${room.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "battle_rooms",
          filter: `id=eq.${room.id}`,
        },
        (payload) => {
          const updatedRoom = payload.new as any;
          setRoom(updatedRoom);

          // Update opponent score
          if (isHost) {
            setOpponentScore(updatedRoom.opponent_score || 0);
          } else {
            setOpponentScore(updatedRoom.host_score || 0);
          }

          // Check if battle finished
          if (updatedRoom.status === "finished") {
            setShowResult(true);
          }

          // Check if opponent joined
          if (updatedRoom.status === "ready" && updatedRoom.opponent_id && !showAnimation && !battleStarted) {
            setShowAnimation(true);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [room?.id, isHost, showAnimation, battleStarted]);

  // Generate questions when battle starts
  const generateQuestions = useCallback(() => {
    const classLevel = room?.class_level || 10;
    const subject = room?.subject || "all";
    const count = room?.total_questions || 10;

    let filteredQuestions = questionBank.filter((q: any) => q.class_level === classLevel);
    
    if (subject !== "all") {
      filteredQuestions = filteredQuestions.filter((q: any) => q.subject === subject);
    }

    // Shuffle and select
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }, [room]);

  // Start battle after animation
  const handleAnimationComplete = useCallback(async () => {
    setShowAnimation(false);
    setBattleStarted(true);

    // Host generates questions and stores them
    if (isHost) {
      const generatedQuestions = generateQuestions();
      setQuestions(generatedQuestions);

      // Store questions in room (convert to JSON-safe format)
      await supabase
        .from("battle_rooms")
        .update({
          status: "battle",
          questions: JSON.parse(JSON.stringify(generatedQuestions)),
          started_at: new Date().toISOString(),
        })
        .eq("id", room.id);
    }
  }, [isHost, generateQuestions, room?.id]);

  // Get questions from room for non-host
  useEffect(() => {
    if (battleStarted && !isHost && room?.questions) {
      setQuestions(room.questions);
    }
  }, [battleStarted, isHost, room?.questions]);

  // Timer countdown
  useEffect(() => {
    if (!battleStarted || showResult || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Time's up - move to next question
          handleNextQuestion();
          return QUESTION_TIME;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [battleStarted, showResult, currentQuestion, questions.length]);

  const handleAnswerSelect = async (optionId: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionId);

    const question = questions[currentQuestion];
    const isCorrect = question?.correct_option_id === optionId;

    if (isCorrect) {
      const newScore = myScore + 1;
      setMyScore(newScore);

      // Update score in database
      const updateField = isHost ? "host_score" : "opponent_score";
      await supabase
        .from("battle_rooms")
        .update({ [updateField]: newScore })
        .eq("id", room.id);
    }

    // Auto-advance after short delay
    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = async () => {
    if (currentQuestion >= questions.length - 1) {
      // Battle finished
      await finishBattle();
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer(null);
    setTimeLeft(QUESTION_TIME);
  };

  const finishBattle = async () => {
    const finalMyScore = myScore;
    const finalOpponentScore = isHost ? room.opponent_score : room.host_score;

    // Calculate points
    let points = 10; // participation
    if (finalMyScore > finalOpponentScore) {
      points = 50 + finalMyScore * 2; // winner bonus
    } else if (finalMyScore === finalOpponentScore) {
      points = 25 + finalMyScore; // draw bonus
    }
    setPointsEarned(points);

    // Update room status
    if (isHost) {
      const winnerId = room.host_score > room.opponent_score 
        ? room.host_id 
        : room.opponent_score > room.host_score 
          ? room.opponent_id 
          : null;

      await supabase
        .from("battle_rooms")
        .update({
          status: "finished",
          finished_at: new Date().toISOString(),
          winner_id: winnerId,
        })
        .eq("id", room.id);
    }

    // Save battle history
    await supabase.from("battle_history").insert({
      user_id: user.id,
      room_id: room.id,
      opponent_id: isHost ? room.opponent_id : room.host_id,
      opponent_username: isHost ? room.opponent_username : room.host_username,
      is_winner: finalMyScore > finalOpponentScore,
      is_draw: finalMyScore === finalOpponentScore,
      user_score: finalMyScore,
      opponent_score: finalOpponentScore,
      points_earned: points,
      subject: room.subject,
      total_questions: room.total_questions,
    });

    // Update league points
    const { data: profile } = await supabase
      .from("profiles")
      .select("league_points")
      .eq("id", user.id)
      .single();

    await supabase
      .from("profiles")
      .update({ league_points: (profile?.league_points || 0) + points })
      .eq("id", user.id);

    setShowResult(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Waiting for opponent
  if (room?.status === "waiting") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="p-8 text-center max-w-md">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground">Waiting for opponent...</h2>
          <p className="text-muted-foreground mt-2">Room Code: {roomCode}</p>
          <Button variant="outline" className="mt-4" onClick={() => navigate("/multiplayer")}>
            Cancel
          </Button>
        </Card>
      </div>
    );
  }

  // Battle animation
  if (showAnimation && room) {
    return (
      <BattleAnimation
        hostUsername={room.host_username}
        hostId={room.host_id}
        opponentUsername={room.opponent_username}
        opponentId={room.opponent_id}
        onComplete={handleAnimationComplete}
      />
    );
  }

  // Battle result
  if (showResult && room) {
    return (
      <BattleResult
        hostUsername={room.host_username}
        hostId={room.host_id}
        hostScore={room.host_score || myScore}
        opponentUsername={room.opponent_username}
        opponentId={room.opponent_id}
        opponentScore={room.opponent_score || opponentScore}
        isHost={isHost}
        pointsEarned={pointsEarned}
      />
    );
  }

  // Battle in progress
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      {/* Score Board */}
      {room && (
        <div className="p-4">
          <BattleScoreBoard
            hostUsername={room.host_username}
            hostId={room.host_id}
            hostScore={isHost ? myScore : opponentScore}
            opponentUsername={room.opponent_username}
            opponentId={room.opponent_id}
            opponentScore={isHost ? opponentScore : myScore}
            totalQuestions={room.total_questions}
            currentQuestion={currentQuestion + 1}
            isHost={isHost}
          />
        </div>
      )}

      {/* Timer */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Time Left</span>
          </div>
          <span className={`font-bold text-lg ${timeLeft <= 5 ? "text-destructive animate-pulse" : "text-foreground"}`}>
            {timeLeft}s
          </span>
        </div>
        <Progress value={(timeLeft / QUESTION_TIME) * 100} className="h-2" />
      </div>

      {/* Question */}
      {question && (
        <div className="px-4">
          <Card className="p-6 bg-card border-border">
            <p className="text-lg font-medium text-foreground mb-6">{question.text}</p>

            <div className="space-y-3">
              {question.options.map((option: any) => {
                const isSelected = selectedAnswer === option.option_id;
                const isCorrect = question.correct_option_id === option.option_id;
                const showFeedback = selectedAnswer !== null;

                return (
                  <button
                    key={option.option_id}
                    onClick={() => handleAnswerSelect(option.option_id)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      showFeedback
                        ? isCorrect
                          ? "bg-green-500/20 border-green-500 border-2"
                          : isSelected
                            ? "bg-red-500/20 border-red-500 border-2"
                            : "bg-muted border border-border"
                        : isSelected
                          ? "bg-primary/20 border-primary border-2"
                          : "bg-muted border border-border hover:bg-muted/80"
                    }`}
                  >
                    <span className="font-medium text-foreground">{option.option_text}</span>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      {/* Loading questions */}
      {!question && battleStarted && (
        <div className="flex items-center justify-center p-8">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="ml-2 text-muted-foreground">Loading questions...</span>
        </div>
      )}
    </div>
  );
}
