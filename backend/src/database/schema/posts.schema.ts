import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { user } from './auth';

export const posts = pgTable('posts', {
  id: uuid()
    .primaryKey()
    .default(sql`uuidv4()`),
  title: text().notNull(),
  description: text().notNull(),
  userId: text()
    .notNull()
    .references(() => user.id),
  createdAt: timestamp()
    .default(sql`now()`)
    .notNull(),
  updatedAt: timestamp()
    .default(sql`now()`)
    .notNull(),
});
