<script lang="ts">
  import ChevronUp from 'svelte-radix/ChevronUp.svelte';
  import { Select as SelectPrimitive } from 'bits-ui';
  import type { WithoutChildrenOrChild } from 'bits-ui';

  import { cn } from 'shadcn/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<SelectPrimitive.ScrollDownButtonProps> = $props();
</script>

<SelectPrimitive.ScrollUpButton
  bind:ref
  class={cn('flex cursor-default items-center justify-center py-1', className)}
  {...restProps}
>
  <ChevronUp class="size-4" />
</SelectPrimitive.ScrollUpButton>
