import type { TypedSchema } from '@vee-validate/zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm as useVeeForm } from 'vee-validate'
import type { z } from 'zod'

export type UseFormOptions<T extends TypedSchema> = {
  validationSchema?: T
  initialValues?: z.infer<T>
}

export function useForm<T extends TypedSchema>(options: UseFormOptions<T> = {}) {
  const validationSchema = options.validationSchema
    ? toTypedSchema(options.validationSchema)
    : undefined

  return useVeeForm({
    validationSchema,
    initialValues: options.initialValues,
  })
}
