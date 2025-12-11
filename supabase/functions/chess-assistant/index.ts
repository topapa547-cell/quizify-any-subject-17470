import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { board, playerColor, userElo, language, requestType } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Convert board to readable format for AI
    const boardString = boardToString(board);
    const isHindi = language === "hi";

    let systemPrompt = `You are a chess coach and analyst. You help players improve their game by analyzing positions and giving helpful advice.

Your responses should be:
- Clear and educational
- Appropriate for the player's skill level (ELO: ${userElo})
- In ${isHindi ? "Hindi" : "English"} language
- Focused on practical advice

Player is playing as: ${playerColor === 'w' ? 'White' : 'Black'}
Current ELO level: ${userElo}

Adjust your explanation complexity:
- Below 800 ELO: Very simple explanations, basic concepts
- 800-1200 ELO: Intermediate explanations with some tactics
- 1200-1600 ELO: Advanced tactics and positional concepts
- Above 1600 ELO: Deep strategic analysis`;

    let userPrompt = "";

    if (requestType === "analyze") {
      userPrompt = `Analyze this chess position and provide:
1. ${isHindi ? "स्थिति का मूल्यांकन (कौन आगे है)" : "Position evaluation (who is ahead)"}
2. ${isHindi ? "मुख्य खतरे और अवसर" : "Key threats and opportunities"}
3. ${isHindi ? "अनुशंसित चाल (सबसे अच्छी 2-3 चालें)" : "Recommended moves (best 2-3 moves)"}

Current board position:
${boardString}`;
    } else if (requestType === "hint") {
      userPrompt = `Give a helpful hint for the current position. Don't give the exact move, but guide the player to think about:
- ${isHindi ? "किस टुकड़े पर ध्यान दें" : "Which piece to focus on"}
- ${isHindi ? "बोर्ड का कौन सा हिस्सा महत्वपूर्ण है" : "Which part of the board is important"}
- ${isHindi ? "क्या खतरे या अवसर हैं" : "What threats or opportunities exist"}

Current board position:
${boardString}`;
    } else if (requestType === "teach") {
      userPrompt = `Based on this position, teach something useful:
- ${isHindi ? "कोई शतरंज सिद्धांत या रणनीति" : "A chess principle or strategy"}
- ${isHindi ? "इस स्थिति से संबंधित टिप" : "A tip related to this position"}

Current board position:
${boardString}`;
    }

    console.log("Chess Assistant Request:", { requestType, userElo, language });

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add credits." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chess assistant error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function boardToString(board: (string | null)[][]): string {
  const pieceNames: Record<string, string> = {
    'k': 'black king', 'q': 'black queen', 'r': 'black rook', 
    'b': 'black bishop', 'n': 'black knight', 'p': 'black pawn',
    'K': 'white king', 'Q': 'white queen', 'R': 'white rook', 
    'B': 'white bishop', 'N': 'white knight', 'P': 'white pawn'
  };
  
  let result = "  a b c d e f g h\n";
  for (let row = 0; row < 8; row++) {
    result += `${8 - row} `;
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      result += (piece || '.') + ' ';
    }
    result += `${8 - row}\n`;
  }
  result += "  a b c d e f g h";
  
  return result;
}
