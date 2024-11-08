import { fail } from '@sveltejs/kit';

import { formSchema } from '#lib/form-schemas/signup';

export const actions = {
  async default({ request }) {
    const body = Object.fromEntries(await request.formData());
    const parsedBody = formSchema.safeParse(body);
    if (!parsedBody.success) {
      return fail(400, { validationErrors: parsedBody.error.errors });
    }

    console.log('result:', parsedBody.data);
  },
};
