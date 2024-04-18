<!--suppress JSUnusedGlobalSymbols, CssUnusedSymbol, ReservedWordAsName -->
<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn } from '#components/shadcn/utils';

  type SizeType = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    class?: string;
    size?: SizeType;
  };

  let className: string | undefined = undefined;
  export { className as class };
  export let size: SizeType = 'xl';
</script>

<div
  class={cn('sv-container', className)}
  class:sm={size === 'sm'}
  class:md={size === 'md'}
  class:lg={size === 'lg'}
  class:xl={size === 'xl'}
  class:xxl={size === '2xl'}
>
  <slot />
</div>

<style lang="postcss">
  .sv-container {
    @apply mx-auto my-0 px-4;

    &.sm {
      max-width: 560px;
    }

    &.md {
      max-width: 768px;
    }

    &.lg {
      max-width: 1024px;
    }

    &.xl {
      max-width: 1280px;
    }

    &.xxl {
      max-width: 1536px;
    }
  }
</style>
