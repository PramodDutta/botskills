import { serializeBotMd } from '@botskills/shared';
import { getBot } from '@/lib/bots';

// Raw BOT.md reconstruction as text/markdown: the artifact an agent fetches to
// install or adapt a bot.
//
// This endpoint reproduces the WHOLE file, attribution included. The web copy
// button deliberately omits the licence block so a human pastes only the prompt,
// but this is a distribution of the file itself, and the upstream MIT notice has
// to travel with it.
export async function GET(_req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const bot = getBot(slug);
  if (!bot) return new Response('not found', { status: 404 });

  return new Response(serializeBotMd(bot), {
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  });
}
