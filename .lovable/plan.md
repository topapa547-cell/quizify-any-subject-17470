- Infinite Practice — Quiz Zone Feature

### Goal

Add a new **"Infinite Practice"** option in the hamburger menu where a student can:

- Pick a **subject** (Math, Science, Social Science, English, Hindi, IT/ITes)
- Pick a **language** (Hindi / English)
- Pick a **question quantity** (10 / 20 / 30)
- Take a quiz that is **locked to their signed-up class** (Class 9 → only Class 9 questions, Class 10 → only Class 10 questions — never upper, never lower)
- Get a fresh mix every time, so two students very rarely see identical papers

### How the "never the same paper" works

We build a **growing bank of AI-generated MCQs stored in the database**, then randomize which ones each student gets.

```text
[Student opens Infinite Practice]
        │
        ▼
[Pick class (auto from profile) + subject + language + count]
        │
        ▼
[Check DB pool for matching questions]
        │
   ┌────┴─────┐
   │          │
 Enough?    Not enough?
   │          │
   │          ▼
   │   [Edge function generates a fresh batch via Lovable AI,
   │    validates them, inserts into pool]
   │          │
   └────┬─────┘
        ▼
[Pick N random questions from pool, weighted toward
 questions this student has NOT seen recently]
        ▼
[Run quiz → save attempt → mark questions as "seen" for this user]
```

Two mechanisms keep papers unique:

1. **Random sampling** from a large and growing pool.
2. **Per-user "seen questions" tracking** so the same student almost never repeats, and different students get different random draws.

### Class lock (from signup)

- The class chosen at signup is already stored in `profiles.class_level`.
- Infinite Practice reads it and passes it as a **hard filter** to the pool query and the AI generator prompt. The class selector is hidden — students cannot pick Class 10 questions if they signed up as Class 9.

### What gets built

**Database**

- New table `practice_questions` — pool of AI-generated MCQs
  - fields: subject, class_level, language, difficulty, question text, 4 options, correct option, explanation, topic tag, verified flag
- New table `practice_question_seen` — tracks which questions each user has already seen
  - fields: user_id, question_id, seen_at
- New table `practice_attempts` — stores each Infinite Practice run (score, subject, language, count, time)
- RLS: pool is readable by any authenticated user; "seen" and "attempts" are per-user; only the edge function (service role) inserts into the pool.

**Edge function** `generate-practice-questions`

- Input: subject, class_level, language, count needed
- Uses Lovable AI Gateway (google/gemini-2.5-flash) to generate NCERT-aligned MCQs in the requested language
- Validates shape (4 options, one correct, non-empty), deduplicates against existing pool, inserts verified rows
- Called on-demand when the pool for a (subject, class, language) slot is thin

**Frontend**

- `src/pages/InfinitePractice.tsx` — setup screen (subject chips, language toggle, 10/20/30 selector, Start button; shows the locked class as a read-only badge)
- `src/pages/InfinitePracticeQuiz.tsx` — quiz runner reusing `QuestionCard`, with timer and submit → results
- Reuse existing `Results.tsx` flow by passing questions/answers via router state (same shape as current Quiz)
- Add **"♾️ Infinite Practice"** entry to `src/components/HamburgerMenu.tsx` with a gradient card, routed to `/infinite-practice`
- Add routes in `src/App.tsx` behind `ProtectedRoute`

**Selection logic (client)**

1. Query pool: `subject = X AND class_level = user's class AND language = Y`, exclude question IDs in this user's `practice_question_seen` from the last 30 days, order random, limit N.
2. If fewer than N returned, call the edge function to top up, then re-query.
3. After the quiz, insert the used question IDs into `practice_question_seen`.

### Files touched / created

- **New**: `src/pages/InfinitePractice.tsx`, `src/pages/InfinitePracticeQuiz.tsx`
- **New**: `supabase/functions/generate-practice-questions/index.ts`
- **Modified**: `src/components/HamburgerMenu.tsx` (add menu item), `src/App.tsx` (add routes)
- **Migration**: create `practice_questions`, `practice_question_seen`, `practice_attempts` with GRANTs, RLS, policies, and an `updated_at` trigger on the pool table.

### Notes / trade-offs

- First-ever run for a rare (subject, language) combo takes ~5–10s while the AI seeds the pool. After that it's instant because the pool keeps growing.
- Uses Lovable AI (no extra API key needed).
- Bilingual is handled by generating the question set in the chosen language directly, so mixing doesn't happen.
- "Seen" filter uses a 30-day window so a very heavy user still eventually gets recycled questions rather than running out.
- Only premium students can get infinite practice but not memebershiped students can attemp only one time than its lock it can get XP for leaderboard 