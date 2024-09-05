<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn } from '#components/shadcn/utils.js';

  type $$Props = CalendarPrimitive.GridHeadProps;

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<CalendarPrimitive.GridHead class={cn(className)} {...$$restProps}>
  <slot />
</CalendarPrimitive.GridHead>
