// Generate unique avatar URL for each user using DiceBear API
export const getAvatarUrl = (userId: string, style?: string): string => {
  const avatarStyle = style || 'adventurer';
  return `https://api.dicebear.com/7.x/${avatarStyle}/svg?seed=${userId}`;
};

// Get random avatar style for new users
export const getRandomAvatarStyle = (): string => {
  const styles = ['adventurer', 'avataaars', 'big-smile', 'bottts', 'fun-emoji'];
  return styles[Math.floor(Math.random() * styles.length)];
};

// Available avatar styles
export const AVATAR_STYLES = [
  { value: 'adventurer', label: 'साहसी' },
  { value: 'avataaars', label: 'कार्टून' },
  { value: 'big-smile', label: 'मुस्कान' },
  { value: 'bottts', label: 'रोबोट' },
  { value: 'fun-emoji', label: 'इमोजी' },
] as const;
