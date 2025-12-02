import { useState } from "react";
import { Copy, Check, Bookmark, BookmarkCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { KeyPoint } from "@/data/keyPoints";

interface KeyPointCardProps {
  keyPoint: KeyPoint;
}

const KeyPointCard = ({ keyPoint }: KeyPointCardProps) => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

const handleCopy = async () => {
    const text = language === "hindi" ? keyPoint.point_hindi : keyPoint.point_english;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: t("कॉपी हो गया!", "Copied!"),
      description: t("मुख्य बिंदु कॉपी हो गया", "Key point copied to clipboard"),
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? t("हटाया गया", "Removed") : t("सहेजा गया", "Saved"),
      description: bookmarked 
        ? t("बुकमार्क से हटाया गया", "Removed from bookmarks")
        : t("बुकमार्क में सहेजा गया", "Added to bookmarks"),
    });
  };

  const getCategoryBadge = () => {
    const categories = {
      formula: { hi: "सूत्र", en: "Formula", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
      definition: { hi: "परिभाषा", en: "Definition", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
      fact: { hi: "तथ्य", en: "Fact", color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
      rule: { hi: "नियम", en: "Rule", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
      example: { hi: "उदाहरण", en: "Example", color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300" },
    };
const cat = categories[keyPoint.category];
    return (
      <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", cat.color)}>
        {language === "hindi" ? cat.hi : cat.en}
      </span>
    );
  };

  return (
    <div
      className={cn(
        "relative p-4 rounded-xl transition-all",
        keyPoint.importance === "high"
          ? "border-2 border-red-400 border-l-4 bg-gradient-to-r from-red-50 to-white dark:from-red-950/30 dark:to-background shadow-sm"
          : "border-2 border-amber-400 border-l-4 bg-gradient-to-r from-amber-50 to-white dark:from-amber-950/30 dark:to-background"
      )}
    >
      {/* Importance indicator */}
      <div className="absolute -left-1 top-4">
        {keyPoint.importance === "high" ? (
          <span className="text-lg" title={t("बहुत महत्वपूर्ण", "Very Important")}>🔴</span>
        ) : (
          <span className="text-lg" title={t("महत्वपूर्ण", "Important")}>🟡</span>
        )}
      </div>

      <div className="ml-6">
        {/* Category badge */}
        <div className="flex items-center gap-2 mb-2">
          {getCategoryBadge()}
          {keyPoint.page_reference && (
            <span className="text-xs text-muted-foreground">
              ({keyPoint.page_reference})
            </span>
          )}
        </div>

        {/* Main content */}
        <p className="text-sm font-medium leading-relaxed mb-1">
          {language === "hindi" ? keyPoint.point_hindi : keyPoint.point_english}
        </p>
        
        {/* Show alternate language in smaller text */}
        <p className="text-xs text-muted-foreground">
          {language === "hindi" ? keyPoint.point_english : keyPoint.point_hindi}
        </p>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-3">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-600" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span className="ml-1 text-xs">{t("कॉपी", "Copy")}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2"
            onClick={handleBookmark}
          >
            {bookmarked ? (
              <BookmarkCheck className="h-3.5 w-3.5 text-primary" />
            ) : (
              <Bookmark className="h-3.5 w-3.5" />
            )}
            <span className="ml-1 text-xs">{t("सहेजें", "Save")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyPointCard;
