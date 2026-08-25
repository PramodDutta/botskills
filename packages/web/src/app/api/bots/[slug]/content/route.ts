import { getBot } from '@/lib/bots';

// Raw BOT.md reconstruction as text/markdown: the paste-ready artifact an
// agent fetches to install or adapt a bot.
export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const bot = getBot(slug);
  if (!bot) return new Response('not found', { status: 404 });

  const fm = [
    '---',
    `name: ${bot.name}`,
    `description: ${bot.description}`,
    `version: ${bot.version}`,
    `author: ${bot.author}`,
    `license: ${bot.license}`,
    `category: ${bot.category}`,
    `integrations: [${bot.integrations.join(', ')}]`,
    `runtimes: [${bot.runtimes.join(', ')}]`,
    `boundary: ${bot.boundary}`,
    `tags: [${bot.tags.join(', ')}]`,
    '---',
    '',
  ].join('\n');

  return new Response(fm + bot.prompt + '\n', {
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  });
}
