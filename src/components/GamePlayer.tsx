import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Increment play count on mount
    const incrementCount = async () => {
      const { data } = await supabase
        .from("uploaded_games")
        .select("play_count")
        .eq("id", gameId)
        .single();
      if (data) {
        await (supabase.from("uploaded_games") as any)
          .update({ play_count: ((data as any).play_count || 0) + 1 })
          .eq("id", gameId);
      }
    };
    incrementCount();
  }, [gameId]);

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
      <div className="flex items-center justify-between px-3 py-2 bg-black/80 text-white">
        <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:text-white/80">
          <ArrowLeft className="h-5 w-5 mr-1" /> {title}
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-white hover:text-white/80">
          {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
        </Button>
      </div>
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
