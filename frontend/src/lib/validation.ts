import * as zod from 'zod';

export const authSchema = zod.object({
  email: zod.email({error: "Введите email"}),
  password: zod.string()
  .min(1, {error: "Пароль обязателен"})
  .min(6, {error: "Минимальная длина пароля 1"})
})

export type AuthSchema = zod.infer<typeof authSchema>;
