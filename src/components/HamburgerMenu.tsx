import { useState, useEffect } from "react";
import { Menu, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import UserAvatar from "./UserAvatar";

interface MenuItem {
  icon: string;
  labelHi: string;
  labelEn: string;
  subtitleHi: string;
  subtitleEn: string;
  path: string;
  gradient: string;
  textColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: "📍",
    labelHi: "मुख्य बिंदु",
    labelEn: "Key Points",
    subtitleHi: "NCERT के महत्वपूर्ण बिंदु",
    subtitleEn: "Important NCERT points",
    path: "/key-points",
    gradient: "from-red-50 to-red-100 dark:from-red-950/40 dark:to-red-900/40",
    textColor: "text-red-800 dark:text-red-200",
  },
  {
    icon: "📝",
    labelHi: "लंबे उत्तर वाले प्रश्न",
    labelEn: "Long Answer Questions",
    subtitleHi: "विस्तृत उत्तर अभ्यास",
    subtitleEn: "Detailed answer practice",
    path: "/long-questions",
    gradient: "from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/40",
    textColor: "text-blue-800 dark:text-blue-200",
  },
  {
    icon: "📒",
    labelHi: "Study Notes",
    labelEn: "Study Notes",
    subtitleHi: "Formulas & definitions",
    subtitleEn: "Formulas & definitions",
    path: "/study-notes",
    gradient: "from-indigo-50 to-indigo-100 dark:from-indigo-950/40 dark:to-indigo-900/40",
    textColor: "text-indigo-800 dark:text-indigo-200",
  },
  {
    icon: "📚",
    labelHi: "व्याकरण प्रयोगशाला",
    labelEn: "Grammar Lab",
    subtitleHi: "Grammar rules & practice",
    subtitleEn: "Grammar rules & practice",
    path: "/grammar-lab",
    gradient: "from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/40",
    textColor: "text-purple-800 dark:text-purple-200",
  },
  {
    icon: "✅",
    labelHi: "NCERT समाधान",
    labelEn: "NCERT Solutions",
    subtitleHi: "Official textbook solutions",
    subtitleEn: "Official textbook solutions",
    path: "/ncert-solutions",
    gradient: "from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/40",
    textColor: "text-green-800 dark:text-green-200",
  },
  {
    icon: "📄",
    labelHi: "पिछले वर्ष के प्रश्न पत्र",
    labelEn: "Previous Year Papers",
    subtitleHi: "CBSE board papers",
    subtitleEn: "CBSE board papers",
    path: "/previous-year-papers",
    gradient: "from-orange-50 to-orange-100 dark:from-orange-950/40 dark:to-orange-900/40",
    textColor: "text-orange-800 dark:text-orange-200",
  },
  {
    icon: "💡",
    labelHi: "महान व्यक्तियों से प्रेरणा",
    labelEn: "Motivational Quotes",
    subtitleHi: "Daily inspiration",
    subtitleEn: "Daily inspiration",
    path: "/motivations",
    gradient: "from-amber-50 to-amber-100 dark:from-amber-950/40 dark:to-amber-900/40",
    textColor: "text-amber-800 dark:text-amber-200",
  },
  {
    icon: "⬇️",
    labelHi: "डाउनलोड किए गए प्रश्न",
    labelEn: "Downloaded Questions",
    subtitleHi: "Offline saved content",
    subtitleEn: "Offline saved content",
    path: "/downloads",
    gradient: "from-cyan-50 to-cyan-100 dark:from-cyan-950/40 dark:to-cyan-900/40",
    textColor: "text-cyan-800 dark:text-cyan-200",
  },
  {
    icon: "❓",
    labelHi: "सहायता",
    labelEn: "Help",
    subtitleHi: "FAQ & AI assistant",
    subtitleEn: "FAQ & AI assistant",
    path: "/help",
    gradient: "from-pink-50 to-pink-100 dark:from-pink-950/40 dark:to-pink-900/40",
    textColor: "text-pink-800 dark:text-pink-200",
  },
];

const HamburgerMenu = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState<{ username: string; class_level: number; avatar_style: string | null } | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
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

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[50vw] sm:w-[45vw] min-w-[280px] max-w-[400px] p-0 overflow-y-auto">
        {/* User Profile Header */}
        <SheetHeader className="p-5 bg-gradient-to-r from-primary/10 to-primary/5 border-b">
          <div className="flex items-center gap-4">
            {userId && (
              <UserAvatar 
                userId={userId} 
                avatarStyle={profile?.avatar_style || undefined}
                size="lg"
                className="ring-2 ring-primary/20"
              />
            )}
            <div className="flex-1 min-w-0">
              <SheetTitle className="text-left truncate">
                {t("नमस्ते", "Hello")}, {profile?.username || "User"}! 👋
              </SheetTitle>
              <p className="text-sm text-muted-foreground">
                {t("कक्षा", "Class")} {profile?.class_level || "—"}
              </p>
            </div>
          </div>
        </SheetHeader>

        {/* Menu Items */}
        <div className="p-4 space-y-3">
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${item.gradient} 
                         hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer active:scale-[0.98]`}
            >
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div className="min-w-0 flex-1">
                <p className={`font-semibold truncate ${item.textColor}`}>
                  {t(item.labelHi, item.labelEn)}
                </p>
                <p className={`text-xs truncate opacity-70 ${item.textColor}`}>
                  {t(item.subtitleHi, item.subtitleEn)}
                </p>
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <div
            onClick={handleLogout}
            className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-red-50 to-red-100 
                       dark:from-red-950/40 dark:to-red-900/40 hover:shadow-lg hover:scale-[1.02] 
                       transition-all cursor-pointer active:scale-[0.98] mt-6"
          >
            <span className="text-3xl flex-shrink-0">🚪</span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold truncate text-red-800 dark:text-red-200">
                {t("लॉगआउट", "Logout")}
              </p>
              <p className="text-xs truncate opacity-70 text-red-800 dark:text-red-200">
                {t("खाते से बाहर निकलें", "Sign out of account")}
              </p>
            </div>
            <LogOut className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
