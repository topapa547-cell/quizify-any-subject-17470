import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";
import { Share2, Copy, MessageCircle } from "lucide-react";

interface ShareInviteProps {
  roomCode: string;
}

const ShareInvite = ({ roomCode }: ShareInviteProps) => {
  const { t } = useLanguage();

  const getInviteLink = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/games/quizknow-mercy?join=${roomCode}`;
  };

  const getShareMessage = () => {
    return `🎴 QuizKnow Mercy खेलें!\n\nमेरे रूम में शामिल हों: ${roomCode}\n\nलिंक: ${getInviteLink()}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getInviteLink());
      toast({ title: t("लिंक कॉपी हो गया!", "Link copied!") });
    } catch (err) {
      toast({ 
        title: t("कॉपी नहीं हो सका", "Could not copy"), 
        variant: "destructive" 
      });
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(roomCode);
      toast({ title: t("कोड कॉपी हो गया!", "Code copied!") });
    } catch (err) {
      toast({ 
        title: t("कॉपी नहीं हो सका", "Could not copy"), 
        variant: "destructive" 
      });
    }
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(getShareMessage());
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'QuizKnow Mercy',
          text: getShareMessage(),
          url: getInviteLink(),
        });
      } catch (err) {
        // User cancelled or share failed, fallback to copy
        if ((err as Error).name !== 'AbortError') {
          handleCopyLink();
        }
      }
    } else {
      // Fallback to copy link
      handleCopyLink();
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="text-white/80 text-sm font-medium">
        {t("दोस्तों को आमंत्रित करें", "Invite Friends")}
      </h4>
      
      <div className="flex flex-wrap gap-2">
        {/* WhatsApp */}
        <Button
          onClick={handleWhatsAppShare}
          className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white"
          size="sm"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>

        {/* Share via native share */}
        <Button
          onClick={handleNativeShare}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          size="sm"
        >
          <Share2 className="w-4 h-4 mr-2" />
          {t("शेयर", "Share")}
        </Button>
      </div>

      <div className="flex gap-2">
        {/* Copy Link */}
        <Button
          onClick={handleCopyLink}
          variant="outline"
          className="flex-1 border-white/20 text-white hover:bg-white/10"
          size="sm"
        >
          <Copy className="w-4 h-4 mr-2" />
          {t("लिंक कॉपी", "Copy Link")}
        </Button>

        {/* Copy Code */}
        <Button
          onClick={handleCopyCode}
          variant="outline"
          className="flex-1 border-white/20 text-white hover:bg-white/10"
          size="sm"
        >
          <Copy className="w-4 h-4 mr-2" />
          {t("कोड कॉपी", "Copy Code")}
        </Button>
      </div>
    </div>
  );
};

export default ShareInvite;
