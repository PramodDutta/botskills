// One-time DDL for the botskills database. Idempotent. Mirrors src/db/schema.ts.
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) { console.error('DATABASE_URL not set'); process.exit(1); }
const sql = neon(process.env.DATABASE_URL);

// driver 0.10: neon() is a tagged-template function only; no .query method.
const run = (frag) => sql(frag);
const stmts = [
  `CREATE TABLE IF NOT EXISTS bots (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    slug text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    version text NOT NULL,
    author text NOT NULL,
    license text NOT NULL,
    category text NOT NULL,
    integrations jsonb NOT NULL,
    runtimes jsonb NOT NULL,
    boundary text NOT NULL,
    tags jsonb NOT NULL DEFAULT '[]'::jsonb,
    prompt text NOT NULL,
    copy_count integer NOT NULL DEFAULT 0,
    hidden boolean NOT NULL DEFAULT false,
    created_at timestamp NOT NULL DEFAULT now(),
    updated_at timestamp NOT NULL DEFAULT now()
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS bots_slug_idx ON bots (slug)`,
  `CREATE TABLE IF NOT EXISTS copy_events (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    bot_slug text NOT NULL,
    source text NOT NULL DEFAULT 'web',
    created_at timestamp NOT NULL DEFAULT now()
  )`,
  `CREATE INDEX IF NOT EXISTS copy_events_slug_time_idx ON copy_events (bot_slug, created_at)`,
  `CREATE TABLE IF NOT EXISTS sponsors (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    company text NOT NULL,
    tier text NOT NULL,
    category text,
    logo_url text,
    line text,
    cta text,
    url text,
    polar_subscription_id text,
    status text NOT NULL DEFAULT 'pending_assets',
    period_end timestamp,
    created_at timestamp NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS sponsor_leads (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email text NOT NULL,
    company text,
    tier text,
    source text,
    status text NOT NULL DEFAULT 'new',
    notes text,
    created_at timestamp NOT NULL DEFAULT now()
  )`,
  `CREATE TABLE IF NOT EXISTS submissions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    pr_number integer,
    slug text,
    author_handle text,
    state text NOT NULL DEFAULT 'open',
    created_at timestamp NOT NULL DEFAULT now()
  )`,
];

for (const s of stmts) await sql(s);
const t = await sql`SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY 1`;
console.log('tables:', t.map((r) => r.table_name).join(', '));
