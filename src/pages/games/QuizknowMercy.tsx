import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowLeft, Users, Play, Copy, RefreshCw } from "lucide-react";
import UnoBoard from "@/components/games/uno/UnoBoard";
import { UnoCard as UnoCardType, UnoPlayer, UnoRoom } from "@/data/games/unoTypes";
import { generateDeck, isValidMove, getDrawAmount } from "@/lib/unoEngine";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const QuizknowMercy = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState<UnoRoom | null>(null);
  const [players, setPlayers] = useState<UnoPlayer[]>([]);
  const [joinCode, setJoinCode] = useState("");
  const [gamePhase, setGamePhase] = useState<"lobby" | "waiting" | "playing" | "ended">("lobby");

  // Local Game State (for Bot mode or transient updates)
  const [localDeck, setLocalDeck] = useState<UnoCardType[]>([]);
  const [localDiscardPile, setLocalDiscardPile] = useState<UnoCardType[]>([]);

  // Bot Mode
  const [isBotMode, setIsBotMode] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
        setProfile(profileData);
      }
    };
    fetchUser();
  }, []);

  // --- Bot Mode Logic ---
  const startBotGame = () => {
    if (!profile) return;
    setIsBotMode(true);
    setLoading(true);

    // Initialize Game
    const deck = generateDeck();
    const playerHand = deck.splice(0, 7);
    const botHand = deck.splice(0, 7);
    const startCard = deck.shift()!; // Ensure valid start card later? For now just take one.

    const humanPlayer: UnoPlayer = {
        id: user?.id || 'human',
        user_id: user?.id,
        username: profile.username,
        is_bot: false,
        hand: playerHand,
        card_count: 7,
        is_eliminated: false,
        turn_index: 0
    };

    const botPlayer: UnoPlayer = {
        id: 'bot-1',
        username: 'Bot 1',
        is_bot: true,
        hand: botHand,
        card_count: 7,
        is_eliminated: false,
        turn_index: 1
    };

    setPlayers([humanPlayer, botPlayer]);
    setLocalDeck(deck);
    setLocalDiscardPile([startCard]);

    setRoom({
        id: 'local-room',
        room_code: 'LOCAL',
        host_id: user?.id || 'human',
        host_username: profile.username,
        status: 'playing',
        current_player_index: 0,
        direction: 'clockwise',
        top_card: startCard,
        draw_pile_count: deck.length,
        stack_count: 0
    });

    setGamePhase('playing');
    setLoading(false);
  };

  const handleBotTurn = (bot: UnoPlayer) => {
    // 1. Check for valid moves
    const topCard = room!.top_card!;
    const stackCount = room!.stack_count;

    const validMoves = bot.hand.filter(card => isValidMove(card, topCard, stackCount));

    if (validMoves.length > 0) {
        // Simple AI: Play first valid card (prioritize action cards maybe?)
        // For now, random valid card
        const cardToPlay = validMoves[Math.floor(Math.random() * validMoves.length)];
        playCard(bot.id, cardToPlay);
    } else {
        // Draw
        drawCard(bot.id);
    }
  };

  // Bot Turn Logic
  useEffect(() => {
    if (!isBotMode || !room || gamePhase !== 'playing') return;

    const currentPlayer = players[room.current_player_index];
    if (currentPlayer.is_bot) {
        // Simulate thinking time
        const timer = setTimeout(() => {
            handleBotTurn(currentPlayer);
        }, 1500);
        return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room, players, gamePhase, isBotMode]);

  // --- Core Game Actions (Shared for Bot/Online) ---

  const playCard = (playerId: string, card: UnoCardType) => {
    if (!room) return;

    // Validate Move
    if (!isValidMove(card, room.top_card!, room.stack_count)) {
        toast.error("Invalid move!");
        return;
    }

    const playerIndex = players.findIndex(p => p.id === playerId);
    const player = players[playerIndex];
    const newHand = player.hand.filter(c => c.id !== card.id);

    // Update Game State
    let nextPlayerIndex = room.current_player_index;
    let direction = room.direction;
    let stackCount = room.stack_count;
    let winnerId = undefined;

    // Handle Actions
    const action = card.action;
    let skipNext = false;

    // Stacking
    if (['draw2', 'draw4', 'draw6', 'draw10'].includes(action)) {
        stackCount += getDrawAmount(action);
    }

    if (action === 'skip') skipNext = true;
    if (action === 'reverse') {
        direction = direction === 'clockwise' ? 'counter-clockwise' : 'clockwise';
        if (players.length === 2) skipNext = true; // Reverse acts as skip in 2 player
    }
    if (action === 'skip_everyone') {
        // Turn stays with current player (effectively skipping everyone else)
        // Implementation: Don't advance index
    }

    // Calculate Next Turn
    if (action !== 'skip_everyone') {
        const move = direction === 'clockwise' ? 1 : -1;
        let steps = 1;
        if (skipNext) steps = 2;

        nextPlayerIndex = (room.current_player_index + (move * steps)) % players.length;
        if (nextPlayerIndex < 0) nextPlayerIndex += players.length;
    }

    // Mercy Rule Check (Hand size > 25) - usually checked after drawing, but safe to check here too if needed
    // ...

    // Win Check
    if (newHand.length === 0) {
        winnerId = playerId;
        setGamePhase('ended');
    }

    // Update State
    const updatedPlayers = [...players];
    updatedPlayers[playerIndex] = { ...player, hand: newHand, card_count: newHand.length };

    setRoom(prev => ({
        ...prev!,
        top_card: card,
        current_player_index: nextPlayerIndex,
        direction,
        stack_count: stackCount,
        winner_id: winnerId,
        status: winnerId ? 'ended' : 'playing'
    }));

    setPlayers(updatedPlayers);
  };

  const drawCard = (playerId: string) => {
     if (!room) return;

     // In "Draw Until You Play" (Mercy Rule), you keep drawing.
     // For simplicity in this iteration: Draw 1 (or stack amount) and pass if cannot play?
     // Mercy rule says "Draw until you play".
     // Let's implement standard + Stack penalty first.

     const drawCount = room.stack_count > 0 ? room.stack_count : 1;
     const newDeck = [...localDeck];
     const drawnCards: UnoCardType[] = [];

     for(let i=0; i<drawCount; i++) {
        if (newDeck.length === 0) {
            // Reshuffle discard (simplified: just notify empty for now or reset)
            toast.error("Deck empty! Reshuffling...");
            // TODO: Implement reshuffle
            break;
        }
        drawnCards.push(newDeck.shift()!);
     }

     const playerIndex = players.findIndex(p => p.id === playerId);
     const player = players[playerIndex];
     const newHand = [...player.hand, ...drawnCards];

     // Check Mercy Rule (>25 cards)
     if (newHand.length >= 25) {
        toast.error(`${player.username} eliminated by Mercy Rule!`);
        // Eliminate logic
        // ...
     }

     // Update Player
     const updatedPlayers = [...players];
     updatedPlayers[playerIndex] = { ...player, hand: newHand, card_count: newHand.length };

     // Update Room (Reset stack if cards drawn)
     let nextPlayerIndex = room.current_player_index;
     if (room.stack_count > 0) {
         // If they drew due to stack, turn ends
         const move = room.direction === 'clockwise' ? 1 : -1;
         nextPlayerIndex = (room.current_player_index + move) % players.length;
         if (nextPlayerIndex < 0) nextPlayerIndex += players.length;
     }
     // If normal draw: if playable, can play? Usually yes. If not, pass.
     // Simplified: Auto-pass after draw for Bot/MVP
     else {
        // Check if the drawn card is playable?
        // For MVP, just pass turn after draw to keep it simple
        const move = room.direction === 'clockwise' ? 1 : -1;
         nextPlayerIndex = (room.current_player_index + move) % players.length;
         if (nextPlayerIndex < 0) nextPlayerIndex += players.length;
     }

     setLocalDeck(newDeck);
     setPlayers(updatedPlayers);
     setRoom(prev => ({
         ...prev!,
         stack_count: 0, // Reset stack after drawing
         current_player_index: nextPlayerIndex,
         draw_pile_count: newDeck.length
     }));
  };

  // --- RENDER ---

  if (gamePhase === 'lobby') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 to-black p-4 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
          QUIZKNOW MERCY
        </h1>

        <div className="grid gap-6 w-full max-w-md">
            <Button
                onClick={startBotGame}
                className="h-16 text-xl font-bold bg-white text-red-900 hover:bg-gray-200"
            >
                Play vs Bot
            </Button>

            <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400">Coming Soon</span>
                <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <Button disabled className="h-14 bg-gray-800">
                Online Multiplayer (Coming Soon)
            </Button>
        </div>
      </div>
    );
  }

  if (gamePhase === 'playing' && room) {
    const myPlayer = players.find(p => p.id === (isBotMode ? (user?.id || 'human') : user?.id));

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-2 sm:p-4">
            <div className="mb-4 flex items-center gap-4">
                <Button variant="ghost" className="text-white" onClick={() => setGamePhase('lobby')}>
                    <ArrowLeft className="mr-2" /> Exit
                </Button>
                <div className="text-white font-bold">
                    Room: {room.room_code}
                </div>
            </div>

            <UnoBoard
                gameState={{
                    players,
                    currentPlayerId: players[room.current_player_index].id,
                    topCard: room.top_card,
                    direction: room.direction,
                    stackCount: room.stack_count,
                    winnerId: room.winner_id
                }}
                myPlayerId={myPlayer?.id || ''}
                onPlayCard={(card) => playCard(myPlayer?.id || '', card)}
                onDrawCard={() => drawCard(myPlayer?.id || '')}
            />

            {room.winner_id && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-8 rounded-2xl text-center">
                        <h2 className="text-4xl font-black mb-4">GAME OVER</h2>
                        <p className="text-xl mb-6">
                            {room.winner_id === (user?.id || 'human') ? "YOU WIN! 🎉" : "BOT WINS! 🤖"}
                        </p>
                        <Button onClick={() => setGamePhase('lobby')}>Back to Lobby</Button>
                    </div>
                </div>
            )}
        </div>
    );
  }

  return <div>Loading...</div>;
};

export default QuizknowMercy;
