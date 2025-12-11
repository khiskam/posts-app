import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { type EnvironmentVariables } from './env.validation';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  get appPort(): number {
    return this.configService.get('PORT') || 3000;
  }

  getPostgresConnectionString(): string {
    const user: string = this.configService.get('POSTGRES_USER') || '';
    const password: string = this.configService.get('POSTGRES_PASSWORD') || '';
    const dbName: string = this.configService.get('POSTGRES_DB') || '';
    const host: string = this.configService.get('POSTGRES_HOST') || '';
    const port: number = this.configService.get('POSTGRES_PORT') || 5432;

    return `postgresql://${user}:${password}@${host}:${port}/${dbName}`;
  }
}
