<!--suppress ReservedWordAsName -->
<script lang="ts">
  import { cn } from '#shadcn/utils';

  let className = '';
  export { className as class };
  export let withText = false;
  export let href: string | undefined | null = '/';
  export let hideTextOnExtraSmall = false;

  console.log('AppLogo component loaded:', href);
</script>

<a data-logo {href} class="flex items-center no-underline" aria-label="Gyen's Invoicer logo">
  <img src="/logo.svg" alt="Gyen's Invoicer logo" class={cn('w-8', className)} aria-hidden="true" />
  {#if withText}
    <span
      class={cn('uppercase font-medium ml-2 text-invoicer-dark', {
        'hidden sm:inline-block': hideTextOnExtraSmall,
      })}
      aria-hidden="true"
    >
      Gyen's Invoicer
    </span>
  {/if}
</a>
