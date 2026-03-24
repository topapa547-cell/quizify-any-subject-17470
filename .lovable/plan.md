

## Plan: Admin Setup + 2 Built-in Games for Game Zone

### What we'll do

1. **Admin role on Auth page** - The admin check already exists via `is_admin_user()` DB function and client-side email check in AdminGameUpload. No password hardcoding needed (that's a security risk). The admin simply registers/logs in with `radhgupta2013@gmail.com` using their chosen password. The existing system already treats this email as admin. No changes needed here -- the system already works correctly.

2. **Create a 2D Fighter Tournament Game** (Ninja-style, original characters)
   - Build as a standalone React page at `/games/fighter-arena`
   - HTML5 Canvas-based 2D fighting game with:
     - 4 original fighter characters (Shadow Warrior, Fire Monk, Ice Ninja, Thunder Knight) with pixel-art style sprites drawn via canvas
     - Tournament bracket mode (Semi-final → Final)
     - Controls: Arrow keys + A/S for punch/kick (mobile: on-screen buttons)
     - Health bars, combo system, round-based matches
     - Sound effects via Web Audio API
   - Add route to App.tsx, add card in GameZone page as a built-in game

3. **Create a Fun Arcade Game** (e.g., "Space Shooter" or "Brick Breaker")
   - Build as a standalone React page at `/games/space-blaster`
   - HTML5 Canvas space shooter with:
     - Player ship, enemy waves, power-ups, boss fights
     - Score tracking, lives system
     - Mobile touch controls
   - Add route to App.tsx, add card in GameZone page

### Technical Details

#### Files to Create
- `src/pages/games/FighterArena.tsx` - 2D fighter tournament game with canvas rendering, AI opponent, health system, combo moves, 4 original characters
- `src/pages/games/SpaceBlaster.tsx` - Space shooter arcade game with canvas, waves, power-ups, scoring

#### Files to Modify
- `src/App.tsx` - Add routes for `/games/fighter-arena` and `/games/space-blaster`
- `src/pages/GameZone.tsx` - Add built-in game cards at top of game list (before uploaded games) for both new games

#### Admin Clarification
The admin system is already working:
- `is_admin_user()` function checks for `radhgupta2013@gmail.com`
- AdminGameUpload checks email client-side
- RLS policies restrict game upload to admin only
- All other users are automatically normal users
- No password should be hardcoded -- admin uses normal auth flow

