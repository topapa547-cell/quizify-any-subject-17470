// Realistic Indian names for bots - no robot indicators
export const BOT_NAMES = [
  // Male names
  "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Reyansh", "Ayaan", "Krishna",
  "Ishaan", "Shaurya", "Atharva", "Advait", "Dhruv", "Kabir", "Ritvik", "Aarush",
  "Sai", "Arnav", "Ayansh", "Shivansh", "Veer", "Rudra", "Kian", "Darsh",
  "Yash", "Rohan", "Raj", "Aryan", "Dev", "Kunal", "Rahul", "Sahil",
  // Female names
  "Saanvi", "Aanya", "Aadhya", "Myra", "Diya", "Pari", "Ananya", "Aarohi",
  "Anika", "Navya", "Angel", "Kiara", "Sara", "Avni", "Prisha", "Shanaya",
  "Kavya", "Ira", "Tara", "Riya", "Neha", "Priya", "Shreya", "Pooja",
  "Aditi", "Meera", "Anjali", "Divya", "Tanvi", "Nisha", "Kritika", "Swati",
];

// Avatar styles for bots
export const BOT_AVATAR_STYLES = [
  'adventurer',
  'avataaars',
  'big-smile',
  'bottts',
  'fun-emoji',
];

// Get a random bot name
export const getRandomBotName = (usedNames: string[] = []): string => {
  const availableNames = BOT_NAMES.filter(name => !usedNames.includes(name));
  if (availableNames.length === 0) {
    // Fallback with number suffix
    return `Player${Math.floor(Math.random() * 999)}`;
  }
  return availableNames[Math.floor(Math.random() * availableNames.length)];
};

// Get a random avatar style
export const getRandomAvatarStyle = (): string => {
  return BOT_AVATAR_STYLES[Math.floor(Math.random() * BOT_AVATAR_STYLES.length)];
};
