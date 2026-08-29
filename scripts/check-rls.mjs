/**
 * RLS-lint: every `create table public.<x>` in supabase/migrations/ must have a
 * matching `enable row level security`. Fails CI otherwise. (Spec §3.3)
 *
 *   node scripts/check-rls.mjs
 *
 * ponytail: regex over SQL text, not a real parser. Good enough — migrations are
 * hand-written and small. Swap for a parser only if generated SQL ever lands here.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'supabase/migrations';
const files = readdirSync(DIR).filter((f) => f.endsWith('.sql'));
const sql = files.map((f) => readFileSync(join(DIR, f), 'utf8')).join('\n').toLowerCase();

const created = [...sql.matchAll(/create table\s+(?:if not exists\s+)?public\.(\w+)/g)].map((m) => m[1]);
const rlsOn = new Set(
  [...sql.matchAll(/alter table\s+public\.(\w+)\s+enable row level security/g)].map((m) => m[1])
);

const missing = [...new Set(created)].filter((t) => !rlsOn.has(t));

if (missing.length) {
  console.error(`❌ Tables without RLS enabled: ${missing.join(', ')}`);
  process.exit(1);
}
console.log(`✅ RLS enabled on all ${new Set(created).size} table(s).`);
