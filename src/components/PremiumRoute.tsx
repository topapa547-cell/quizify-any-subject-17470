import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SubscriptionPaywall } from "./SubscriptionPaywall";

interface PremiumRouteProps {
  children: React.ReactNode;
  featureName?: string;
}

const PremiumRoute = ({ children, featureName = "Premium Feature" }: PremiumRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        // Check authentication
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
        
        setIsAuthenticated(true);

        // Check subscription
        const { data: subscription } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', session.user.id)
          .eq('status', 'active')
          .single();

        if (subscription && subscription.end_date) {
          const endDate = new Date(subscription.end_date);
          const now = new Date();
          setHasSubscription(endDate > now);
        } else {
          setHasSubscription(false);
        }
      } catch (error) {
        console.error('Error checking access:', error);
        setHasSubscription(false);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
      if (!session) {
        setHasSubscription(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Not authenticated - redirect to auth
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // Authenticated but no subscription - show paywall
  if (!hasSubscription) {
    return <SubscriptionPaywall featureName={featureName} />;
  }

  // Has active subscription - show content
  return <>{children}</>;
};

export default PremiumRoute;
