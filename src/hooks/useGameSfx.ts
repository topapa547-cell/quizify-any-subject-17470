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

export const useGameSfx = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.3) => {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    
    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  }, [getAudioContext]);

  const playMultipleTones = useCallback((tones: Array<{ freq: number; delay: number; duration: number; type?: OscillatorType }>) => {
    const ctx = getAudioContext();
    tones.forEach(({ freq, delay, duration, type = 'sine' }) => {
      setTimeout(() => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
        
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + duration);
      }, delay);
    });
  }, [getAudioContext]);

  const playSfx = useCallback(async (sfxType: SfxType) => {
    try {
      switch (sfxType) {
        case 'card_play':
          playTone(800, 0.1, 'square', 0.2);
          break;
          
        case 'draw_card':
          playTone(600, 0.15, 'triangle', 0.25);
          setTimeout(() => playTone(400, 0.1, 'triangle', 0.15), 50);
          break;
          
        case 'uno_call':
          playMultipleTones([
            { freq: 523, delay: 0, duration: 0.15, type: 'square' },
            { freq: 659, delay: 100, duration: 0.15, type: 'square' },
            { freq: 784, delay: 200, duration: 0.2, type: 'square' },
            { freq: 1047, delay: 300, duration: 0.3, type: 'square' },
          ]);
          break;
          
        case 'win_celebration':
          playMultipleTones([
            { freq: 523, delay: 0, duration: 0.2, type: 'square' },
            { freq: 659, delay: 150, duration: 0.2, type: 'square' },
            { freq: 784, delay: 300, duration: 0.2, type: 'square' },
            { freq: 1047, delay: 450, duration: 0.4, type: 'square' },
            { freq: 784, delay: 650, duration: 0.15, type: 'square' },
            { freq: 1047, delay: 800, duration: 0.5, type: 'square' },
          ]);
          break;
          
        case 'reverse_card':
          playMultipleTones([
            { freq: 800, delay: 0, duration: 0.1, type: 'sawtooth' },
            { freq: 600, delay: 80, duration: 0.1, type: 'sawtooth' },
            { freq: 400, delay: 160, duration: 0.1, type: 'sawtooth' },
            { freq: 600, delay: 240, duration: 0.1, type: 'sawtooth' },
            { freq: 800, delay: 320, duration: 0.15, type: 'sawtooth' },
          ]);
          break;
          
        case 'skip_card':
          playMultipleTones([
            { freq: 1000, delay: 0, duration: 0.08, type: 'square' },
            { freq: 500, delay: 100, duration: 0.15, type: 'square' },
          ]);
          break;
          
        case 'wild_card':
          playMultipleTones([
            { freq: 300, delay: 0, duration: 0.2, type: 'sine' },
            { freq: 450, delay: 100, duration: 0.2, type: 'sine' },
            { freq: 600, delay: 200, duration: 0.2, type: 'sine' },
            { freq: 900, delay: 300, duration: 0.3, type: 'sine' },
          ]);
          break;
          
        case 'draw_stack':
          playMultipleTones([
            { freq: 400, delay: 0, duration: 0.1, type: 'sawtooth' },
            { freq: 500, delay: 80, duration: 0.1, type: 'sawtooth' },
            { freq: 600, delay: 160, duration: 0.1, type: 'sawtooth' },
            { freq: 700, delay: 240, duration: 0.15, type: 'sawtooth' },
          ]);
          break;
          
        case 'invalid_move':
          playTone(200, 0.2, 'sawtooth', 0.3);
          break;
          
        case 'turn_change':
          playTone(600, 0.1, 'sine', 0.15);
          break;
          
        default:
          playTone(440, 0.1, 'sine', 0.2);
      }
    } catch (error) {
      console.error('Error playing sound effect:', error);
    }
  }, [playTone, playMultipleTones]);

  const stopSfx = useCallback(() => {
    // Web Audio API sounds are self-stopping
  }, []);

  const preloadSfx = useCallback((_types: SfxType[]) => {
    // Initialize the audio context on user interaction
    getAudioContext();
  }, [getAudioContext]);

  return { playSfx, stopSfx, preloadSfx };
};
