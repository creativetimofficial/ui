import { z } from "zod"

export const exampleFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
})

export type ExampleFormValues = z.infer<typeof exampleFormSchema>
