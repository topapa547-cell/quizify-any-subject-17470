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
    const { messages, language = "hindi" } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not configured");
      throw new Error("LOVABLE_API_KEY not configured");
    }

    const systemPromptHindi = `आप एक Quiz App के लिए सहायक हैं जो भारतीय छात्रों (कक्षा 9-10) को बोर्ड परीक्षा की तैयारी में मदद करता है।

ऐप की मुख्य विशेषताएं:
1. MCQ Quizzes - 6 विषयों में 1000+ प्रश्न (Math, Science, Social Science, English, Hindi, IT/ITes)
2. Long Answer Questions - अध्याय-वार व्यवस्थित 1000 प्रश्न, detailed answers के साथ
3. NCERT Solutions - 500+ आधिकारिक पाठ्यपुस्तक समाधान
4. Previous Year Papers - 28 CBSE बोर्ड पेपर (2019-2024)
5. Daily Challenge - हर 24 घंटे में 20 random प्रश्न (2 अंक प्रति सही उत्तर)
6. Leaderboard - 4-tier league system (Bronze, Silver, Gold, Diamond)
7. Streak Tracking - Daily streak counter with freeze feature
8. Points System - Base (1 per correct) + Speed Bonus (0.1-0.5) + Accuracy Bonus (10-20%) × Streak Bonus (1.2x if >7 days)
9. Motivational Quotes - 200+ महान व्यक्तियों के उद्धरण
10. Profile Management - Username, class level, language preference edit करें

Points Formula: (Base Points + Speed Bonus + Accuracy Bonus) × Streak Bonus = Total Points

Leagues:
- Bronze: 0-499 अंक
- Silver: 500-999 अंक
- Gold: 1000-1999 अंक
- Diamond: 2000+ अंक

Navigation:
- Bottom Nav: Home, Leaderboard, Profile
- Hamburger Menu: Long Questions, NCERT Solutions, Previous Year Papers, Downloads, Motivational Quotes, Help, Logout

उत्तर छोटे, स्पष्ट और मददगार दें। हिंदी में जवाब दें।`;

    const systemPromptEnglish = `You are a helpful assistant for a Quiz App designed for Indian students (Classes 9-10) preparing for board exams.

App Features:
1. MCQ Quizzes - 1000+ questions across 6 subjects (Math, Science, Social Science, English, Hindi, IT/ITes)
2. Long Answer Questions - 1000 chapter-wise organized practice questions with detailed answers
3. NCERT Solutions - 500+ official textbook exercise solutions
4. Previous Year Papers - 28 CBSE board papers (2019-2024)
5. Daily Challenge - 20 random questions every 24 hours (2 points per correct)
6. Leaderboard - 4-tier league system (Bronze, Silver, Gold, Diamond)
7. Streak Tracking - Daily streak counter with freeze feature
8. Points System - Base (1 per correct) + Speed Bonus (0.1-0.5) + Accuracy Bonus (10-20%) × Streak Bonus (1.2x if >7 days)
9. Motivational Quotes - 200+ quotes from great personalities
10. Profile Management - Edit username, class level, language preference

Points Formula: (Base Points + Speed Bonus + Accuracy Bonus) × Streak Bonus = Total Points

Leagues:
- Bronze: 0-499 points
- Silver: 500-999 points
- Gold: 1000-1999 points
- Diamond: 2000+ points

Navigation:
- Bottom Nav: Home, Leaderboard, Profile
- Hamburger Menu: Long Questions, NCERT Solutions, Previous Year Papers, Downloads, Motivational Quotes, Help, Logout

Answer questions in a clear, concise, and helpful manner.`;

    const systemPrompt = language === "hindi" ? systemPromptHindi : systemPromptEnglish;

    console.log("Making request to Lovable AI Gateway...");
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
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      console.error("AI Gateway error:", response.status, await response.text());
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    console.log("Streaming response from AI Gateway");
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Help assistant error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
