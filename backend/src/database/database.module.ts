import { Module } from '@nestjs/common';
import { ApiConfigService } from '../api-config/api-config.service';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { schema } from './schema';
import { DATABASE_CONNECTION } from './database.constant';

@Module({
  providers: [
    ApiConfigService,
    {
      provide: DATABASE_CONNECTION,
      useFactory: (configService: ApiConfigService) => {
        const connectionString = configService.getPostgresConnectionString();

        const pool = new Pool({
          connectionString,
          ssl: false,
        });

        return drizzle(pool, { schema });
      },
      inject: [ApiConfigService],
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
