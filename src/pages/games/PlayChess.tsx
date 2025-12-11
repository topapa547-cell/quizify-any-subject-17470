import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import ChessAIPanel from "@/components/chess/ChessAIPanel";

// Chess piece symbols
const PIECES: Record<string, string> = {
  'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟',
  'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙'
};

// Simple chess logic (basic implementation without external library)
interface ChessState {
  board: (string | null)[][];
  turn: 'w' | 'b';
  gameOver: boolean;
  winner: 'w' | 'b' | null;
}

const initialBoard = (): (string | null)[][] => [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const PlayChess = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [gameStarted, setGameStarted] = useState(false);
  const [playerColor, setPlayerColor] = useState<'w' | 'b'>('w');
  const [aiElo, setAiElo] = useState(1000);
  const [selectedSquare, setSelectedSquare] = useState<{row: number, col: number} | null>(null);
  const [gameState, setGameState] = useState<ChessState>({
    board: initialBoard(),
    turn: 'w',
    gameOver: false,
    winner: null
  });

  const isWhitePiece = (piece: string) => piece === piece.toUpperCase();
  const isBlackPiece = (piece: string) => piece === piece.toLowerCase();

  const handleSquareClick = (row: number, col: number) => {
    if (gameState.gameOver) return;
    
    const piece = gameState.board[row][col];
    
    if (selectedSquare) {
      // Try to move
      const fromPiece = gameState.board[selectedSquare.row][selectedSquare.col];
      if (fromPiece) {
        const isPlayerPiece = playerColor === 'w' ? isWhitePiece(fromPiece) : isBlackPiece(fromPiece);
        if (isPlayerPiece && gameState.turn === playerColor) {
          // Simple move (no validation for demo)
          const newBoard = gameState.board.map(r => [...r]);
          newBoard[row][col] = fromPiece;
          newBoard[selectedSquare.row][selectedSquare.col] = null;
          
          setGameState({
            ...gameState,
            board: newBoard,
            turn: gameState.turn === 'w' ? 'b' : 'w'
          });
          setSelectedSquare(null);
          
          // AI move after delay
          setTimeout(() => makeAIMove(newBoard), 500);
          return;
        }
      }
      setSelectedSquare(null);
    } else if (piece) {
      const isPlayerPiece = playerColor === 'w' ? isWhitePiece(piece) : isBlackPiece(piece);
      if (isPlayerPiece && gameState.turn === playerColor) {
        setSelectedSquare({ row, col });
      }
    }
  };

  const makeAIMove = (board: (string | null)[][]) => {
    const aiColor = playerColor === 'w' ? 'b' : 'w';
    const isAIPiece = aiColor === 'w' ? isWhitePiece : isBlackPiece;
    
    // Find all AI pieces and make a random move
    const aiPieces: {row: number, col: number, piece: string}[] = [];
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const piece = board[r][c];
        if (piece && isAIPiece(piece)) {
          aiPieces.push({ row: r, col: c, piece });
        }
      }
    }
    
    if (aiPieces.length > 0) {
      // Simple random move for demo
      const randomPiece = aiPieces[Math.floor(Math.random() * aiPieces.length)];
      const possibleMoves: {row: number, col: number}[] = [];
      
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const target = board[r][c];
          if (!target || (aiColor === 'w' ? isBlackPiece(target) : isWhitePiece(target))) {
            if (r !== randomPiece.row || c !== randomPiece.col) {
              possibleMoves.push({ row: r, col: c });
            }
          }
        }
      }
      
      if (possibleMoves.length > 0) {
        const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
        const newBoard = board.map(r => [...r]);
        newBoard[move.row][move.col] = randomPiece.piece;
        newBoard[randomPiece.row][randomPiece.col] = null;
        
        setGameState(prev => ({
          ...prev,
          board: newBoard,
          turn: playerColor
        }));
      }
    }
  };

  const startGame = () => {
    setGameState({
      board: initialBoard(),
      turn: 'w',
      gameOver: false,
      winner: null
    });
    setGameStarted(true);
    setSelectedSquare(null);
    
    // If player is black, AI moves first
    if (playerColor === 'b') {
      setTimeout(() => makeAIMove(initialBoard()), 500);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameState({
      board: initialBoard(),
      turn: 'w',
      gameOver: false,
      winner: null
    });
    setSelectedSquare(null);
  };

  const renderBoard = () => {
    const rows = playerColor === 'b' ? [0, 1, 2, 3, 4, 5, 6, 7] : [7, 6, 5, 4, 3, 2, 1, 0];
    const cols = playerColor === 'b' ? [7, 6, 5, 4, 3, 2, 1, 0] : [0, 1, 2, 3, 4, 5, 6, 7];
    
    return (
      <div className="grid grid-cols-8 gap-0 border-2 border-border rounded-lg overflow-hidden shadow-xl">
        {rows.map((row, rowIdx) =>
          cols.map((col, colIdx) => {
            const isLight = (row + col) % 2 === 0;
            const piece = gameState.board[row][col];
            const isSelected = selectedSquare?.row === row && selectedSquare?.col === col;
            
            return (
              <div
                key={`${row}-${col}`}
                onClick={() => handleSquareClick(row, col)}
                className={`
                  aspect-square flex items-center justify-center cursor-pointer
                  text-3xl sm:text-4xl md:text-5xl
                  transition-all duration-150
                  ${isLight ? 'bg-amber-100' : 'bg-amber-700'}
                  ${isSelected ? 'ring-4 ring-yellow-400 ring-inset' : ''}
                  hover:brightness-110
                `}
              >
                {piece && (
                  <span className={isWhitePiece(piece) ? 'text-white drop-shadow-lg' : 'text-gray-900'}>
                    {PIECES[piece]}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    );
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">♟️ {t("शतरंज", "Chess")}</h1>
          </div>

          <Card className="p-6 space-y-6">
            <h2 className="text-xl font-semibold text-center">
              {t("शतरंज सेटअप", "Chess Setup")}
            </h2>

            {/* Color Selection */}
            <div className="space-y-3">
              <label className="font-medium">{t("अपना रंग चुनें", "Select Your Color")}</label>
              <div className="flex gap-3">
                <Button
                  variant={playerColor === 'w' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setPlayerColor('w')}
                >
                  ⚪ {t("सफेद", "White")}
                </Button>
                <Button
                  variant={playerColor === 'b' ? 'default' : 'outline'}
                  className="flex-1"
                  onClick={() => setPlayerColor('b')}
                >
                  ⚫ {t("काला", "Black")}
                </Button>
              </div>
            </div>

            {/* AI Difficulty */}
            <div className="space-y-3">
              <label className="font-medium">
                {t("AI कठिनाई", "AI Difficulty")}: <span className="text-primary font-bold">{aiElo}</span>
              </label>
              <Slider
                value={[aiElo]}
                onValueChange={(value) => setAiElo(value[0])}
                min={500}
                max={2500}
                step={100}
                className="w-full"
              />
            </div>

            {/* Start Button */}
            <Button onClick={startGame} className="w-full" size="lg">
              🎮 {t("खेल शुरू करें", "Start Game")}
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4 pb-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={resetGame}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-bold">♟️ {t("शतरंज", "Chess")}</h1>
          </div>
          <Button variant="outline" size="sm" onClick={resetGame}>
            <RotateCcw className="h-4 w-4 mr-2" />
            {t("नया खेल", "New Game")}
          </Button>
        </div>

        {/* Turn Indicator */}
        <div className="text-center mb-4">
          <span className={`text-lg font-semibold ${gameState.turn === playerColor ? 'text-green-600' : 'text-muted-foreground'}`}>
            {gameState.turn === 'w' ? t("सफेद की बारी", "White's Turn") : t("काले की बारी", "Black's Turn")}
          </span>
        </div>

        {/* Main Content - Board + AI Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Chess Board */}
          <div className="max-w-md mx-auto lg:mx-0">
            {renderBoard()}
          </div>

          {/* AI Assistant Panel */}
          <div className="lg:max-w-md">
            <ChessAIPanel 
              board={gameState.board} 
              playerColor={playerColor} 
              userElo={aiElo} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayChess;
