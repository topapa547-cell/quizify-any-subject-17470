import { useState } from "react";
import { ArrowLeft, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface GamePlayerProps {
  gameId: string;
  gameUrl: string;
  title: string;
  onClose: () => void;
}

const GamePlayer = ({ gameId, gameUrl, title, onClose }: GamePlayerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Increment play count
  useState(() => {
    supabase.rpc("increment_play_count" as any, { game_id: gameId }).catch(() => {
      // Fallback: direct update
      supabase
        .from("uploaded_games")
        .select("play_count")
        .eq("id", gameId)
        .single()
        .then(({ data }) => {
          if (data) {
            supabase
              .from("uploaded_games" as any)
              .update({ play_count: (data.play_count || 0) + 1 } as any)
              .eq("id", gameId);
          }
        });
    });
  });

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-black/80 text-white">
        <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:text-white/80">
          <ArrowLeft className="h-5 w-5 mr-1" /> {title}
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:text-white/80">
          {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
        </Button>
      </div>

      {/* Game iframe */}
      <iframe
        src={gameUrl}
        className="flex-1 w-full border-0"
        title={title}
        sandbox="allow-scripts allow-same-origin allow-popups"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
      />
    </div>
  );
};

export default GamePlayer;
