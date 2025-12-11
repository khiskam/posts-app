import { FormMessage } from "../../ui/form"
import type { FormErrorProps } from "./type"

export const FormError = ({ error }: FormErrorProps) => {
  if (error) {
    return (
      <FormMessage>
        {error.message}
      </FormMessage>
    )
  }

  return null;
}