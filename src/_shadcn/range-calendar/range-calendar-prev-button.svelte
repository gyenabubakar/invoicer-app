<script lang="ts">
  import ChevronLeft from 'svelte-radix/ChevronLeft.svelte';
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';

  import { buttonVariants } from 'shadcn/button/index.js';
  import { cn } from 'shadcn/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: RangeCalendarPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
  <ChevronLeft class="size-4" />
{/snippet}

<RangeCalendarPrimitive.PrevButton
  bind:ref
  class={cn(
    buttonVariants({ variant: 'outline' }),
    'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
    className,
  )}
  {...restProps}
  children={children || Fallback}
/>
