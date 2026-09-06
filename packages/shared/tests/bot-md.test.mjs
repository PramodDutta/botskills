import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { parseBotMd, serializeBotMd } from '../src/index.ts';

const catalog = new URL('../../../seed-bots/', import.meta.url);
const raw = readFileSync(new URL('agent-inbox/BOT.md', catalog), 'utf8');

test('LF and CRLF files produce the same bot', () => {
  assert.deepEqual(parseBotMd('fixture', raw.replaceAll('\n', '\r\n')), parseBotMd('fixture', raw));
});

for (const field of ['name', 'description', 'version', 'author', 'license', 'boundary']) {
  test(`an empty ${field} cannot consume the next field`, () => {
    for (const blank of ['', ' ', '\t']) {
      const source = raw.replace(new RegExp(`^${field}:.*$`, 'm'), `${field}:${blank}`);
      assert.throws(() => parseBotMd('fixture', source));
    }
  });
}

test('required arrays still reject unsupported block lists', () => {
  const source = raw.replace(/^integrations:.*$/m, 'integrations:\n  - agentmail');
  assert.throws(() => parseBotMd('fixture', source));
});

test('blank optional tags stay empty', () => {
  const source = raw.replace(/^tags:.*$/m, 'tags:\nextra: [not-a-tag]');
  assert.deepEqual(parseBotMd('fixture', source).tags, []);
});

test('a closing delimiter must occupy its own line', () => {
  assert.throws(() => parseBotMd('fixture', raw.replace('\n---\n', '\n---invalid\n')));
});

test('empty and attribution-only prompts are rejected', () => {
  const head = raw.slice(0, raw.indexOf('\n---\n') + '\n---\n'.length);
  for (const body of ['', ' \n\t', '## License and attribution\nMIT notice only']) {
    assert.throws(() => parseBotMd('fixture', head + body), /setup prompt is empty/);
  }
});

test('complete BOT.md serialization preserves optional metadata and attribution', () => {
  const bot = {
    ...parseBotMd('fixture', raw),
    shareUrl: 'https://x.ai/bot/example-test-fixture',
    attribution: '## License and attribution\n\nMIT notice for the test fixture.',
  };
  const serialized = serializeBotMd(bot);
  assert.deepEqual(parseBotMd(bot.slug, serialized), bot);
  assert.ok(serialized.includes(`shareUrl: ${bot.shareUrl}\n`));
  assert.ok(serialized.endsWith(`${bot.attribution}\n`));
  assert.ok(!bot.prompt.includes(bot.attribution));
});

test('every catalog bot parses and survives a complete markdown round trip', () => {
  const slugs = readdirSync(catalog, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  assert.ok(slugs.length > 100);
  for (const slug of slugs) {
    const bot = parseBotMd(slug, readFileSync(new URL(`${slug}/BOT.md`, catalog), 'utf8'));
    assert.deepEqual(parseBotMd(slug, serializeBotMd(bot)), bot, slug);
  }
});
