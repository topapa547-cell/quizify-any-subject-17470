import { useState, useEffect, useRef } from "react";
import { X, Loader2, Youtube, Copy, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { getYouTubeLink } from "@/utils/youtubeEducationalLinks";

interface ConceptExplainerTooltipProps {
  term: string;
  context: string;
  subject: string;
  classLevel: number;
  onClose: () => void;
  position: { x: number; y: number };
}

export const ConceptExplainerTooltip = ({
  term,
  context,
  subject,
  classLevel,
  onClose,
  position,
}: ConceptExplainerTooltipProps) => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const youtubeLink = getYouTubeLink(subject, classLevel, term);

  useEffect(() => {
    const fetchExplanation = async () => {
      setIsLoading(true);
      setError(null);
      setExplanation("");

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/concept-explainer`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({
              term,
              context,
              subject,
              language,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch explanation");
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No reader available");

        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
            let line = buffer.slice(0, newlineIndex);
            buffer = buffer.slice(newlineIndex + 1);

            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (line.startsWith(":") || line.trim() === "") continue;
            if (!line.startsWith("data: ")) continue;

            const jsonStr = line.slice(6).trim();
            if (jsonStr === "[DONE]") break;

            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                setExplanation((prev) => prev + content);
              }
            } catch {
              // Incomplete JSON, wait for more data
            }
          }
        }
      } catch (err) {
        console.error("Error fetching explanation:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchExplanation();
  }, [term, context, subject, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(explanation);
      setCopied(true);
      toast({
        title: t("कॉपी किया गया", "Copied"),
        description: t("व्याख्या क्लिपबोर्ड पर कॉपी हो गई", "Explanation copied to clipboard"),
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: t("त्रुटि", "Error"),
        description: t("कॉपी नहीं हो सका", "Failed to copy"),
        variant: "destructive",
      });
    }
  };

  // Calculate position to keep tooltip in viewport
  const getTooltipStyle = () => {
    const style: React.CSSProperties = {
      position: "fixed",
      zIndex: 50,
      maxWidth: "min(400px, 90vw)",
      maxHeight: "70vh",
    };

    // Check if tooltip would go off right edge
    if (position.x + 400 > window.innerWidth) {
      style.right = "20px";
    } else {
      style.left = `${Math.max(20, position.x)}px`;
    }

    // Check if tooltip would go off bottom edge
    if (position.y + 300 > window.innerHeight) {
      style.bottom = "20px";
    } else {
      style.top = `${Math.max(20, position.y)}px`;
    }

    return style;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Tooltip Card */}
      <Card
        ref={tooltipRef}
        style={getTooltipStyle()}
        className="shadow-2xl border-2 border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200 overflow-hidden"
      >
        <CardHeader className="pb-2 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary font-bold">{term}</span>
            </CardTitle>
            <Button size="icon" variant="ghost" onClick={onClose} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-3 overflow-y-auto max-h-[50vh]">
          {isLoading && !explanation && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <span className="ml-2 text-sm text-muted-foreground">
                {t("समझा रहा हूं...", "Explaining...")}
              </span>
            </div>
          )}

          {error && (
            <div className="text-destructive text-sm py-4">
              {t("त्रुटि:", "Error:")} {error}
            </div>
          )}

          {explanation && (
            <div className="space-y-3">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <div
                  className="text-sm leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: explanation
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
                      .replace(/\n/g, '<br/>')
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopy}
                  className="text-xs"
                >
                  {copied ? (
                    <Check className="h-3 w-3 mr-1" />
                  ) : (
                    <Copy className="h-3 w-3 mr-1" />
                  )}
                  {t("कॉपी", "Copy")}
                </Button>

                {youtubeLink && (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-3 w-3 mr-1" />
                      {t("वीडियो देखें", "Watch Video")}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};
