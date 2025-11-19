import { useState } from "react";
import { Menu, BookOpen, Download, HelpCircle, LogOut, BookOpenCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HamburgerMenu = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: t("लॉगआउट सफल", "Logout Successful"),
      description: t("आप सफलतापूर्वक लॉगआउट हो गए हैं", "You have been logged out successfully"),
    });
    navigate("/auth");
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Menu className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem onClick={() => { navigate("/long-questions"); setOpen(false); }}>
          <BookOpen className="mr-2 h-4 w-4" />
          <span>{t("लंबे उत्तर वाले प्रश्न", "Long Answer Questions")}</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => { navigate("/ncert-solutions"); setOpen(false); }}>
          <BookOpenCheck className="mr-2 h-4 w-4" />
          <span>{t("NCERT समाधान", "NCERT Solutions")}</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => { navigate("/downloads"); setOpen(false); }}>
          <Download className="mr-2 h-4 w-4" />
          <span>{t("डाउनलोड किए गए प्रश्न", "Downloaded Questions")}</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => { navigate("/help"); setOpen(false); }}>
          <HelpCircle className="mr-2 h-4 w-4" />
          <span>{t("सहायता", "Help")}</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={handleLogout} className="text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("लॉगआउट", "Logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HamburgerMenu;
