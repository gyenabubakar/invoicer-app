<!--suppress JSUnusedGlobalSymbols, ReservedWordAsName -->

<script lang="ts">
  import { cn } from '#components/shadcn/utils';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type $$Props = {
    class?: string;
    message: string | null | undefined;
  };

  let className: string | undefined = undefined;
  export { className as class };
  export let message: string | undefined | null;
</script>

{#if message}
  <p class={cn('text-red-500 text-sm mt-0.5', className)} aria-live="polite">{message}</p>
{/if}
