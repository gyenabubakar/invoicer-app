<script lang="ts">
  import { Badge } from 'shadcn-ui/badge';
  import { Card } from 'shadcn-ui/card';
  import { PhArrowUp, PhArrowDown } from '#components/icons';
  import { cn } from '#components/shadcn/utils';

  export let title: string;
  export let value: string;
  export let trend: 'up' | 'down';
  export let trendValue: number;
  export let icon: any;
</script>

<Card data-metric class="shadow-none">
  <div
    data-metric-icon
    class="p-1.5 rounded-full bg-gray-200 max-w-max text-primary-background mb-2"
  >
    <svelte:component this={icon} class="w-5 h-5" weight="fill" />
  </div>

  <p>{title}</p>
  <div data-metric-value>
    <span data-metric-value-actual>{value}</span>
    <Badge
      data-metric-trend
      variant="outline"
      class={cn('font-mono', trend === 'up' ? 'trend-up' : 'trend-down')}
    >
      <svelte:component this={trend === 'up' ? PhArrowUp : PhArrowDown} weight="bold" />
      {trendValue}%
    </Badge>
  </div>
</Card>

<style lang="postcss">
  :global([data-metric]) {
    @apply p-4;

    [data-metric-value] {
      @apply flex items-center justify-between;

      span[data-metric-value-actual] {
        @apply text-3xl font-semibold;
      }

      :global([data-metric-trend]) {
        @apply rounded-full text-sm;
      }

      :global([data-metric-trend].trend-down) {
        @apply border-red-300 bg-red-50 text-red-500;
      }

      :global([data-metric-trend].trend-up) {
        @apply border-green-300 bg-green-50 text-green-500;
      }
    }

    p {
      @apply text-muted-foreground;
    }
  }

  :global([data-metric]:nth-child(1)) {
    [data-metric-icon] {
      @apply bg-purple-100 text-purple-500;
    }
  }

  :global([data-metric]:nth-child(2)) {
    [data-metric-icon] {
      @apply bg-blue-100 text-blue-500;
    }
  }

  :global([data-metric]:nth-child(3)) {
    [data-metric-icon] {
      @apply bg-green-100 text-green-500;
    }
  }

  :global([data-metric]:nth-child(4)) {
    [data-metric-icon] {
      @apply bg-pink-100 text-pink-500;
    }
  }
</style>
