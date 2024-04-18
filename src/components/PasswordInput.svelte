<!--suppress ReservedWordAsName -->
<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { Eye, EyeSlash } from 'phosphor-svelte';
  import { Input } from 'shadcn-ui/input';
  import type { InputEvents } from 'shadcn-ui/input';
  import { cn } from '#components/shadcn/utils';

  type $$Props = HTMLInputAttributes & {
    class?: string;
    value?: string;
    canTogglePasswordVisibility?: boolean;
  };
  type $$Events = InputEvents;

  let className: $$Props['class'] = undefined;
  export { className as class };
  export let value: $$Props['value'] = undefined;

  let inputElement: HTMLInputElement | undefined;

  let showingPassword = false;

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
    class="absolute top-1/2 right-3 transform -translate-y-1/2"
    on:click={togglePasswordVisibility}
  >
    <svelte:component this={showingPassword ? EyeSlash : Eye} class="w-5 h-5" />
  </button>

  <Input
    type="password"
    class={cn('pr-10', className)}
    bind:value
    bind:element={inputElement}
    {...$$restProps}
  />
</div>

<style>
  :global(input[type='password']),
  :global(input[type='password']::placeholder) {
    font-family: sans-serif;
  }
</style>
