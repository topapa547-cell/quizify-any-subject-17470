import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGameSfx } from "@/hooks/useGameSfx";
import { ArrowLeft, Users, Bot, Copy, Play, RefreshCw, Volume2, VolumeX } from "lucide-react";
import UnoBoard from "@/components/uno/UnoBoard";
import UnoPlayerHand from "@/components/uno/UnoPlayerHand";
import ColorPicker from "@/components/uno/ColorPicker";
import {
  UnoCard,
  UnoPlayer,
  UnoRoom,
  UnoColor,
  StackState,
  GameDirection,
  generateUnoDeck,
  shuffleDeck,
  canPlayCard,
  getDrawCount,
} from "@/types/unoTypes";

type GameMode = 'menu' | 'lobby' | 'playing';

const QuizknowMercy = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { playSfx, preloadSfx } = useGameSfx();
  
  // Sound settings
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Auth state
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Game state
  const [gameMode, setGameMode] = useState<GameMode>('menu');
  const [isBotGame, setIsBotGame] = useState(false);
  const [room, setRoom] = useState<UnoRoom | null>(null);
  const [players, setPlayers] = useState<UnoPlayer[]>([]);
  const [myHand, setMyHand] = useState<UnoCard[]>([]);
  const [roomCode, setRoomCode] = useState('');
  const [joinCode, setJoinCode] = useState('');
  
  // Color picker for wild cards
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [pendingWildCard, setPendingWildCard] = useState<UnoCard | null>(null);

  // Stack state for draw cards
  const [stackState, setStackState] = useState<StackState>({
    isStacking: false,
    stackCount: 0,
    stackType: null,
  });

  // Preload common sounds on mount
  useEffect(() => {
    if (soundEnabled) {
      preloadSfx(['card_play', 'draw_card', 'uno_call']);
    }
  }, [soundEnabled, preloadSfx]);

  // Load user data
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);

      if (session?.user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setProfile(profileData);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  // Generate room code
  const generateRoomCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  };

  // Create bot game
  const startBotGame = async () => {
    if (!user || !profile) {
      toast({ title: t("कृपया पहले लॉगिन करें", "Please login first"), variant: "destructive" });
      navigate('/auth');
      return;
    }

    setIsBotGame(true);
    const code = generateRoomCode();
    setRoomCode(code);

    // Create room
    const { data: roomData, error: roomError } = await supabase
      .from('uno_rooms')
      .insert({
        room_code: code,
        host_id: user.id,
        host_username: profile.username,
        is_bot_game: true,
        status: 'waiting',
      })
      .select()
      .single();

    if (roomError) {
      toast({ title: t("त्रुटि", "Error"), description: roomError.message, variant: "destructive" });
      return;
    }

    // Add host as player
    await supabase.from('uno_players').insert({
      room_id: roomData.id,
      user_id: user.id,
      username: profile.username,
      position: 0,
      is_bot: false,
    });

    // Add 3 bots with proper UUIDs
    const botNames = ['🤖 QuizBot', '🤖 SmartAI', '🤖 MercyBot'];
    for (let i = 0; i < 3; i++) {
      // Generate a valid UUID for bots
      const botUuid = crypto.randomUUID();
      const { error: botError } = await supabase.from('uno_players').insert({
        room_id: roomData.id,
        user_id: botUuid,
        username: botNames[i],
        position: i + 1,
        is_bot: true,
      });
      
      if (botError) {
        console.error('Error adding bot:', botError);
      }
    }

    setRoom(roomData as unknown as UnoRoom);
    setGameMode('lobby');

    // Load players
    const { data: playersData } = await supabase
      .from('uno_players')
      .select('*')
      .eq('room_id', roomData.id)
      .order('position');

    setPlayers((playersData || []) as unknown as UnoPlayer[]);
  };

  // Create online room
  const createOnlineRoom = async () => {
    if (!user || !profile) {
      toast({ title: t("कृपया पहले लॉगिन करें", "Please login first"), variant: "destructive" });
      navigate('/auth');
      return;
    }

    setIsBotGame(false);
    const code = generateRoomCode();
    setRoomCode(code);

    const { data: roomData, error } = await supabase
      .from('uno_rooms')
      .insert({
        room_code: code,
        host_id: user.id,
        host_username: profile.username,
        is_bot_game: false,
        status: 'waiting',
      })
      .select()
      .single();

    if (error) {
      toast({ title: t("त्रुटि", "Error"), description: error.message, variant: "destructive" });
      return;
    }

    // Add host
    await supabase.from('uno_players').insert({
      room_id: roomData.id,
      user_id: user.id,
      username: profile.username,
      position: 0,
      is_bot: false,
    });

    setRoom(roomData as unknown as UnoRoom);
    setGameMode('lobby');
    
    const { data: playersData } = await supabase
      .from('uno_players')
      .select('*')
      .eq('room_id', roomData.id)
      .order('position');

    setPlayers((playersData || []) as unknown as UnoPlayer[]);
  };

  // Join room
  const joinRoom = async () => {
    if (!user || !profile) {
      toast({ title: t("कृपया पहले लॉगिन करें", "Please login first"), variant: "destructive" });
      navigate('/auth');
      return;
    }

    const { data: roomData, error: roomError } = await supabase
      .from('uno_rooms')
      .select('*')
      .eq('room_code', joinCode.toUpperCase())
      .eq('status', 'waiting')
      .single();

    if (roomError || !roomData) {
      toast({ title: t("रूम नहीं मिला", "Room not found"), variant: "destructive" });
      return;
    }

    // Get current player count
    const { data: existingPlayers } = await supabase
      .from('uno_players')
      .select('position')
      .eq('room_id', roomData.id)
      .order('position', { ascending: false })
      .limit(1);

    const nextPosition = existingPlayers && existingPlayers.length > 0 
      ? existingPlayers[0].position + 1 
      : 0;

    if (nextPosition >= (roomData as any).max_players) {
      toast({ title: t("रूम भर गया", "Room is full"), variant: "destructive" });
      return;
    }

    await supabase.from('uno_players').insert({
      room_id: roomData.id,
      user_id: user.id,
      username: profile.username,
      position: nextPosition,
      is_bot: false,
    });

    setRoom(roomData as unknown as UnoRoom);
    setRoomCode(roomData.room_code);
    setIsBotGame(roomData.is_bot_game);
    setGameMode('lobby');

    const { data: playersData } = await supabase
      .from('uno_players')
      .select('*')
      .eq('room_id', roomData.id)
      .order('position');

    setPlayers((playersData || []) as unknown as UnoPlayer[]);
  };

  // Start game
  const startGame = async () => {
    if (!room || players.length < 2) {
      toast({ title: t("कम से कम 2 खिलाड़ी चाहिए", "Need at least 2 players"), variant: "destructive" });
      return;
    }

    // Generate and shuffle deck
    let deck = shuffleDeck(generateUnoDeck());
    
    // Deal 7 cards to each player
    const updatedPlayers = [...players];
    for (let i = 0; i < updatedPlayers.length; i++) {
      const hand = deck.splice(0, 7);
      updatedPlayers[i].hand = hand;

      await supabase
        .from('uno_players')
        .update({ hand: hand as any })
        .eq('id', updatedPlayers[i].id);
    }

    // Find first non-wild card for starting
    let startCardIndex = deck.findIndex(card => card.color !== 'wild');
    if (startCardIndex === -1) startCardIndex = 0;
    const startCard = deck.splice(startCardIndex, 1)[0];

    // Update room
    await supabase
      .from('uno_rooms')
      .update({
        status: 'playing',
        current_card: startCard as any,
        draw_pile: deck as any,
        discard_pile: [startCard] as any,
        started_at: new Date().toISOString(),
      })
      .eq('id', room.id);

    setPlayers(updatedPlayers);
    setMyHand(updatedPlayers.find(p => p.user_id === user?.id)?.hand || []);
    setGameMode('playing');

    // Update local room state
    setRoom(prev => prev ? {
      ...prev,
      status: 'playing',
      current_card: startCard,
      draw_pile: deck,
      discard_pile: [startCard],
    } : null);
  };

  // Play a card
  const playCard = useCallback(async (card: UnoCard) => {
    if (!room || !user) return;

    const myPlayer = players.find(p => p.user_id === user.id);
    if (!myPlayer || players[room.current_player_index]?.user_id !== user.id) {
      toast({ title: t("आपकी बारी नहीं है", "Not your turn"), variant: "destructive" });
      return;
    }

    // Check if card can be played
    if (!canPlayCard(card, room.current_card, stackState)) {
      toast({ title: t("यह कार्ड नहीं खेला जा सकता", "Can't play this card"), variant: "destructive" });
      return;
    }

    // Handle wild cards - need color selection
    if (card.color === 'wild' && !pendingWildCard) {
      setPendingWildCard(card);
      setShowColorPicker(true);
      return;
    }

    await executePlayCard(card);
  }, [room, user, players, stackState, pendingWildCard]);

  // Execute card play after color selection for wild
  const executePlayCard = async (card: UnoCard, selectedColor?: UnoColor) => {
    if (!room || !user) return;

    const myPlayer = players.find(p => p.user_id === user.id);
    if (!myPlayer) return;

    // Play card sound effect
    if (soundEnabled) {
      if (card.color === 'wild') {
        playSfx('wild_card');
      } else if (card.type === 'reverse') {
        playSfx('reverse_card');
      } else if (card.type === 'skip') {
        playSfx('skip_card');
      } else if (['draw2', 'draw4', 'draw6', 'draw10'].includes(card.type)) {
        playSfx('draw_stack');
      } else {
        playSfx('card_play');
      }
    }

    // Remove card from hand
    const newHand = myHand.filter(c => c.id !== card.id);
    setMyHand(newHand);

    // Update player hand in DB
    await supabase
      .from('uno_players')
      .update({ hand: newHand as any, has_called_uno: newHand.length === 1 })
      .eq('id', myPlayer.id);

    // Create the played card (with selected color for wild)
    const playedCard = selectedColor 
      ? { ...card, color: selectedColor } 
      : card;

    // Calculate next player and apply card effects
    let nextPlayerIndex = room.current_player_index;
    let newDirection = room.direction;
    let newStackState = { ...stackState };
    let drawCards = 0;

    switch (card.type) {
      case 'skip':
        nextPlayerIndex = (nextPlayerIndex + newDirection * 2 + players.length) % players.length;
        break;
      case 'reverse':
        newDirection = (newDirection * -1) as GameDirection;
        nextPlayerIndex = (nextPlayerIndex + newDirection + players.length) % players.length;
        break;
      case 'draw2':
      case 'draw4':
      case 'draw6':
      case 'draw10':
        drawCards = getDrawCount(card.type);
        newStackState = {
          isStacking: true,
          stackCount: newStackState.stackCount + drawCards,
          stackType: card.type as any,
        };
        nextPlayerIndex = (nextPlayerIndex + newDirection + players.length) % players.length;
        break;
      case 'wild_roulette':
        // Random player draws random 1-10 cards
        const randomPlayerIndex = Math.floor(Math.random() * players.length);
        const randomDrawCount = Math.floor(Math.random() * 10) + 1;
        await applyDrawCards(randomPlayerIndex, randomDrawCount);
        toast({
          title: `🎰 ${players[randomPlayerIndex].username} ने ${randomDrawCount} कार्ड उठाए!`,
        });
        nextPlayerIndex = (nextPlayerIndex + newDirection + players.length) % players.length;
        break;
      default:
        nextPlayerIndex = (nextPlayerIndex + newDirection + players.length) % players.length;
    }

    // Update room state
    const newDiscardPile = [...(room.discard_pile || []), playedCard];
    
    await supabase
      .from('uno_rooms')
      .update({
        current_card: playedCard as any,
        discard_pile: newDiscardPile as any,
        current_player_index: nextPlayerIndex,
        direction: newDirection,
      })
      .eq('id', room.id);

    setRoom(prev => prev ? {
      ...prev,
      current_card: playedCard,
      discard_pile: newDiscardPile,
      current_player_index: nextPlayerIndex,
      direction: newDirection,
    } : null);

    setStackState(newStackState);

    // Check for winner
    if (newHand.length === 0) {
      await handleWin();
      return;
    }

    // UNO call with sound
    if (newHand.length === 1) {
      if (soundEnabled) playSfx('uno_call');
      toast({ title: "🎉 UNO! एक कार्ड बचा!" });
    }

    // If bot game and next player is bot, trigger bot turn
    if (isBotGame && players[nextPlayerIndex]?.is_bot) {
      setTimeout(() => playBotTurn(nextPlayerIndex), 1500);
    }
  };

  // Handle color selection for wild cards
  const handleColorSelect = (color: UnoColor) => {
    setShowColorPicker(false);
    if (pendingWildCard) {
      executePlayCard(pendingWildCard, color);
      setPendingWildCard(null);
    }
  };

  // Draw cards for a player
  const applyDrawCards = async (playerIndex: number, count: number) => {
    if (!room) return;

    const player = players[playerIndex];
    const drawPile = [...(room.draw_pile || [])];
    const drawnCards = drawPile.splice(0, Math.min(count, drawPile.length));
    
    const newHand = [...player.hand, ...drawnCards];

    await supabase
      .from('uno_players')
      .update({ hand: newHand as any })
      .eq('id', player.id);

    await supabase
      .from('uno_rooms')
      .update({ draw_pile: drawPile as any })
      .eq('id', room.id);

    // Update local state if it's the current user
    if (player.user_id === user?.id) {
      setMyHand(newHand);
    }

    setRoom(prev => prev ? { ...prev, draw_pile: drawPile } : null);
    
    const updatedPlayers = [...players];
    updatedPlayers[playerIndex].hand = newHand;
    setPlayers(updatedPlayers);
  };

  // Draw a card
  const drawCard = async () => {
    if (!room || !user) return;

    const myPlayerIndex = players.findIndex(p => p.user_id === user.id);
    if (myPlayerIndex === -1 || room.current_player_index !== myPlayerIndex) {
      toast({ title: t("आपकी बारी नहीं है", "Not your turn"), variant: "destructive" });
      return;
    }

    // If stacking, apply all stacked cards
    if (stackState.isStacking) {
      await applyDrawCards(myPlayerIndex, stackState.stackCount);
      setStackState({ isStacking: false, stackCount: 0, stackType: null });
      
      // Move to next player
      const nextIndex = (room.current_player_index + room.direction + players.length) % players.length;
      await supabase
        .from('uno_rooms')
        .update({ current_player_index: nextIndex })
        .eq('id', room.id);

      setRoom(prev => prev ? { ...prev, current_player_index: nextIndex } : null);

      if (isBotGame && players[nextIndex]?.is_bot) {
        setTimeout(() => playBotTurn(nextIndex), 1500);
      }
      return;
    }

    // Normal draw with sound
    if (soundEnabled) playSfx('draw_card');
    await applyDrawCards(myPlayerIndex, 1);
    
    // Move to next player
    const nextIndex = (room.current_player_index + room.direction + players.length) % players.length;
    await supabase
      .from('uno_rooms')
      .update({ current_player_index: nextIndex })
      .eq('id', room.id);

    setRoom(prev => prev ? { ...prev, current_player_index: nextIndex } : null);

    if (isBotGame && players[nextIndex]?.is_bot) {
      setTimeout(() => playBotTurn(nextIndex), 1500);
    }
  };

  // Bot turn logic
  const playBotTurn = async (botIndex: number) => {
    if (!room) return;

    const bot = players[botIndex];
    if (!bot.is_bot) return;

    // Find a playable card
    const playableCard = bot.hand.find(card => canPlayCard(card, room.current_card, stackState));

    if (playableCard) {
      // Bot plays a card
      const newHand = bot.hand.filter(c => c.id !== playableCard.id);

      // For wild cards, pick a random color
      const playedCard = playableCard.color === 'wild'
        ? { ...playableCard, color: ['red', 'blue', 'green', 'yellow'][Math.floor(Math.random() * 4)] as UnoColor }
        : playableCard;

      // Update bot's hand
      await supabase
        .from('uno_players')
        .update({ hand: newHand as any, has_called_uno: newHand.length === 1 })
        .eq('id', bot.id);

      // Apply card effects
      let nextPlayerIndex = botIndex;
      let newDirection = room.direction;
      let newStackState = { ...stackState };
      let drawCards = 0;

      switch (playableCard.type) {
        case 'skip':
          nextPlayerIndex = (nextPlayerIndex + newDirection * 2 + players.length) % players.length;
          break;
        case 'reverse':
          newDirection = (newDirection * -1) as GameDirection;
          nextPlayerIndex = (nextPlayerIndex + newDirection + players.length) % players.length;
          break;
        case 'draw2':
        case 'draw4':
        case 'draw6':
        case 'draw10':
          drawCards = getDrawCount(playableCard.type);
          newStackState = {
            isStacking: true,
            stackCount: newStackState.stackCount + drawCards,
            stackType: playableCard.type as any,
          };
          nextPlayerIndex = (nextPlayerIndex + newDirection + players.length) % players.length;
          break;
        default:
          nextPlayerIndex = (nextPlayerIndex + newDirection + players.length) % players.length;
      }

      const newDiscardPile = [...(room.discard_pile || []), playedCard];

      await supabase
        .from('uno_rooms')
        .update({
          current_card: playedCard as any,
          discard_pile: newDiscardPile as any,
          current_player_index: nextPlayerIndex,
          direction: newDirection,
        })
        .eq('id', room.id);

      // Update local state
      const updatedPlayers = [...players];
      updatedPlayers[botIndex].hand = newHand;
      setPlayers(updatedPlayers);

      setRoom(prev => prev ? {
        ...prev,
        current_card: playedCard,
        discard_pile: newDiscardPile,
        current_player_index: nextPlayerIndex,
        direction: newDirection,
      } : null);

      setStackState(newStackState);

      toast({ title: `${bot.username} ने ${playedCard.displayValue} खेला` });

      // Check for bot win
      if (newHand.length === 0) {
        toast({ title: `🤖 ${bot.username} जीत गया!`, description: "गेम समाप्त" });
        setGameMode('menu');
        return;
      }

      // Next bot turn if applicable
      if (players[nextPlayerIndex]?.is_bot) {
        setTimeout(() => playBotTurn(nextPlayerIndex), 1500);
      }
    } else {
      // Bot draws a card
      if (stackState.isStacking) {
        await applyDrawCards(botIndex, stackState.stackCount);
        setStackState({ isStacking: false, stackCount: 0, stackType: null });
        toast({ title: `${bot.username} ने ${stackState.stackCount} कार्ड उठाए` });
      } else {
        await applyDrawCards(botIndex, 1);
        toast({ title: `${bot.username} ने कार्ड उठाया` });
      }

      const nextIndex = (botIndex + room.direction + players.length) % players.length;
      
      await supabase
        .from('uno_rooms')
        .update({ current_player_index: nextIndex })
        .eq('id', room.id);

      setRoom(prev => prev ? { ...prev, current_player_index: nextIndex } : null);

      if (players[nextIndex]?.is_bot) {
        setTimeout(() => playBotTurn(nextIndex), 1500);
      }
    }
  };

  // Handle win
  const handleWin = async () => {
    if (!room || !user || !profile) return;

    // Play win celebration sound
    if (soundEnabled) playSfx('win_celebration');

    await supabase
      .from('uno_rooms')
      .update({
        status: 'finished',
        winner_id: user.id,
        winner_username: profile.username,
        finished_at: new Date().toISOString(),
      })
      .eq('id', room.id);

    toast({
      title: "🎉 बधाई हो! आप जीत गए!",
      description: "QuizKnow Mercy में विजय!",
    });

    setGameMode('menu');
  };

  // Copy room code
  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    toast({ title: t("कोड कॉपी हो गया!", "Code copied!") });
  };

  // Real-time subscriptions
  useEffect(() => {
    if (!room?.id) return;

    const roomChannel = supabase
      .channel(`uno_room_${room.id}`)
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'uno_rooms',
        filter: `id=eq.${room.id}`,
      }, (payload) => {
        if (payload.new) {
          setRoom(payload.new as unknown as UnoRoom);
        }
      })
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'uno_players',
        filter: `room_id=eq.${room.id}`,
      }, async () => {
        const { data } = await supabase
          .from('uno_players')
          .select('*')
          .eq('room_id', room.id)
          .order('position');
        
        setPlayers((data || []) as unknown as UnoPlayer[]);
        
        const myPlayer = data?.find((p: any) => p.user_id === user?.id);
        if (myPlayer) {
          setMyHand(myPlayer.hand as unknown as UnoCard[]);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(roomChannel);
    };
  }, [room?.id, user?.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Menu Screen
  if (gameMode === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                <ArrowLeft className="w-6 h-6 text-white" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-white">QuizKnow Mercy</h1>
                <p className="text-white/70">UNO + Special Mercy Cards 🎴</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="text-white"
            >
              {soundEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </Button>
          </div>

          {/* Logo/Banner */}
          <Card className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 border-none overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🎴</div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {t("मर्सी कार्ड गेम", "Mercy Card Game")}
              </h2>
              <p className="text-white/90 text-sm">
                {t("+6, +10, और Wild Roulette के साथ!", "With +6, +10, and Wild Roulette!")}
              </p>
            </CardContent>
          </Card>

          {/* Game Options */}
          <div className="space-y-3">
            <Button
              onClick={startBotGame}
              className="w-full h-16 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            >
              <Bot className="w-6 h-6 mr-3" />
              {t("🤖 बॉट के साथ खेलें", "🤖 Play with Bots")}
            </Button>

            <Button
              onClick={createOnlineRoom}
              className="w-full h-16 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
            >
              <Users className="w-6 h-6 mr-3" />
              {t("🌐 ऑनलाइन रूम बनाएं", "🌐 Create Online Room")}
            </Button>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4 space-y-3">
                <h3 className="text-white font-medium">
                  {t("🔗 रूम में शामिल हों", "🔗 Join a Room")}
                </h3>
                <div className="flex gap-2">
                  <Input
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                    placeholder={t("रूम कोड दर्ज करें", "Enter room code")}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                    maxLength={6}
                  />
                  <Button onClick={joinRoom} variant="secondary">
                    {t("जुड़ें", "Join")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rules */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">
                {t("📜 मर्सी कार्ड्स", "📜 Mercy Cards")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-white/80 text-sm">
              <p>🃏 <strong>+6:</strong> {t("अगला खिलाड़ी 6 कार्ड उठाए", "Next player draws 6 cards")}</p>
              <p>🃏 <strong>+10:</strong> {t("अगला खिलाड़ी 10 कार्ड उठाए", "Next player draws 10 cards")}</p>
              <p>🎰 <strong>Roulette:</strong> {t("कोई भी खिलाड़ी 1-10 कार्ड उठाए!", "Any player draws 1-10 cards!")}</p>
              <p>📚 {t("+2, +4, +6, +10 को स्टैक कर सकते हैं!", "You can stack +2, +4, +6, +10!")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Lobby Screen
  if (gameMode === 'lobby') {
    const isHost = room?.host_id === user?.id;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4 pt-4">
            <Button variant="ghost" size="icon" onClick={() => setGameMode('menu')}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </Button>
            <h1 className="text-2xl font-bold text-white">
              {t("गेम लॉबी", "Game Lobby")}
            </h1>
          </div>

          {/* Room Code */}
          <Card className="bg-gradient-to-br from-primary/20 to-primary/10 border-primary/30">
            <CardContent className="p-6 text-center">
              <p className="text-white/70 mb-2">{t("रूम कोड", "Room Code")}</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl font-mono font-bold text-white tracking-widest">
                  {roomCode}
                </span>
                <Button size="icon" variant="secondary" onClick={copyRoomCode}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Players */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                {t("खिलाड़ी", "Players")} ({players.length}/{room?.max_players || 4})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"
                >
                  <span className="text-2xl">
                    {player.is_bot ? '🤖' : player.user_id === room?.host_id ? '👑' : '👤'}
                  </span>
                  <span className="text-white font-medium flex-1">
                    {player.username}
                  </span>
                  {index === 0 && (
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
                      Host
                    </span>
                  )}
                </div>
              ))}

              {players.length < (room?.max_players || 4) && !isBotGame && (
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border-2 border-dashed border-white/20">
                  <RefreshCw className="w-5 h-5 text-white/50 animate-spin" />
                  <span className="text-white/50">{t("प्रतीक्षा कर रहे हैं...", "Waiting...")}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Start Game Button */}
          {isHost && (
            <Button
              onClick={startGame}
              disabled={players.length < 2}
              className="w-full h-14 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            >
              <Play className="w-6 h-6 mr-2" />
              {t("गेम शुरू करें", "Start Game")}
            </Button>
          )}

          {!isHost && (
            <div className="text-center text-white/70">
              {t("होस्ट के गेम शुरू करने का इंतजार करें...", "Waiting for host to start...")}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Playing Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900 p-2 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-2 mb-2">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setGameMode('menu')}
          className="text-white"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          {t("बाहर", "Exit")}
        </Button>
        <div className="text-white font-bold">QuizKnow Mercy</div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="text-white h-8 w-8"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </Button>
          <span className="text-white/70 text-sm">
            🎴 {room?.draw_pile?.length || 0}
          </span>
        </div>
      </div>

      {/* Game Board */}
      <div className="flex-1">
        <UnoBoard
          currentCard={room?.current_card || null}
          drawPileCount={room?.draw_pile?.length || 0}
          players={players}
          currentPlayerIndex={room?.current_player_index || 0}
          direction={room?.direction || 1}
          currentUserId={user?.id || ''}
          stackState={stackState}
          onDrawCard={drawCard}
          isCurrentPlayer={players[room?.current_player_index || 0]?.user_id === user?.id}
        />
      </div>

      {/* My Hand */}
      <div className="bg-black/30 rounded-t-2xl p-4">
        <div className="flex items-center justify-between mb-2 px-2">
          <span className="text-white font-medium">
            {t("आपके कार्ड", "Your Cards")} ({myHand.length})
          </span>
          {myHand.length === 1 && (
            <span className="text-yellow-400 font-bold animate-pulse">UNO!</span>
          )}
        </div>
        <UnoPlayerHand
          cards={myHand}
          onPlayCard={playCard}
          isCurrentPlayer={players[room?.current_player_index || 0]?.user_id === user?.id}
          topCard={room?.current_card || null}
          stackState={stackState}
        />
      </div>

      {/* Color Picker Modal */}
      <ColorPicker
        open={showColorPicker}
        onSelectColor={handleColorSelect}
      />
    </div>
  );
};

export default QuizknowMercy;
