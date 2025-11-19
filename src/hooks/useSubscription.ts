import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SubscriptionStatus {
  hasActiveSubscription: boolean;
  subscriptionPlan: string | null;
  daysRemaining: number;
  loading: boolean;
}

export const useSubscription = () => {
  const [status, setStatus] = useState<SubscriptionStatus>({
    hasActiveSubscription: false,
    subscriptionPlan: null,
    daysRemaining: 0,
    loading: true,
  });

  useEffect(() => {
    checkSubscription();
  }, []);

  const checkSubscription = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setStatus({ hasActiveSubscription: false, subscriptionPlan: null, daysRemaining: 0, loading: false });
        return;
      }

      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .single();

      if (data && data.end_date) {
        const endDate = new Date(data.end_date);
        const today = new Date();
        const diffTime = endDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        setStatus({
          hasActiveSubscription: true,
          subscriptionPlan: data.plan_type,
          daysRemaining: diffDays > 0 ? diffDays : 0,
          loading: false,
        });
      } else {
        setStatus({ hasActiveSubscription: false, subscriptionPlan: null, daysRemaining: 0, loading: false });
      }
    } catch (error) {
      console.error('Error checking subscription:', error);
      setStatus({ hasActiveSubscription: false, subscriptionPlan: null, daysRemaining: 0, loading: false });
    }
  };

  return { ...status, refreshSubscription: checkSubscription };
};
