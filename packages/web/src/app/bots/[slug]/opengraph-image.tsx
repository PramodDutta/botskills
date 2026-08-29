import { ImageResponse } from 'next/og';
import { CATEGORIES } from '@botskills/shared';
import { getAllBots, getBot } from '@/lib/bots';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'A Grok Bot skill on botskills.sh';

export function generateStaticParams() {
  return getAllBots().map(({ slug }) => ({ slug }));
}

/** Cut at a word boundary so a card never ends mid-word. */
function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).trimEnd()}...`;
}

export default async function BotOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bot = getBot(slug);
  const name = bot?.name ?? 'Bot not found';
  const category = CATEGORIES.find((c) => c.id === bot?.category)?.name ?? '';
  const description = clamp(bot?.description ?? '', 150);
  // The boundary is why this catalogue exists, so it gets the accent colour and
  // its own line rather than being folded into the description.
  const boundary = clamp(bot?.boundary ?? '', 155);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0b0e12',
          color: '#e8edf2',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#171c24',
              position: 'relative',
            }}
          >
            <div style={{ position: 'absolute', left: 9, top: 12, width: 9, height: 9, borderRadius: 3, background: '#f0a63b' }} />
            <div style={{ position: 'absolute', right: 9, top: 12, width: 9, height: 9, borderRadius: 3, background: '#f0a63b' }} />
            <div style={{ position: 'absolute', left: 9, bottom: 9, width: 18, height: 6, borderRadius: 3, background: '#f0a63b' }} />
          </div>
          <div style={{ display: 'flex', fontSize: 28, fontWeight: 700 }}>
            botskills<span style={{ color: '#8b97a3' }}>.sh</span>
          </div>
          {category ? (
            <div
              style={{
                display: 'flex',
                marginLeft: 'auto',
                fontSize: 22,
                color: '#8b97a3',
                textTransform: 'uppercase',
                letterSpacing: 2,
              }}
            >
              {category}
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, marginTop: 44, lineHeight: 1.1 }}>
          {clamp(name, 60)}
        </div>

        <div style={{ display: 'flex', fontSize: 28, marginTop: 24, color: '#8b97a3', lineHeight: 1.4 }}>
          {description}
        </div>

        {boundary ? (
          <div
            style={{
              display: 'flex',
              marginTop: 36,
              paddingTop: 28,
              borderTop: '2px solid #171c24',
              fontSize: 24,
              color: '#f0a63b',
              lineHeight: 1.4,
            }}
          >
            Boundary: {boundary}
          </div>
        ) : null}
      </div>
    ),
    size,
  );
}
