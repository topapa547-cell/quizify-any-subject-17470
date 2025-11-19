import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarUrl } from "@/utils/avatarGenerator";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  userId: string;
  avatarStyle?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  fallbackText?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

const UserAvatar = ({ 
  userId, 
  avatarStyle, 
  size = "md", 
  className,
  fallbackText = "?" 
}: UserAvatarProps) => {
  const avatarUrl = getAvatarUrl(userId, avatarStyle);

  return (
    <Avatar className={cn(sizeClasses[size], className)}>
      <AvatarImage src={avatarUrl} alt="User avatar" />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
