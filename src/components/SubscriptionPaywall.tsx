import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Crown, Sparkles, CheckCircle, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface SubscriptionPaywallProps {
  featureName?: string;
  onSuccess?: () => void;
}

export const SubscriptionPaywall = ({ featureName = "Premium Feature", onSuccess }: SubscriptionPaywallProps) => {
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast({
        title: "कूपन कोड डालें",
        description: "कृपया एक वैध कूपन कोड दर्ज करें",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "लॉगिन करें",
          description: "कृपया पहले लॉगिन करें",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase.rpc('validate_and_apply_coupon', {
        p_code: couponCode.trim().toUpperCase(),
        p_user_id: user.id
      });

      if (error) throw error;

      if (data && data[0]?.success) {
        toast({
          title: "🎉 Premium Activated!",
          description: "आपका प्रीमियम एक्सेस सक्रिय हो गया है!",
        });
        onSuccess?.();
        window.location.reload();
      } else {
        toast({
          title: "Invalid Coupon",
          description: data?.[0]?.message || "कूपन कोड अमान्य है",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Coupon error:", error);
      toast({
        title: "Error",
        description: "कूपन लागू करने में समस्या हुई",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const premiumFeatures = [
    "🎮 सभी गेम्स (Quick Fire, Match the Pair, etc.)",
    "📝 Long Answer Questions",
    "✅ NCERT Solutions",
    "📄 Previous Year Papers",
    "📚 Grammar Lab",
    "🔥 Daily Challenge",
    "📖 Study Materials & Key Points",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-amber-200 dark:border-amber-800 shadow-2xl">
        <CardHeader className="text-center bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-t-lg">
          <div className="flex justify-center mb-2">
            <div className="p-3 bg-white/20 rounded-full">
              <Crown className="h-8 w-8" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Premium Access Required</CardTitle>
          <p className="text-amber-100 text-sm mt-1">
            🔒 {featureName} के लिए Premium चाहिए
          </p>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {/* Premium Features List */}
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
            <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Premium Features
            </h3>
            <ul className="space-y-2">
              {premiumFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Coupon Input */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              कूपन कोड डालें (Enter Coupon Code)
            </label>
            <div className="flex gap-2">
              <Input
                placeholder="e.g., QZ9X7K2M"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                className="font-mono text-lg tracking-wider"
                maxLength={10}
              />
              <Button 
                onClick={handleApplyCoupon}
                disabled={loading}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
              >
                {loading ? "..." : "Apply"}
              </Button>
            </div>
          </div>

          {/* Back Button */}
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            वापस जाएं (Go Back)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
