import assert from 'node:assert/strict';
import { test } from 'node:test';
import { serializeJsonLd } from '../src/lib/structured-data.ts';

test('article text cannot terminate a JSON-LD script element', () => {
  const data = { headline: '</script><script>alert("test")</script>', answer: '3 < 5' };
  const serialized = serializeJsonLd(data);
  assert.equal(serialized.includes('<'), false);
  assert.deepEqual(JSON.parse(serialized), data);
});
