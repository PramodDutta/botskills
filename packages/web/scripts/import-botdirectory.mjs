// Compliant importer for the MIT-licensed botdirectory.ai catalog.
// - Preserves the full MIT notice + copyright line in EVERY generated file
//   (files are fetched individually, so a repo-level notice is not enough).
// - Preserves original contributor attribution and source link.
// - Emits to import-staging/, NOT seed-bots/: our schema requires a boundary,
//   which upstream lacks. A human-authored boundary promotes a bot to live.
import fs from 'node:fs';
import path from 'node:path';

const SRC = process.argv[2];
const OUT = path.join(process.cwd(), 'import-staging');
if (!SRC || !fs.existsSync(SRC)) { console.error('usage: node import-botdirectory.mjs <bots-dir>'); process.exit(1); }

const MIT = `MIT License

Copyright (c) 2026 Inbox Zero Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const get = (head, key) => {
  const m = head.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return m ? m[1].trim().replace(/^"|"$/g, '') : '';
};

let ok = 0, skip = 0;
for (const f of fs.readdirSync(SRC).filter((x) => x.endsWith('.md')).sort()) {
  const raw = fs.readFileSync(path.join(SRC, f), 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!fm) { console.error('skip (no frontmatter):', f); skip++; continue; }
  const [, head, body] = fm;

  const name = get(head, 'name');
  const category = get(head, 'category').toLowerCase();
  const contributor = get(head, 'contributor') || 'unknown';
  const contributorUrl = get(head, 'contributor_url');
  const addedVia = get(head, 'added_via');
  const intsRaw = get(head, 'integrations');
  const ints = intsRaw.startsWith('[')
    ? intsRaw.slice(1, -1).split(',').map((x) => slugify(x)).filter(Boolean)
    : [];
  const prompt = body.trim();
  if (!name || !category || !prompt) { console.error('skip (missing fields):', f); skip++; continue; }

  // Description: first sentence of the prompt, clipped to schema bounds.
  let desc = prompt.replace(/\s+/g, ' ').split(/(?<=[.!?])\s/)[0] || '';
  if (desc.length > 280) desc = desc.slice(0, 277).replace(/\s+\S*$/, '') + '...';
  if (desc.length < 10) desc = (name + ': imported Grok Bot setup awaiting editorial description.');

  const slug = slugify(path.basename(f, '.md'));
  const dir = path.join(OUT, slug);
  fs.mkdirSync(dir, { recursive: true });

  const out = `---
name: ${name.replace(/:/g, ' -')}
description: ${desc.replace(/:/g, ' -')}
version: 1.0.0
author: ${contributor}
license: MIT
category: ${category}
integrations: [${ints.join(', ') || 'none'}]
runtimes: [grok-bot]
boundary: BOUNDARY_TODO
tags: [imported]
---

${prompt}

---

### License and attribution

Imported from [botdirectory.ai](https://botdirectory.ai) via
[github.com/elie222/botdirectory.ai](https://github.com/elie222/botdirectory.ai),
used under the MIT License reproduced in full below. Original contributor:
[@${contributor}](${contributorUrl || 'https://x.com/' + contributor})${addedVia ? ` (source: ${addedVia})` : ''}.
The boundary line and any edits are by botskills.sh, released under the same license.

\`\`\`
${MIT}
\`\`\`
`;
  fs.writeFileSync(path.join(dir, 'BOT.md'), out);
  ok++;
}
console.log(`staged ${ok}, skipped ${skip} -> import-staging/`);
