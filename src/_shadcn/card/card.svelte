<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
import type { WithElementRef } from 'bits-ui';

import { cn } from 'shadcn/utils.js';

let {
  ref = $bindable(null),
  class: className,
  children,
  ...restProps
}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  class={cn('rounded-xl border bg-card text-card-foreground shadow', className)}
  {...restProps}
>
  {@render children?.()}
</div>
