import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowLeft, Users, Play, Copy, Crown, Eye, EyeOff, Vote, Trophy, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getRandomWordPair, SpyWordPair } from "@/data/games/spyWordPairs";
import UserAvatar from "@/components/UserAvatar";

interface Player {
  id: string;
  user_id: string;
  username: string;
  is_spy: boolean;
  is_eliminated: boolean;
  votes_received: number;
}

interface Room {
  id: string;
  room_code: string;
  host_id: string;
  host_username: string;
  status: string;
  citizen_word: string | null;
  spy_word: string | null;
  current_round: number;
  max_rounds: number;
  min_players: number;
  max_players: number;
  winner_type: string | null;
}

const WhoIsTheSpy = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [room, setRoom] = useState<Room | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [joinCode, setJoinCode] = useState("");
  const [showWord, setShowWord] = useState(false);
  const [myWord, setMyWord] = useState<string>("");
  const [isSpy, setIsSpy] = useState(false);
  const [votedFor, setVotedFor] = useState<string | null>(null);
  const [votes, setVotes] = useState<{[key: string]: number}>({});
  const [gamePhase, setGamePhase] = useState<"lobby" | "waiting" | "playing" | "voting" | "result">("lobby");

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

  useEffect(() => {
    if (!room) return;

    const channel = supabase
      .channel(`spy-room-${room.id}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "spy_game_rooms", filter: `id=eq.${room.id}` },
        (payload) => {
          if (payload.new) {
            const newRoom = payload.new as Room;
            setRoom(newRoom);
            updateGamePhase(newRoom);
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "spy_game_players", filter: `room_id=eq.${room.id}` },
        async () => {
          await fetchPlayers(room.id);
        }
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "spy_game_votes", filter: `room_id=eq.${room.id}` },
        async () => {
          await fetchVotes(room.id);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [room?.id]);

  const updateGamePhase = (roomData: Room) => {
    if (roomData.status === "waiting") setGamePhase("waiting");
    else if (roomData.status === "playing") setGamePhase("playing");
    else if (roomData.status === "voting") setGamePhase("voting");
    else if (roomData.status === "ended") setGamePhase("result");
  };

  const fetchPlayers = async (roomId: string) => {
    const { data } = await supabase
      .from("spy_game_players")
      .select("*")
      .eq("room_id", roomId);
    if (data) setPlayers(data);
  };

  const fetchVotes = async (roomId: string) => {
    const { data } = await supabase
      .from("spy_game_votes")
      .select("*")
      .eq("room_id", roomId)
      .eq("round_number", room?.current_round || 1);
    
    if (data) {
      const voteCount: {[key: string]: number} = {};
      data.forEach(vote => {
        voteCount[vote.voted_for_id] = (voteCount[vote.voted_for_id] || 0) + 1;
      });
      setVotes(voteCount);
    }
  };

  const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const createRoom = async () => {
    if (!user || !profile) return;
    setLoading(true);

    try {
      const code = generateRoomCode();
      const { data, error } = await supabase
        .from("spy_game_rooms")
        .insert({
          room_code: code,
          host_id: user.id,
          host_username: profile.username,
        })
        .select()
        .single();

      if (error) throw error;

      // Join as host
      await supabase.from("spy_game_players").insert({
        room_id: data.id,
        user_id: user.id,
        username: profile.username,
      });

      setRoom(data);
      setGamePhase("waiting");
      await fetchPlayers(data.id);
      toast.success(language === "hindi" ? "Room बन गया!" : "Room created!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const joinRoom = async () => {
    if (!user || !profile || !joinCode) return;
    setLoading(true);

    try {
      const { data: roomData, error: roomError } = await supabase
        .from("spy_game_rooms")
        .select("*")
        .eq("room_code", joinCode.toUpperCase())
        .single();

      if (roomError || !roomData) {
        toast.error(language === "hindi" ? "Room नहीं मिला!" : "Room not found!");
        return;
      }

      if (roomData.status !== "waiting") {
        toast.error(language === "hindi" ? "Game पहले से शुरू है!" : "Game already started!");
        return;
      }

      const { data: existingPlayers } = await supabase
        .from("spy_game_players")
        .select("*")
        .eq("room_id", roomData.id);

      if (existingPlayers && existingPlayers.length >= roomData.max_players) {
        toast.error(language === "hindi" ? "Room भरा हुआ है!" : "Room is full!");
        return;
      }

      await supabase.from("spy_game_players").insert({
        room_id: roomData.id,
        user_id: user.id,
        username: profile.username,
      });

      setRoom(roomData);
      setGamePhase("waiting");
      await fetchPlayers(roomData.id);
      toast.success(language === "hindi" ? "Room में शामिल हो गए!" : "Joined room!");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const startGame = async () => {
    if (!room || players.length < room.min_players) {
      toast.error(language === "hindi" ? `कम से कम ${room?.min_players} खिलाड़ी चाहिए!` : `Need at least ${room?.min_players} players!`);
      return;
    }

    try {
      // Get random word pair
      const wordPair = getRandomWordPair();
      
      // Assign random spy
      const randomSpyIndex = Math.floor(Math.random() * players.length);
      const spyPlayer = players[randomSpyIndex];

      // Update all players - only spy gets is_spy = true
      for (let i = 0; i < players.length; i++) {
        await supabase
          .from("spy_game_players")
          .update({ is_spy: i === randomSpyIndex })
          .eq("id", players[i].id);
      }

      // Update room with words
      await supabase
        .from("spy_game_rooms")
        .update({
          status: "playing",
          citizen_word: language === "hindi" ? wordPair.citizenWordHi : wordPair.citizenWord,
          spy_word: language === "hindi" ? wordPair.spyWordHi : wordPair.spyWord,
          started_at: new Date().toISOString(),
        })
        .eq("id", room.id);

      // Set local state for current user
      if (spyPlayer.user_id === user?.id) {
        setIsSpy(true);
        setMyWord(language === "hindi" ? wordPair.spyWordHi : wordPair.spyWord);
      } else {
        setIsSpy(false);
        setMyWord(language === "hindi" ? wordPair.citizenWordHi : wordPair.citizenWord);
      }

      setGamePhase("playing");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const startVoting = async () => {
    if (!room) return;
    await supabase
      .from("spy_game_rooms")
      .update({ status: "voting" })
      .eq("id", room.id);
    setGamePhase("voting");
  };

  const castVote = async (playerId: string) => {
    if (!room || !user || votedFor) return;

    try {
      await supabase.from("spy_game_votes").insert({
        room_id: room.id,
        voter_id: user.id,
        voted_for_id: playerId,
        round_number: room.current_round,
      });
      setVotedFor(playerId);
      toast.success(language === "hindi" ? "वोट दे दिया!" : "Vote cast!");

      // Check if all non-eliminated players have voted
      const activePlayers = players.filter(p => !p.is_eliminated);
      const { data: allVotes } = await supabase
        .from("spy_game_votes")
        .select("*")
        .eq("room_id", room.id)
        .eq("round_number", room.current_round);

      if (allVotes && allVotes.length >= activePlayers.length) {
        await processVotingResult();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const processVotingResult = async () => {
    if (!room) return;

    // Find player with most votes
    const maxVotes = Math.max(...Object.values(votes), 0);
    const eliminatedPlayerId = Object.keys(votes).find(id => votes[id] === maxVotes);
    
    if (eliminatedPlayerId) {
      const eliminatedPlayer = players.find(p => p.user_id === eliminatedPlayerId);
      
      // Mark player as eliminated
      await supabase
        .from("spy_game_players")
        .update({ is_eliminated: true })
        .eq("room_id", room.id)
        .eq("user_id", eliminatedPlayerId);

      // Check win conditions
      if (eliminatedPlayer?.is_spy) {
        // Citizens win!
        await supabase
          .from("spy_game_rooms")
          .update({ status: "ended", winner_type: "citizens", ended_at: new Date().toISOString() })
          .eq("id", room.id);
      } else {
        // Check if spy is only player left
        const remainingCitizens = players.filter(p => !p.is_spy && !p.is_eliminated && p.user_id !== eliminatedPlayerId);
        if (remainingCitizens.length <= 1) {
          // Spy wins!
          await supabase
            .from("spy_game_rooms")
            .update({ status: "ended", winner_type: "spy", ended_at: new Date().toISOString() })
            .eq("id", room.id);
        } else {
          // Continue to next round
          await supabase
            .from("spy_game_rooms")
            .update({ 
              current_round: room.current_round + 1,
              status: "playing"
            })
            .eq("id", room.id);
          setVotedFor(null);
          setVotes({});
        }
      }
    }
  };

  const copyRoomCode = () => {
    if (room) {
      navigator.clipboard.writeText(room.room_code);
      toast.success(language === "hindi" ? "Code copy हो गया!" : "Code copied!");
    }
  };

  const leaveRoom = async () => {
    if (!room || !user) return;
    
    await supabase
      .from("spy_game_players")
      .delete()
      .eq("room_id", room.id)
      .eq("user_id", user.id);

    if (room.host_id === user.id) {
      await supabase.from("spy_game_rooms").delete().eq("id", room.id);
    }

    setRoom(null);
    setPlayers([]);
    setGamePhase("lobby");
  };

  // Lobby View
  if (gamePhase === "lobby") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950 p-4 pb-24">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">🕵️ {language === "hindi" ? "कौन है जासूस?" : "Who is the Spy?"}</h1>
          </div>

          <Card className="mb-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 border-none">
            <CardContent className="p-6">
              <h2 className="font-bold text-lg mb-3">{language === "hindi" ? "📖 कैसे खेलें?" : "📖 How to Play?"}</h2>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• {language === "hindi" ? "4-8 खिलाड़ी एक room में join करें" : "4-8 players join a room"}</li>
                <li>• {language === "hindi" ? "एक random खिलाड़ी 'जासूस' बनेगा" : "One random player becomes the 'Spy'"}</li>
                <li>• {language === "hindi" ? "सभी को एक शब्द मिलेगा (जासूस को अलग)" : "Everyone gets a word (Spy gets different)"}</li>
                <li>• {language === "hindi" ? "बारी-बारी से सवाल पूछें और जासूस को ढूंढें" : "Take turns asking questions to find the Spy"}</li>
                <li>• {language === "hindi" ? "वोटिंग से जासूस को eliminate करें" : "Vote to eliminate the Spy"}</li>
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button 
              onClick={createRoom} 
              disabled={loading}
              className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Users className="mr-2 h-5 w-5" />
              {language === "hindi" ? "नया Room बनाएं" : "Create New Room"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {language === "hindi" ? "या" : "OR"}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <Input
                placeholder={language === "hindi" ? "Room Code डालें" : "Enter Room Code"}
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                className="text-center text-lg font-mono tracking-widest"
                maxLength={6}
              />
              <Button onClick={joinRoom} disabled={loading || joinCode.length < 6}>
                <Play className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Waiting Room
  if (gamePhase === "waiting") {
    const isHost = room?.host_id === user?.id;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950 p-4 pb-24">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold">🕵️ {language === "hindi" ? "Waiting Room" : "Waiting Room"}</h1>
            <Button variant="destructive" size="sm" onClick={leaveRoom}>
              {language === "hindi" ? "छोड़ें" : "Leave"}
            </Button>
          </div>

          <Card className="mb-4 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 border-none">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground mb-1">{language === "hindi" ? "Room Code" : "Room Code"}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl font-mono font-bold tracking-widest">{room?.room_code}</span>
                <Button variant="ghost" size="icon" onClick={copyRoomCode}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5" />
                {language === "hindi" ? "खिलाड़ी" : "Players"} ({players.length}/{room?.max_players})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {players.map((player) => (
                  <div key={player.id} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                    <UserAvatar userId={player.user_id} size="md" />
                    <span className="font-medium">{player.username}</span>
                    {player.user_id === room?.host_id && (
                      <Badge variant="secondary" className="ml-auto">
                        <Crown className="h-3 w-3 mr-1" /> Host
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {isHost && (
            <Button
              onClick={startGame}
              disabled={players.length < (room?.min_players || 4)}
              className="w-full h-14 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <Play className="mr-2 h-5 w-5" />
              {language === "hindi" ? "Game शुरू करें" : "Start Game"}
              {players.length < (room?.min_players || 4) && ` (${room?.min_players} ${language === "hindi" ? "चाहिए" : "needed"})`}
            </Button>
          )}

          {!isHost && (
            <p className="text-center text-muted-foreground">
              {language === "hindi" ? "Host के शुरू करने का इंतज़ार करें..." : "Waiting for host to start..."}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Playing Phase
  if (gamePhase === "playing") {
    const isHost = room?.host_id === user?.id;
    const myPlayer = players.find(p => p.user_id === user?.id);

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950 p-4 pb-24">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold">🕵️ Round {room?.current_round}</h1>
            <Badge variant={isSpy ? "destructive" : "default"}>
              {isSpy ? (language === "hindi" ? "🕵️ जासूस" : "🕵️ Spy") : (language === "hindi" ? "👤 नागरिक" : "👤 Citizen")}
            </Badge>
          </div>

          <Card className="mb-4 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border-none">
            <CardContent className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                {language === "hindi" ? "आपका शब्द" : "Your Word"}
              </p>
              <div className="flex items-center justify-center gap-3">
                {showWord ? (
                  <span className="text-3xl font-bold">{myWord}</span>
                ) : (
                  <span className="text-3xl font-bold">• • • • •</span>
                )}
                <Button variant="ghost" size="icon" onClick={() => setShowWord(!showWord)}>
                  {showWord ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </Button>
              </div>
              {isSpy && (
                <p className="text-xs text-muted-foreground mt-2">
                  {language === "hindi" ? "आप जासूस हैं! पकड़े न जाएं!" : "You're the Spy! Don't get caught!"}
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{language === "hindi" ? "खिलाड़ी" : "Players"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {players.filter(p => !p.is_eliminated).map((player) => (
                  <div key={player.id} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                    <UserAvatar userId={player.user_id} size="sm" />
                    <span className="text-sm font-medium truncate">{player.username}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-muted-foreground text-sm mb-4">
            {language === "hindi" 
              ? "बारी-बारी से सवाल पूछें और जासूस को ढूंढें!" 
              : "Take turns asking questions to find the Spy!"}
          </p>

          {isHost && (
            <Button
              onClick={startVoting}
              className="w-full h-14 text-lg bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
            >
              <Vote className="mr-2 h-5 w-5" />
              {language === "hindi" ? "वोटिंग शुरू करें" : "Start Voting"}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Voting Phase
  if (gamePhase === "voting") {
    const activePlayers = players.filter(p => !p.is_eliminated && p.user_id !== user?.id);

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950 dark:via-orange-950 dark:to-amber-950 p-4 pb-24">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-2xl font-bold">🗳️ {language === "hindi" ? "वोटिंग" : "Voting"}</h1>
          </div>

          <p className="text-center text-muted-foreground mb-4">
            {language === "hindi" 
              ? "किसे लगता है जासूस है? वोट करें!" 
              : "Who do you think is the Spy? Vote!"}
          </p>

          <div className="space-y-3">
            {activePlayers.map((player) => (
              <Card 
                key={player.id} 
                className={`cursor-pointer transition-all ${votedFor === player.user_id ? "ring-2 ring-primary" : "hover:shadow-lg"}`}
                onClick={() => !votedFor && castVote(player.user_id)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <UserAvatar userId={player.user_id} size="md" />
                    <span className="font-medium">{player.username}</span>
                  </div>
                  {votes[player.user_id] && (
                    <Badge variant="secondary">{votes[player.user_id]} votes</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {votedFor && (
            <p className="text-center text-muted-foreground mt-4">
              {language === "hindi" ? "वोट हो गया! दूसरों का इंतज़ार करें..." : "Vote cast! Waiting for others..."}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Result Phase
  if (gamePhase === "result") {
    const spyPlayer = players.find(p => p.is_spy);
    const spyWon = room?.winner_type === "spy";

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950 dark:via-yellow-950 dark:to-orange-950 p-4 pb-24">
        <div className="max-w-md mx-auto text-center">
          <Trophy className="h-20 w-20 mx-auto mb-4 text-yellow-500" />
          
          <h1 className="text-3xl font-bold mb-2">
            {spyWon 
              ? (language === "hindi" ? "🕵️ जासूस जीता!" : "🕵️ Spy Wins!") 
              : (language === "hindi" ? "👥 नागरिक जीते!" : "👥 Citizens Win!")}
          </h1>

          <Card className="my-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 border-none">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-2">{language === "hindi" ? "जासूस था" : "The Spy was"}</p>
              <div className="flex items-center justify-center gap-3">
                <UserAvatar userId={spyPlayer?.user_id || ""} size="lg" />
                <span className="text-2xl font-bold">{spyPlayer?.username}</span>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-2 mb-6">
            <p className="text-sm text-muted-foreground">
              {language === "hindi" ? "नागरिकों का शब्द:" : "Citizens' word:"} <strong>{room?.citizen_word}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              {language === "hindi" ? "जासूस का शब्द:" : "Spy's word:"} <strong>{room?.spy_word}</strong>
            </p>
          </div>

          <Button 
            onClick={leaveRoom}
            className="w-full h-14 text-lg"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            {language === "hindi" ? "नया Game खेलें" : "Play Again"}
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default WhoIsTheSpy;
