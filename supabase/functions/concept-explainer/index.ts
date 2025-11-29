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
    const { term, context, subject, language = "hindi" } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = language === "hindi" 
      ? `तुम एक शिक्षा विशेषज्ञ हो। जब कोई छात्र किसी concept या term के बारे में पूछे, तो:

1. **सरल परिभाषा** - आसान भाषा में समझाओ
2. **उदाहरण** - 2-3 real-life examples दो
3. **महत्व** - परीक्षा और जीवन में इसका महत्व बताओ
4. **याद रखने की ट्रिक** - आसान mnemonic या trick बताओ
5. **संबंधित concepts** - जुड़े हुए topics बताओ

Response हमेशा Hindi में दो। Markdown formatting use करो। Response 200-300 words में रखो।`
      : `You are an education expert. When a student asks about a concept or term:

1. **Simple Definition** - Explain in easy language
2. **Examples** - Give 2-3 real-life examples
3. **Importance** - Explain significance in exams and life
4. **Memory Trick** - Provide easy mnemonic or trick
5. **Related Concepts** - Mention connected topics

Use Markdown formatting. Keep response to 200-300 words.`;

    const userPrompt = language === "hindi"
      ? `विषय: ${subject}\nसंदर्भ: ${context}\n\nकृपया "${term}" को विस्तार से समझाओ।`
      : `Subject: ${subject}\nContext: ${context}\n\nPlease explain "${term}" in detail.`;

    console.log(`Explaining concept: ${term} in ${subject}`);

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
        return new Response(JSON.stringify({ error: "Payment required. Please add funds." }), {
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
    console.error("concept-explainer error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
