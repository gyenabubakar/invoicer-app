<script lang="ts">
  import type { ComponentProps } from 'svelte';

  import { Separator } from 'shadcn/separator/index.js';
  import { cn } from 'shadcn/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ComponentProps<typeof Separator> = $props();
</script>

<Separator
  bind:ref
  data-sidebar="separator"
  class={cn('mx-2 w-auto bg-sidebar-border', className)}
  {...restProps}
/>
