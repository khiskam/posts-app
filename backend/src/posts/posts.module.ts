import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [DatabaseModule],
})
export class PostsModule {}
