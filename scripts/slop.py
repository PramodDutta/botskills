import os,re,sys
from collections import Counter,defaultdict
D='packages/web/src/app/blog/posts'
BANNED=['delve','tapestry','game-changer','game changer','seamless','robust','in today\'s','in the world of',
        "it's important to note",'let us dive','let\'s dive','in conclusion','moreover,','furthermore,',
        'ever-evolving','ever evolving','rapidly evolving','cutting-edge','revolutionize','revolutionise',
        'unlock the power','harness the power','navigate the','the realm of','a testament to','paradigm shift',
        'at the end of the day','when it comes to','needless to say','it goes without saying']
SOFT=['leverage','robust','crucial','pivotal','landscape','seamless','holistic','synergy','streamline']
posts={}
for f in sorted(os.listdir(D)):
    if not f.endswith('.ts') or f=='index.ts': continue
    src=open(f'{D}/{f}',encoding='utf-8').read()
    m=re.search(r'content: `([\s\S]*)`,\n\};',src)
    if m:
        # charters and anti-example lists legitimately quote banned words in order
        # to ban them, so strip fenced blocks before scanning prose
        posts[f[:-3]]=re.sub(r'\\`\\`\\`[\s\S]*?\\`\\`\\`','',m.group(1))
print(f'scanning {len(posts)} posts\n')
print('== banned phrases ==')
hits=0
for s,c in posts.items():
    lc=c.lower()
    found=[b for b in BANNED if b in lc]
    if found: print(f'  {s}: {found}'); hits+=len(found)
print(f'  total: {hits}\n')
print('== soft overuse (>3 in one post) ==')
so=0
for s,c in posts.items():
    lc=c.lower()
    for w in SOFT:
        n=len(re.findall(r'\b'+re.escape(w),lc))
        if n>3: print(f'  {s}: "{w}" x{n}'); so+=1
print(f'  total: {so}\n')
print('== opening sentence uniqueness ==')
opens=Counter()
firsts={}
for s,c in posts.items():
    body=re.sub(r'^#[^\n]*\n','',c.strip())
    first=' '.join(body.strip().split()[:8]).lower()
    opens[first]+=1; firsts[s]=first
dup=[k for k,v in opens.items() if v>1]
print(f'  duplicate 8-word openers: {len(dup)}')
for d in dup[:5]: print('   ',d,'->',[s for s,f in firsts.items() if f==d])
print()
print('== cross-post sentence duplication (8-gram overlap) ==')
grams=defaultdict(set)
for s,c in posts.items():
    words=re.sub(r'[^a-z0-9 ]',' ',c.lower()).split()
    for i in range(len(words)-7):
        grams[' '.join(words[i:i+8])].add(s)
shared={g:v for g,v in grams.items() if len(v)>2}
print(f'  8-grams appearing in >2 posts: {len(shared)}')
top=sorted(shared.items(), key=lambda kv:-len(kv[1]))[:8]
for g,v in top: print(f'   [{len(v)} posts] "{g}"')
