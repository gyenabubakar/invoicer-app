<script lang="ts">
  import { cn } from '#components/shadcn/utils';

  export let className = '';
</script>

<img
  src="/logo-dark.svg"
  alt="Gyen's Invoicer logo"
  class={cn('w-10 h-10 mx-auto mb-4', className)}
/>
