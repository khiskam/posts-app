import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Field, FieldGroup, FieldSet } from "../../components/ui/field"
import { useRef } from "react"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../../components/ui/pagination"

export const PostsList = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(inputRef.current?.value)
  }

  return (
    <div className="px-16 pt-16">
      <h2 className="font-semibold text-xl mb-6">
        Карточки
      </h2>
      <FieldSet>
        <FieldGroup>
          <form className="flex" onSubmit={handleForm}>
            <Field>
              <Input placeholder="Поиск" ref={inputRef} />
            </Field>
            <Button className="ml-3">
              Искать
            </Button>
          </form>
        </FieldGroup>
      </FieldSet>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Название карточки</CardTitle>
            <CardDescription>
              А тут описание задачи
            </CardDescription>
            <CardAction>
              <Button variant="link">
                Перейти к карточке
              </Button>
            </CardAction>
          </CardHeader>
          <CardFooter>
            <Badge>Badge</Badge>
            <Badge variant="secondary">Badge</Badge>
            <Badge variant="outline">29.10.2025</Badge>
          </CardFooter>
        </Card>
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" size={12} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" size={12}>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" size={12} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}