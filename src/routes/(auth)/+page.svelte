<script lang="ts">
  import { Button } from 'shadcn-ui/button';
  import { Label } from 'shadcn-ui/label';
  import { Input } from 'shadcn-ui/input';
  import { Container, FormFieldError, PasswordInput, Divider } from '#components';
  import { fieldIsValid } from '#lib/form-schemas/utils';
  import { formSchema, formFieldErrors } from '#lib/form-schemas/signup';

  let email = '';
  let password = '';

  let submitting = false;

  $: emailIsValid = fieldIsValid(formSchema, 'email', email);
  $: passwordIsValid = fieldIsValid(formSchema, 'password', password);
  $: formIsValid = emailIsValid && passwordIsValid;
  $: canSubmit = formIsValid && !submitting;
</script>

<svelte:head>
  <title>Sign in | Gyen's Invoicer</title>
</svelte:head>

<Container>
  <form method="post" class="">
    <div class="header">
      <h1 class="text-3xl font-bold mb-2">Sign in</h1>
      <p class="text-gray-500">Sign in to your account.</p>
    </div>

    <Button variant="outline" class="w-full">
      <img src="/google-icon.svg" alt="Google icon" class="w-[18px] h-[18px] mr-2" />
      <span>Sign in with Google</span>
    </Button>

    <Divider />

    <div class="form-group">
      <Label for="email">Email</Label>
      <Input type="email" id="email" name="email" bind:value={email} />
      <FormFieldError message={formFieldErrors.email} invalid={emailIsValid === false} />
    </div>

    <div class="form-group">
      <Label for="password">Password</Label>
      <PasswordInput id="password" name="password" bind:value={password} />
      <FormFieldError message={formFieldErrors.password} invalid={passwordIsValid === false} />
    </div>

    <Button type="submit" class="w-full mt-4" disabled={!canSubmit} loading={submitting}>
      Sign in
    </Button>

    <div class="mt-8">
      <p class="text-center text-gray-500">
        Don't have an account? <a href="/signup">Create one</a>
      </p>
    </div>
  </form>
</Container>

<style lang="postcss">
  form {
    @apply max-w-[100vw];
  }
</style>
