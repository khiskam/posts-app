import * as zod from 'zod';
import { ApiProperty } from '@nestjs/swagger';

export const createPostSchema = zod.object({
  title: zod.string().min(1),
  description: zod.string().min(1),
  userId: zod.uuid(),
});

export class CreatePostDto implements zod.infer<typeof createPostSchema> {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly userId: string;
}
