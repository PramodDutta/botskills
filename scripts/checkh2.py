# usage: python3 /tmp/checkh2.py <slug> [<slug>...]
# reports any H2 in your files that collides with an H2 anywhere else in the corpus
import os,re,sys
D='/Users/promode/botskills/packages/web/src/app/blog/posts'
mine=set(sys.argv[1:])
own={}; others={}
for f in os.listdir(D):
    if not f.endswith('.ts') or f=='index.ts': continue
    s=f[:-3]
    c=open(f'{D}/{f}',encoding='utf-8').read()
    hs={h.strip().lower() for h in re.findall(r'^## (.+)$',c,re.M) if 'Frequently Asked' not in h}
    (own if s in mine else others).setdefault(s,hs)
allother={}
for s,hs in others.items():
    for h in hs: allother.setdefault(h,[]).append(s)
bad=0
for s,hs in own.items():
    for h in hs:
        if h in allother: print(f'COLLISION  {s}: "{h}"  also in {allother[h]}'); bad+=1
    for s2,hs2 in own.items():
        if s2<=s: continue
        for h in hs&hs2: print(f'COLLISION  {s} <-> {s2}: "{h}"'); bad+=1
print('h2 collisions:',bad, '(must be 0)')
