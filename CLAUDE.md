# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build locally
npm run lint         # ESLint
npm run test         # Run tests (watch mode)
npm run coverage     # Run tests with coverage report
npx vitest run       # Run tests once (no watch)
npx vitest run src/tests/Quiz.test.jsx  # Run a single test file
```

Deployment to eduportalcr.com via GitHub Pages:
```bash
npm run deploy       # Builds and deploys to gh-pages branch
```

Supabase environment variables are required in `.env` (the anon key is publishable; access is enforced by RLS):
```
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

Database schema, RLS, and server functions live as SQL migrations in `supabase/migrations/`. Apply them with the Supabase CLI (`supabase db push` against the cloud project, or `supabase start` locally). Seed content with:
```bash
SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed.mjs   # nicknames, weekly challenge, today's daily question
```

## Architecture

**EduPortal CR** is a Spanish-language educational platform for Costa Rica primary school students (grades 4–6), focused on Estudios Sociales, Ciencias, and Español.

### Frontend (React + Vite)

`src/App.jsx` defines all routes inside a single `<Layout>` shell. All pages are lazy-loaded. The route pattern for lessons is `/:subject/grade/:gradeId/lesson/:lessonId`.

`AuthContext` (`src/context/AuthContext.jsx`) wraps the entire app. It exposes `{ currentUser, userProfile, loading }`. `currentUser` is the raw Supabase Auth user (`session.user`); `userProfile` is the matching row from `public.profiles` (contains nickname, score, tier). The app uses pseudo-email (`<nickname>@eduportalcr.app`) email/password registration and login — no real email is collected. The Supabase client is `src/supabase/client.js`.

### Lesson Content Data

All lesson content is static JS — no CMS. The shape lives in `src/data/lessonsData.js`, which assembles a `lessonsData` object:

```
lessonsData[subject][gradeId] → Lesson[]
```

Subjects: `sociales`, `ciencias`, `espanol`, `matematicas`. Grade IDs: `4`, `5`, `6`, `resumen` (for sociales).

Each `Lesson` object has:
- `id`, `title`, `disabled?`
- `sections[]` — each section has `title`, `content[]` (HTML strings), optional `videoId` (YouTube)
- `quiz[]` — multiple-choice questions (rendered by `<Quiz>`)
- `openQuestions[]` — open-ended questions (rendered by `<TextQuiz>`)
- `extraMaterial?` — `{ title, url }` for downloadable PDFs
- `questionCount?` — how many quiz questions to sample (defaults to 5)

To add lessons for a subject/grade, edit the corresponding file in `src/data/lessons/` and export the array.

### Supabase Backend

All backend objects are defined in `supabase/migrations/` (SQL).

**Postgres tables (RLS enabled):**
- `profiles` — PK = `auth.users.id`; `nickname`, `tier` (1–4), `tier_subject`, `score`, `questions_today`, `last_question_date`, weekly progress fields. Owner-read; owner-insert with safe defaults; **no client update** (scoring goes through the RPC).
- `nicknames` — preset picker list; public read, authenticated may only flip `used` false→true.
- `daily_questions` (PK `date`) and `weekly_challenge` (PK `week_id`) — **no client read policy**; correct answers never reach the browser.
- `scoreboard` — single row with `top_users` jsonb; world-readable, maintained by trigger, on the `supabase_realtime` publication.

**Postgres functions (RPC):**
- `submit_answer(question_id, answer, question_type, question_index)` — `SECURITY DEFINER`; enforces tier/daily limits and sequential weekly answers, awards points atomically, returns the same JSON the old Cloud Function did. Called via `supabase.rpc('submit_answer', …)`.
- `get_daily_question(p_date)` / `get_weekly_challenge(p_week_id)` — `SECURITY DEFINER` getters returning only safe fields (no correct answers).
- `refresh_scoreboard()` — trigger on `profiles` insert/update; rebuilds the top-50 `scoreboard` row.

The scoreboard live-updates via the `useScoreboard` hook (`src/hooks/useScoreboard.js`), which subscribes to `postgres_changes` on the `scoreboard` table.

### Quiz Component

`src/components/Quiz/` is split into three sub-components: `QuizStart` (intro screen), `QuizActive` (question loop), `QuizResults` (score display). The parent `Quiz.jsx` manages state transitions between them. `TextQuiz.jsx` is a separate component for open-ended text answers.

### Testing

Tests are in `src/tests/` and use Vitest + Testing Library. `vitest.setup.js` globally mocks the Supabase client (`src/supabase/client`) — `auth.*`, `from().select/insert/update/eq/maybeSingle`, `rpc`, and `channel` — and stubs `import.meta.env`. Tests override individual methods per case and do **not** hit real Supabase.