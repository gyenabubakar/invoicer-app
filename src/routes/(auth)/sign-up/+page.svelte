<script lang="ts">
import { Button } from 'shadcn/button';
import { Input } from 'shadcn/input';
import { Label } from 'shadcn/label';
import { Separator } from 'shadcn/separator';

import { FormFieldError, PasswordInput } from '#components';
import { formFieldErrors as fieldErrors, formSchema } from '#lib/form-schemas/signup';
import { fieldIsValid } from '#lib/form-schemas/utils';

let firstName = $state('');
let lastName = $state('');
let email = $state('');
let password = $state('');

let submitting = false;

let firstNameIsValid = $derived(fieldIsValid(formSchema, 'firstName', firstName));
let lastNameIsValid = $derived(fieldIsValid(formSchema, 'lastName', lastName));
let emailIsValid = $derived(fieldIsValid(formSchema, 'email', email));
let passwordIsValid = $derived(fieldIsValid(formSchema, 'password', password));
let formIsValid = $derived(firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid);
let canSubmit = $derived(formIsValid && !submitting);
</script>

<svelte:head>
  <title>Sign up | Gyen's Invoicer</title>
</svelte:head>

<form method="post" class="">
  <div class="header">
    <h1 class="mb-2 text-3xl font-bold">Sign up</h1>
    <p class="text-gray-500">Create an account to start invoicing your clients.</p>
  </div>

  <Button variant="outline" class="w-full">
    <img src="/google-icon.svg" alt="Google icon" class="mr-2 h-[18px] w-[18px]" />
    <span>Sign up with Google</span>
  </Button>

  <Separator class="mb-2 mt-6" />

  <div class="mb-3 grid grid-cols-2 gap-4">
    <div class="form-group no-mb">
      <Label for="firstName">First name</Label>
      <Input type="text" id="firstName" name="firstName" bind:value={firstName} />
      <FormFieldError message={fieldErrors.firstName} invalid={firstNameIsValid === false} />
    </div>

    <div class="form-group no-mb">
      <Label for="lastName">Last name</Label>
      <Input type="text" id="lastName" name="lastName" bind:value={lastName} />
      <FormFieldError message={fieldErrors.lastName} invalid={lastNameIsValid === false} />
    </div>
  </div>

  <div class="form-group mb-3">
    <Label for="email">Email</Label>
    <Input type="email" id="email" name="email" bind:value={email} />
    <FormFieldError message={fieldErrors.email} invalid={emailIsValid === false} />
  </div>

  <div class="form-group">
    <Label for="password">Password</Label>
    <PasswordInput id="password" name="password" bind:value={password} />
    <FormFieldError message={fieldErrors.password} invalid={passwordIsValid === false} />
  </div>

  <Button
    type="submit"
    class="mt-4 w-full"
    disabled={!canSubmit}
    loading={submitting}
    aria-label={submitting ? 'Signing up...' : 'Sign up'}
  >
    Sign up
  </Button>

  <div class="mt-8">
    <p class="text-center text-gray-500">
      Already have an account? <a data-gi href="/sign-in">Sign in</a>
    </p>
  </div>
</form>

<style lang="postcss">
</style>
