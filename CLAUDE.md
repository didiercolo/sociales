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

Firebase environment variables are required in `.env`:
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
```

## Architecture

**EduPortal CR** is a Spanish-language educational platform for Costa Rica primary school students (grades 4–6), focused on Estudios Sociales, Ciencias, and Español.

### Frontend (React + Vite)

`src/App.jsx` defines all routes inside a single `<Layout>` shell. All pages are lazy-loaded. The route pattern for lessons is `/:subject/grade/:gradeId/lesson/:lessonId`.

`AuthContext` (`src/context/AuthContext.jsx`) wraps the entire app. It exposes `{ currentUser, userProfile, loading }`. `currentUser` is the raw Firebase Auth user; `userProfile` is the matching document from `users/{uid}` in Firestore (contains nickname, points, tier). The app supports anonymous sign-in, email/password registration, and email/password login.

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

### Firebase Backend

**Firestore collections:**
- `users/{uid}` — user profile: `nickname`, `points`, `tier` (1–4), `dailyAnswers`
- `dailyQuestions/{YYYY-MM-DD}` — one question per day with options and correct answer
- `system/scoreboard` — pre-aggregated top-users list, maintained by Cloud Functions

**Cloud Functions** (`functions/index.js`, Firebase v2):
- `submitAnswer` — callable function; validates auth, enforces tier answer limits, awards points using a Firestore transaction, triggers scoreboard updates
- `updateScoreboard` — Firestore trigger on `users` writes; maintains the `system/scoreboard` aggregate

The frontend calls `submitAnswer` via `httpsCallable` from `firebase/functions`.

### Quiz Component

`src/components/Quiz/` is split into three sub-components: `QuizStart` (intro screen), `QuizActive` (question loop), `QuizResults` (score display). The parent `Quiz.jsx` manages state transitions between them. `TextQuiz.jsx` is a separate component for open-ended text answers.

### Testing

Tests are in `src/tests/` and use Vitest + Testing Library. `vitest.setup.js` globally mocks all Firebase modules (`firebase/app`, `firebase/auth`, `firebase/firestore`) and stubs `import.meta.env`. Tests do **not** hit real Firebase.