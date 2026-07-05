import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Infinity, Loader2, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSubscription } from "@/hooks/useSubscription";

const SUBJECTS = [
  { id: "math", hi: "गणित", en: "Mathematics", icon: "🔢" },
  { id: "science", hi: "विज्ञान", en: "Science", icon: "🔬" },
  { id: "social", hi: "सामाजिक विज्ञान", en: "Social Science", icon: "🌍" },
  { id: "english", hi: "English", en: "English", icon: "📖" },
  { id: "hindi", hi: "हिंदी", en: "Hindi", icon: "📝" },
  { id: "it_ites", hi: "IT/ITes", en: "IT/ITes", icon: "💻" },
];

const QUANTITIES = [10, 20, 30];

const InfinitePractice = () => {
  const navigate = useNavigate();
  const { t, language: uiLang } = useLanguage();
  const { hasActiveSubscription, loading: subLoading } = useSubscription();

  const [classLevel, setClassLevel] = useState<number | null>(null);
  const [subject, setSubject] = useState("math");
  const [qLang, setQLang] = useState<"hindi" | "english">(uiLang === "english" ? "english" : "hindi");
  const [count, setCount] = useState(10);
  const [freeUsed, setFreeUsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate("/auth"); return; }
      const { data: profile } = await supabase
        .from("profiles").select("class_level").eq("id", user.id).single();
      setClassLevel(profile?.class_level ?? 10);

      // free-tier one-attempt lock
      const { count: attemptCount } = await supabase
        .from("practice_attempts")
        .select("id", { count: "exact", head: true })
        .eq("user_id", user.id);
      setFreeUsed((attemptCount ?? 0) >= 1);
      setLoading(false);
    })();
  }, [navigate]);

  const locked = !subLoading && !hasActiveSubscription && freeUsed;

  const handleStart = async () => {
    if (locked || !classLevel) return;
    setStarting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      // Try to fetch from pool
      const fetchPool = async () => {
        const { data: seen } = await supabase
          .from("practice_question_seen")
          .select("question_id")
          .eq("user_id", user.id)
          .gte("seen_at", new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString());
        const seenIds = (seen ?? []).map((r: any) => r.question_id);

        let q = supabase
          .from("practice_questions")
          .select("*")
          .eq("subject", subject)
          .eq("class_level", classLevel)
          .eq("language", qLang)
          .eq("verified", true)
          .limit(count * 4);
        if (seenIds.length > 0) q = q.not("id", "in", `(${seenIds.join(",")})`);
        const { data } = await q;
        return data ?? [];
      };

      let pool = await fetchPool();

      if (pool.length < count) {
        toast({ title: t("नए प्रश्न बनाए जा रहे हैं...", "Generating fresh questions...") });
        const { error: fnErr } = await supabase.functions.invoke("generate-practice-questions", {
          body: { subject, class_level: classLevel, language: qLang, count: Math.max(15, count) },
        });
        if (fnErr) throw fnErr;
        pool = await fetchPool();
      }

      if (pool.length === 0) {
        toast({ title: t("त्रुटि", "Error"), description: t("प्रश्न उपलब्ध नहीं हैं", "No questions available"), variant: "destructive" });
        setStarting(false);
        return;
      }

      // Shuffle & slice
      const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, count);

      navigate("/infinite-practice/quiz", {
        state: { questions: shuffled, subject, classLevel, language: qLang },
      });
    } catch (e: any) {
      console.error(e);
      toast({ title: t("त्रुटि", "Error"), description: e.message || "Failed to start", variant: "destructive" });
    } finally {
      setStarting(false);
    }
  };

  if (loading || subLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-background to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Button onClick={() => navigate("/")} variant="ghost" className="text-white hover:bg-white/10">
            <Home className="w-5 h-5 mr-2" />{t("होम", "Home")}
          </Button>
          <div className="flex items-center gap-3">
            <Infinity className="w-8 h-8" />
            <h1 className="text-xl md:text-2xl font-bold">{t("अनंत अभ्यास", "Infinite Practice")}</h1>
          </div>
          <HamburgerMenu />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        {locked && (
          <Card className="mb-6 border-amber-400 bg-amber-50 dark:bg-amber-950/30">
            <CardContent className="p-5 flex items-start gap-3">
              <Lock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-900 dark:text-amber-200">
                  {t("मुफ्त प्रयास समाप्त", "Free attempt used")}
                </p>
                <p className="text-sm text-amber-800 dark:text-amber-300 mt-1">
                  {t(
                    "अनंत अभ्यास केवल Premium सदस्यों के लिए है। आपने अपना 1 मुफ्त प्रयास उपयोग कर लिया है।",
                    "Infinite Practice is a Premium feature. You've used your 1 free attempt."
                  )}
                </p>
                <Button className="mt-3" onClick={() => navigate("/profile")}>
                  {t("Premium प्राप्त करें", "Upgrade to Premium")}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{t("अपना अभ्यास चुनें", "Choose your practice")}</span>
              <Badge variant="secondary" className="text-base">
                {t("कक्षा", "Class")} {classLevel}
              </Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {t(
                "आपकी कक्षा के अनुसार ही प्रश्न आएंगे। हर बार नए मिश्रित प्रश्न मिलेंगे।",
                "Questions are locked to your class. You get a fresh mix every time."
              )}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="font-semibold mb-3">{t("विषय", "Subject")}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SUBJECTS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSubject(s.id)}
                    className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                      subject === s.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="text-2xl block">{s.icon}</span>
                    <span>{t(s.hi, s.en)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3">{t("भाषा", "Language")}</p>
              <div className="grid grid-cols-2 gap-2">
                {(["hindi", "english"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setQLang(l)}
                    className={`p-3 rounded-lg border-2 font-medium ${
                      qLang === l ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    {l === "hindi" ? "हिंदी" : "English"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold mb-3">{t("प्रश्नों की संख्या", "Number of questions")}</p>
              <div className="grid grid-cols-3 gap-2">
                {QUANTITIES.map((n) => (
                  <button
                    key={n}
                    onClick={() => setCount(n)}
                    className={`p-3 rounded-lg border-2 font-bold text-lg ${
                      count === n ? "border-primary bg-primary/10" : "border-border"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-bold"
              onClick={handleStart}
              disabled={locked || starting}
            >
              {starting ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" />{t("तैयार हो रहा है...", "Preparing...")}</>
              ) : (
                <>♾️ {t("अभ्यास शुरू करें", "Start Practice")}</>
              )}
            </Button>
            {!hasActiveSubscription && !freeUsed && (
              <p className="text-xs text-center text-muted-foreground">
                {t("मुफ्त उपयोगकर्ता: 1 प्रयास। Premium के साथ असीमित।", "Free users: 1 attempt. Unlimited with Premium.")}
              </p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default InfinitePractice;
