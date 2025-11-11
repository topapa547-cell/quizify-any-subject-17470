import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, RotateCcw, Home } from "lucide-react";
import { useEffect } from "react";

interface LocationState {
  score: number;
  total: number;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = (location.state as LocationState) || { score: 0, total: 5 };

  useEffect(() => {
    // Redirect to home if accessed directly without state
    if (!location.state) {
      navigate("/");
    }
  }, [location.state, navigate]);

  const percentage = Math.round((score / total) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 80) return "बहुत बढ़िया! 🎉";
    if (percentage >= 60) return "अच्छा प्रदर्शन! 👍";
    if (percentage >= 40) return "अच्छा प्रयास! 💪";
    return "अधिक अभ्यास करें! 📚";
  };

  const getResultColor = () => {
    if (percentage >= 80) return "text-secondary";
    if (percentage >= 60) return "text-primary";
    return "text-accent";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 shadow-[var(--card-shadow)] border-border">
        <div className="text-center space-y-6">
          {/* Trophy Icon */}
          <div className="flex justify-center">
            <div className="bg-primary/10 p-6 rounded-full">
              <Trophy className="w-16 h-16 text-primary" />
            </div>
          </div>

          {/* Result Message */}
          <div>
            <h1 className={`text-3xl font-bold mb-2 ${getResultColor()}`}>
              {getResultMessage()}
            </h1>
            <p className="text-muted-foreground text-lg">परीक्षा परिणाम</p>
          </div>

          {/* Score Display */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
            <p className="text-lg text-foreground mb-2">आपका स्कोर</p>
            <p className="text-5xl font-bold text-foreground">
              {score} / {total}
            </p>
            <p className="text-2xl font-semibold text-primary mt-2">
              {percentage}%
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={() => navigate("/")}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              size="lg"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              फिर से प्रयास करें
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/10 font-semibold"
              size="lg"
            >
              <Home className="w-5 h-5 mr-2" />
              होम पेज पर जाएं
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Results;
