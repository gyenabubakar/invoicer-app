<!--suppress ReservedWordAsName -->
<script lang="ts">
import { cn } from 'shadcn/utils';

type Props = {
  class?: string;
  withText?: boolean;
  href?: string | null;
  hideTextOnExtraSmall?: boolean;
};

let {
  class: className,
  withText = false,
  href = '/',
  hideTextOnExtraSmall = false,
}: Props = $props();
</script>

<a data-logo {href} class="flex items-center no-underline" aria-label="Gyen's Invoicer logo">
  <img src="/logo.svg" alt="Gyen's Invoicer logo" class={cn('w-8', className)} aria-hidden="true" />
  {#if withText}
    <span
      class={cn('ml-2 font-medium uppercase text-invoicer-dark', {
        'hidden sm:inline-block': hideTextOnExtraSmall,
      })}
      aria-hidden="true"
    >
      Gyen's Invoicer
    </span>
  {/if}
</a>
