import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface GameCardProps {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  route: string;
  players?: number;
}

const GameCard = ({ id, name, emoji, gradient, route, players }: GameCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      onClick={() => navigate(route)}
    >
      <CardContent className={cn("p-0 aspect-square relative", gradient)}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl mb-2">{emoji}</span>
          <h3 className="text-base font-bold text-white text-center px-2">{name}</h3>
          {players && (
            <div className="absolute bottom-2 right-2 bg-background/20 backdrop-blur-sm rounded-full px-2 py-0.5">
              <span className="text-xs text-white">{players}+ खिलाड़ी</span>
            </div>
          )}
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/10" />
      </CardContent>
    </Card>
  );
};

export default GameCard;
