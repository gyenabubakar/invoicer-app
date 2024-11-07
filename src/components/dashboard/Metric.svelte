<script lang="ts">
  import { Badge } from 'shadcn/badge';
  import { Card } from 'shadcn/card';
  import { PhArrowUp, PhArrowDown } from '#components/icons';
  import { cn } from 'shadcn/utils';
  import { METRICS_COLOURS, METRICS_TITLES, METRICS_ICONS } from '#components/dashboard/constants';

  type MetricProps = {
    key: keyof typeof METRICS_COLOURS;
    value: string;
    trend: 'up' | 'down';
    trendValue: number;
  };

  let { key, value, trend, trendValue }: MetricProps = $props();

  let colour = $derived(METRICS_COLOURS[key]);
  let title = $derived(METRICS_TITLES[key]);
  let Icon = $derived(METRICS_ICONS[key]);
  let TrendIcon = $derived(trend === 'up' ? PhArrowUp : PhArrowDown);
</script>

<Card data-metric class="shadow-none">
  <div
    data-metric-icon
    class="text-primary-background mb-2 max-w-max rounded-full bg-gray-200 p-1.5"
    style:--fg={colour.foreground}
    style:--bg={colour.background}
  >
    <Icon class="h-5 w-5" weight="fill" />
  </div>

  <p>{title}</p>

  <div data-metric-value>
    <span data-metric-value-actual>{value}</span>
    <Badge
      data-metric-trend
      variant="outline"
      class={cn('font-mono', trend === 'up' ? 'trend-up' : 'trend-down')}
    >
      <TrendIcon weight="bold" />
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
