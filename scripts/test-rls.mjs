/**
 * RLS / RPC integration tests — run against a DEV Supabase project, never prod.
 * (Spec §3.4. Doubles as the IDOR / authz-bypass / JWT-tamper pen-test coverage.)
 *
 *   SUPABASE_URL=... SUPABASE_ANON_KEY=... \
 *   [SUPABASE_SERVICE_ROLE_KEY=...]  node scripts/test-rls.mjs
 *
 * Creates two ephemeral users (User A, User B) via the anon client, asserts the
 * policies below, then deletes them if a service-role key is supplied (cleanup).
 *
 * Asserts:
 *   - anon cannot read profiles, cannot call submit_answer, cannot read questions
 *   - User A cannot read User B's profile row (IDOR)
 *   - User A cannot UPDATE profiles directly (score tampering)
 *   - User A cannot claim a nickname that isn't theirs (griefing)
 *   - a tampered JWT is rejected (signature check)
 */
import { createClient } from '@supabase/supabase-js';

const URL = process.env.SUPABASE_URL;
const ANON = process.env.SUPABASE_ANON_KEY;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!URL || !ANON) {
  console.error('Set SUPABASE_URL and SUPABASE_ANON_KEY (point at a DEV project).');
  process.exit(1);
}

let pass = 0, fail = 0;
const ok = (cond, name) => { (cond ? pass++ : fail++); console.log(`${cond ? '✅' : '❌'} ${name}`); };

const anonClient = () => createClient(URL, ANON, { auth: { persistSession: false, autoRefreshToken: false } });
const rand = () => Math.random().toString(36).slice(2, 8);

async function makeUser(nick) {
  const c = anonClient();
  const email = `rls_${nick}@eduportalcr.app`;
  const password = 'test-password-123';
  await c.auth.signUp({ email, password });
  const { data: { user } } = await c.auth.getUser();
  if (user) {
    await c.from('profiles').insert({ id: user.id, nickname: `rls_${nick}`, tier: 1, score: 0, questions_today: 0 });
  }
  return { client: c, id: user?.id };
}

async function main() {
  // --- Anonymous (no session) ---
  const anon = anonClient();
  ok(((await anon.from('profiles').select('id')).data ?? []).length === 0, 'anon reads zero profiles');
  ok((await anon.rpc('submit_answer', { question_id: '2026-01-01', answer: 'x', question_type: 'daily' })).error != null, 'anon cannot call submit_answer');
  ok(((await anon.from('daily_questions').select('correct_answer')).data ?? []).length === 0, 'anon cannot read daily_questions');

  // --- Two users ---
  const a = await makeUser('a' + rand());
  const b = await makeUser('b' + rand());

  // IDOR: A reads B's profile
  const aReadsB = await a.client.from('profiles').select('id, score').eq('id', b.id);
  ok((aReadsB.data ?? []).length === 0, 'User A cannot read User B profile (IDOR)');

  // Score tampering: A updates own profile directly
  const aUpdate = await a.client.from('profiles').update({ score: 9999 }).eq('id', a.id).select();
  ok((aUpdate.data ?? []).length === 0 || aUpdate.error != null, 'User A cannot UPDATE profiles directly');

  // Griefing: A claims a nickname that isn't theirs
  const aClaim = await a.client.rpc('claim_nickname', { p_name: 'SomeoneElsesName' });
  ok(aClaim.error != null, 'User A cannot claim a foreign nickname');

  // JWT tamper: corrupt the access token -> server rejects
  const { data: { session } } = await a.client.auth.getSession();
  if (session) {
    const bad = createClient(URL, ANON, { auth: { persistSession: false } });
    await bad.auth.setSession({ access_token: session.access_token.slice(0, -3) + 'xxx', refresh_token: session.refresh_token });
    const tampered = await bad.from('profiles').select('id');
    ok((tampered.data ?? []).length === 0, 'tampered JWT is rejected');
  }

  // --- Cleanup (needs service role) ---
  if (SERVICE && a.id && b.id) {
    const admin = createClient(URL, SERVICE);
    await admin.auth.admin.deleteUser(a.id);
    await admin.auth.admin.deleteUser(b.id);
    console.log('🧹 deleted ephemeral test users');
  } else {
    console.log('⚠️  no SERVICE_ROLE key — ephemeral test users left in the dev project');
  }

  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
}

main().catch((e) => { console.error('❌ test-rls crashed:', e); process.exit(1); });
