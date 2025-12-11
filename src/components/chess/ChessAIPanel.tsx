import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Brain, Lightbulb, BookOpen, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ChessAIPanelProps {
  board: (string | null)[][];
  playerColor: 'w' | 'b';
  userElo: number;
}

const ChessAIPanel = ({ board, playerColor, userElo }: ChessAIPanelProps) => {
  const { t, language } = useLanguage();
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeRequest, setActiveRequest] = useState<string | null>(null);

  const streamAIResponse = async (requestType: "analyze" | "hint" | "teach") => {
    setIsLoading(true);
    setActiveRequest(requestType);
    setResponse("");

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chess-assistant`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            board,
            playerColor,
            userElo,
            language,
            requestType,
          }),
        }
      );

      if (!resp.ok) {
        if (resp.status === 429) {
          toast.error(t("बहुत सारे अनुरोध। कृपया बाद में प्रयास करें।", "Too many requests. Please try later."));
          return;
        }
        throw new Error("Failed to get AI response");
      }

      const reader = resp.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;
            
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                setResponse(prev => prev + content);
              }
            } catch {
              // Skip invalid JSON
            }
          }
        }
      }
    } catch (error) {
      console.error("AI error:", error);
      toast.error(t("AI से जुड़ने में त्रुटि", "Error connecting to AI"));
    } finally {
      setIsLoading(false);
      setActiveRequest(null);
    }
  };

  const getEloLabel = () => {
    if (userElo < 800) return t("शुरुआती", "Beginner");
    if (userElo < 1200) return t("मध्यम", "Intermediate");
    if (userElo < 1600) return t("उन्नत", "Advanced");
    return t("विशेषज्ञ", "Expert");
  };

  return (
    <Card className="p-4 space-y-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="flex items-center justify-between">
        <h3 className="font-bold flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          {t("AI सहायक", "AI Assistant")}
        </h3>
        <span className="text-xs px-2 py-1 bg-primary/10 rounded-full">
          {getEloLabel()} ({userElo})
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => streamAIResponse("analyze")}
          disabled={isLoading}
          className="flex-1"
        >
          {isLoading && activeRequest === "analyze" ? (
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : (
            <Brain className="h-4 w-4 mr-1" />
          )}
          {t("विश्लेषण", "Analyze")}
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => streamAIResponse("hint")}
          disabled={isLoading}
          className="flex-1"
        >
          {isLoading && activeRequest === "hint" ? (
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : (
            <Lightbulb className="h-4 w-4 mr-1" />
          )}
          {t("संकेत", "Hint")}
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => streamAIResponse("teach")}
          disabled={isLoading}
          className="flex-1"
        >
          {isLoading && activeRequest === "teach" ? (
            <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          ) : (
            <BookOpen className="h-4 w-4 mr-1" />
          )}
          {t("सीखें", "Learn")}
        </Button>
      </div>

      {/* Response Area */}
      {(response || isLoading) && (
        <div className="p-3 bg-background/80 rounded-lg border min-h-[100px] max-h-[250px] overflow-y-auto">
          {isLoading && !response && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              {t("सोच रहा हूं...", "Thinking...")}
            </div>
          )}
          {response && (
            <div className="text-sm whitespace-pre-wrap leading-relaxed">
              {response}
            </div>
          )}
        </div>
      )}

      {/* Tips */}
      {!response && !isLoading && (
        <p className="text-xs text-muted-foreground text-center">
          {t(
            "AI से मदद लें - विश्लेषण, संकेत, या सीखें",
            "Get AI help - Analyze, Hints, or Learn"
          )}
        </p>
      )}
    </Card>
  );
};

export default ChessAIPanel;
