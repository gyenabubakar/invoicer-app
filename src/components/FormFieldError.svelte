<!--suppress JSUnusedGlobalSymbols, ReservedWordAsName -->

<script lang="ts">
  import { cn } from '#shadcn/utils';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type $$Props = {
    class?: string;
    message: string | null | undefined;
    invalid: boolean;
  };

  let className: string | undefined = undefined;
  export { className as class };
  export let message: string | undefined | null;
  export let invalid: boolean;
</script>

{#if message && invalid}
  <p class={cn('text-red-500 text-sm mt-0.5', className)} aria-live="polite">
    {message}
  </p>
{/if}
