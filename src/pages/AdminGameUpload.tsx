import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Loader2, Trash2, Eye, EyeOff, Pencil } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const AdminGameUpload = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [games, setGames] = useState<any[]>([]);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionHi, setDescriptionHi] = useState("");
  const [category, setCategory] = useState("action");
  const [tags, setTags] = useState("");
  const [gameFile, setGameFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || user.email !== "radhgupta2013@gmail.com") {
      navigate("/game-zone");
      return;
    }
    setIsAdmin(true);
    setLoading(false);
    fetchGames();
  };

  const fetchGames = async () => {
    const { data } = await supabase
      .from("uploaded_games")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setGames(data as any);
  };

  const generateMetadata = async () => {
    if (!title) {
      toast({ title: "Title required", variant: "destructive" });
      return;
    }
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-game-metadata", {
        body: { title, contentSnippet: "" }
      });
      if (error) throw error;
      if (data) {
        setDescription(data.description || "");
        setDescriptionHi(data.description_hi || "");
        setCategory(data.category || "action");
        setTags((data.tags || []).join(", "));
        toast({ title: t("मेटाडेटा जनरेट हुआ!", "Metadata generated!") });
      }
    } catch (e: any) {
      toast({ title: "Error generating metadata", description: e.message, variant: "destructive" });
    }
    setGenerating(false);
  };

  const handleUpload = async () => {
    if (!gameFile || !title) {
      toast({ title: t("गेम फाइल और टाइटल ज़रूरी है", "Game file and title required"), variant: "destructive" });
      return;
    }
    setUploading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      // Upload game file
      const gameFileName = `${Date.now()}_${gameFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("game-files")
        .upload(gameFileName, gameFile, { contentType: "text/html" });
      if (uploadError) throw uploadError;

      // Upload thumbnail if provided
      let thumbnailUrl = null;
      if (thumbnailFile) {
        const thumbName = `${Date.now()}_${thumbnailFile.name}`;
        const { error: thumbError } = await supabase.storage
          .from("game-thumbnails")
          .upload(thumbName, thumbnailFile);
        if (thumbError) throw thumbError;
        const { data: thumbData } = supabase.storage.from("game-thumbnails").getPublicUrl(thumbName);
        thumbnailUrl = thumbData.publicUrl;
      }

      // Insert game record
      const { error: insertError } = await supabase.from("uploaded_games" as any).insert({
        title,
        description,
        description_hi: descriptionHi,
        thumbnail_url: thumbnailUrl,
        game_file_path: gameFileName,
        category,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        uploaded_by: user.id,
      } as any);
      if (insertError) throw insertError;

      toast({ title: t("गेम अपलोड हो गया! 🎮", "Game uploaded! 🎮") });
      // Reset form
      setTitle(""); setDescription(""); setDescriptionHi("");
      setCategory("action"); setTags(""); setGameFile(null); setThumbnailFile(null);
      fetchGames();
    } catch (e: any) {
      toast({ title: "Upload failed", description: e.message, variant: "destructive" });
    }
    setUploading(false);
  };

  const togglePublish = async (id: string, currentState: boolean) => {
    await supabase.from("uploaded_games" as any).update({ is_published: !currentState } as any).eq("id", id);
    fetchGames();
  };

  const deleteGame = async (id: string, filePath: string) => {
    await supabase.storage.from("game-files").remove([filePath]);
    await supabase.from("uploaded_games" as any).delete().eq("id", id);
    fetchGames();
    toast({ title: t("गेम डिलीट हो गया", "Game deleted") });
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background p-4 pb-24 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🎮 {t("गेम अपलोड पैनल", "Game Upload Panel")}</h1>

      {/* Upload Form */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">{t("नया गेम अपलोड करें", "Upload New Game")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>{t("गेम का नाम", "Game Title")}</Label>
            <div className="flex gap-2">
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Jungle Rush" />
              <Button onClick={generateMetadata} disabled={generating} variant="outline" size="sm">
                {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : "✨ AI"}
              </Button>
            </div>
          </div>

          <div>
            <Label>{t("विवरण (English)", "Description (English)")}</Label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} />
          </div>

          <div>
            <Label>{t("विवरण (Hindi)", "Description (Hindi)")}</Label>
            <Textarea value={descriptionHi} onChange={(e) => setDescriptionHi(e.target.value)} rows={2} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>{t("श्रेणी", "Category")}</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="action">⚔️ Action</SelectItem>
                  <SelectItem value="puzzle">🧩 Puzzle</SelectItem>
                  <SelectItem value="educational">📚 Educational</SelectItem>
                  <SelectItem value="racing">🏎️ Racing</SelectItem>
                  <SelectItem value="strategy">♟️ Strategy</SelectItem>
                  <SelectItem value="adventure">🗺️ Adventure</SelectItem>
                  <SelectItem value="sports">⚽ Sports</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>{t("टैग्स", "Tags")} (comma separated)</Label>
              <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="fun, action, 2d" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>🎮 {t("गेम फाइल", "Game File")} (.html)</Label>
              <Input type="file" accept=".html,.htm" onChange={(e) => setGameFile(e.target.files?.[0] || null)} />
            </div>
            <div>
              <Label>🖼️ {t("थंबनेल", "Thumbnail")}</Label>
              <Input type="file" accept="image/*" onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)} />
            </div>
          </div>

          <Button onClick={handleUpload} disabled={uploading} className="w-full">
            {uploading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Upload className="h-4 w-4 mr-2" />}
            {t("गेम अपलोड करें", "Upload Game")}
          </Button>
        </CardContent>
      </Card>

      {/* Existing Games */}
      <h2 className="text-lg font-bold mb-3">{t("अपलोड किए गए गेम", "Uploaded Games")} ({games.length})</h2>
      <div className="space-y-3">
        {games.map((game: any) => (
          <Card key={game.id} className="p-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-2xl flex-shrink-0">
                {game.thumbnail_url ? (
                  <img src={game.thumbnail_url} alt="" className="w-full h-full rounded-lg object-cover" />
                ) : "🎮"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{game.title}</p>
                <p className="text-xs text-muted-foreground">
                  {game.category} • {game.play_count} plays • {game.is_published ? "✅ Live" : "🔒 Draft"}
                </p>
              </div>
              <div className="flex gap-1">
                <Button size="icon" variant="ghost" onClick={() => togglePublish(game.id, game.is_published)}>
                  {game.is_published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button size="icon" variant="ghost" className="text-destructive" onClick={() => deleteGame(game.id, game.game_file_path)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminGameUpload;
