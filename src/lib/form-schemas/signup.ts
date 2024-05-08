import { z } from 'zod';

const NAME_REGEX = /^\s*([a-zA-Z]+(?:[\s-][a-zA-Z]+)*){2,255}\s*$/;

export const formSchema = z.object({
  firstName: z.string().min(2).trim().regex(NAME_REGEX),
  lastName: z.string().min(2).trim().regex(NAME_REGEX),
  email: z.string().email().trim(),
  password: z.string().min(8),
});

export type FormSchemaZodType = z.infer<typeof formSchema>;

export const formFieldErrors: Record<keyof FormSchemaZodType, string> = {
  firstName: 'Must be at least 2 letters and a valid human name.',
  lastName: 'Must be at least 2 letters and a valid human name.',
  email: 'Email is invalid.',
  password: 'Must be at least 8 characters.',
};
