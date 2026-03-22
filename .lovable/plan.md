

## Game Store Feature + Admin Upload System

### Summary
Add a "Game Zone" section accessible from the hamburger menu. Admin (identified by email `radhgupta2013@gmail.com`) can upload HTML game files, and AI auto-generates game metadata (description, image, tags). Normal users see a Play Store-like game listing and can play games directly. Admin panel is hidden from regular users.

### Regarding the 2D Fighter Game Question
I cannot create a direct copy of Teenage Mutant Ninja Turtles or any copyrighted game. However, I can build an **original 2D tournament fighter game** with unique characters, similar gameplay mechanics (side-scrolling fighting, combos, tournament brackets), and original art. This would be an HTML5 canvas game that could be uploaded to the Game Zone.

---

### Technical Plan

#### Step 1: Database - Create `uploaded_games` table
```sql
CREATE TABLE public.uploaded_games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  description_hi text,
  thumbnail_url text,
  game_file_path text NOT NULL,  -- storage path
  category text DEFAULT 'action',
  tags text[] DEFAULT '{}',
  rating numeric DEFAULT 4.0,
  play_count integer DEFAULT 0,
  is_published boolean DEFAULT true,
  uploaded_by uuid NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```
- RLS: Everyone can SELECT published games. Only admin (checked via email) can INSERT/UPDATE/DELETE.
- Create a storage bucket `game-files` for HTML game uploads.
- Create a storage bucket `game-thumbnails` for AI-generated thumbnails.

#### Step 2: Admin Role Check
- Create a security definer function `is_admin_user(user_id uuid)` that checks if the user's email matches `radhgupta2013@gmail.com` by querying `auth.users`.
- Use this function in RLS policies for INSERT/UPDATE/DELETE on `uploaded_games`.

#### Step 3: New Pages & Components

**A. Game Zone Page (`/game-zone`)**
- Play Store-like UI with:
  - Featured game banner at top
  - Category tabs (Action, Puzzle, Educational, etc.)
  - Game cards with thumbnail, title, rating, play count
  - Search bar
- Clicking a game opens it in a fullscreen iframe
- Route added to App.tsx, wrapped with ProtectedRoute

**B. Admin Game Upload Page (`/admin/games`)**
- Only accessible if user email = `radhgupta2013@gmail.com`
- Otherwise redirects to `/game-zone`
- Upload HTML file form
- After upload, calls an edge function that uses AI to:
  - Parse the HTML game title
  - Generate a description (Hindi + English)
  - Generate a thumbnail image
- Admin can edit generated metadata before publishing

**C. Game Player Component**
- Fullscreen iframe to render uploaded HTML games
- Back button overlay
- Increments play_count on load

#### Step 4: Edge Function - `generate-game-metadata`
- Accepts game title/content snippet
- Uses Lovable AI (gemini-2.5-flash) to generate:
  - English & Hindi description
  - Category suggestion
  - Tags
- Uses Lovable AI image generation for thumbnail

#### Step 5: Hamburger Menu Updates
- Add "Game Zone" item (visible to all users) with gamepad emoji
- Add "Game Upload" item (visible only to admin) with upload emoji
- Admin check done client-side by comparing user email

#### Step 6: Integration
- Add routes in App.tsx
- Game Zone is ProtectedRoute (login required)
- Admin upload page checks email server-side via RLS

### Files to Create/Modify
- **New migration**: `uploaded_games` table + storage buckets + RLS + admin function
- **New**: `src/pages/GameZone.tsx` - Play Store-like game listing
- **New**: `src/pages/AdminGameUpload.tsx` - Admin upload panel
- **New**: `src/components/GameZoneCard.tsx` - Individual game card
- **New**: `src/components/GamePlayer.tsx` - Fullscreen game iframe player
- **New**: `supabase/functions/generate-game-metadata/index.ts` - AI metadata
- **Modified**: `src/App.tsx` - Add routes
- **Modified**: `src/components/HamburgerMenu.tsx` - Add menu items

