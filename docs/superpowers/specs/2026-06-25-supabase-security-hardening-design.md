# Supabase Security Hardening — Action Plan

**Date:** 2026-06-25
**Scope:** EduPortal CR (React SPA on GitHub Pages + Supabase). Post-migration security hardening.
**Source:** Generic 10-phase Supabase hardening plan, mapped onto this project's actual surface.

---

## 1. Project reality (why the generic plan gets trimmed)

This is **not** a multi-tenant SaaS. It is:

- A **static React SPA** served from GitHub Pages (`gh-pages -d dist`). No app server.
- Supabase with **5 tables**, all RLS-enabled: `profiles`, `nicknames`, `daily_questions`, `weekly_challenge`, `scoreboard`.
- **No Storage buckets.** No file uploads (content is static JS).
- **No Edge Functions.** The one sensitive operation (scoring) lives in a `SECURITY DEFINER` Postgres RPC (`submit_answer`).
- **No payments, admin panel, AI endpoints, billing, or PII.** Auth uses pseudo-emails (`<nickname>@eduportalcr.app`); the audience is primary-school kids.

The generic plan assumes a richer, higher-stakes architecture. Several phases are therefore **deliberately deferred** (see §4), not because they are wrong in general, but because the asset they protect does not exist here.

---

## 2. What is already satisfied (verified — do not re-build)

| Generic plan item | Evidence in this repo |
|---|---|
| **P1 — RLS on every table** | All 5 tables run `enable row level security` in `supabase/migrations/0001_init.sql`. |
| **P1 — No JWT claims for authorization** | `tier` is read from `public.profiles` via `auth.uid()` *inside* `submit_answer`, never from a JWT claim. This is exactly the plan's recommended pattern. |
| **P2 — No service-role key in client** | Service role is used only in `scripts/seed.mjs`, read from `process.env.SUPABASE_SERVICE_ROLE_KEY`. Not committed, not bundled by Vite (only `VITE_`-prefixed vars reach the client; the anon key is publishable by design). |
| **P3 / P5 — Thin backend for sensitive ops** | Scoring is the only sensitive operation and already runs server-side in `submit_answer` (`SECURITY DEFINER`, `search_path=public` pinned, `auth.uid()` null-check, tier/daily/weekly bounds validation). This *is* the "thin backend" the plan asks for. |
| **P10 — SQLi resistance** | All DB access is parameterized RPC / PostgREST. No dynamic SQL string-building anywhere. |

**`.env`-in-history note:** Commit `6e3dd50` removed a previously-tracked `.env`. Its contents were **only Firebase `VITE_` web client keys** — publishable config, not secrets (Firebase web API keys are public by design, like the Supabase anon key). **No real secret was exposed.** Action item is hygiene + decommissioning the now-dead Firebase project (§3.5), not incident response.

---

## 3. Real gaps — the action plan

Ordered by priority. Each item is a discrete, independently-shippable change.

### 3.1 — [P0] Tighten `profiles_insert_own` WITH CHECK

**Risk:** Bad RLS policy → privilege escalation (plan P0). The current insert policy only constrains `tier`, `score`, `questions_today`:

```sql
create policy "profiles_insert_own" on public.profiles
  for insert with check (
    auth.uid() = id and tier = 1 and score = 0 and questions_today = 0
  );
```

A crafted insert (anyone can call PostgREST directly with their own JWT) can still set `weekly_bonus_awarded = true`, a high `weekly_answered_count`, or arbitrary `tier_subject` / `tier_expires_at` at registration. `submit_answer` resets weekly state on a fresh week, so impact is limited, but the policy should not depend on the RPC to clean up after it.

**Fix:** extend `with check` to pin every client-settable column to its safe default:

```sql
with check (
  auth.uid() = id
  and tier = 1
  and score = 0
  and questions_today = 0
  and coalesce(weekly_answered_count, 0) = 0
  and coalesce(weekly_bonus_awarded, false) = false
  and weekly_week_id is null
  and tier_subject is null
  and tier_expires_at is null
  and last_question_date is null
)
```

Ship as a new migration (`0002_tighten_profiles_insert.sql`) that drops and recreates the policy. Verify the registration flow in `Register.jsx` still inserts only `{id, nickname, tier, score, questions_today}` — it does, so no client change needed.

### 3.2 — [P1] Scope the `nicknames_claim` policy

**Risk:** Default-deny gap / rate-limit-abuse (plan P1/P6). Current policy lets **any** authenticated user flip **any** nickname `used` false→true:

```sql
create policy "nicknames_claim" on public.nicknames
  for update to authenticated using (used = false) with check (used = true);
```

A single logged-in user can mark the entire nickname pool "used" (griefing). Impact is low — custom nicknames still work and registration's profile insert is what actually enforces uniqueness — but it is a real over-broad write grant.

**Decision (pick one in implementation):**
- **(a) Move the claim into `submit_answer`'s sibling pattern** — fold "mark nickname used" into a tiny `SECURITY DEFINER` RPC called during registration, and **remove** the client UPDATE policy entirely. Cleanest; matches the "writes go through functions" posture already used for scoring.
- **(b) Accept and document** — the `used` flag is cosmetic (it only filters the picker UI), so the blast radius is one annoyed registration session. If chosen, add a `ponytail:` comment in the migration naming the accepted risk.

Recommendation: **(a)** — it is a few lines and closes the gap fully.

### 3.3 — [P1] CI security gate

**Risk:** Secret exposure + dependency CVEs (plan P2/P7/P9). `.github/workflows/ci.yml` currently runs lint + tests only. Add three guardrails:

1. **Secret scanning** — add a `gitleaks` step to `ci.yml` (fails the build on a detected secret). Catches a future accidental service-role-key or `.env` commit.
2. **Migration RLS-lint** — a small script (`scripts/check-rls.mjs`, ~30 lines) that greps every `create table public.<x>` in `supabase/migrations/` and fails if a matching `alter table public.<x> enable row level security` is absent. Wire it as a CI step. This is the plan's "migrations contain policies" gate, sized for this repo.
3. **Dependabot** — add `.github/dependabot.yml` for the `npm` ecosystem (weekly). Free, native, replaces a Snyk dependency.

### 3.4 — [P1] Automated RLS / RPC test suite

**Risk:** Broken RLS / IDOR / authz bypass / JWT tampering (plan P10, and the plan's strongest single ask). Add a Vitest **integration** suite (separate from the existing unit tests that mock Supabase) that runs against a **dev Supabase project** (never prod) using two real test users + the anon client. Assertions:

| As | Must NOT be able to |
|---|---|
| Anonymous (no token) | read any `profiles` row; call `submit_answer`; read `daily_questions` / `weekly_challenge` directly |
| User A | read User B's `profiles` row (IDOR); `UPDATE` any `profiles` column directly (score tampering); read `daily_questions.correct_answer` via getter |
| User A | replay `submit_answer` past their tier's daily cap; submit a weekly answer out of sequence |
| Tampered/expired token | authenticate at all (Supabase rejects bad signature — this is the JWT-tamper test) |

This suite doubles as the pen-test coverage for SQLi/IDOR/JWT items in plan P10. Gate it in CI **only if** dev-project credentials are available as GitHub secrets; otherwise document it as a `npm run test:rls` command run before releases.

### 3.5 — [P1] Supabase dashboard + account hardening (manual checklist)

**Risk:** Infrastructure hardening (plan P9) + auth abuse (P6). Not code — a one-time checklist plus a recurring review:

- [ ] **MFA** enabled on the Supabase account/organization.
- [ ] **Leaked-password protection** (HaveIBeenPwned) enabled in Auth settings — cheap win even with a 6-char minimum.
- [ ] Confirm **Auth rate limits** (signup/login) are at Supabase defaults or tighter; consider Turnstile/hCaptcha on signup only if abuse is observed (the register form already has a honeypot).
- [ ] Confirm **backups / PITR** are enabled for the project.
- [ ] Confirm **email confirmations** are configured correctly for the pseudo-email scheme (must not block registration).
- [ ] **Decommission the dead Firebase project** (old `VITE_FIREBASE_*` keys in git history) — disable its APIs / delete the project so the leaked-but-public keys point at nothing.

---

## 4. Deliberately deferred (YAGNI for this project)

Documented so the decision is explicit and revisitable — **not** built now.

| Generic phase | Why deferred | Trigger that would change this |
|---|---|---|
| **P3 / P5 — Edge Function API layer** | Only one sensitive op (scoring); it is already a `SECURITY DEFINER` RPC. An API tier adds surface for marginal gain. | Adding payments, admin actions, AI, or any operation that needs secrets/business rules beyond a single RPC. |
| **P4 — Storage hardening** | No buckets exist. | The moment a bucket is created. **Standing rule:** any new bucket is **private** with **signed, short-expiry URLs** — never public. |
| **P8 — Datadog / ELK / Splunk monitoring** | Supabase's built-in Auth/Postgres/Realtime logs are sufficient at this scale. | Real user-base growth, a paid tier, or a security incident requiring forensics. |
| **P6 / P9 — Cloudflare gateway, monthly key rotation, multi-env separation** | Scale-dependent; GitHub Pages + Supabase defaults cover the current threat model. Anon key rotation is low-value (it is public by design). | Sustained scraping/abuse (→ Cloudflare); a confirmed key leak (→ rotate on suspicion, not on a calendar); a second developer or staging needs (→ env separation). |

---

## 5. AI-assisted development guardrails (standing rules)

From the plan's AI-codegen section. Add to `CLAUDE.md` so generated code inherits them:

1. **Every new table migration** must include `enable row level security` and at least one policy. (Enforced by §3.3 RLS-lint.)
2. **Every new RLS policy** gets a test case for anon, owner, and cross-user access in the §3.4 suite.
3. **Every `SECURITY DEFINER` function** pins `set search_path = public` and null-checks `auth.uid()` before any privileged action. (Already the house pattern.)
4. Secret scanning (§3.3) and dependency scanning (Dependabot) run on every PR.
5. **Quarterly** review focused on RLS policies + the RPC, since there is no Storage/Edge surface to audit.

---

## 6. Execution order

1. **§3.1** tighten profiles insert (migration) — highest risk, smallest diff.
2. **§3.2** scope nickname claim (migration + optional tiny RPC).
3. **§3.3** CI gate (gitleaks + RLS-lint + Dependabot) — protects everything after.
4. **§3.4** RLS/RPC test suite — proves §3.1/§3.2 and prevents regressions.
5. **§3.5** dashboard checklist — manual, can run in parallel.
6. **§5** add guardrails to `CLAUDE.md`.

Each numbered item is independently shippable and independently testable.
