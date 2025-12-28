import { UnoColor, colorDisplayNames } from "@/types/unoTypes";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ColorPickerProps {
  open: boolean;
  onSelectColor: (color: UnoColor) => void;
}

const colors: { color: UnoColor; gradient: string }[] = [
  { color: 'red', gradient: 'from-red-400 to-red-600 hover:from-red-500 hover:to-red-700' },
  { color: 'blue', gradient: 'from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700' },
  { color: 'green', gradient: 'from-green-400 to-green-600 hover:from-green-500 hover:to-green-700' },
  { color: 'yellow', gradient: 'from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600' },
];

export const ColorPicker = ({ open, onSelectColor }: ColorPickerProps) => {
  const { language } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            {language === 'hindi' ? '🎨 रंग चुनें' : '🎨 Choose a Color'}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 p-4">
          {colors.map(({ color, gradient }) => (
            <button
              key={color}
              onClick={() => onSelectColor(color)}
              className={`
                h-24 rounded-xl bg-gradient-to-br ${gradient}
                flex items-center justify-center
                text-white font-bold text-lg
                shadow-lg hover:shadow-xl
                transform hover:scale-105 transition-all duration-200
                border-2 border-white/20
              `}
            >
              {language === 'hindi' 
                ? colorDisplayNames[color].hi 
                : colorDisplayNames[color].en}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ColorPicker;
