# Design: Guest-visible Daily Question with auth-gated answer

**Date:** 2026-06-25
**Status:** Approved

## Context

Today the `⭐ Pregunta del Día` nav link and the question itself are hidden from
logged-out visitors: the link is wrapped in a `currentUser && userProfile` gate in
`Layout.jsx`, and `DailyQuestion.jsx` renders a "Inicia sesión para participar" banner
instead of the question for guests. That gives anonymous kids no way to discover or
sample the feature.

We want guests to **see and attempt** the daily question, but keep the reward loop —
the result/feedback and the points — behind authentication. When a guest submits, a
popup invites them to sign in or sign up; only an authenticated submit reveals the
answer and awards points. If they don't authenticate, the answer stays hidden.

This is safe by construction: the correct answer never reaches the browser. The
question is fetched via `get_daily_question` (safe fields only) and scored via the
`submit_answer` RPC (`SECURITY DEFINER`, requires `auth.uid()`), both defined in
`supabase/migrations/0001_init.sql`. A guest literally cannot see the correct answer
without an authenticated submit.

## Scope

- **In scope:** the Daily Question (`/pregunta-del-dia`, rendered by
  `DailyQuestion.jsx`).
- **Out of scope:** Reto Semanal keeps its current login gate. No changes to the
  weekly flow or the nav link for it.

## Behavior

### 1. Nav link — `src/components/Layout.jsx`
Move `⭐ Pregunta del Día` out of the `currentUser && userProfile` block so it renders
for everyone. `🗓 Reto Semanal` stays inside the gate.

### 2. Guest-visible question — `src/components/DailyQuestion.jsx`
- Remove the guest-only "Inicia sesión para participar" banner.
- Always render the question text + answer options when a question exists (regardless
  of auth). Guests can select an option.
- Keep the existing loading and "no question configured for today" states.

### 3. Submit is the gate — `src/components/DailyQuestion.jsx`
On **Enviar Respuesta**:
- **Logged in:** submit via `supabase.rpc('submit_answer', { question_id, answer })` as
  today; show the result (`isCorrect`, `pointsEarned`, `correctAnswerMessage`).
- **Guest:** open the auth popup and remember the selected option. **No result is
  shown** until an authenticated submit succeeds.

### 4. The popup — `src/components/AuthPromptModal.jsx` (new)
Built on the native `<dialog>` element (free backdrop, Esc-to-close, focus trap),
opened via a ref + `showModal()` / `close()` in an effect keyed on an `open` prop.

Contents:
- Heading: "Inicia sesión para ver la respuesta y ganar puntos".
- Compact login form: nickname + password → reconstructs the pseudo-email
  (`<nick>@eduportalcr.app`) and calls `supabase.auth.signInWithPassword`. On error,
  show "Nickname o contraseña incorrectos" (mirrors `Login.jsx`).
- A `Crear cuenta →` link/button → `navigate('/registro?redirect=/pregunta-del-dia')`.
- Close affordances: ✕ button, backdrop click, Esc (native). Closing without
  authenticating reveals nothing; the selected option stays so the user can retry.

Props: `{ open, onClose, onAuthenticated }`. `onAuthenticated` fires after a successful
login.

### 5. Login-in-popup success — `DailyQuestion.jsx`
On `onAuthenticated`: close the modal and immediately submit the remembered option via
the `submit_answer` RPC. The Supabase client already holds the new session, so the RPC
authenticates even before React's `user` state updates — no need to wait. Then reveal
the result.

### 6. Signup path — `src/pages/Register.jsx`
Read a `redirect` query param (via `useSearchParams` / `URLSearchParams`) and
`navigate(redirect ?? '/')` on successful registration. A new user from the popup lands
back on `/pregunta-del-dia`, now logged in, and re-picks + submits. The Tier-1 "1
question/day" limit is intact because the guest's selection never hit the server.

## Components / files

| File | Change |
|---|---|
| `src/components/Layout.jsx` | Un-gate the Pregunta del Día link. |
| `src/components/DailyQuestion.jsx` | Show question to guests; route guest submit to the modal; auto-submit on `onAuthenticated`. |
| `src/components/AuthPromptModal.jsx` | **New.** `<dialog>`-based login popup + Crear cuenta link. |
| `src/pages/Register.jsx` | Honor `?redirect=` on success (default `/`). |

**Reuse note:** the modal's login form duplicates ~5 lines of `Login.jsx`
(`signInWithPassword` + error). We keep a compact copy in the modal rather than
abstracting a shared hook for so little.

## Testing (Vitest + Testing Library)

- **DailyQuestion**
  - Guest sees the question text + options (no "Inicia sesión para participar" banner).
  - Guest clicks Enviar → the modal opens and **no result** is shown.
  - Authenticated submit shows the result (existing behavior preserved).
  - `onAuthenticated` triggers a `submit_answer` RPC call with the remembered option.
- **AuthPromptModal**
  - Successful `signInWithPassword` calls `onAuthenticated`.
  - Failed login shows the error message and does not call `onAuthenticated`.
  - `Crear cuenta →` navigates to `/registro?redirect=/pregunta-del-dia`.
- **Register**
  - On success with `?redirect=/pregunta-del-dia`, navigates there; without the param,
    navigates to `/`.

The global Supabase mock in `vitest.setup.js` already covers `auth.signInWithPassword`
and `rpc`; tests override per case. `<dialog>` methods (`showModal`/`close`) are not in
jsdom — stub them on `HTMLDialogElement.prototype` in the modal test.

## Out of scope / follow-ups

- Same guest flow for Reto Semanal (could mirror this later).
- "Remember the answer across signup and auto-submit" (we chose re-pick instead).
