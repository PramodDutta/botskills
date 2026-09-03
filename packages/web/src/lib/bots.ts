import fs from 'node:fs';
import path from 'node:path';
import { parseBotMd, type ParsedBot } from '@botskills/shared';

// File catalog: seed-bots/<slug>/BOT.md at the repo root. Build needs no DB.
// Copies come from telemetry later (P1); until then a deterministic placeholder
// derived from the slug keeps the leaderboard shape honest without fake claims.

export const SEED_DIR = path.join(process.cwd(), '..', '..', 'seed-bots');

let cache: ParsedBot[] | null = null;

export function getAllBots(): ParsedBot[] {
  if (cache) return cache;
  const dirs = fs.existsSync(SEED_DIR)
    ? fs.readdirSync(SEED_DIR).filter((d) => fs.existsSync(path.join(SEED_DIR, d, 'BOT.md')))
    : [];
  cache = dirs
    .map((slug) => parseBotMd(slug, fs.readFileSync(path.join(SEED_DIR, slug, 'BOT.md'), 'utf8')))
    .sort((a, b) => a.name.localeCompare(b.name));
  return cache;
}

export function getBot(slug: string): ParsedBot | undefined {
  return getAllBots().find((b) => b.slug === slug);
}

/** When the BOT.md was last written; now if it cannot be read (sitemap safety). */
export function botMtime(slug: string): Date {
  try {
    return fs.statSync(path.join(SEED_DIR, slug, 'BOT.md')).mtime;
  } catch {
    return new Date();
  }
}
