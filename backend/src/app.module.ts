import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from './api-config/env.validation';
import { ApiConfigService } from './api-config/api-config.service';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { DATABASE_CONNECTION } from './database/database.constant';
import { openAPI } from 'better-auth/plugins';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.APP_MODE}`,
      validate,
      isGlobal: true,
    }),
    AuthModule.forRootAsync({
      imports: [DatabaseModule],
      useFactory: (database: NodePgDatabase) => ({
        auth: betterAuth({
          database: drizzleAdapter(database, {
            provider: 'pg',
          }),
          emailAndPassword: {
            enabled: true,
          },
          basePath: '/auth',
          plugins: [openAPI({})],
        }),
      }),
      inject: [DATABASE_CONNECTION],
    }),
    PostsModule,
  ],
  controllers: [],
  providers: [ConfigService, ApiConfigService],
})
export class AppModule {}
