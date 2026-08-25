// Drizzle schema for P1 (telemetry-backed copies + DB-served catalog).
// P0 serves the file catalog; this schema ships now so the lazy-proxy pattern
// and the seed script are in place before any secret exists.
import { pgTable, text, timestamp, uuid, integer, jsonb, uniqueIndex } from 'drizzle-orm/pg-core';

export const bots = pgTable(
  'bots',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    version: text('version').notNull(),
    author: text('author').notNull(),
    license: text('license').notNull(),
    category: text('category').notNull(),
    integrations: jsonb('integrations').$type<string[]>().notNull(),
    runtimes: jsonb('runtimes').$type<string[]>().notNull(),
    boundary: text('boundary').notNull(),
    tags: jsonb('tags').$type<string[]>().notNull().default([]),
    prompt: text('prompt').notNull(),
    copyCount: integer('copy_count').notNull().default(0),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (t) => ({ slugIdx: uniqueIndex('bots_slug_idx').on(t.slug) }),
);

export const copyEvents = pgTable('copy_events', {
  id: uuid('id').defaultRandom().primaryKey(),
  botSlug: text('bot_slug').notNull(),
  source: text('source').notNull().default('web'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
