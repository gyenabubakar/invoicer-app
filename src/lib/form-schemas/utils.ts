import type { z } from 'zod';

export function fieldIsValid<T extends z.AnyZodObject>(
  schema: T,
  fieldKey: keyof z.infer<T>,
  value: unknown
) {
  const fieldOnlySchema = schema.pick({ [fieldKey]: true as true | undefined });
  const result = fieldOnlySchema.safeParse({ [fieldKey]: value });

  if (!value) return result.success || null;
  return result.success;
}
