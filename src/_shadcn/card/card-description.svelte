<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
import type { WithElementRef } from 'bits-ui';

import { cn } from 'shadcn/utils.js';

let {
  ref = $bindable(null),
  class: className,
  children,
  ...restProps
}: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();
</script>

<p bind:this={ref} class={cn('text-sm text-muted-foreground', className)} {...restProps}>
  {@render children?.()}
</p>
