// Upserts seed-bots/*/BOT.md into the DB the exported DATABASE_URL points at.
// P1 tool: harmless to hold now. Uses the shared parser so file and DB agree.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const seedDir = path.join(root, 'seed-bots');

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set; refusing to guess a target.');
  process.exit(1);
}

const { parseBotMd } = await import('@botskills/shared');
const { neon } = await import('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

const dirs = fs.readdirSync(seedDir).filter((d) => fs.existsSync(path.join(seedDir, d, 'BOT.md')));
let n = 0;
for (const slug of dirs) {
  const bot = parseBotMd(slug, fs.readFileSync(path.join(seedDir, slug, 'BOT.md'), 'utf8'));
  await sql`
    INSERT INTO bots (slug, name, description, version, author, license, category,
                      integrations, runtimes, boundary, tags, prompt, updated_at)
    VALUES (${bot.slug}, ${bot.name}, ${bot.description}, ${bot.version}, ${bot.author},
            ${bot.license}, ${bot.category}, ${JSON.stringify(bot.integrations)},
            ${JSON.stringify(bot.runtimes)}, ${bot.boundary}, ${JSON.stringify(bot.tags)},
            ${bot.prompt}, now())
    ON CONFLICT (slug) DO UPDATE SET
      name = EXCLUDED.name, description = EXCLUDED.description, version = EXCLUDED.version,
      author = EXCLUDED.author, license = EXCLUDED.license, category = EXCLUDED.category,
      integrations = EXCLUDED.integrations, runtimes = EXCLUDED.runtimes,
      boundary = EXCLUDED.boundary, tags = EXCLUDED.tags, prompt = EXCLUDED.prompt,
      updated_at = now()`;
  n++;
}
console.log(`upserted ${n} bots`);
