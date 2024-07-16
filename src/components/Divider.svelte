<script lang="ts">
  import { cn } from '#components/shadcn/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    text?: string;
    class?: string;
  };

  let className = '';
  export { className as class };
  export let text: string = 'or';
</script>

<div class={cn('divider relative mb-4 mt-6 flex items-center h-5', className)} {...$$restProps}>
  <span class="bg-white px-1.5 text-sm uppercase text-gray-500 z-[2] mx-auto">{text}</span>
</div>

<style lang="postcss">
  .divider {
    &::before {
      @apply absolute inline-block h-[1px] w-full bg-gray-200;
      content: '';
    }
  }
</style>
