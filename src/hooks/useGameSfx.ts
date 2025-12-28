import { useCallback, useRef } from 'react';

type SfxType = 
  | 'card_play' 
  | 'uno_call' 
  | 'win_celebration' 
  | 'draw_card' 
  | 'invalid_move' 
  | 'turn_change'
  | 'reverse_card'
  | 'skip_card'
  | 'wild_card'
  | 'draw_stack';

// Cache for generated audio
const audioCache = new Map<SfxType, string>();

export const useGameSfx = () => {
  const isPlayingRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSfx = useCallback(async (sfxType: SfxType) => {
    try {
      // Check cache first
      if (audioCache.has(sfxType)) {
        const cachedUrl = audioCache.get(sfxType)!;
        const audio = new Audio(cachedUrl);
        audio.volume = 0.5;
        await audio.play();
        return;
      }

      // Prevent multiple simultaneous requests
      if (isPlayingRef.current) return;
      isPlayingRef.current = true;

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/game-sfx`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ sfxType }),
        }
      );

      const data = await response.json();
      
      if (data.skipped) {
        console.log('Sound effects not configured');
        isPlayingRef.current = false;
        return;
      }

      if (data.audioContent) {
        const audioUrl = `data:audio/mpeg;base64,${data.audioContent}`;
        
        // Cache the audio URL
        audioCache.set(sfxType, audioUrl);
        
        const audio = new Audio(audioUrl);
        audio.volume = 0.5;
        audioRef.current = audio;
        await audio.play();
      }
    } catch (error) {
      console.error('Failed to play sound effect:', error);
    } finally {
      isPlayingRef.current = false;
    }
  }, []);

  const stopSfx = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, []);

  // Pre-load common sounds
  const preloadSfx = useCallback(async (types: SfxType[]) => {
    for (const type of types) {
      if (!audioCache.has(type)) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/game-sfx`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
                Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
              },
              body: JSON.stringify({ sfxType: type }),
            }
          );
          const data = await response.json();
          if (data.audioContent) {
            audioCache.set(type, `data:audio/mpeg;base64,${data.audioContent}`);
          }
        } catch (error) {
          console.error(`Failed to preload ${type}:`, error);
        }
      }
    }
  }, []);

  return { playSfx, stopSfx, preloadSfx };
};
