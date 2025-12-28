import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sfxType } = await req.json();
    
    // Define sound prompts for different game actions
    const sfxPrompts: Record<string, { prompt: string; duration: number }> = {
      card_play: { 
        prompt: "Quick card flip and slap on table, playing card sound effect, crisp and satisfying", 
        duration: 0.8 
      },
      uno_call: { 
        prompt: "Triumphant shout UNO! with excitement, game show victory moment, energetic celebration sound", 
        duration: 1.5 
      },
      win_celebration: { 
        prompt: "Victory fanfare with confetti, celebration trumpets, game winning jingle, exciting finish", 
        duration: 3 
      },
      draw_card: { 
        prompt: "Card being drawn from deck, shuffling paper sound, quick slide", 
        duration: 0.5 
      },
      invalid_move: { 
        prompt: "Error buzzer, wrong answer sound, gentle rejection beep", 
        duration: 0.5 
      },
      turn_change: { 
        prompt: "Soft whoosh transition, turn notification ding, subtle game UI sound", 
        duration: 0.6 
      },
      reverse_card: { 
        prompt: "Spinning whoosh sound, direction change swirl, reverse gear effect", 
        duration: 0.8 
      },
      skip_card: { 
        prompt: "Skip sound effect, bounce away, spring jump sound", 
        duration: 0.6 
      },
      wild_card: { 
        prompt: "Magical power up sound, mystical shimmer, rainbow color burst effect", 
        duration: 1 
      },
      draw_stack: { 
        prompt: "Multiple cards dealing rapidly, card cascade, intense pile up sound", 
        duration: 1.2 
      }
    };

    const sfx = sfxPrompts[sfxType];
    if (!sfx) {
      return new Response(
        JSON.stringify({ error: "Invalid sound effect type" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const ELEVENLABS_API_KEY = Deno.env.get("ELEVENLABS_API_KEY");
    
    if (!ELEVENLABS_API_KEY) {
      // Return a simple placeholder if no API key
      console.log("No ELEVENLABS_API_KEY configured, skipping sound generation");
      return new Response(
        JSON.stringify({ skipped: true, message: "Sound effects not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://api.elevenlabs.io/v1/sound-generation", {
      method: "POST",
      headers: {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: sfx.prompt,
        duration_seconds: sfx.duration,
        prompt_influence: 0.4,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("ElevenLabs error:", errorText);
      return new Response(
        JSON.stringify({ error: "Failed to generate sound effect" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const audioBuffer = await response.arrayBuffer();
    const base64Audio = base64Encode(audioBuffer);

    return new Response(
      JSON.stringify({ audioContent: base64Audio }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
