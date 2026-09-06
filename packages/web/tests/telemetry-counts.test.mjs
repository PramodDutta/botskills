import assert from 'node:assert/strict';
import test from 'node:test';
import { getTelemetryCounts } from '../src/lib/telemetry-counts.ts';

const copyRows = [{ bot_slug: 'agent-inbox', total: 12, last7d: 3 }];
const voteRows = [{ bot_slug: 'agent-inbox', votes: 4 }];

function database({ copies = copyRows, votes = voteRows } = {}) {
  return async (strings) => {
    const result = strings.join('').includes('FROM copy_events') ? copies : votes;
    if (result instanceof Error) throw result;
    return result;
  };
}

test('copy totals, recent copies and votes are returned independently', async () => {
  const counts = await getTelemetryCounts(database());
  assert.equal(counts.total.get('agent-inbox'), 12);
  assert.equal(counts.last7d.get('agent-inbox'), 3);
  assert.equal(counts.votes.get('agent-inbox'), 4);
});

test('a failed vote table does not discard successful copy counts', async () => {
  const counts = await getTelemetryCounts(database({ votes: new Error('vote table unavailable') }));
  assert.equal(counts.total.get('agent-inbox'), 12);
  assert.equal(counts.last7d.get('agent-inbox'), 3);
  assert.equal(counts.votes.size, 0);
});

test('a failed copy table does not discard successful vote counts', async () => {
  const counts = await getTelemetryCounts(
    database({ copies: new Error('copy table unavailable') }),
  );
  assert.equal(counts.total.size, 0);
  assert.equal(counts.last7d.size, 0);
  assert.equal(counts.votes.get('agent-inbox'), 4);
});

test('no database or a total outage produces no fabricated counts', async () => {
  for (const sql of [
    null,
    database({ copies: new Error('offline'), votes: new Error('offline') }),
  ]) {
    const counts = await getTelemetryCounts(sql);
    assert.equal(counts.total.size, 0);
    assert.equal(counts.last7d.size, 0);
    assert.equal(counts.votes.size, 0);
  }
});
