import { useState, useCallback } from "react";
import { ConceptExplainerTooltip } from "./ConceptExplainerTooltip";

interface EnhancedAnswerTextProps {
  text: string;
  subject: string;
  classLevel: number;
  chapter: string;
}

export const EnhancedAnswerText = ({
  text,
  subject,
  classLevel,
  chapter,
}: EnhancedAnswerTextProps) => {
  const [activeTerm, setActiveTerm] = useState<{
    term: string;
    position: { x: number; y: number };
  } | null>(null);

  const handleTermClick = useCallback(
    (term: string, event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      setActiveTerm({
        term,
        position: {
          x: rect.left,
          y: rect.bottom + 8,
        },
      });
    },
    []
  );

  const handleCloseTooltip = useCallback(() => {
    setActiveTerm(null);
  }, []);

  // Parse text to find [bracketed terms] and render them as clickable
  const renderTextWithClickableTerms = () => {
    // Regex to match [term] patterns
    const termRegex = /\[([^\]]+)\]/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = termRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the clickable term
      const term = match[1];
      parts.push(
        <span
          key={`${term}-${match.index}`}
          className="inline-flex items-center gap-0.5 text-primary font-semibold underline decoration-wavy decoration-primary/70 underline-offset-4 cursor-pointer hover:bg-primary/20 hover:scale-105 px-1 py-0.5 rounded-md transition-all duration-200 border border-transparent hover:border-primary/30"
          onClick={(e) => handleTermClick(term, e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleTermClick(term, e as unknown as React.MouseEvent);
            }
          }}
          title={`🔍 "${term}" के बारे में जानें`}
        >
          {term}
          <span className="text-xs opacity-70">✨</span>
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  // If no bracketed terms, also highlight **bold** terms as clickable
  const renderWithBoldTerms = () => {
    const hasBracketedTerms = /\[([^\]]+)\]/.test(text);
    
    if (hasBracketedTerms) {
      return renderTextWithClickableTerms();
    }

    // Fallback: Make **bold** terms clickable
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      const term = match[1];
      parts.push(
        <span
          key={`${term}-${match.index}`}
          className="inline-flex items-center gap-0.5 text-primary font-bold underline decoration-wavy decoration-primary/70 underline-offset-4 cursor-pointer hover:bg-primary/20 hover:scale-105 px-1 py-0.5 rounded-md transition-all duration-200 border border-transparent hover:border-primary/30 animate-pulse"
          onClick={(e) => handleTermClick(term, e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleTermClick(term, e as unknown as React.MouseEvent);
            }
          }}
          title={`🔍 "${term}" के बारे में जानें`}
        >
          {term}
          <span className="text-xs opacity-70">✨</span>
        </span>
      );

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <>
      <div className="text-sm whitespace-pre-line leading-relaxed">
        {renderWithBoldTerms()}
      </div>

      {activeTerm && (
        <ConceptExplainerTooltip
          term={activeTerm.term}
          context={chapter}
          subject={subject}
          classLevel={classLevel}
          position={activeTerm.position}
          onClose={handleCloseTooltip}
        />
      )}
    </>
  );
};
