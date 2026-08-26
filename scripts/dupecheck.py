#!/usr/bin/env python3
"""Find near-duplicate articles by shared prose n-grams.

The per-article gate cannot see this: two articles can each have the right word
count, section count and table count while being the same article with the nouns
swapped. That is exactly what a templated title frame invites, and it is the
failure that gets a whole cluster filtered out of the index rather than one page.

Compares 12-gram sets after stripping links, code and tables, so shared doc
quotations and anchor text do not register as duplication.

Usage: python3 scripts/dupecheck.py [threshold_percent]   (default 20)
"""
import os, re, sys, itertools

HERE = os.path.dirname(os.path.abspath(__file__))
D = os.path.normpath(os.path.join(HERE, '..', 'packages/web/src/app/blog/posts'))
THRESH = float(sys.argv[1]) / 100 if len(sys.argv) > 1 else 0.20

def grams(path):
    m = re.search(r'content: `([\s\S]*)`,\n\};', open(path, encoding='utf-8').read())
    if not m:
        return set()
    c = m.group(1)
    c = re.sub(r'\[([^\]]*)\]\([^)]*\)', ' ', c)          # link text and urls
    c = re.sub(r'\\`\\`\\`[\s\S]*?\\`\\`\\`', ' ', c)      # code blocks
    c = re.sub(r'\n\|[^\n]*', ' ', c)                      # table rows
    w = re.sub(r'[^a-z0-9 ]', ' ', c.lower()).split()
    return {' '.join(w[i:i + 12]) for i in range(len(w) - 11)}

G = {}
for f in sorted(os.listdir(D)):
    if f.endswith('.ts') and f != 'index.ts':
        g = grams(os.path.join(D, f))
        if g:
            G[f[:-3]] = g

pairs = []
for (x, a), (y, b) in itertools.combinations(G.items(), 2):
    r = len(a & b) / max(1, min(len(a), len(b)))
    if r >= THRESH:
        pairs.append((r, x, y))
pairs.sort(reverse=True)

print(f'compared {len(G)} articles at a {THRESH * 100:.0f}% threshold')
for r, x, y in pairs:
    print(f'  {r * 100:5.1f}%  {x}  <->  {y}')
print(f'\nnear-duplicate pairs: {len(pairs)}')
sys.exit(1 if pairs else 0)
