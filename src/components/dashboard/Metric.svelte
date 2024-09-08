<!--suppress CssUnusedSymbol -->
<script lang="ts">
  import { Badge } from 'shadcn-ui/badge';
  import { Card } from 'shadcn-ui/card';
  import { PhArrowUp, PhArrowDown } from '#components/icons';
  import { cn } from '#shadcn/utils';
  import { METRICS_COLOURS, METRICS_TITLES, METRICS_ICONS } from '#components/dashboard/constants';

  export let key: keyof typeof METRICS_COLOURS;
  export let value: string;
  export let trend: 'up' | 'down';
  export let trendValue: number;

  $: colour = METRICS_COLOURS[key];
  $: title = METRICS_TITLES[key];
  $: icon = METRICS_ICONS[key];
</script>

<Card data-metric class="shadow-none">
  <div
    data-metric-icon
    class="p-1.5 rounded-full bg-gray-200 max-w-max text-primary-background mb-2"
    style:--fg={colour.foreground}
    style:--bg={colour.background}
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
</style>
