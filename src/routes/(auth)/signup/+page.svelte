<script lang="ts">
  import { Button } from 'shadcn-ui/button';
  import { Label } from 'shadcn-ui/label';
  import { Input } from 'shadcn-ui/input';
  import { Divider, FormFieldError, PasswordInput } from '#components';
  import { fieldIsValid } from '#lib/form-schemas/utils';
  import { formSchema, formFieldErrors as fieldErrors } from '#lib/form-schemas/signup';

  let firstName = '';
  let lastName = '';
  let email = '';
  let password = '';

  let submitting = false;

  $: firstNameIsValid = fieldIsValid(formSchema, 'firstName', firstName);
  $: lastNameIsValid = fieldIsValid(formSchema, 'lastName', lastName);
  $: emailIsValid = fieldIsValid(formSchema, 'email', email);
  $: passwordIsValid = fieldIsValid(formSchema, 'password', password);
  $: formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid;
  $: canSubmit = formIsValid && !submitting;
</script>

<svelte:head>
  <title>Sign up | Gyen's Invoicer</title>
</svelte:head>

<form method="post" class="">
  <div class="header">
    <h1 class="text-3xl font-bold mb-2">Sign up</h1>
    <p class="text-gray-500">Create an account to start invoicing your clients.</p>
  </div>

  <Button variant="outline" class="w-full">
    <img src="/google-icon.svg" alt="Google icon" class="w-[18px] h-[18px] mr-2" />
    <span>Sign up with Google</span>
  </Button>

  <Divider />

  <div class="grid grid-cols-2 gap-4 mb-3">
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

  <div class="form-group">
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
    class="w-full mt-4"
    disabled={!canSubmit}
    loading={submitting}
    aria-label={submitting ? 'Creating account...' : 'Sign up'}
  >
    Sign up
  </Button>

  <div class="mt-8">
    <p class="text-center text-gray-500">
      Already have an account? <a href="/">Sign in</a>
    </p>
  </div>
</form>

<style lang="postcss">
  .divider {
    @apply relative mb-4 mt-6 flex items-center;

    &::before {
      @apply inline-block h-[1px] w-full bg-gray-200;
      content: '';
    }

    span {
      @apply absolute left-[48%] bg-white px-1.5 text-sm uppercase text-gray-500;
    }
  }
</style>
