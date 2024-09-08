<!--suppress ReservedWordAsName -->
<script lang="ts">
  import { Button as ButtonPrimitive } from 'bits-ui';
  import { Stretch } from 'svelte-loading-spinners';
  import { cn } from '#shadcn/utils';
  import { buttonVariants, type Props, type Events } from '.';

  type $$Props = Props & {
    loading?: boolean;
  };
  type $$Events = Events;

  let className: $$Props['class'] = undefined;
  export { className as class };
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
  export let builders: $$Props['builders'] = [];
  export let loading: boolean | undefined = undefined;
</script>

<ButtonPrimitive.Root
  {builders}
  class={cn(buttonVariants({ variant, size, className }))}
  type="button"
  aria-live={loading !== undefined ? 'polite' : undefined}
  {...$$restProps}
  on:click
  on:keydown
>
  {#if !loading}
    <slot />
  {:else}
    <Stretch color="#fff" size="24" unit="px" />
  {/if}
</ButtonPrimitive.Root>
