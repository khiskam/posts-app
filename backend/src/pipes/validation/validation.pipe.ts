import { PipeTransform, BadRequestException } from '@nestjs/common';
import * as zod from 'zod';

export class ValidationPipe<T extends zod.ZodSchema> implements PipeTransform {
  constructor(private schema: T) {}

  transform(value: T): zod.infer<T> {
    const result: zod.ZodSafeParseResult<zod.output<T>> =
      this.schema.safeParse(value);

    if (result.success) {
      return result.data;
    }

    throw new BadRequestException(zod.flattenError(result.error));
  }
}

export class UUIDValidationPipe implements PipeTransform {
  private schema = zod.uuid();
  constructor() {}

  transform(value: string): string {
    const result: zod.ZodSafeParseResult<string> = this.schema.safeParse(value);

    if (result.success) {
      return result.data;
    }

    throw new BadRequestException(zod.flattenError(result.error));
  }
}
