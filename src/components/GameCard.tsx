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
  characterSeed?: string;
  characterStyle?: string;
}

// Game-specific cartoony character configurations
const gameCharacters: Record<string, { seed: string; style: string; mascotEmoji: string }> = {
  "match-pair": { seed: "fox-matcher", style: "adventurer", mascotEmoji: "🦊" },
  "quick-fire": { seed: "lightning-bunny", style: "adventurer", mascotEmoji: "🐰" },
  "memory-cards": { seed: "wise-owl", style: "adventurer", mascotEmoji: "🦉" },
  "true-false": { seed: "decision-frog", style: "adventurer", mascotEmoji: "🐸" },
  "fill-blanks": { seed: "clever-cat", style: "adventurer", mascotEmoji: "🐱" },
};

const GameCard = ({ id, name, emoji, gradient, route, players }: GameCardProps) => {
  const navigate = useNavigate();
  const character = gameCharacters[id] || { seed: id, style: "adventurer", mascotEmoji: "🎮" };
  
  // Generate DiceBear avatar URL for cartoony character
  const avatarUrl = `https://api.dicebear.com/7.x/${character.style}/svg?seed=${character.seed}&backgroundColor=transparent`;

  return (
    <Card 
      className="cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
      onClick={() => navigate(route)}
    >
      <CardContent className={cn("p-0 aspect-square relative", gradient)}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-2 left-2 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
          <div className="absolute bottom-4 right-4 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
        </div>
        
        {/* Main content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
          {/* Cartoony Character Avatar */}
          <div className="relative mb-1">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm p-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <img 
                src={avatarUrl} 
                alt={`${name} character`}
                className="w-full h-full rounded-full"
              />
            </div>
            {/* Mascot emoji badge */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md text-lg">
              {character.mascotEmoji}
            </div>
          </div>
          
          {/* Game emoji */}
          <span className="text-3xl mb-1 drop-shadow-lg group-hover:animate-bounce">{emoji}</span>
          
          {/* Game name */}
          <h3 className="text-sm font-bold text-white text-center px-2 drop-shadow-md leading-tight">{name}</h3>
          
          {/* Star rating */}
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-300 text-xs drop-shadow">⭐</span>
            ))}
          </div>
          
          {/* Player count badge */}
          {players && (
            <div className="absolute bottom-2 right-2 bg-white/25 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
              <span className="text-white text-xs font-medium">{players}+</span>
              <span className="text-xs">👥</span>
            </div>
          )}
        </div>
        
        {/* Decorative circles with animation */}
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
        
        {/* Play button overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full px-4 py-2 shadow-lg">
            <span className="text-sm font-bold text-gray-800">🎮 खेलें!</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
