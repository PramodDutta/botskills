"""Give every article at least MIN_IN inbound internal links.

Newer posts link back to older ones, so the corpus naturally ends up with a few
hubs and a long tail of orphans. This appends a short "Keep reading" paragraph
(no heading, so it cannot collide with the corpus-wide H2 uniqueness rule)
placed immediately before the FAQ section, choosing targets by topical
similarity and prioritising whichever articles currently have the fewest
inbound links.
"""
import os,re,collections,sys
D='packages/web/src/app/blog/posts'
MIN_IN=3
MARK='**Keep reading:**'

posts={}
for f in sorted(os.listdir(D)):
    if not f.endswith('.ts') or f=='index.ts': continue
    src=open(f'{D}/{f}',encoding='utf-8').read()
    m=re.search(r'content: `([\s\S]*)`,\n\};',src)
    if not m: continue
    t=re.search(r"title:\s*\n?\s*'([^']*)'",src) or re.search(r'title:\s*\n?\s*"([^"]*)"',src)
    cat=re.search(r"category: '([^']*)'",src)
    posts[f[:-3]]={'file':f,'src':src,'content':m.group(1),
                   'title':t.group(1) if t else f[:-3],'cat':cat.group(1) if cat else ''}

STOP={'the','a','an','and','or','for','to','of','in','with','that','your','you','how','what',
      'grok','bot','bots','is','it','can','do','does','not','on','as','are','be','without','from','who','which'}
def toks(s):
    return {w for w in re.sub(r'[^a-z0-9 ]',' ',s.lower()).split() if len(w)>2 and w not in STOP}

tokmap={s:toks(p['title']+' '+s.replace('-',' ')) for s,p in posts.items()}
def cluster(s):
    if s.startswith('bots-for-'): return 'roles'
    if s.startswith('grok-bot-to-'): return 'jobs'
    if re.match(r'grok-bot-(gmail|slack|github|notion|google|x-twitter|salesforce|stripe|linear|intercom|hubspot|airtable|quickbooks|zoom|outlook|discord|shopify|jira)',s): return 'integrations'
    if s.startswith('bot-') or s in ('approval-gates-for-bots','least-privilege-bots','testing-your-bot','multi-bot-teams'): return 'craft'
    return 'core'

def existing_out(s):
    return set(re.findall(r'\]\(/blog/([a-z0-9-]+)\)',posts[s]['content']))

inbound=collections.Counter()
for s in posts:
    for t in existing_out(s):
        if t in posts and t!=s: inbound[t]+=1

added=collections.defaultdict(list)
# process sources in a stable order; each source donates up to 3 links
for s in sorted(posts):
    if MARK in posts[s]['content']: continue
    out=existing_out(s)
    # candidates: not self, not already linked, prefer same cluster then token overlap,
    # and above all prefer the articles that currently have the fewest inbound links
    cands=[t for t in posts if t!=s and t not in out and t!='introducing-botskills']
    def score(t):
        need = max(0, MIN_IN - (inbound[t]+len(added[t])))
        same = 1 if cluster(t)==cluster(s) else 0
        overlap = len(tokmap[s] & tokmap[t])
        return (-need, -same, -overlap)
    cands.sort(key=score)
    picks=[t for t in cands[:3]]
    if not picks: continue
    for t in picks: added[t].append(s)
    links=', '.join(f'[{posts[t]["title"].split(":")[0].strip()}](/blog/{t})' for t in picks)
    para=f'\n{MARK} {links}.\n'
    c=posts[s]['content']
    faq=c.find('\n## Frequently Asked Questions')
    c = c[:faq]+para+c[faq:] if faq!=-1 else c.rstrip()+'\n'+para
    posts[s]['content']=c
    posts[s]['src']=posts[s]['src'].replace(posts[s]['src'][posts[s]['src'].index('content: `')+10:posts[s]['src'].rindex('`,\n};')], c, 1)

if '--write' in sys.argv:
    for s,p in posts.items():
        open(f'{D}/{p["file"]}','w',encoding='utf-8').write(p['src'])
    print(f'wrote {len(posts)} files')

final=collections.Counter()
for s in posts:
    for t in set(re.findall(r'\]\(/blog/([a-z0-9-]+)\)',posts[s]['content'])):
        if t in posts and t!=s: final[t]+=1
orph=[s for s in posts if final[s]==0]
under=[s for s in posts if 0<final[s]<MIN_IN]
print(f'posts {len(posts)} | orphans {len(orph)} | under {MIN_IN} inbound: {len(under)}')
print(f'inbound min={min(final[s] for s in posts)} median={sorted(final[s] for s in posts)[len(posts)//2]} max={max(final[s] for s in posts)}')
if orph: print('  orphans:', orph[:8])
