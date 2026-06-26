-- EduPortal CR — RLS hardening (2026-06-25)
-- See docs/superpowers/specs/2026-06-25-supabase-security-hardening-design.md §3.1, §3.2.

-- ============================================================
-- §3.1 — Tighten profiles insert: pin EVERY client-settable column
-- to its safe default so a crafted insert can't pre-seed bonus/tier/
-- weekly state. Scoring still goes only through submit_answer.
-- ============================================================

drop policy if exists "profiles_insert_own" on public.profiles;

create policy "profiles_insert_own" on public.profiles
  for insert with check (
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
  );

-- ============================================================
-- §3.2 — Replace the over-broad nickname claim policy.
-- Before: any authenticated user could flip ANY nickname used
-- false->true (grief the whole picker pool). After: claiming is an
-- ownership-scoped SECURITY DEFINER RPC — you may only mark a
-- nickname used if it matches your own profile's nickname.
-- ============================================================

drop policy if exists "nicknames_claim" on public.nicknames;

create or replace function public.claim_nickname(p_name text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'User must be logged in to claim a nickname.';
  end if;
  -- Only the user who actually registered this nickname may mark it used.
  if not exists (
    select 1 from public.profiles
    where id = auth.uid() and nickname = p_name
  ) then
    raise exception 'You can only claim your own nickname.';
  end if;
  update public.nicknames set used = true
  where name = p_name and used = false;
end;
$$;

revoke all on function public.claim_nickname(text) from public, anon;
grant execute on function public.claim_nickname(text) to authenticated;
