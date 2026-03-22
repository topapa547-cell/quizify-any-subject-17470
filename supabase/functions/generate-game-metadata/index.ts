import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { title, contentSnippet } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    // Generate metadata using AI
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: "You are a game metadata generator. Generate game descriptions and metadata based on the game title and content snippet provided."
          },
          {
            role: "user",
            content: `Generate metadata for this HTML game:
Title: ${title}
Content snippet: ${contentSnippet?.substring(0, 500) || "N/A"}

Return a JSON object with:
- description: English description (2-3 sentences, exciting)
- description_hi: Hindi description (2-3 sentences)
- category: one of "action", "puzzle", "educational", "racing", "strategy", "adventure", "sports"
- tags: array of 3-5 relevant tags`
          }
        ],
        tools: [{
          type: "function",
          function: {
            name: "generate_metadata",
            description: "Generate game metadata",
            parameters: {
              type: "object",
              properties: {
                description: { type: "string" },
                description_hi: { type: "string" },
                category: { type: "string", enum: ["action", "puzzle", "educational", "racing", "strategy", "adventure", "sports"] },
                tags: { type: "array", items: { type: "string" } }
              },
              required: ["description", "description_hi", "category", "tags"]
            }
          }
        }],
        tool_choice: { type: "function", function: { name: "generate_metadata" } }
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, try again later" }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    let metadata;

    if (toolCall?.function?.arguments) {
      metadata = JSON.parse(toolCall.function.arguments);
    } else {
      metadata = {
        description: `Play ${title} - an exciting HTML5 game!`,
        description_hi: `${title} खेलें - एक रोमांचक HTML5 गेम!`,
        category: "action",
        tags: ["game", "html5", "fun"]
      };
    }

    return new Response(JSON.stringify(metadata), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Error:", e);
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
