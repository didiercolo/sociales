-- EduPortal CR — initial schema (Firebase → Supabase migration)
-- Tables, RLS, scoring RPC, question getters, and the realtime scoreboard.

-- ============================================================
-- Tables
-- ============================================================

create table public.profiles (
  id                      uuid primary key references auth.users on delete cascade,
  nickname                text unique not null check (char_length(nickname) between 3 and 50),
  tier                    int  not null default 1 check (tier between 1 and 4),
  tier_subject            text,
  tier_expires_at         timestamptz,
  score                   int  not null default 0,
  questions_today         int  not null default 0,
  last_question_date      timestamptz,
  weekly_week_id          text,
  weekly_answered_count   int  not null default 0,
  weekly_bonus_awarded    boolean not null default false,
  created_at              timestamptz not null default now()
);

create table public.nicknames (
  id     uuid primary key default gen_random_uuid(),
  name   text not null,
  emoji  text,
  used   boolean not null default false
);

create table public.daily_questions (
  date           date primary key,
  subject        text,
  question       text not null,
  options        jsonb not null,
  correct_answer text not null,
  explanation    text
);

create table public.weekly_challenge (
  week_id    text primary key,
  start_date text,
  end_date   text,
  -- [{ question, options, correctAnswer, explanation, subject }]
  questions  jsonb not null default '[]'::jsonb
);

create table public.scoreboard (
  id         text primary key default 'scoreboard',
  top_users  jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

-- ============================================================
-- Row Level Security
-- ============================================================

alter table public.profiles         enable row level security;
alter table public.nicknames        enable row level security;
alter table public.daily_questions  enable row level security;
alter table public.weekly_challenge enable row level security;
alter table public.scoreboard       enable row level security;

-- profiles: owner reads own row; owner creates own row with safe defaults.
-- All score/tier mutations go through submit_answer (SECURITY DEFINER) or service role.
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

create policy "profiles_insert_own" on public.profiles
  for insert with check (
    auth.uid() = id
    and tier = 1
    and score = 0
    and questions_today = 0
  );

-- nicknames: anyone may read; authenticated users may only flip used false -> true.
create policy "nicknames_select_all" on public.nicknames
  for select using (true);

create policy "nicknames_claim" on public.nicknames
  for update to authenticated
  using (used = false)
  with check (used = true);

-- daily_questions / weekly_challenge: NO client policies on purpose.
-- Correct answers never reach the browser. Reads go through the
-- SECURITY DEFINER getter functions below; writes go through service role.

-- scoreboard: world-readable (shown to all visitors); writes only via trigger.
create policy "scoreboard_select_all" on public.scoreboard
  for select using (true);

-- ============================================================
-- ISO week helper (matches the old getISOWeekId: e.g. "2026-W24")
-- ============================================================

create or replace function public.iso_week_id(d timestamptz default now())
returns text
language sql
immutable
as $$
  select to_char(d, 'IYYY"-W"IW');
$$;

-- ============================================================
-- Question getters (SECURITY DEFINER — strip correct answers)
-- ============================================================

create or replace function public.get_daily_question(p_date date)
returns table (id text, subject text, question text, options jsonb)
language sql
security definer
set search_path = public
as $$
  select date::text, subject, question, options
  from public.daily_questions
  where date = p_date;
$$;

create or replace function public.get_weekly_challenge(p_week_id text)
returns jsonb
language sql
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'weekId', wc.week_id,
    'startDate', wc.start_date,
    'endDate', wc.end_date,
    'questions', coalesce(
      -- Safe fields only — correctAnswer / explanation never leave the server.
      (select jsonb_agg(jsonb_build_object(
                'question', q->>'question',
                'options',  q->'options',
                'subject',  q->>'subject'))
       from jsonb_array_elements(wc.questions) q),
      '[]'::jsonb)
  )
  from public.weekly_challenge wc
  where wc.week_id = p_week_id;
$$;

-- ============================================================
-- submit_answer — atomic scoring (ports functions/index.js)
-- ============================================================

create or replace function public.submit_answer(
  question_id    text,
  answer         text,
  question_type  text default 'daily',
  question_index int  default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid           uuid := auth.uid();
  v_tier          int;
  v_profile       public.profiles%rowtype;
  v_correct       text;
  v_explanation   text;
  v_is_correct    boolean;
  v_points        int := 0;
  v_bonus         boolean := false;
  v_answered      int;
  v_questions     jsonb;
  v_qcount        int;
  v_qdata         jsonb;
  v_today         date := (now() at time zone 'utc')::date;
  v_last_day      date;
  v_questions_today int;
  v_weekly_complete boolean := false;
begin
  if v_uid is null then
    raise exception 'User must be logged in to submit answers.';
  end if;

  select * into v_profile from public.profiles where id = v_uid;
  if not found then
    raise exception 'User document not found.';
  end if;
  v_tier := coalesce(v_profile.tier, 1);

  -- ---------- Weekly path ----------
  if question_type = 'weekly' then
    if question_id <> public.iso_week_id() then
      raise exception 'Invalid or expired weekId.';
    end if;
    if question_index is null or question_index < 0 then
      raise exception 'questionIndex must be a non-negative integer.';
    end if;

    select questions into v_questions from public.weekly_challenge where week_id = question_id;
    if v_questions is null then
      raise exception 'Weekly challenge not found for week %.', question_id;
    end if;
    v_qcount := jsonb_array_length(v_questions);
    if v_qcount = 0 then
      raise exception 'Weekly challenge has no questions.';
    end if;
    if question_index >= v_qcount then
      raise exception 'questionIndex % is out of bounds (challenge has % questions).', question_index, v_qcount;
    end if;

    v_qdata := v_questions -> question_index;
    v_correct := v_qdata ->> 'correctAnswer';
    v_explanation := v_qdata ->> 'explanation';
    v_is_correct := lower(btrim(answer)) = lower(btrim(coalesce(v_correct, '')));

    -- Fresh week resets progress
    if v_profile.weekly_week_id is distinct from question_id then
      v_answered := 0;
      v_bonus := false;
    else
      v_answered := coalesce(v_profile.weekly_answered_count, 0);
      v_bonus := coalesce(v_profile.weekly_bonus_awarded, false);
    end if;

    if v_answered >= v_qcount then
      raise exception 'You have already completed the weekly challenge for this week.';
    end if;
    if question_index <> v_answered then
      raise exception 'Expected questionIndex %, got %.', v_answered, question_index;
    end if;

    v_points := case when v_tier = 1 then 1 else 2 end;
    if v_is_correct then v_points := v_points + 1; end if;

    if v_answered + 1 = v_qcount and not v_bonus then
      v_points := v_points + 5;
      v_bonus := true;
    end if;
    v_weekly_complete := (v_answered + 1 = v_qcount);

    update public.profiles set
      score = score + v_points,
      weekly_week_id = question_id,
      weekly_answered_count = v_answered + 1,
      weekly_bonus_awarded = v_bonus
    where id = v_uid;

    return jsonb_build_object(
      'success', true,
      'pointsEarned', v_points,
      'isCorrect', v_is_correct,
      'correctAnswerMessage', case when v_is_correct then null
        else coalesce(v_explanation, 'The correct answer was: ' || coalesce(v_correct, '')) end,
      'bonusAwarded', v_bonus,
      'weeklyComplete', v_weekly_complete
    );
  end if;

  -- ---------- Daily path ----------
  select correct_answer, explanation into v_correct, v_explanation
  from public.daily_questions where date = question_id::date;
  if not found then
    raise exception 'Question not found.';
  end if;

  v_last_day := (v_profile.last_question_date at time zone 'utc')::date;
  v_questions_today := coalesce(v_profile.questions_today, 0);
  if v_last_day is distinct from v_today then
    v_questions_today := 0; -- new day
  end if;

  if v_tier = 1 and v_questions_today >= 1 then
    raise exception 'Tier 1 limit reached (1 question per day).';
  end if;
  if v_tier > 1 and v_questions_today >= 10 then
    raise exception 'Daily limit reached for your tier (10 questions).';
  end if;

  v_is_correct := lower(btrim(answer)) = lower(btrim(coalesce(v_correct, '')));
  v_points := case when v_tier = 1 then 1 else 2 end;
  if v_is_correct then v_points := v_points + 1; end if;

  if v_tier > 1 and v_questions_today + 1 = 10 then
    v_points := v_points + 2;
    v_bonus := true;
  end if;

  update public.profiles set
    score = score + v_points,
    questions_today = v_questions_today + 1,
    last_question_date = now()
  where id = v_uid;

  return jsonb_build_object(
    'success', true,
    'pointsEarned', v_points,
    'isCorrect', v_is_correct,
    'correctAnswerMessage', case when v_is_correct then null
      else coalesce(v_explanation, 'The correct answer was: ' || coalesce(v_correct, '')) end,
    'bonusAwarded', v_bonus
  );
end;
$$;

-- ============================================================
-- Scoreboard maintenance (ports updateScoreboard trigger)
-- ============================================================

create or replace function public.refresh_scoreboard()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Only rebuild when a leaderboard-relevant field changed.
  if tg_op = 'UPDATE'
     and new.score = old.score
     and new.nickname = old.nickname
     and new.tier = old.tier then
    return new;
  end if;

  insert into public.scoreboard (id, top_users, updated_at)
  values (
    'scoreboard',
    coalesce((
      select jsonb_agg(jsonb_build_object(
               'uid', id, 'nickname', nickname, 'score', score, 'tier', tier))
      from (
        select id, nickname, score, tier
        from public.profiles
        where nickname is not null
        order by score desc
        limit 50
      ) t
    ), '[]'::jsonb),
    now()
  )
  on conflict (id) do update
    set top_users = excluded.top_users, updated_at = excluded.updated_at;

  return new;
end;
$$;

create trigger trg_refresh_scoreboard
  after insert or update on public.profiles
  for each row execute function public.refresh_scoreboard();

-- ============================================================
-- Realtime: broadcast scoreboard row changes to all clients
-- ============================================================

alter publication supabase_realtime add table public.scoreboard;
