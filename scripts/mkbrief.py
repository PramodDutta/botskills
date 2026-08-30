#!/usr/bin/env python3
"""Build a codex brief for the next N unwritten, undispatched articles.

Two rules are baked in because both were learned the expensive way:
the word floor is 3000 and batches that aim at it land at 2917 to 3073 and
fail or barely pass, so we aim at 3400; and re-explaining the shared Grok Bot
background in every article built a 20.6% overlap between two comparisons,
so shared facts get stated once and linked.
"""
import json, os, glob, sys, subprocess

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
P = os.path.join(ROOT, 'packages/web/src/app/blog/posts')
LEDGER = os.path.join(ROOT, '.dispatch/dispatched.txt')

n = int(sys.argv[1]) if len(sys.argv) > 1 else 8
out = sys.argv[2] if len(sys.argv) > 2 else '/tmp/brief.md'

have = {os.path.basename(f)[:-3] for f in glob.glob(f'{P}/*.ts')} - {'index'}

# Reconcile the ledger before reading it. A dispatch that died (quota, crash)
# leaves slugs marked spent that were never written, and they would be stranded
# forever. A slug counts as spent only if its file actually exists.
sent = set()
if os.path.exists(LEDGER):
    prev = [x for x in open(LEDGER).read().split() if x]
    sent = {s for s in prev if s in have}
    if len(sent) != len(set(prev)):
        open(LEDGER, 'w').write('\n'.join(sorted(sent)) + '\n')
        print(f'ledger reconciled: released {len(set(prev)) - len(sent)} unwritten slug(s)')
A = json.load(open(os.path.join(ROOT, 'docs/seo/plan-250-reviewed.json'), encoding='utf-8'))['articles']
# Clear topics first. Only when they run out do the gated ones go out, and then
# ONE per batch: they are subject-twins of live articles, so batching several
# together would have them duplicate each other as well as their twins.
clear = [a for a in A if a.get('status') == 'planned' and a.get('risk') == 'clear'
         and a['slug'] not in have and a['slug'] not in sent]
gated = [a for a in A if a.get('status') == 'planned' and a.get('risk') == 'same-subject-as-live'
         and a['slug'] not in have and a['slug'] not in sent]
clear.sort(key=lambda a: (a['priority'], a['slug']))
gated.sort(key=lambda a: a['slug'])
avail = clear + gated
batch = clear[:n] if clear else gated[:1]
if not batch:
    print('NOTHING AVAILABLE'); raise SystemExit(1)

CANON = ['screens-are-not-boundaries', 'what-a-pasted-prompt-inherits',
         'where-a-bot-cookie-actually-lives', 'why-deleting-a-bot-leaves-the-files',
         'what-an-approval-actually-governs', 'a-boundary-is-not-a-permission',
         'how-to-write-a-boundary-line', 'who-can-actually-run-grok-bot',
         'what-you-cannot-cap', 'learn-grok-bot']

brief = f"""Write {len(batch)} new blog articles for botskills.sh. One TypeScript module each at
packages/web/src/app/blog/posts/<slug>.ts exporting `post: BlogPost`.

READ FIRST, binding:
- scripts/gate.py  <- authoritative pass/fail. Satisfy every check.
- docs/seo/LONGFORM-SPEC.md and docs/seo/HUMANIZE-SPEC.md
- docs/seo/VERIFIED-FACTS-2026-08-25.md <- every product claim traces here.
  Never assert: SuperGrok Heavy $300, the allowance amount, Grok Bot's model,
  a Linux/Android/iPad app, a spend cap, an audit view, or that Grok Bot reads
  SKILL.md (that is Grok Build).

WORD COUNT: the gate floor is 3000. Batches that aim at the floor land at 2917
to 3073 and either fail or barely scrape through. Aim at 3400. Depth comes from
worked examples and one walked-through failure, never from padding.

DO NOT RESTATE THE SHARED BACKGROUND. Two comparison articles overlapped 20.6%
purely because both re-explained the same Grok Bot facts: the $60 Cursor Pro+
path, no iPad app, screen-per-bot on a shared VM, the non-root user. State a
shared fact in ONE sentence and link to the canonical article instead:
""" + '\n'.join(f'  /blog/{c}' for c in CANON) + """
Spend your words on what is specific to THIS article's subject.

HARD RULES:
- Zero em dashes and zero en dashes. The gate rejects both.
- date: '2026-08-29'. H1 must equal the title exactly. Description 140 to 170 chars.
- Escape backticks and ${ inside the content template literal.
- Do NOT edit posts/index.ts. Registration is handled separately.
- At least 4 /bots/<slug> links and 6 /blog/<slug> links, all resolving to files
  that exist. Check before you link.

Write these exactly, using the given slug, title, keyword and category:

"""
for i, a in enumerate(batch, 1):
    brief += f'{i}. {a["slug"]} | "{a["title"]}" | {a["category"]} | kw: {a["keyword"]}\n'
    if a.get('write_rule'):
        brief += (f'   TWIN WARNING: /blog/{a.get("live_twin","")} already covers this subject.\n'
                  f'   {a["write_rule"]}\n')
brief += ('\nWhen done run: python3 scripts/gate.py ' + ' '.join(a['slug'] for a in batch)
          + '\nand fix anything it reports until it prints FAILURES: 0.\n')

open(out, 'w').write(brief)
with open(LEDGER, 'a') as fh:
    fh.write('\n' + '\n'.join(a['slug'] for a in batch))
print(f'{out}: {len(batch)} articles, {len(avail)-len(batch)} still available')
for a in batch: print('  ' + a['slug'])
