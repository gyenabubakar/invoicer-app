<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';

import { cn } from 'shadcn/utils';

type SizeType = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type Props = HTMLAttributes<HTMLDivElement> & {
  class?: string;
  size?: SizeType;
};

let { class: className, size = 'xl', children, ...restProps }: Props = $props();
</script>

<div
  class={cn('ig-container', className)}
  class:sm={size === 'sm'}
  class:md={size === 'md'}
  class:lg={size === 'lg'}
  class:xl={size === 'xl'}
  class:xxl={size === '2xl'}
  {...restProps}
>
  {@render children?.()}
</div>

<style lang="postcss">
.ig-container {
  @apply mx-auto w-full px-4;

  &.sm {
    max-width: 560px;
  }

  &.md {
    max-width: 768px;
  }

  &.lg {
    max-width: 1024px;
  }

  &.xl {
    max-width: 1280px;
  }

  &.xxl {
    max-width: 1536px;
  }
}
</style>
