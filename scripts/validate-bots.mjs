#!/usr/bin/env node
// Validates every seed bot against the shipping parser and the catalogue rules.
// Lives in the repo so it cannot be clobbered by a scratch-dir collision.
import fs from 'node:fs';
import path from 'node:path';
import { parseBotMd, CATEGORY_IDS } from '../packages/shared/dist/index.js';

const D = 'seed-bots';
const CATEGORIES = new Set(CATEGORY_IDS);   // single source: packages/shared
const fails = [];
const rows = [];

for (const slug of fs.readdirSync(D).sort()) {
  const f = path.join(D, slug, 'BOT.md');
  if (!fs.existsSync(f)) continue;
  const raw = fs.readFileSync(f, 'utf8');
  let b;
  try {
    b = parseBotMd(slug, raw);
  } catch (e) {
    fails.push(`${slug}: PARSE FAILED ${e.message}`);
    continue;
  }
  const words = b.prompt.split(/\s+/).filter(Boolean).length;
  const bad = [];
  if (words < 120) bad.push(`prompt ${words}w`);
  if (!CATEGORIES.has(b.category)) bad.push(`category ${b.category}`);
  if (!b.integrations.length) bad.push('no integrations');
  if (!b.runtimes.length) bad.push('no runtimes');
  if (!b.boundary || b.boundary.length < 20) bad.push('weak boundary');
  if (/[—–]/.test(raw)) bad.push('EM/EN DASH');
  if (/botdirectory/i.test(raw)) bad.push('UPSTREAM REF');
  if (!/^You are /m.test(b.prompt)) bad.push('no "You are" opener');
  rows.push([slug, words, b.category, b.integrations.length, b.author, bad.length ? bad.join('; ') : 'OK']);
  if (bad.length) fails.push(`${slug}: ${bad.join('; ')}`);
}

console.log(`${'slug'.padEnd(34)}${'words'.padStart(6)}  ${'category'.padEnd(13)}${'int'.padStart(4)}  ${'author'.padEnd(18)}status`);
for (const r of rows) {
  console.log(`${r[0].padEnd(34)}${String(r[1]).padStart(6)}  ${r[2].padEnd(13)}${String(r[3]).padStart(4)}  ${r[4].padEnd(18)}${r[5]}`);
}
console.log(`\nbots: ${rows.length}   FAILURES: ${fails.length}`);
for (const f of fails) console.log('  FAIL', f);
process.exit(fails.length ? 1 : 0);
