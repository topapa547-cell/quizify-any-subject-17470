import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Gift, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SubscriptionDialogProps {
  open: boolean;
  onClose: () => void;
}

export const SubscriptionDialog = ({ open, onClose }: SubscriptionDialogProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast({
        title: language === 'hindi' ? 'कृपया coupon code डालें' : 'Please enter coupon code',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: language === 'hindi' ? 'कृपया पहले login करें' : 'Please login first',
          variant: 'destructive',
        });
        return;
      }

      const { data, error } = await supabase.rpc('validate_and_apply_coupon', {
        p_user_id: user.id,
        p_code: couponCode.toUpperCase(),
      });

      if (error) throw error;

      const result = data?.[0];
      
      if (result?.success) {
        setSuccess(true);
        toast({
          title: language === 'hindi' ? '🎉 बधाई हो!' : '🎉 Congratulations!',
          description: result.message,
        });
        
        setTimeout(() => {
          onClose();
          navigate('/');
        }, 2000);
      } else {
        toast({
          title: language === 'hindi' ? 'त्रुटि' : 'Error',
          description: result?.message || (language === 'hindi' ? 'कुछ गलत हो गया' : 'Something went wrong'),
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.error('Coupon application error:', error);
      toast({
        title: language === 'hindi' ? 'त्रुटि' : 'Error',
        description: error.message || (language === 'hindi' ? 'कुछ गलत हो गया' : 'Something went wrong'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {language === 'hindi' ? '🎁 Premium सदस्यता प्राप्त करें' : '🎁 Get Premium Subscription'}
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            {language === 'hindi' 
              ? 'Coupon code डालें और Premium features का मुफ्त में आनंद लें' 
              : 'Enter coupon code and enjoy Premium features for free'}
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <CheckCircle2 className="w-20 h-20 text-green-500 animate-bounce" />
            <h3 className="text-2xl font-bold text-green-600">
              {language === 'hindi' ? 'सफलतापूर्वक सक्रिय!' : 'Successfully Activated!'}
            </h3>
            <p className="text-muted-foreground text-center">
              {language === 'hindi' 
                ? 'आपको home page पर redirect किया जा रहा है...' 
                : 'Redirecting to home page...'}
            </p>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            {/* Premium Features */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold">
                  {language === 'hindi' ? 'Premium Features' : 'Premium Features'}
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  language === 'hindi' ? '✅ असीमित MCQ प्रश्न' : '✅ Unlimited MCQ Quizzes',
                  language === 'hindi' ? '✅ Long Answer Questions' : '✅ Long Answer Questions',
                  language === 'hindi' ? '✅ NCERT Solutions' : '✅ NCERT Solutions',
                  language === 'hindi' ? '✅ Previous Year Papers' : '✅ Previous Year Papers',
                  language === 'hindi' ? '✅ AI Help Assistant' : '✅ AI Help Assistant',
                  language === 'hindi' ? '✅ Daily Challenge' : '✅ Daily Challenge',
                  language === 'hindi' ? '✅ Leaderboard & Leagues' : '✅ Leaderboard & Leagues',
                  language === 'hindi' ? '✅ Motivational Quotes' : '✅ Motivational Quotes',
                  language === 'hindi' ? '✅ 6 महीने की वैधता' : '✅ 6 Months Validity',
                ].map((feature, idx) => (
                  <li key={idx} className="text-muted-foreground">{feature}</li>
                ))}
              </ul>
            </div>

            {/* Coupon Input */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-purple-600" />
                <label className="text-sm font-semibold">
                  {language === 'hindi' ? 'Coupon Code डालें:' : 'Enter Coupon Code:'}
                </label>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder={language === 'hindi' ? 'अपना code यहाँ डालें' : 'Enter your code here'}
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  className="flex-1 text-lg font-mono"
                  disabled={loading}
                  onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
                />
                <Button 
                  onClick={handleApplyCoupon} 
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    language === 'hindi' ? 'Apply करें' : 'Apply'
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                {language === 'hindi' 
                  ? '💡 अपने school/teacher से coupon code प्राप्त करें' 
                  : '💡 Get coupon code from your school/teacher'}
              </p>
            </div>

            {/* Skip Button */}
            <Button 
              variant="outline" 
              onClick={handleSkip}
              className="w-full"
              disabled={loading}
            >
              {language === 'hindi' ? 'बाद में' : 'Skip for now'}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
