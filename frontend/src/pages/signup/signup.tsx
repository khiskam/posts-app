import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { FormError } from "../../components/layout/form-error"
import { authSchema, type AuthSchema } from "../../lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"

export const Signup = () => {
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: '', password: '' },
  });

  const { handleSubmit, control } = form;

  const handleForm = (data: AuthSchema) => {
    console.log(data);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border rounded-lg p-6 w-96">
        <h2 className="font-semibold text-xl mb-6">
          Регистрация
        </h2>
        <Form {...form}>
          <form className="grid gap-3" onSubmit={handleSubmit(handleForm)}>
            <FormField
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormError error={fieldState.error} />
                </FormItem>
              )} />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>
                    Пароль
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Пароль" {...field} type="password" />
                  </FormControl>
                  <FormError error={fieldState.error} />
                </FormItem>
              )} />
            <Button className="mt-3">
              Зарегистироваться
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}