<script lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

import { buttonVariants } from 'shadcn/button/index.js';
import { cn } from 'shadcn/utils.js';

let {
  class: className,
  ref = $bindable(null),
  ...restProps
}: AlertDialogPrimitive.CancelProps = $props();
</script>

<AlertDialogPrimitive.Cancel
  bind:ref
  class={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
  {...restProps}
/>
