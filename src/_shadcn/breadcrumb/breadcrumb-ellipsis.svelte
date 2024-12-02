<script lang="ts">
  import DotsHorizontal from 'svelte-radix/DotsHorizontal.svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { WithElementRef, WithoutChildren } from 'bits-ui';

  import { cn } from 'shadcn/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLAttributes<HTMLSpanElement>>> = $props();
</script>

<span
  bind:this={ref}
  role="presentation"
  aria-hidden="true"
  class={cn('flex size-9 items-center justify-center', className)}
  {...restProps}
>
  <DotsHorizontal class="size-4 outline-none" tabindex={-1} />
  <span class="sr-only">More</span>
</span>
