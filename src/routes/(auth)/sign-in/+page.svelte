<script lang="ts">
import { Button } from 'shadcn/button';
import { Input } from 'shadcn/input';
import { Label } from 'shadcn/label';
import { Separator } from 'shadcn/separator';

import { Container, FormFieldError, PasswordInput } from '#components';
import { formFieldErrors, formSchema } from '#lib/form-schemas/signup';
import { fieldIsValid } from '#lib/form-schemas/utils';

let email = $state('');
let password = $state('');

let submitting = false;

let emailIsValid = $derived(fieldIsValid(formSchema, 'email', email));
let passwordIsValid = $derived(fieldIsValid(formSchema, 'password', password));
let formIsValid = $derived(emailIsValid && passwordIsValid);
let canSubmit = $derived(formIsValid && !submitting);
</script>

<svelte:head>
  <title>Sign in | Gyen's Invoicer</title>
</svelte:head>

<Container>
  <form method="post" class="">
    <div class="header">
      <h1 class="mb-2 text-3xl font-bold">Sign in</h1>
      <p class="text-gray-500">Sign in to your account.</p>
    </div>

    <Button variant="outline" class="w-full">
      <img src="/google-icon.svg" alt="Google icon" class="mr-2 h-[18px] w-[18px]" />
      <span>Sign in with Google</span>
    </Button>

    <Separator class="mb-2 mt-6" />

    <div class="form-group mb-3">
      <Label for="email">Email</Label>
      <Input type="email" id="email" name="email" bind:value={email} />
      <FormFieldError message={formFieldErrors.email} invalid={emailIsValid === false} />
    </div>

    <div class="form-group">
      <Label for="password">Password</Label>
      <PasswordInput id="password" name="password" bind:value={password} />
      <FormFieldError message={formFieldErrors.password} invalid={passwordIsValid === false} />
    </div>

    <Button type="submit" class="mt-4 w-full" disabled={!canSubmit} loading={submitting}>
      Sign in
    </Button>

    <div class="mt-8">
      <p class="text-center text-gray-500">
        Don't have an account? <a data-gi href="/sign-up">Create one</a>
      </p>
    </div>
  </form>
</Container>

<style lang="postcss">
form {
  @apply max-w-[100vw];
}
</style>
