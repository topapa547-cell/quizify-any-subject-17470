// Generates NCERT-aligned MCQs via Lovable AI and inserts into practice_questions
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUBJECTS: Record<string, { hi: string; en: string }> = {
  math: { hi: "गणित", en: "Mathematics" },
  science: { hi: "विज्ञान", en: "Science" },
  social: { hi: "सामाजिक विज्ञान", en: "Social Science" },
  english: { hi: "English", en: "English" },
  hindi: { hi: "हिंदी", en: "Hindi" },
  it_ites: { hi: "IT/ITes", en: "IT/ITes" },
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { subject, class_level, language, count } = await req.json();

    if (!subject || !class_level || !language || !count) {
      return new Response(JSON.stringify({ error: "Missing parameters" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!SUBJECTS[subject]) {
      return new Response(JSON.stringify({ error: "Invalid subject" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const subjectName = language === "hindi" ? SUBJECTS[subject].hi : SUBJECTS[subject].en;
    const langInstr =
      language === "hindi"
        ? "Write EVERY field (question, all 4 options, explanation) in Hindi (हिंदी). Use Devanagari script."
        : "Write EVERY field in English.";

    const genCount = Math.min(Math.max(Number(count) || 10, 5), 20);

    const prompt = `Generate ${genCount} unique, high-quality multiple choice questions (MCQs) strictly for CBSE Class ${class_level} ${subjectName} based on the NCERT syllabus.

Requirements:
- Exam-focused, board-relevant questions.
- Class ${class_level} level ONLY — never easier (lower class) or harder (upper class) content.
- ${langInstr}
- Each question has exactly 4 options.
- correct_option is the 0-based index (0,1,2, or 3) of the correct option.
- Include a short explanation (1-2 sentences).
- Vary difficulty (easy/medium/hard) and topics across the ${genCount} questions.
- Do NOT repeat questions.

Return ONLY a JSON array (no markdown, no prose) with objects:
{"question":"...","options":["a","b","c","d"],"correct_option":0,"explanation":"...","difficulty":"easy|medium|hard","topic":"..."}`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: "You are an expert CBSE curriculum author. Output ONLY valid JSON arrays." },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      console.error("AI gateway error:", aiRes.status, errText);
      return new Response(JSON.stringify({ error: "AI generation failed", detail: errText }), {
        status: aiRes.status === 429 || aiRes.status === 402 ? aiRes.status : 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiJson = await aiRes.json();
    let content: string = aiJson.choices?.[0]?.message?.content ?? "";
    content = content.replace(/```json\s*/gi, "").replace(/```/g, "").trim();

    let parsed: any[];
    try {
      parsed = JSON.parse(content);
    } catch {
      const match = content.match(/\[[\s\S]*\]/);
      parsed = match ? JSON.parse(match[0]) : [];
    }

    const rows = (Array.isArray(parsed) ? parsed : [])
      .filter(
        (q) =>
          q &&
          typeof q.question === "string" &&
          Array.isArray(q.options) &&
          q.options.length === 4 &&
          typeof q.correct_option === "number" &&
          q.correct_option >= 0 &&
          q.correct_option < 4
      )
      .map((q) => ({
        subject,
        class_level,
        language,
        difficulty: q.difficulty || "medium",
        question_text: String(q.question).trim(),
        option_a: String(q.options[0]).trim(),
        option_b: String(q.options[1]).trim(),
        option_c: String(q.options[2]).trim(),
        option_d: String(q.options[3]).trim(),
        correct_option: q.correct_option,
        explanation: q.explanation ? String(q.explanation).trim() : null,
        topic_tag: q.topic ? String(q.topic).trim() : null,
        verified: true,
      }));

    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: "No valid questions generated", inserted: 0 }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data, error } = await supabase.from("practice_questions").insert(rows).select("id");
    if (error) {
      console.error("Insert error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ inserted: data?.length ?? 0 }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e: any) {
    console.error("Function error:", e);
    return new Response(JSON.stringify({ error: e.message || "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
