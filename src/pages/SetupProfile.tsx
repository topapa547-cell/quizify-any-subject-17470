import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { GraduationCap } from "lucide-react";

const SetupProfile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [classLevel, setClassLevel] = useState<number>(10);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const checkProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }
      
      setUserId(user.id);

      const { data: profile } = await supabase
        .from('profiles')
        .select('username, class_level')
        .eq('id', user.id)
        .single();
      
      // If profile is already complete, redirect to home
      if (profile?.username && profile?.class_level) {
        navigate("/");
      }
    };
    checkProfile();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || username.length < 3) {
      toast({
        title: "त्रुटि",
        description: "Username कम से कम 3 अक्षर का होना चाहिए",
        variant: "destructive",
      });
      return;
    }
    
    if (!userId) return;
    
    setLoading(true);
    
    const { error } = await supabase
      .from('profiles')
      .update({
        username: username.trim(),
        class_level: classLevel,
      })
      .eq('id', userId);
    
    if (error) {
      toast({
        title: "त्रुटि",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
    } else {
      toast({
        title: "स्वागत है!",
        description: "आपकी प्रोफाइल सेटअप पूरी हो गई है",
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">प्रोफाइल सेटअप करें</CardTitle>
          <p className="text-muted-foreground mt-2">
            शुरू करने के लिए अपनी जानकारी दर्ज करें
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username">Username *</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength={3}
                placeholder="अपना username चुनें"
                className="mt-2"
              />
              <p className="text-xs text-muted-foreground mt-1">
                कम से कम 3 अक्षर
              </p>
            </div>
            
            <div>
              <Label htmlFor="class">कक्षा चुनें *</Label>
              <Select value={classLevel.toString()} onValueChange={(val) => setClassLevel(Number(val))}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">कक्षा 9</SelectItem>
                  <SelectItem value="10">कक्षा 10</SelectItem>
                  <SelectItem value="11">कक्षा 11</SelectItem>
                  <SelectItem value="12">कक्षा 12</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "सहेजा जा रहा है..." : "जारी रखें"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SetupProfile;
