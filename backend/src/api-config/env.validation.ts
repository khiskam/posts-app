import * as zod from 'zod';

export const environmentVariablesSchema = zod.object({
  PORT: zod.coerce.number(),
  POSTGRES_USER: zod.string().min(1),
  POSTGRES_PASSWORD: zod.string().min(1),
  POSTGRES_DB: zod.string().min(1),
  POSTGRES_HOST: zod.string().min(1),
  POSTGRES_PORT: zod.string().min(1),
});

export type EnvironmentVariables = zod.infer<typeof environmentVariablesSchema>;

export function validate(
  config: Record<string, unknown>,
): EnvironmentVariables {
  return environmentVariablesSchema.parse(config);
}
