import { supabase } from "@/integrations/supabase/client";

/**
 * Generate a unique username by checking if the base username exists
 * and adding a random suffix if needed
 */
export const generateUniqueUsername = async (baseUsername: string): Promise<string> => {
  const trimmedUsername = baseUsername.trim();
  
  if (!trimmedUsername) {
    return `user${Math.floor(Math.random() * 10000)}`;
  }

  let finalUsername = trimmedUsername;
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    const { data } = await supabase
      .from('profiles')
      .select('username')
      .eq('username', finalUsername)
      .maybeSingle();

    if (!data) {
      // Username is available
      return finalUsername;
    }

    // Username exists, add random suffix
    const randomSuffix = Math.floor(Math.random() * 1000);
    finalUsername = `${trimmedUsername}${randomSuffix}`;
    attempts++;
  }

  // If still not unique after max attempts, add timestamp
  return `${trimmedUsername}${Date.now().toString().slice(-4)}`;
};
