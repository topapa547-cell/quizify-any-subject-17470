import { useState, useEffect } from "react";
import { ArrowLeft, Lightbulb, RotateCcw, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChessPuzzle } from "@/data/games/chessPuzzles";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface ChessPuzzleBoardProps {
  puzzle: ChessPuzzle;
  onSolved: (timeMs: number, hintsUsed: number) => void;
  onBack: () => void;
}

// Chess piece unicode symbols
const PIECES: { [key: string]: string } = {
  'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
  'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
};

export const ChessPuzzleBoard = ({ puzzle, onSolved, onBack }: ChessPuzzleBoardProps) => {
  const { language } = useLanguage();
  const [board, setBoard] = useState<string[][]>([]);
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [isWhiteToMove, setIsWhiteToMove] = useState(true);
  const [status, setStatus] = useState<'playing' | 'correct' | 'wrong'>('playing');

  useEffect(() => {
    const parsed = parseFEN(puzzle.puzzle_fen);
    setBoard(parsed.board);
    setIsWhiteToMove(parsed.isWhiteToMove);
  }, [puzzle]);

  useEffect(() => {
    if (status === 'playing') {
      const timer = setInterval(() => {
        setElapsed(Date.now() - startTime);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [startTime, status]);

  const parseFEN = (fen: string) => {
    const parts = fen.split(' ');
    const rows = parts[0].split('/');
    const board: string[][] = [];
    
    for (const row of rows) {
      const boardRow: string[] = [];
      for (const char of row) {
        if (!isNaN(parseInt(char))) {
          for (let i = 0; i < parseInt(char); i++) {
            boardRow.push('');
          }
        } else {
          boardRow.push(char);
        }
      }
      board.push(boardRow);
    }
    
    return {
      board,
      isWhiteToMove: parts[1] === 'w'
    };
  };

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getSquareColor = (row: number, col: number) => {
    const isLight = (row + col) % 2 === 0;
    if (selectedSquare && selectedSquare[0] === row && selectedSquare[1] === col) {
      return 'bg-yellow-400';
    }
    return isLight ? 'bg-amber-100' : 'bg-amber-700';
  };

  const handleSquareClick = (row: number, col: number) => {
    if (status !== 'playing') return;

    const piece = board[row][col];
    const isWhitePiece = piece && piece === piece.toUpperCase();
    
    if (selectedSquare) {
      // Try to make a move
      const [fromRow, fromCol] = selectedSquare;
      const move = toAlgebraic(fromRow, fromCol, row, col, board[fromRow][fromCol]);
      
      // Check if move matches the solution
      const expectedMove = puzzle.solution[currentMoveIndex];
      
      if (moveMatches(move, expectedMove)) {
        // Correct move
        const newBoard = [...board.map(r => [...r])];
        newBoard[row][col] = board[fromRow][fromCol];
        newBoard[fromRow][fromCol] = '';
        setBoard(newBoard);
        setSelectedSquare(null);
        
        if (currentMoveIndex >= puzzle.solution.length - 1) {
          // Puzzle solved!
          setStatus('correct');
          setTimeout(() => {
            onSolved(elapsed, hintsUsed);
          }, 1500);
        } else {
          setCurrentMoveIndex(prev => prev + 1);
          setIsWhiteToMove(!isWhiteToMove);
          toast.success(language === 'hindi' ? '✅ सही चाल!' : '✅ Correct move!');
        }
      } else {
        // Wrong move
        setStatus('wrong');
        toast.error(language === 'hindi' ? '❌ गलत चाल! पुनः प्रयास करें' : '❌ Wrong move! Try again');
        setTimeout(() => {
          setStatus('playing');
        }, 1000);
      }
      setSelectedSquare(null);
    } else if (piece && ((isWhiteToMove && isWhitePiece) || (!isWhiteToMove && !isWhitePiece && piece))) {
      // Select piece
      setSelectedSquare([row, col]);
    }
  };

  const toAlgebraic = (fromRow: number, fromCol: number, toRow: number, toCol: number, piece: string) => {
    const files = 'abcdefgh';
    const fromFile = files[fromCol];
    const fromRank = 8 - fromRow;
    const toFile = files[toCol];
    const toRank = 8 - toRow;
    
    const pieceChar = piece.toUpperCase();
    const isCapture = board[toRow][toCol] !== '';
    
    if (pieceChar === 'P') {
      if (isCapture) {
        return `${fromFile}x${toFile}${toRank}`;
      }
      return `${toFile}${toRank}`;
    }
    
    if (pieceChar === 'K' && Math.abs(toCol - fromCol) === 2) {
      return toCol > fromCol ? 'O-O' : 'O-O-O';
    }
    
    return `${pieceChar}${isCapture ? 'x' : ''}${toFile}${toRank}`;
  };

  const moveMatches = (made: string, expected: string) => {
    // Normalize moves for comparison
    const normalize = (m: string) => m.replace(/[+#!?]/g, '').replace('x', '');
    return normalize(made) === normalize(expected) || 
           made.includes(expected.replace(/[+#!?x]/g, ''));
  };

  const handleHint = () => {
    setHintsUsed(prev => prev + 1);
    setShowHint(true);
    toast.info(
      language === 'hindi' 
        ? puzzle.hint_text_hindi 
        : puzzle.hint_text
    );
  };

  const handleReset = () => {
    const parsed = parseFEN(puzzle.puzzle_fen);
    setBoard(parsed.board);
    setIsWhiteToMove(parsed.isWhiteToMove);
    setCurrentMoveIndex(0);
    setSelectedSquare(null);
    setStatus('playing');
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="font-mono">{formatTime(elapsed)}</span>
        </div>
        <Badge variant={
          puzzle.difficulty === 'easy' ? 'secondary' :
          puzzle.difficulty === 'medium' ? 'default' : 'destructive'
        }>
          +{puzzle.points} pts
        </Badge>
      </div>

      {/* Puzzle Info */}
      <Card className="mb-4">
        <CardHeader className="py-3">
          <CardTitle className="text-lg flex items-center gap-2">
            {language === 'hindi' ? puzzle.title_hindi : puzzle.title}
            <Badge variant="outline">{puzzle.theme}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="py-2">
          <p className="text-sm text-muted-foreground">
            {isWhiteToMove 
              ? (language === 'hindi' ? '⚪ सफेद की चाल' : '⚪ White to move')
              : (language === 'hindi' ? '⚫ काले की चाल' : '⚫ Black to move')}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {language === 'hindi' 
              ? `चाल ${currentMoveIndex + 1}/${puzzle.solution.length}` 
              : `Move ${currentMoveIndex + 1}/${puzzle.solution.length}`}
          </p>
        </CardContent>
      </Card>

      {/* Chess Board */}
      <div className="relative mb-4">
        <div className="aspect-square max-w-md mx-auto border-4 border-amber-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-8 grid-rows-8 h-full">
            {board.map((row, rowIndex) => (
              row.map((piece, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`${getSquareColor(rowIndex, colIndex)} flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                >
                  {piece && (
                    <span className={`text-2xl sm:text-3xl md:text-4xl ${
                      piece === piece.toUpperCase() ? 'text-white drop-shadow-md' : 'text-gray-900'
                    }`}>
                      {PIECES[piece]}
                    </span>
                  )}
                </div>
              ))
            ))}
          </div>
        </div>

        {/* Status Overlay */}
        {status === 'correct' && (
          <div className="absolute inset-0 bg-green-500/80 flex items-center justify-center rounded-lg">
            <div className="text-center text-white">
              <CheckCircle className="h-16 w-16 mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {language === 'hindi' ? '🎉 बधाई!' : '🎉 Correct!'}
              </p>
            </div>
          </div>
        )}

        {status === 'wrong' && (
          <div className="absolute inset-0 bg-red-500/80 flex items-center justify-center rounded-lg">
            <div className="text-center text-white">
              <XCircle className="h-16 w-16 mx-auto mb-2" />
              <p className="text-2xl font-bold">
                {language === 'hindi' ? '❌ पुनः प्रयास करें' : '❌ Try Again'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 max-w-md mx-auto">
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleHint}
          disabled={status !== 'playing'}
        >
          <Lightbulb className="h-4 w-4 mr-2" />
          {language === 'hindi' ? 'हिंट (-2)' : 'Hint (-2)'}
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleReset}
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          {language === 'hindi' ? 'रीसेट' : 'Reset'}
        </Button>
      </div>

      {/* Hint Display */}
      {showHint && (
        <Card className="mt-4 max-w-md mx-auto bg-yellow-50 dark:bg-yellow-900/20">
          <CardContent className="p-3">
            <p className="text-sm">
              💡 {language === 'hindi' ? puzzle.hint_text_hindi : puzzle.hint_text}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
