// Lazy DB proxy, same pattern as qaskills: the connection is created on first
// property access, so `next build` needs no DATABASE_URL. Preserve this pattern
// for every external client added later.
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

type Db = ReturnType<typeof drizzle<typeof schema>>;

let real: Db | null = null;

function connect(): Db {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return drizzle(neon(url), { schema });
}

export const db: Db = new Proxy({} as Db, {
  get(_t, prop) {
    real ??= connect();
    return (real as unknown as Record<PropertyKey, unknown>)[prop];
  },
});

export { schema };
