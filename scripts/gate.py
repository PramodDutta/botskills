#!/usr/bin/env python3
"""Per-article publication gate for the botskills blog.

Lives in the repo on purpose. An earlier version sat in /tmp, a subagent
overwrote it with one that required slug arguments, and running it bare then
produced no output and read as a clean pass. A gate that can silently become a
no-op is worse than no gate.

Usage: python3 scripts/gate.py [slug ...]   (no args = every article)
"""
import os, re, sys

D = os.path.join(os.path.dirname(__file__), '..', 'packages/web/src/app/blog/posts')
D = os.path.normpath(D)
BOTS = os.environ.get('BOTSLUGS', '/tmp/botslugs.txt')
valid_bots = set()
if os.path.exists(BOTS):
    valid_bots = {l.split('::')[0].strip() for l in open(BOTS) if '::' in l}

EXEMPT = {'introducing-botskills'}  # the launch announcement, not an SEO article

targets = sys.argv[1:] or sorted(
    f[:-3] for f in os.listdir(D) if f.endswith('.ts') and f != 'index.ts'
)
all_slugs = {f[:-3] for f in os.listdir(D) if f.endswith('.ts') and f != 'index.ts'}

rows, failures = [], []
for slug in targets:
    p = f'{D}/{slug}.ts'
    if not os.path.exists(p):
        failures.append(f'{slug}: FILE MISSING')
        continue
    src = open(p, encoding='utf-8').read()
    m = re.search(r'content: `([\s\S]*)`,\n\};', src)
    if not m:
        failures.append(f'{slug}: content literal not parseable')
        continue
    c = m.group(1)
    nocode = re.sub(r'\\`\\`\\`[\s\S]*?\\`\\`\\`', '', c)

    words = len(nocode.split())
    h1 = re.findall(r'^# (.+)$', nocode, re.M)
    h2 = len(re.findall(r'^## ', nocode, re.M))
    tables = len(re.findall(r'\n\|[^\n]*\|\n\|[\s:|-]+\|', c))
    faq = len(re.findall(r'^### .*\?\s*$', nocode, re.M))
    em = c.count('—') + c.count('–')
    t = re.search(r"title:\s*\n?\s*'([^']*)'", src) or re.search(r'title:\s*\n?\s*"([^"]*)"', src)
    title = t.group(1) if t else ''
    d = re.search(r"description:\s*\n?\s*'([^']*)'", src) or re.search(r'description:\s*\n?\s*"([^"]*)"', src)
    dlen = len(d.group(1)) if d else 0
    bots = set(re.findall(r'(?<!/api)/bots/([a-z0-9-]+)', c))
    bad_bots = sorted(b for b in bots if valid_bots and b not in valid_bots)
    blogs = set(re.findall(r'\]\(/blog/([a-z0-9-]+)\)', c))
    bad_blogs = sorted(b for b in blogs if b not in all_slugs)
    raw_bt = len(re.findall(r'(?<!\\)`', c))
    raw_interp = len(re.findall(r'(?<!\\)\$\{', c))

    bad = []
    exempt = slug in EXEMPT
    if not exempt and words < 3000: bad.append(f'words {words}')
    if not h1 or (title and h1[0].strip() != title.strip()): bad.append('h1 != title')
    if not exempt and h2 < 13: bad.append(f'h2 {h2}')
    if not exempt and tables < 4: bad.append(f'tables {tables}')
    if not exempt and faq != 4: bad.append(f'faq {faq}')
    if em: bad.append(f'EM/EN DASH {em}')
    if not 140 <= dlen <= 170: bad.append(f'desc {dlen}')
    if bad_bots: bad.append('BAD BOT SLUG ' + ','.join(bad_bots))
    if bad_blogs: bad.append('BROKEN BLOG LINK ' + ','.join(bad_blogs))
    if len(bots) < 2: bad.append(f'bots {len(bots)}')
    if not blogs: bad.append('no blog link')
    if raw_bt: bad.append(f'UNESCAPED BACKTICK {raw_bt}')
    if raw_interp: bad.append(f'UNESCAPED ${{ {raw_interp}')

    rows.append((slug, words, h2, tables, faq, dlen, len(bots), len(blogs),
                 'OK' + (' (exempt)' if exempt else '') if not bad else '; '.join(bad)))
    if bad: failures.append(f'{slug}: ' + '; '.join(bad))

print(f"{'slug':46}{'words':>6}{'h2':>4}{'tbl':>4}{'faq':>4}{'desc':>5}{'bots':>5}{'blog':>5}  status")
for r in rows:
    print(f'{r[0]:46}{r[1]:6}{r[2]:4}{r[3]:4}{r[4]:4}{r[5]:5}{r[6]:5}{r[7]:5}  {r[8]}')
print()
print(f'articles checked: {len(rows)}   FAILURES: {len(failures)}')
for f in failures:
    print('  FAIL', f)
sys.exit(1 if failures else 0)
