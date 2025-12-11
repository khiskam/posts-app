import { ApiProperty } from '@nestjs/swagger';

export class Post {
  @ApiProperty()
  readonly id: string;
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly userId: string;
  @ApiProperty()
  readonly createdAt: Date;
  @ApiProperty()
  readonly updatedAt: Date;
}
