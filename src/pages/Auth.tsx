import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getRandomAvatarStyle } from "@/utils/avatarGenerator";
import { generateUniqueUsername } from "@/utils/usernameGenerator";
import { SubscriptionDialog } from "@/components/SubscriptionDialog";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Auth = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [classLevel, setClassLevel] = useState<number>(9);
  const [showSubscriptionDialog, setShowSubscriptionDialog] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Check if profile setup is complete
        const { data: profile } = await supabase
          .from('profiles')
          .select('username, class_level')
          .eq('id', session.user.id)
          .single();
        
        if (!profile?.username || !profile?.class_level) {
          navigate("/setup-profile");
        } else {
          navigate("/");
        }
      }
    };
    checkUser();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast({
        title: "Username आवश्यक है",
        description: "कृपया एक username दर्ज करें।",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Generate unique username if it already exists
    const uniqueUsername = await generateUniqueUsername(username);
    
    // Sign up user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          username: uniqueUsername,
        }
      }
    });
    
    // Notify user if username was changed
    if (uniqueUsername !== username.trim()) {
      toast({
        title: "Username बदल दिया गया",
        description: `"${username}" पहले से उपयोग में है, आपका नया username: ${uniqueUsername}`,
      });
    }

    if (error) {
      setLoading(false);
      toast({
        title: "साइनअप में त्रुटि",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    // Get random avatar style for new user
    const avatarStyle = getRandomAvatarStyle();

    // Update profile with class level and avatar style
    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ 
          class_level: classLevel,
          avatar_style: avatarStyle
        })
        .eq('id', data.user.id);

      if (profileError) {
        console.error('Profile update error:', profileError);
      }
    }

    setLoading(false);
    toast({
      title: "साइनअप सफल!",
      description: `कक्षा ${classLevel} में आपका स्वागत है।`,
    });
    
    // Check subscription status before navigating
    if (data.user) {
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('status')
        .eq('user_id', data.user.id)
        .eq('status', 'active')
        .single();

      if (!subscription) {
        setShowSubscriptionDialog(true);
      } else {
        navigate('/');
      }
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "लॉगिन में त्रुटि",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "लॉगिन सफल!",
        description: "आपका स्वागत है।",
      });
      
      // Check subscription status
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: subscription } = await supabase
          .from('subscriptions')
          .select('status')
          .eq('user_id', user.id)
          .eq('status', 'active')
          .single();

        if (!subscription) {
          setShowSubscriptionDialog(true);
        } else {
          navigate('/');
        }
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      }
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Google साइनइन में त्रुटि",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: t("ईमेल आवश्यक है", "Email required"),
        description: t("कृपया अपना ईमेल दर्ज करें", "Please enter your email"),
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/auth`,
    });

    setLoading(false);

    if (error) {
      toast({
        title: t("त्रुटि", "Error"),
        description: error.message,
        variant: "destructive",
      });
    } else {
      setResetEmailSent(true);
      toast({
        title: t("ईमेल भेजा गया!", "Email Sent!"),
        description: t("पासवर्ड रीसेट लिंक आपके ईमेल पर भेजा गया है", "Password reset link has been sent to your email"),
      });
    }
  };

  // Forgot Password Form
  if (showForgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          <LanguageSelector />
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">{t('पासवर्ड रीसेट करें', 'Reset Password')}</CardTitle>
              <CardDescription>
                {resetEmailSent 
                  ? t('पासवर्ड रीसेट लिंक आपके ईमेल पर भेजा गया है। कृपया अपना ईमेल चेक करें।', 'Password reset link has been sent to your email. Please check your inbox.')
                  : t('अपना ईमेल दर्ज करें और हम आपको पासवर्ड रीसेट लिंक भेजेंगे।', 'Enter your email and we will send you a password reset link.')
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {resetEmailSent ? (
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg text-center">
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      ✅ {t('ईमेल सफलतापूर्वक भेजा गया!', 'Email sent successfully!')}
                    </p>
                  </div>
                  <Button 
                    onClick={() => {
                      setShowForgotPassword(false);
                      setResetEmailSent(false);
                    }} 
                    className="w-full"
                  >
                    {t('लॉगिन पर वापस जाएं', 'Back to Login')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">{t('ईमेल', 'Email')}</Label>
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? t('भेजा जा रहा है...', 'Sending...') : t('रीसेट लिंक भेजें', 'Send Reset Link')}
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setShowForgotPassword(false)} 
                    className="w-full"
                  >
                    {t('वापस जाएं', 'Go Back')}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <LanguageSelector />
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="text-2xl">{t('क्विज़ ऐप में आपका स्वागत है', 'Welcome to Quiz App')}</CardTitle>
            <CardDescription>{t('अपनी प्रतिभा को परखें और leaderboard में top करें!', 'Test your knowledge and top the leaderboard!')}</CardDescription>
          </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">लॉगिन</TabsTrigger>
              <TabsTrigger value="signup">साइनअप</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">ईमेल</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">पासवर्ड</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "लॉगिन हो रहा है..." : "लॉगिन करें"}
                </Button>

                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="w-full text-sm text-primary hover:underline mt-2"
                >
                  {t("पासवर्ड भूल गए?", "Forgot Password?")}
                </button>
                
                <div className="relative my-4">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                    या
                  </span>
                </div>

                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google से साइनइन करें
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-username">Username</Label>
                  <Input
                    id="signup-username"
                    type="text"
                    placeholder="आपका username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">ईमेल</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">पासवर्ड</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>अपनी कक्षा चुनें</Label>
                  <RadioGroup value={classLevel.toString()} onValueChange={(value) => setClassLevel(Number(value))}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="9" id="class-9" />
                      <Label htmlFor="class-9" className="cursor-pointer">कक्षा 9</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10" id="class-10" />
                      <Label htmlFor="class-10" className="cursor-pointer">कक्षा 10</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "साइनअप हो रहा है..." : "साइनअप करें"}
                </Button>
                
                <div className="relative my-4">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                    या
                  </span>
                </div>

                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full" 
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google से साइनअप करें
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        </Card>
      </div>
      <SubscriptionDialog
        open={showSubscriptionDialog} 
        onClose={() => {
          setShowSubscriptionDialog(false);
          navigate('/');
        }} 
      />
    </div>
  );
};

export default Auth;
