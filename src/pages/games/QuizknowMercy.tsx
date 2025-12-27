import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowLeft, Play, Copy, RefreshCw, Palette } from "lucide-react";
import UnoBoard from "@/components/games/uno/UnoBoard";
import { UnoCard as UnoCardType, UnoPlayer, UnoRoom, UnoColor } from "@/data/games/unoTypes";
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

  // Wild Card Selection
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [pendingCard, setPendingCard] = useState<UnoCardType | null>(null);

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

  // --- Realtime Subscription (Online Mode) ---
  useEffect(() => {
    if (!room || isBotMode) return;

    const channel = supabase
      .channel(`uno-room-${room.id}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "uno_rooms", filter: `id=eq.${room.id}` },
        (payload) => {
          if (payload.new) {
             // Map DB columns to our UnoRoom type
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
             const newRoomData = payload.new as any;
             setRoom(prev => ({
                 ...prev!,
                 status: newRoomData.status,
                 current_player_index: newRoomData.current_player_index,
                 direction: newRoomData.direction,
                 top_card: newRoomData.top_card,
                 stack_count: newRoomData.stack_count || 0, // Ensure column exists or defaults
                 winner_id: newRoomData.winner_id
             }));
             setGamePhase(newRoomData.status === 'ended' ? 'ended' : newRoomData.status);
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "uno_players", filter: `room_id=eq.${room.id}` },
        async () => {
           // Fetch all players to ensure full list is sync
           const { data } = await supabase.from('uno_players').select('*').eq('room_id', room.id).order('turn_index', { ascending: true });
           if (data) {
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               const mappedPlayers: UnoPlayer[] = data.map((p: any) => ({
                   id: p.id,
                   user_id: p.user_id,
                   username: p.username,
                   is_bot: p.is_bot,
                   hand: p.hand,
                   card_count: p.card_count,
                   is_eliminated: p.is_eliminated,
                   turn_index: p.turn_index,
                   avatar_url: p.avatar_url
               }));
               setPlayers(mappedPlayers);
           }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.id, isBotMode]);


  // --- Bot Mode Logic ---
  const startBotGame = () => {
    if (!profile) return;
    setIsBotMode(true);
    setLoading(true);

    // Initialize Game
    const deck = generateDeck();
    const playerHand = deck.splice(0, 7);
    const botHand = deck.splice(0, 7);
    const startCard = deck.shift()!;

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
    if (!room) return;
    // 1. Check for valid moves
    const topCard = room.top_card!;
    const stackCount = room.stack_count;

    const validMoves = bot.hand.filter(card => isValidMove(card, topCard, stackCount));

    if (validMoves.length > 0) {
        // Simple AI
        const cardToPlay = validMoves[Math.floor(Math.random() * validMoves.length)];

        // If Wild, Pick Random Color
        let colorToPick: UnoColor | undefined = undefined;
        if (cardToPlay.color === 'wild') {
            const colors: UnoColor[] = ['red', 'blue', 'green', 'yellow'];
            colorToPick = colors[Math.floor(Math.random() * colors.length)];
        }

        playCard(bot.id, cardToPlay, colorToPick);
    } else {
        // Draw (Mercy Rule: Draw until play logic is simplified here to 1 attempt + force pass if fails for now, or loop)
        // Implementing proper "Draw Until Play" for Bot:
        attemptBotDraw(bot.id);
    }
  };

  const attemptBotDraw = (botId: string) => {
      // For Bot, we can just peek deck and draw until we find one or deck limit
      // Simplified: Just call drawCard which now implements "Draw until Play" logic partly
      // or we just call drawCard once.
      // Let's rely on drawCard's logic.
      drawCard(botId);
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

  const handleHumanPlayCard = (card: UnoCardType) => {
    if (card.color === 'wild') {
        setPendingCard(card);
        setShowColorPicker(true);
    } else {
        playCard(user?.id || 'human', card);
    }
  };

  const handleColorPick = (color: UnoColor) => {
      if (pendingCard) {
          playCard(user?.id || 'human', pendingCard, color);
          setPendingCard(null);
          setShowColorPicker(false);
      }
  };

  const playCard = async (playerId: string, card: UnoCardType, chosenColor?: UnoColor) => {
    if (!room) return;

    // Validate Move (Server side / logic side)
    // Note: If Wild, we check if it is valid (always is).
    // If not wild, check vs top card.

    // If we have a chosenColor, we treat the card as that color for future matching,
    // BUT for "isValidMove" right now, we use the card's original state vs top_card.
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
        // Turn stays with current player
    }

    // Calculate Next Turn
    if (action !== 'skip_everyone') {
        const move = direction === 'clockwise' ? 1 : -1;
        let steps = 1;
        if (skipNext) steps = 2;

        nextPlayerIndex = (room.current_player_index + (move * steps)) % players.length;
        if (nextPlayerIndex < 0) nextPlayerIndex += players.length;
    }

    // Win Check
    if (newHand.length === 0) {
        winnerId = playerId;
        setGamePhase('ended');
    }

    // Prepare Top Card (with chosen color if applicable)
    const effectiveTopCard = { ...card };
    if (chosenColor) {
        effectiveTopCard.color = chosenColor; // Visually it might remain black/wild, but logic sees Color
        // To make it visually clear, we might want to change it or add a tag.
        // For simple UI, we assume Card component handles 'wild' color but maybe we want to show the 'active' color border?
        // We will pass `color` as property to card object in state.
    }

    // --- State Update ---
    if (isBotMode) {
        // Update Local State
        const updatedPlayers = [...players];
        updatedPlayers[playerIndex] = { ...player, hand: newHand, card_count: newHand.length };

        setRoom(prev => ({
            ...prev!,
            top_card: effectiveTopCard,
            current_player_index: nextPlayerIndex,
            direction,
            stack_count: stackCount,
            winner_id: winnerId,
            status: winnerId ? 'ended' : 'playing'
        }));

        setPlayers(updatedPlayers);
    } else {
        // Update Supabase
        // Note: For a real secure game, this logic should be in a Postgres Function (RPC).
        // Since we are doing client-side logic for MVP:

        await supabase.from('uno_players').update({
            hand: newHand,
            card_count: newHand.length
        }).eq('id', playerId);

        await supabase.from('uno_rooms').update({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            top_card: effectiveTopCard as any,
            current_player_index: nextPlayerIndex,
            direction: direction,
            stack_count: stackCount,
            winner_id: winnerId,
            status: winnerId ? 'ended' : 'playing'
        }).eq('id', room.id);
    }
  };

  const drawCard = async (playerId: string) => {
     if (!room) return;

     // DRAW UNTIL PLAY Logic
     // If stack_count > 0, we draw exactly that amount and pass (Stack rule usually overrides Draw Until Play in standard variants,
     // but No Mercy rules say "Draw Until You Play" applies when you don't have a matching card.
     // However, receiving a penalty (+10) is different from "choosing to draw".
     // If you take the penalty, you take cards and turn ends.

     let drawLimit = 100; // Safety break
     const newDeck = [...localDeck];
     const drawnCards: UnoCardType[] = [];
     let canPlay = false;

     if (room.stack_count > 0) {
         // Penalty Draw
         const count = room.stack_count;
         for(let i=0; i<count; i++) {
            if (newDeck.length === 0) break; // Todo reshuffle
            drawnCards.push(newDeck.shift()!);
         }
         // Turn ends after penalty
     } else {
         // Voluntary/Forced Draw (Draw Until Play)
         while (!canPlay && drawLimit > 0 && newDeck.length > 0) {
             const card = newDeck.shift()!;
             drawnCards.push(card);
             drawLimit--;

             // Check if playable
             if (isValidMove(card, room.top_card!, 0)) {
                 canPlay = true;
             }
         }
     }

     const playerIndex = players.findIndex(p => p.id === playerId);
     const player = players[playerIndex];
     const newHand = [...player.hand, ...drawnCards];

     // Check Mercy Rule (>25 cards)
     let isEliminated = false;
     if (newHand.length >= 25) {
        toast.error(`${player.username} eliminated by Mercy Rule!`);
        isEliminated = true;
     }

     // Update Player
     const updatedPlayers = [...players];
     updatedPlayers[playerIndex] = {
         ...player,
         hand: newHand,
         card_count: newHand.length,
         is_eliminated: isEliminated
     };

     // Update Room
     let nextPlayerIndex = room.current_player_index;

     // If stack count > 0, turn ends.
     // If Draw Until Play, and we found a card... we usually let the player PLAY it immediately.
     // In this simplified engine, if we found a playable card, we could:
     // 1. Auto-play it (aggressive)
     // 2. Add to hand and let player click it (better UX, but "Draw Until Play" implies you MUST play it).
     // Rule: "Draw until you get a card you can play." then "Play that card."? Usually yes.
     // For this iteration: Add to hand. If it was a voluntary draw, DO NOT advance turn yet?
     // Standard Uno: Draw 1, if playable play, else pass.
     // Mercy Uno: Draw until playable. Then Play.

     if (room.stack_count === 0 && canPlay) {
         // Do NOT advance turn. Let player play the card they just drew.
         // (Or the bot will play it in next tick if we re-trigger bot turn?)
         // For Bot: We should probably auto-play to avoid stuck loop if we rely on 'handleBotTurn' which might not re-fire if index didn't change?
         // Actually `handleBotTurn` fires on effect `room` change.
         // If we update room (deck count), effect fires? Yes.
         // So Bot will see new hand, see valid move, and play.
         // Human will see new card, see it is playable, and play.
     } else {
         // Turn ends (Stack penalty OR Deck empty/Limit reached without playable)
         const move = room.direction === 'clockwise' ? 1 : -1;
         nextPlayerIndex = (room.current_player_index + move) % players.length;
         if (nextPlayerIndex < 0) nextPlayerIndex += players.length;
     }

     if (isBotMode) {
        setLocalDeck(newDeck);
        setPlayers(updatedPlayers);
        setRoom(prev => ({
            ...prev!,
            stack_count: 0, // Reset stack after drawing penalty
            current_player_index: nextPlayerIndex,
            draw_pile_count: newDeck.length
        }));
     } else {
         // Online Mode Draw
         // Note: Managing a central deck is hard without a server process.
         // For MVP, we might treat 'draw' as generating a random card since we can't easily sync a shuffled array via simple row updates without conflicts.
         // OR we store 'deck' in 'uno_rooms' as a large JSON array.
         // Given Supabase limitations for an AI agent: generating random cards is safer for "Online MVP".

         // TODO: Implement Online Draw properly. For now, we stub it or use random generation.
         const randomCard = generateDeck()[0]; // Just a random card for now

         const newHandOnline = [...player.hand, randomCard];

         await supabase.from('uno_players').update({
             hand: newHandOnline,
             card_count: newHandOnline.length
         }).eq('id', playerId);

         // We must update room to trigger next turn if needed
         if (room.stack_count > 0 || !isValidMove(randomCard, room.top_card!, 0)) {
             await supabase.from('uno_rooms').update({
                 current_player_index: nextPlayerIndex,
                 stack_count: 0
             }).eq('id', room.id);
         }
     }
  };

  // --- ONLINE MULTIPLAYER (Basic Implementation) ---

  const createRoom = async () => {
      if (!user) return;
      setLoading(true);
      try {
          const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
          const deck = generateDeck(); // Initial deck
          const startCard = deck.shift();

          const { data: roomData, error } = await supabase.from('uno_rooms').insert({
              room_code: roomCode,
              host_id: user.id,
              host_username: profile.username || 'Host',
              status: 'waiting',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              top_card: startCard as any,
              current_player_index: 0,
              direction: 'clockwise',
              draw_pile_count: deck.length
              // Note: We aren't storing the full deck in DB in this MVP to avoid row size limits/complexity,
              // we will generate cards on the fly for online draw or assume trusted client (Host) deals.
              // Better approach: Store deck in a separate table or just array.
          }).select().single();

          if (error) throw error;

          // Add Host as Player
          await supabase.from('uno_players').insert({
              room_id: roomData.id,
              user_id: user.id,
              username: profile.username || 'Host',
              turn_index: 0,
              hand: [], // Hand dealt when game starts
              card_count: 0
          });

          // Redirect or Setup Local State to watch this room
          setJoinCode(roomCode);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setRoom(roomData as any);
          setGamePhase('waiting');
          toast.success("Room created! Share code: " + roomCode);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
          toast.error("Error creating room: " + e.message);
      } finally {
          setLoading(false);
      }
  };

  const joinRoom = async () => {
      if (!user || !joinCode) return;
      setLoading(true);
      try {
          const { data: roomData, error } = await supabase.from('uno_rooms').select('*').eq('room_code', joinCode).single();
          if (error || !roomData) throw new Error("Room not found");

          if (roomData.status !== 'waiting') throw new Error("Game already started");

          // Check if already joined
          const { data: existing } = await supabase.from('uno_players').select('*').eq('room_id', roomData.id).eq('user_id', user.id);
          if (!existing || existing.length === 0) {
              // Get current player count for index
              const { count } = await supabase.from('uno_players').select('*', { count: 'exact' }).eq('room_id', roomData.id);

              await supabase.from('uno_players').insert({
                  room_id: roomData.id,
                  user_id: user.id,
                  username: profile.username || 'Player',
                  turn_index: count || 1,
                  hand: [],
                  card_count: 0
              });
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setRoom(roomData as any);
          setGamePhase('waiting');
          toast.success("Joined room!");
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
          toast.error(e.message);
      } finally {
          setLoading(false);
      }
  };

  const startOnlineGame = async () => {
      if (!room || !players) return;
      // Only host can start
      // Deal cards
      const deck = generateDeck();

      // Update each player with a hand
      const updates = players.map((p, i) => {
          const hand = deck.splice(0, 7);
          return supabase.from('uno_players').update({
              hand: hand,
              card_count: 7,
              turn_index: i // Re-normalize indices
          }).eq('id', p.id);
      });

      await Promise.all(updates);

      const startCard = deck.shift();

      await supabase.from('uno_rooms').update({
          status: 'playing',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          top_card: startCard as any,
          current_player_index: 0
      }).eq('id', room.id);
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
                <span className="flex-shrink-0 mx-4 text-gray-400">Online</span>
                <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <Button onClick={createRoom} disabled={loading} className="h-14 bg-indigo-600 hover:bg-indigo-700">
                Create Online Room
            </Button>
            <div className="flex gap-2">
                <Input
                    placeholder="Enter Code"
                    value={joinCode}
                    onChange={e => setJoinCode(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white h-14 text-lg text-center tracking-widest"
                />
                <Button onClick={joinRoom} disabled={loading} className="h-14 px-8 bg-green-600">Join</Button>
            </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'waiting') {
      return (
          <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center">
              <h1 className="text-4xl font-bold mb-8">Waiting Room</h1>
              <div className="bg-gray-800 p-8 rounded-xl text-center mb-8">
                  <p className="text-gray-400 mb-2">Room Code</p>
                  <div className="text-5xl font-mono font-bold tracking-[1em] text-yellow-500">{room?.room_code}</div>
              </div>

              <div className="w-full max-w-md space-y-4 mb-8">
                  <h3 className="text-xl font-bold">Players ({players.length})</h3>
                  {players.map(p => (
                      <div key={p.id} className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                          <span>{p.username}</span>
                          {p.user_id === room?.host_id && <span className="text-xs bg-yellow-600 px-2 py-1 rounded">HOST</span>}
                      </div>
                  ))}
              </div>

              {room?.host_id === user?.id && (
                  <Button onClick={startOnlineGame} className="w-full max-w-md h-14 text-xl bg-green-600 hover:bg-green-700">
                      START GAME
                  </Button>
              )}
              {room?.host_id !== user?.id && (
                  <p className="animate-pulse text-gray-400">Waiting for host to start...</p>
              )}
          </div>
      );
  }

  if (gamePhase === 'playing' && room) {
    const myPlayer = players.find(p => p.id === (isBotMode ? (user?.id || 'human') : user?.id));
    const isMyTurn = players[room.current_player_index]?.id === myPlayer?.id;

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
                    currentPlayerId: players[room.current_player_index]?.id,
                    topCard: room.top_card,
                    direction: room.direction,
                    stackCount: room.stack_count,
                    winnerId: room.winner_id
                }}
                myPlayerId={myPlayer?.id || ''}
                onPlayCard={handleHumanPlayCard}
                onDrawCard={() => isMyTurn && drawCard(myPlayer?.id || '')}
            />

            {/* Color Picker Modal */}
            {showColorPicker && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <Card className="bg-gray-900 border-gray-700">
                        <CardContent className="p-6 text-center">
                            <h3 className="text-white text-xl font-bold mb-4 flex items-center justify-center gap-2">
                                <Palette /> Choose Color
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button onClick={() => handleColorPick('red')} className="w-24 h-24 bg-red-500 rounded-xl hover:scale-105 transition-transform" />
                                <button onClick={() => handleColorPick('blue')} className="w-24 h-24 bg-blue-500 rounded-xl hover:scale-105 transition-transform" />
                                <button onClick={() => handleColorPick('green')} className="w-24 h-24 bg-green-500 rounded-xl hover:scale-105 transition-transform" />
                                <button onClick={() => handleColorPick('yellow')} className="w-24 h-24 bg-yellow-400 rounded-xl hover:scale-105 transition-transform" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

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
