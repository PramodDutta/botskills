import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

// The plain tagged-template client, no array mode and no full results, which is
// exactly what `neon(url)` returns. Named explicitly rather than via ReturnType,
// which widens to the generic form and loses `rows.length` and `rows[0]`.
export type Sql = NeonQueryFunction<false, false>;

// Every database read and write in the app comes through here. With no
// DATABASE_URL it returns null, so callers degrade to "no data" instead of
// throwing, which is what lets `next build` and local dev run without a secret.
// Building the client is free; nothing connects until the first query runs.
export function getSql(): Sql | null {
  const url = process.env.DATABASE_URL;
  return url ? neon(url) : null;
}
