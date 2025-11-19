-- Add avatar style column to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS avatar_style text DEFAULT 'adventurer';