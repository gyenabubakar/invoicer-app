<script lang="ts">
import { onDestroy, onMount } from 'svelte';
import { format } from 'date-fns';
import type ApexCharts from 'apexcharts';

import { Card, CardContent } from 'shadcn/card';

import {
  METRICS_COLOURS,
  METRICS_ICONS,
  METRICS_TITLES,
  METRICS_Y_AXIS_LABELS,
} from '#components/dashboard/constants';

type Props = {
  key: keyof typeof METRICS_COLOURS;
  dates: Date[];
  values: number[];
};

let { key, dates, values }: Props = $props();

let chart: ApexCharts | undefined = $state();
let element: HTMLDivElement | undefined = $state();

let MetricIcon = $derived(METRICS_ICONS[key]);
let colour = $derived(METRICS_COLOURS[key]);
let title = $derived(METRICS_TITLES[key]);
let yAxisLabel = $derived(METRICS_Y_AXIS_LABELS[key]);
let datesFormatted = $derived(dates.map((date) => format(date, 'yyyy MMM do')));

let options = $derived({
  chart: {
    type: 'area',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  fill: {
    colors: [colour.foreground],
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: 'datetime',
    categories: datesFormatted,
  },
  yaxis: {
    title: {
      text: yAxisLabel,
    },
  },
  series: [
    {
      name: yAxisLabel,
      data: values,
      color: colour.foreground,
    },
  ],
} satisfies ApexCharts.ApexOptions);

onMount(async () => {
  const ApexCharts = (await import('apexcharts')).default;
  chart = new ApexCharts(element, options);
  await chart.render();
});

onDestroy(() => {
  chart?.destroy();
});
</script>

<Card class="shadow-none">
  <CardContent class="py-4">
    <div
      data-metric-icon
      class="text-primary-background mb-2 max-w-max rounded-full bg-gray-200 p-1.5"
      style:--fg={colour.foreground}
      style:--bg={colour.background}
    >
      <MetricIcon weight="fill" />
    </div>

    <h3 class="text-2xl font-medium">{title}</h3>
    <p class="text-muted-foreground">Detailed view of your {title} over the past 7 days.</p>

    <div bind:this={element} id="revenue-graph" style="height: 350px;"></div>
  </CardContent>
</Card>
