<!--suppress ReservedWordAsName -->
<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { WithElementRef } from 'bits-ui';

  import { Input } from 'shadcn/input';
  import { cn } from 'shadcn/utils';

  import { Ph } from '#components/icons';

  let {
    class: className,
    value = $bindable(),
    ...restProps
  }: WithElementRef<HTMLInputAttributes> = $props();

  let inputElement: HTMLInputElement | null = $state(null);
  let showingPassword = $state(false);

  let EyeComponent = $derived(showingPassword ? Ph.EyeSlash : Ph.Eye);

  function togglePasswordVisibility() {
    const currentType = inputElement!.getAttribute('type') as HTMLInputAttributes['type'];
    const newType = currentType === 'password' ? 'text' : 'password';

    inputElement!.setAttribute('type', newType);
    showingPassword = newType === 'text';
  }
</script>

<div data-input-wrapper class="relative">
  <button
    type="button"
    aria-label={showingPassword ? 'Hide password' : 'Show password'}
    class="absolute right-3 top-1/2 -translate-y-1/2 transform"
    onclick={togglePasswordVisibility}
  >
    <EyeComponent class="h-5 w-5" />
  </button>

  <Input
    type="password"
    class={cn('pr-10', className)}
    bind:value
    bind:ref={inputElement}
    {...restProps}
  />
</div>

<style>
  :global(input[type='password']),
  :global(input[type='password']::placeholder) {
    font-family: sans-serif;
  }
</style>
