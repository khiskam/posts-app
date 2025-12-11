import { defineConfig } from 'drizzle-kit';

import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/database/schema',
  out: './drizzle',
  dbCredentials: {
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    port: Number(process.env.POSTGRES_PORT),
    host: process.env.POSTGRES_HOST || '',
    database: process.env.POSTGRES_DB || '',
    ssl: process.env.POSTGRES_SSL === 'true',
  },
  migrations: {
    prefix: 'timestamp',
    schema: 'public',
  },
});
