import { getAllBots } from '@/lib/bots';
import { postList } from '@/app/blog/posts';

export function GET() {
  const bots = getAllBots();
  const lines = [
    '# botskills.sh',
    '',
    'Directory of paste-ready bot skills for Grok Bot and Rakazo. Each bot is one',
    'BOT.md file: frontmatter (name, category, integrations, runtimes, boundary)',
    'plus a setup prompt. The boundary field is the one action the bot never takes',
    'without a human.',
    '',
    '## Machine endpoints (allowed for AI crawlers in robots.txt)',
    '- https://botskills.sh/api/bots (JSON catalog; ?category=&runtime= filters)',
    '- https://botskills.sh/api/bots/<slug>/content (raw BOT.md)',
    '- https://botskills.sh/agents (how an agent authors and submits a bot)',
    '',
    '## Bots',
    ...bots.map((b) => `- https://botskills.sh/bots/${b.slug} : ${b.name} - ${b.description}`),
    '',
    '## Blog',
    ...postList.map((p) => `- https://botskills.sh/blog/${p.slug} : ${p.title}`),
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
