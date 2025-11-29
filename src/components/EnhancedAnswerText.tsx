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
          className="text-primary font-semibold underline decoration-dotted decoration-primary/50 underline-offset-2 cursor-pointer hover:bg-primary/10 px-0.5 rounded transition-colors"
          onClick={(e) => handleTermClick(term, e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleTermClick(term, e as unknown as React.MouseEvent);
            }
          }}
          title={`Click to learn more about "${term}"`}
        >
          {term}
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
          className="text-primary font-bold underline decoration-dotted decoration-primary/50 underline-offset-2 cursor-pointer hover:bg-primary/10 px-0.5 rounded transition-colors"
          onClick={(e) => handleTermClick(term, e)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleTermClick(term, e as unknown as React.MouseEvent);
            }
          }}
          title={`Click to learn more about "${term}"`}
        >
          {term}
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
