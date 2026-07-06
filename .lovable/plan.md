## Plan: Ads Remove + Premium Coupon + Clean Academic Redesign

### 1. Sabhi Ads Remove
**File:** `index.html`
- Google AdSense script tag hataana
- Adsterra script tag hataana
- `<meta name="description">` aur title improve karna (SEO)

### 2. Naya Premium Coupon Code
Database mein ek naya personal coupon insert karunga:
- **Code:** `RADH2026X` (8 chars, aapke liye)
- **Discount:** 100% premium unlock
- **Validity:** 6 months (till 6 January 2027)
- **Status:** active
- Existing coupon system (jo already banaya hua hai) ko use karega — koi naya code likhne ki zarurat nahi

### 3. Clean Academic Redesign
**Design system:** "Clean Academic" — study/exam-focused professional look

**Color tokens (`src/index.css`):**
- Primary: Deep Navy `hsl(224 76% 33%)` (#1E3A8A)
- Accent: Warm Orange `hsl(20 91% 48%)` (#EA580C)  
- Background: Soft White `hsl(210 40% 98%)` (#F8FAFC)
- Foreground: Ink Dark `hsl(222 47% 11%)` (#0F172A)
- Muted, cards, borders — sab semantic tokens
- Naye gradients: `--academic-gradient`, `--focus-gradient`
- Refined shadows: subtle, paper-like (not glowy)
- Dark mode tokens bhi update

**Typography:**
- Install `@fontsource/fraunces` (display serif — academic feel) + `@fontsource/inter` (body)
- Headings: Fraunces (weight 600)
- Body/UI: Inter (weight 400/500)
- Configure `fontFamily` in `tailwind.config.ts` as `font-display` and `font-sans`

**Redesigned pages:**

**a) `src/pages/Home.tsx`**
- Clean hero: student name greeting, streak + XP compact stats row (no giant colorful cards)
- Subject grid → refined 2-col cards with subject icon, chapter progress bar, thin border, hover lift
- "Continue learning" section on top
- Bottom nav preserved, but restyled with new tokens

**b) `src/components/HamburgerMenu.tsx`**
- Sheet width 85vw on mobile, 380px on desktop
- Remove rainbow gradient cards → clean list with icon + label + subtle divider
- Grouped sections: **Study** (NCERT, Long Q, Grammar, Key Points), **Practice** (Infinite Practice, Games, Multiplayer), **Account** (Profile, Downloads, Help, Logout)
- Profile header with avatar + class badge
- Admin section (Game Upload) only visible for admin email

**c) `src/pages/Auth.tsx`**
- Split layout on desktop (left: brand panel with tagline + academic illustration hint, right: form). Mobile: single column with slim brand strip on top.
- Cleaner form: labeled inputs, primary navy button, subtle "Continue with Google" secondary button
- Class selector prominently shown on signup (already prioritized per earlier work)
- Trust footer: "No ads. Focused learning."

### 4. Files Modified / Created
- `index.html` — remove ads, update meta
- `src/index.css` — new Clean Academic token palette (light + dark)
- `tailwind.config.ts` — register `font-display`, `font-sans`
- `src/main.tsx` — import fraunces + inter fontsource
- `src/pages/Home.tsx` — redesigned layout
- `src/components/HamburgerMenu.tsx` — grouped clean menu
- `src/pages/Auth.tsx` — split-layout redesign
- `package.json` — add `@fontsource/fraunces`, `@fontsource/inter`
- DB insert: new coupon row `RADH2026X`

### 5. Kya NAHI badlega
- Business logic (quiz, practice, games, subscriptions) untouched
- Routes, DB schema, edge functions same
- Baaki pages (Quiz, Results, GameZone, Profile etc.) — same functionality, sirf naye color tokens ki wajah se automatically fresh dikhenge

### 6. Trade-offs
- Baaki individual pages (Profile, GameZone, StudyMaterials etc.) ka layout is round mein nahi chhoodenge — sirf tokens se auto-refresh honge. Agar unme se koi specific page bhi redesign karana hai to next round mein karenge.
- Coupon code public codebase mein visible nahi hoga — sirf DB mein add hoga aur chat mein aapko share karunga.
