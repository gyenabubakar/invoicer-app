<script lang="ts">
  import { cn } from 'shadcn/utils';

  type Props = {
    class?: string;
    message: string | null | undefined;
    invalid: boolean;
  };

  let { message, invalid, class: className }: Props = $props();
</script>

{#if message && invalid}
  <p class={cn('mt-0.5 text-sm text-red-500', className)} aria-live="polite">
    {message}
  </p>
{/if}
