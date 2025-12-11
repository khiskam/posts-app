import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DATABASE_CONNECTION } from '../database/database.constant';
import { Schema } from '../database/schema';
import { eq } from 'drizzle-orm';
import { posts as postsTable } from '../database/schema/posts.schema';
import { type Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: NodePgDatabase<Schema>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post | undefined> {
    try {
      const post = await this.database
        .insert(postsTable)
        .values({ ...createPostDto })
        .returning();

      return post[0];
    } catch {
      return undefined;
    }
  }

  findAll(): Promise<Post[]> {
    return this.database.select().from(postsTable);
  }

  async findOne(id: string): Promise<Post> {
    const post = await this.database
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id));

    return post[0];
  }

  async update(
    id: string,
    updatePostDto: UpdatePostDto,
  ): Promise<Post | undefined> {
    try {
      const post = await this.database
        .update(postsTable)
        .set({ ...updatePostDto, updatedAt: new Date() })
        .where(eq(postsTable.id, id))
        .returning();

      return post[0];
    } catch {
      return undefined;
    }
  }

  async remove(id: string): Promise<void> {
    await this.database.delete(postsTable).where(eq(postsTable.id, id));
  }
}
