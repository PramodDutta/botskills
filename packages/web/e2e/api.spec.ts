import { test, expect } from '@playwright/test';

// The machine surface: what agents and any CLI-shaped consumer read. These
// routes share one database helper and one request helper, so the contract of
// each is pinned here rather than trusted to survive the next refactor.
test.describe('catalog api', () => {
  test('/api/bots lists the whole catalogue with copy counts and links', async ({ request }) => {
    const res = await request.get('/api/bots');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.total).toBeGreaterThan(100);
    expect(body.bots).toHaveLength(body.total);
    const first = body.bots[0];
    expect(first.slug).toBeTruthy();
    expect(first.content_url).toBe(`https://botskills.sh/api/bots/${first.slug}/content`);
    expect(first.html_url).toBe(`https://botskills.sh/bots/${first.slug}`);
    expect(typeof first.copies).toBe('number');
    // The catalogue index is not a copy of the work.
    expect(first).not.toHaveProperty('prompt');
    expect(first).not.toHaveProperty('attribution');
  });

  test('/api/bots filters by category and runtime', async ({ request }) => {
    const all = (await (await request.get('/api/bots')).json()).bots as Array<{
      category: string;
      runtimes: string[];
    }>;
    const { category, runtimes } = all[0];
    const runtime = runtimes[0];
    const res = await request.get(`/api/bots?category=${category}&runtime=${runtime}`);
    const body = await res.json();
    expect(body.total).toBeGreaterThan(0);
    for (const b of body.bots) {
      expect(b.category).toBe(category);
      expect(b.runtimes).toContain(runtime);
    }
  });

  test('/api/bots/<slug>/content serves the full BOT.md as markdown', async ({ request }) => {
    const res = await request.get('/api/bots/agent-inbox/content');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('text/markdown');
    const text = await res.text();
    expect(text.startsWith('---\nname: ')).toBe(true);
    expect(text).toContain('\nboundary: ');
    expect(text).toMatch(/^You are /m);
  });

  test('unknown bot content is a 404', async ({ request }) => {
    const res = await request.get('/api/bots/definitely-not-a-bot/content');
    expect(res.status()).toBe(404);
  });
});

test.describe('telemetry api', () => {
  test('/api/live returns a number, zero without a database', async ({ request }) => {
    const res = await request.get('/api/live');
    expect(res.status()).toBe(200);
    expect(typeof (await res.json()).online).toBe('number');
  });

  test('vote: unknown slug is a 404, known slug is accepted', async ({ request }) => {
    const bad = await request.post('/api/telemetry/vote', { data: { slug: 'nope-not-real' } });
    expect(bad.status()).toBe(404);
    const good = await request.post('/api/telemetry/vote', { data: { slug: 'agent-inbox' } });
    expect(good.status()).toBe(200);
    expect((await good.json()).ok).toBe(true);
  });

  test('copy: unknown slug is a 404, known slug is accepted', async ({ request }) => {
    const bad = await request.post('/api/telemetry/copy', { data: { slug: 'nope-not-real' } });
    expect(bad.status()).toBe(404);
    const good = await request.post('/api/telemetry/copy', { data: { slug: 'agent-inbox' } });
    expect(good.status()).toBe(200);
  });

  test('visit beacon always accepts', async ({ request }) => {
    const res = await request.post('/api/telemetry/visit', { data: { path: '/e2e' } });
    expect(res.status()).toBe(200);
  });

  test('a missing body is a 400 where one is required', async ({ request }) => {
    // No data at all: request.json() throws on an empty body. A string body is
    // JSON-encoded by Playwright, which reads as a valid body with no slug.
    const res = await request.post('/api/telemetry/vote');
    expect(res.status()).toBe(400);
  });
});
