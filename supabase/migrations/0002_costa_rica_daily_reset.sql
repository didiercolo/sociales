-- Align the daily-question day boundary with Costa Rica time (UTC-6) instead of UTC,
-- so the "1 question per day" limit resets at CR midnight — matching the frontend,
-- which now looks up today's question by the Costa Rica date.
-- Only the two `at time zone` expressions in the daily path change vs 0001.

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
  v_today         date := (now() at time zone 'America/Costa_Rica')::date;
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

  v_last_day := (v_profile.last_question_date at time zone 'America/Costa_Rica')::date;
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
