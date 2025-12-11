import { getRouteApi } from '@tanstack/react-router'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { FormError } from '../../components/layout/form-error';
import { Textarea } from '../../components/ui/textarea';

const route = getRouteApi('/posts_/$postId')

export const Post = () => {
  const { postId } = route.useParams();

  console.log(postId);

  const form = useForm();
  const { handleSubmit, control } = form;

  const handleForm = () => {

  }

  return (
    <div className="grid px-16 pt-16 gap-4">
      <div className='grid gap-4'>
        <h2 className="font-semibold text-xl">
          Карточка
        </h2>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Название карточки</CardTitle>
              <CardDescription>
                А тут описание задачи
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Badge>Badge</Badge>
              <Badge variant="secondary">Badge</Badge>
              <Badge variant="outline">29.10.2025</Badge>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className='grid gap-4'>
        <h2 className="font-semibold text-xl">
          Редактирование
        </h2>
        <Form {...form}>
          <form className="grid gap-3 justify-items-start" onSubmit={handleSubmit(handleForm)}>
            <FormField
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem className='w-full'>
                  <FormLabel>
                    Название
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Название" {...field} />
                  </FormControl>
                  <FormError error={fieldState.error} />
                </FormItem>
              )} />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem className='w-full'>
                  <FormLabel>
                    Описание
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Описание" {...field} />
                  </FormControl>
                  <FormError error={fieldState.error} />
                </FormItem>
              )} />
            <Button className="mt-3">
              Сохранить
            </Button>
          </form>
        </Form>
      </div>

      <div className='grid gap-4'>
        <h2 className="font-semibold text-xl">
          Удаление
        </h2>
        <form>
          <Button variant="destructive">
            Удалить
          </Button>
        </form>
      </div>
    </div>
  )
}