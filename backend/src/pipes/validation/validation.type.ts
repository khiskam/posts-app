import { ApiProperty } from '@nestjs/swagger';

export class ValidationErrorDto {
  @ApiProperty({
    description: 'Form-level errors',
    type: [String],
    example: ['Invalid UUID'],
  })
  formErrors: string[];

  @ApiProperty({
    description: 'Field-level errors',
    type: 'object',
    additionalProperties: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    example: {},
  })
  fieldErrors: Record<string, string[]>;
}
