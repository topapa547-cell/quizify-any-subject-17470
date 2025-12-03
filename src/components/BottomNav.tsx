import { useState, useEffect } from "react";
import { Home, Trophy, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Count pending friend requests
      const { count: friendCount } = await supabase
        .from("friends")
        .select("*", { count: "exact", head: true })
        .eq("friend_id", user.id)
        .eq("status", "pending");

      // Count pending battle invitations
      const { count: battleCount } = await supabase
        .from("battle_invitations")
        .select("*", { count: "exact", head: true })
        .eq("receiver_id", user.id)
        .eq("status", "pending")
        .gt("expires_at", new Date().toISOString());

      setNotificationCount((friendCount || 0) + (battleCount || 0));
    };

    fetchNotifications();

    // Subscribe to real-time updates
    const setupSubscription = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const friendChannel = supabase
        .channel("bottom_nav_friends")
        .on("postgres_changes", { event: "*", schema: "public", table: "friends", filter: `friend_id=eq.${user.id}` }, () => {
          fetchNotifications();
        })
        .subscribe();

      const battleChannel = supabase
        .channel("bottom_nav_battles")
        .on("postgres_changes", { event: "*", schema: "public", table: "battle_invitations", filter: `receiver_id=eq.${user.id}` }, () => {
          fetchNotifications();
        })
        .subscribe();

      return () => {
        supabase.removeChannel(friendChannel);
        supabase.removeChannel(battleChannel);
      };
    };

    setupSubscription();
  }, []);

  const navItems = [
    { icon: Home, labelHi: "होम", labelEn: "Home", path: "/" },
    { icon: Trophy, labelHi: "रैंकिंग", labelEn: "Ranking", path: "/leaderboard" },
    { icon: User, labelHi: "प्रोफाइल", labelEn: "Profile", path: "/profile", showBadge: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full transition-colors relative",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="relative">
                <Icon className={cn("w-6 h-6 mb-1", isActive && "scale-110")} />
                {item.showBadge && notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {notificationCount > 9 ? "9+" : notificationCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium">{t(item.labelHi, item.labelEn)}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
