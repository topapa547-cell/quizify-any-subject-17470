import { useState, useEffect } from "react";
import {
  Menu, LogOut, Infinity, Gamepad2, BookMarked, Laptop, PenLine, NotebookPen,
  GraduationCap, CheckCircle2, FileText, Sparkles, Download, HelpCircle,
  Newspaper, Crown, Info, Phone, Shield, ScrollText, Upload, Swords,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import UserAvatar from "./UserAvatar";

type Item = { icon: any; hi: string; en: string; path: string };
type Group = { titleHi: string; titleEn: string; items: Item[] };

const groups: Group[] = [
  {
    titleHi: "अभ्यास",
    titleEn: "Practice",
    items: [
      { icon: Infinity, hi: "अनंत अभ्यास", en: "Infinite Practice", path: "/infinite-practice" },
      { icon: Swords, hi: "मल्टीप्लेयर बैटल", en: "Multiplayer Battle", path: "/multiplayer" },
      { icon: Gamepad2, hi: "गेम ज़ोन", en: "Game Zone", path: "/game-zone" },
      { icon: Crown, hi: "शतरंज खेलें", en: "Play Chess", path: "/games/chess" },
    ],
  },
  {
    titleHi: "अध्ययन सामग्री",
    titleEn: "Study Material",
    items: [
      { icon: CheckCircle2, hi: "NCERT समाधान", en: "NCERT Solutions", path: "/ncert-solutions" },
      { icon: PenLine, hi: "लंबे उत्तर वाले प्रश्न", en: "Long Answer Questions", path: "/long-questions" },
      { icon: NotebookPen, hi: "Study Notes", en: "Study Notes", path: "/study-notes" },
      { icon: GraduationCap, hi: "व्याकरण प्रयोगशाला", en: "Grammar Lab", path: "/grammar-lab" },
      { icon: BookMarked, hi: "मुख्य बिंदु", en: "Key Points", path: "/key-points" },
      { icon: Laptop, hi: "IT किताबें PDF", en: "IT Textbooks PDF", path: "/it-textbooks" },
      { icon: FileText, hi: "पिछले वर्ष के प्रश्न पत्र", en: "Previous Year Papers", path: "/previous-year-papers" },
    ],
  },
  {
    titleHi: "अपडेट व प्रेरणा",
    titleEn: "Updates & Inspiration",
    items: [
      { icon: Newspaper, hi: "CBSE अपडेट्स", en: "CBSE Updates", path: "/cbse-updates" },
      { icon: Sparkles, hi: "प्रेरणा", en: "Motivations", path: "/motivations" },
      { icon: Download, hi: "डाउनलोड किए गए प्रश्न", en: "Downloaded Questions", path: "/downloads" },
    ],
  },
  {
    titleHi: "खाता व सहायता",
    titleEn: "Account & Support",
    items: [
      { icon: HelpCircle, hi: "सहायता", en: "Help", path: "/help" },
      { icon: Info, hi: "हमारे बारे में", en: "About Us", path: "/about" },
      { icon: Phone, hi: "संपर्क करें", en: "Contact Us", path: "/contact" },
      { icon: Shield, hi: "गोपनीयता नीति", en: "Privacy Policy", path: "/privacy-policy" },
      { icon: ScrollText, hi: "सेवा की शर्तें", en: "Terms of Service", path: "/terms-of-service" },
    ],
  },
];

const HamburgerMenu = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<{ username: string; class_level: number; avatar_style: string | null } | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        setUserEmail(user.email || null);
        const { data } = await supabase
          .from("profiles")
          .select("username, class_level, avatar_style")
          .eq("id", user.id)
          .single();
        if (data) setProfile(data);
      }
    };
    if (open) fetchProfile();
  }, [open]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: t("लॉगआउट सफल", "Logout Successful"),
      description: t("आप सफलतापूर्वक लॉगआउट हो गए हैं", "You have been logged out successfully"),
    });
    navigate("/auth");
    setOpen(false);
  };

  const go = (path: string) => { navigate(path); setOpen(false); };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[85vw] sm:w-[380px] p-0 overflow-y-auto bg-background border-l"
      >
        {/* Profile Header */}
        <SheetHeader className="p-5 border-b bg-[var(--academic-gradient)] text-primary-foreground">
          <div className="flex items-center gap-4">
            {userId && (
              <UserAvatar
                userId={userId}
                avatarStyle={profile?.avatar_style || undefined}
                size="lg"
                className="ring-2 ring-primary-foreground/30"
              />
            )}
            <div className="flex-1 min-w-0 text-left">
              <SheetTitle className="text-primary-foreground font-display text-lg truncate">
                {profile?.username || "Student"}
              </SheetTitle>
              <p className="text-xs text-primary-foreground/80 mt-0.5">
                {t("कक्षा", "Class")} {profile?.class_level || "—"} · {t("अध्ययन खाता", "Study Account")}
              </p>
            </div>
          </div>
        </SheetHeader>

        {/* Groups */}
        <nav className="p-3 space-y-5">
          {groups.map((group) => (
            <div key={group.titleEn}>
              <h4 className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {t(group.titleHi, group.titleEn)}
              </h4>
              <div className="rounded-lg border border-border/70 divide-y divide-border/60 overflow-hidden bg-card">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.path}
                      onClick={() => go(item.path)}
                      className="w-full flex items-center gap-3 px-3.5 py-3 text-left hover:bg-muted/60 active:bg-muted transition-colors"
                    >
                      <span className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-foreground flex-1 truncate">
                        {t(item.hi, item.en)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {userEmail === "radhgupta2013@gmail.com" && (
            <div>
              <h4 className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent">
                {t("व्यवस्थापक", "Admin")}
              </h4>
              <div className="rounded-lg border border-accent/30 bg-accent/5 overflow-hidden">
                <button
                  onClick={() => go("/admin/games")}
                  className="w-full flex items-center gap-3 px-3.5 py-3 text-left hover:bg-accent/10 transition-colors"
                >
                  <span className="w-8 h-8 rounded-md bg-accent/15 text-accent flex items-center justify-center">
                    <Upload className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-foreground flex-1">
                    {t("गेम अपलोड", "Game Upload")}
                  </span>
                </button>
              </div>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-destructive/30 text-destructive hover:bg-destructive/10 transition-colors text-sm font-medium"
          >
            <LogOut className="h-4 w-4" />
            {t("लॉगआउट", "Logout")}
          </button>

          <p className="text-center text-[11px] text-muted-foreground pt-2 pb-4">
            {t("विज्ञापन-मुक्त · केंद्रित अध्ययन", "Ad-free · Focused learning")}
          </p>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
