import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Card className="p-4 mb-6 bg-card/50 backdrop-blur-sm border-border/50">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Languages className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-foreground">
            {language === 'hindi' ? 'भाषा चुनें' : 'Select Language'}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            variant={language === 'hindi' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('hindi')}
            className="min-w-[80px]"
          >
            हिंदी
          </Button>
          <Button
            variant={language === 'english' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('english')}
            className="min-w-[80px]"
          >
            English
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LanguageSelector;
