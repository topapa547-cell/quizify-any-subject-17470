import { cn } from "@/lib/utils";

interface OnlineStatusIndicatorProps {
  isOnline: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function OnlineStatusIndicator({ 
  isOnline, 
  size = "sm",
  className 
}: OnlineStatusIndicatorProps) {
  const sizeClasses = {
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <span
      className={cn(
        "rounded-full border-2 border-background",
        sizeClasses[size],
        isOnline 
          ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" 
          : "bg-muted-foreground/50",
        className
      )}
      title={isOnline ? "Online" : "Offline"}
    />
  );
}
