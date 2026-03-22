import { Star, Play, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface GameZoneCardProps {
  id: string;
  title: string;
  description: string;
  descriptionHi?: string;
  thumbnailUrl?: string;
  category: string;
  rating: number;
  playCount: number;
  tags: string[];
  onPlay: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  action: "bg-red-500/10 text-red-600 dark:text-red-400",
  puzzle: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  educational: "bg-green-500/10 text-green-600 dark:text-green-400",
  racing: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  strategy: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  adventure: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  sports: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
};

const categoryEmojis: Record<string, string> = {
  action: "⚔️",
  puzzle: "🧩",
  educational: "📚",
  racing: "🏎️",
  strategy: "♟️",
  adventure: "🗺️",
  sports: "⚽",
};

const GameZoneCard = ({
  id, title, description, descriptionHi, thumbnailUrl,
  category, rating, playCount, tags, onPlay,
}: GameZoneCardProps) => {
  const { t } = useLanguage();

  return (
    <Card
      onClick={() => onPlay(id)}
      className="overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all active:scale-[0.98] border-0 bg-card"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {categoryEmojis[category] || "🎮"}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center group">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary rounded-full p-3">
            <Play className="h-8 w-8 text-primary-foreground fill-current" />
          </div>
        </div>
        <Badge className={`absolute top-2 left-2 ${categoryColors[category] || ""} border-0`}>
          {categoryEmojis[category]} {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
      </div>

      {/* Info */}
      <div className="p-3 space-y-1.5">
        <h3 className="font-bold text-sm truncate">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {t(descriptionHi || description, description)}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            <span>{playCount >= 1000 ? `${(playCount / 1000).toFixed(1)}K` : playCount}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GameZoneCard;
