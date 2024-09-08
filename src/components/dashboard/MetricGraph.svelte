<script lang="ts">
  import { onMount } from 'svelte';
  import type ApexCharts from 'apexcharts';
  import { format } from 'date-fns';
  import { Card, CardContent } from 'shadcn-ui/card';
  import {
    METRICS_COLOURS,
    METRICS_TITLES,
    METRICS_Y_AXIS_LABELS,
    METRICS_ICONS,
  } from '#components/dashboard/constants';

  export let key: keyof typeof METRICS_COLOURS;
  export let dates: Date[];
  export let values: number[];

  let chart: ApexCharts | undefined;
  let element: HTMLDivElement | undefined;

  $: MetricIcon = METRICS_ICONS[key];
  $: colour = METRICS_COLOURS[key];
  $: title = METRICS_TITLES[key];
  $: yAxisLabel = METRICS_Y_AXIS_LABELS[key];
  $: datesFormatted = dates.map((date) => format(date, 'yyyy MMM do'));

  $: options = {
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
  } satisfies ApexCharts.ApexOptions;

  onMount(async () => {
    const ApexCharts = (await import('apexcharts')).default;
    chart = new ApexCharts(element, options);
    await chart.render();
  });
</script>

<Card class="shadow-none">
  <CardContent class="py-4">
    <div
      data-metric-icon
      class="p-1.5 rounded-full bg-gray-200 max-w-max text-primary-background mb-2"
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
