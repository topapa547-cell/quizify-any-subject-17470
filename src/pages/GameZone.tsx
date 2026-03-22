import { useState, useEffect } from "react";
import { Search, Gamepad2, TrendingUp, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import BottomNav from "@/components/BottomNav";
import GameZoneCard from "@/components/GameZoneCard";
import GamePlayer from "@/components/GamePlayer";

const categories = [
  { id: "all", label: "All", labelHi: "सभी", emoji: "🎮" },
  { id: "action", label: "Action", labelHi: "एक्शन", emoji: "⚔️" },
  { id: "puzzle", label: "Puzzle", labelHi: "पहेली", emoji: "🧩" },
  { id: "educational", label: "Educational", labelHi: "शैक्षिक", emoji: "📚" },
  { id: "racing", label: "Racing", labelHi: "रेसिंग", emoji: "🏎️" },
  { id: "strategy", label: "Strategy", labelHi: "रणनीति", emoji: "♟️" },
  { id: "adventure", label: "Adventure", labelHi: "साहसिक", emoji: "🗺️" },
  { id: "sports", label: "Sports", labelHi: "खेल", emoji: "⚽" },
];

interface Game {
  id: string;
  title: string;
  description: string;
  description_hi: string;
  thumbnail_url: string;
  game_file_path: string;
  category: string;
  tags: string[];
  rating: number;
  play_count: number;
}

const GameZone = () => {
  const { t } = useLanguage();
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [playingGame, setPlayingGame] = useState<Game | null>(null);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    const { data } = await supabase
      .from("uploaded_games")
      .select("*")
      .eq("is_published", true)
      .order("play_count", { ascending: false });
    if (data) setGames(data as any);
    setLoading(false);
  };

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "all" || game.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredGame = games[0];

  const getGameUrl = (filePath: string) => {
    const { data } = supabase.storage.from("game-files").getPublicUrl(filePath);
    return data.publicUrl;
  };

  if (playingGame) {
    return (
      <GamePlayer
        gameId={playingGame.id}
        gameUrl={getGameUrl(playingGame.game_file_path)}
        title={playingGame.title}
        onClose={() => {
          setPlayingGame(null);
          fetchGames(); // refresh play counts
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3">
        <div className="flex items-center gap-2 mb-3">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold">{t("गेम ज़ोन", "Game Zone")}</h1>
          <Sparkles className="h-4 w-4 text-amber-500" />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("गेम खोजें...", "Search games...")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Featured Game Banner */}
      {featuredGame && !search && activeCategory === "all" && (
        <div
          onClick={() => setPlayingGame(featuredGame)}
          className="mx-4 mt-4 rounded-2xl overflow-hidden cursor-pointer relative aspect-[2/1] bg-gradient-to-br from-primary to-primary/60"
        >
          {featuredGame.thumbnail_url ? (
            <img src={featuredGame.thumbnail_url} alt={featuredGame.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-8xl">🎮</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <Badge className="bg-amber-500 text-white border-0 mb-2">
              <TrendingUp className="h-3 w-3 mr-1" /> {t("लोकप्रिय", "Trending")}
            </Badge>
            <h2 className="text-lg font-bold">{featuredGame.title}</h2>
            <p className="text-xs text-white/80 line-clamp-1">
              {t(featuredGame.description_hi || featuredGame.description, featuredGame.description)}
            </p>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex gap-2 px-4 mt-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <Badge
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            className="cursor-pointer whitespace-nowrap px-3 py-1.5 text-xs"
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.emoji} {t(cat.labelHi, cat.label)}
          </Badge>
        ))}
      </div>

      {/* Games Grid */}
      <div className="px-4 mt-4">
        {loading ? (
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] rounded-xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : filteredGames.length === 0 ? (
          <div className="text-center py-16">
            <Gamepad2 className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
            <h3 className="font-semibold text-lg">{t("कोई गेम नहीं मिला", "No games found")}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {t("जल्द ही नए गेम आएंगे!", "New games coming soon!")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {filteredGames.map((game) => (
              <GameZoneCard
                key={game.id}
                id={game.id}
                title={game.title}
                description={game.description}
                descriptionHi={game.description_hi}
                thumbnailUrl={game.thumbnail_url}
                category={game.category}
                rating={game.rating}
                playCount={game.play_count}
                tags={game.tags}
                onPlay={() => setPlayingGame(game)}
              />
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default GameZone;
