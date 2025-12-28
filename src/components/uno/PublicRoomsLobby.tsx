import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, RefreshCw, ArrowLeft } from "lucide-react";
import UserAvatar from "@/components/UserAvatar";

interface PublicRoom {
  id: string;
  room_code: string;
  host_id: string;
  host_username: string;
  is_public: boolean;
  max_players: number;
  player_count: number;
}

interface PublicRoomsLobbyProps {
  onBack: () => void;
  onJoinRoom: (roomCode: string) => void;
  currentUserId?: string;
}

const PublicRoomsLobby = ({ onBack, onJoinRoom, currentUserId }: PublicRoomsLobbyProps) => {
  const { language, t } = useLanguage();
  const [rooms, setRooms] = useState<PublicRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPublicRooms = async () => {
    setRefreshing(true);
    
    // Get public rooms that are waiting
    const { data: roomsData, error } = await supabase
      .from('uno_rooms')
      .select('id, room_code, host_id, host_username, is_public, max_players')
      .eq('status', 'waiting')
      .eq('is_public', true)
      .eq('is_bot_game', false)
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error fetching rooms:', error);
      setLoading(false);
      setRefreshing(false);
      return;
    }

    // Get player counts for each room
    const roomsWithCounts: PublicRoom[] = [];
    for (const room of roomsData || []) {
      const { count } = await supabase
        .from('uno_players')
        .select('*', { count: 'exact', head: true })
        .eq('room_id', room.id);

      roomsWithCounts.push({
        ...room,
        is_public: room.is_public || false,
        max_players: room.max_players || 4,
        player_count: count || 0,
      });
    }

    setRooms(roomsWithCounts);
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchPublicRooms();

    // Set up real-time subscription
    const channel = supabase
      .channel('public_rooms')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'uno_rooms',
      }, () => {
        fetchPublicRooms();
      })
      .subscribe();

    // Auto-refresh every 10 seconds
    const interval = setInterval(fetchPublicRooms, 10000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-6 h-6 text-white" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-white">
                {t("पब्लिक रूम्स", "Public Rooms")}
              </h1>
              <p className="text-white/70 text-sm">
                {t("किसी भी रूम में शामिल हों", "Join any room")}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={fetchPublicRooms}
            disabled={refreshing}
            className="text-white"
          >
            <RefreshCw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Rooms List */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
          </div>
        ) : rooms.length === 0 ? (
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-white font-medium mb-2">
                {t("कोई पब्लिक रूम नहीं", "No Public Rooms")}
              </h3>
              <p className="text-white/60 text-sm">
                {t("अभी कोई पब्लिक रूम उपलब्ध नहीं है। एक नया रूम बनाएं!", 
                  "No public rooms available right now. Create a new room!")}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {rooms.map((room) => (
              <Card key={room.id} className="bg-white/10 border-white/20 overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    {/* Host Avatar */}
                    <UserAvatar
                      userId={room.host_id}
                      avatarStyle="adventurer"
                      size="lg"
                      fallbackText={room.host_username.charAt(0).toUpperCase()}
                    />

                    {/* Room Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium">
                          {room.host_username}
                        </span>
                        <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded">
                          Host
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{room.player_count}/{room.max_players}</span>
                        <span className="text-white/40">•</span>
                        <span className="font-mono">{room.room_code}</span>
                      </div>
                    </div>

                    {/* Join Button */}
                    <Button
                      onClick={() => onJoinRoom(room.room_code)}
                      disabled={room.player_count >= room.max_players}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    >
                      {room.player_count >= room.max_players
                        ? t("भरा", "Full")
                        : t("जुड़ें", "Join")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Info */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4 text-center text-white/50 text-sm">
            {t("रूम्स हर 10 सेकंड में ऑटो-रिफ्रेश होते हैं", 
              "Rooms auto-refresh every 10 seconds")}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PublicRoomsLobby;
