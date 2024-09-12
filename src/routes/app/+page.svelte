<script lang="ts">
  import type { DateRange } from 'bits-ui';
  import * as Tabs from 'shadcn-ui/tabs';
  import { Separator } from 'shadcn-ui/separator';
  import { Integration, Metric, MetricGraph, RecentInvoice } from '#components/dashboard';
  import { Container, DateRangePicker } from '#components';
  import { FAKE_AVATAR, FAKE_GRAPH_DATA } from '#lib/fakes';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let dateRange: DateRange | undefined = undefined;

  $: defaultTab = $page.url.searchParams.get('numberOfDays') || '30';

  function onTabChange(value?: string) {
    if (!value) return;

    const url = new URL(location.href);
    url.searchParams.set('numberOfDays', value);

    if (value === '30') url.searchParams.delete('numberOfDays');

    goto(url.toString(), { replaceState: true });
  }
</script>

<svelte:head>
  <title>Dashboard | Gyen's Invoicer</title>
</svelte:head>

<main>
  <header class="mb-10">
    <h1>Good afternoon, John.</h1>
    <p class="text-muted-foreground">Here's an overview of your recent activity.</p>
  </header>

  <!-- METRICS FILTERS -->
  <div id="metrics-filter" class="mb-5 flex items-center justify-between">
    <Tabs.Root value={defaultTab} onValueChange={onTabChange}>
      <Tabs.List>
        <Tabs.Trigger value="7">7 days</Tabs.Trigger>
        <Tabs.Trigger value="30">30 days</Tabs.Trigger>
        <Tabs.Trigger value="90">3 months</Tabs.Trigger>
        <Tabs.Trigger value="365">1 year</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>

    <DateRangePicker bind:value={dateRange} />
  </div>

  <!-- METRICS -->
  <div id="metrics" class="grid grid-cols-4 gap-6">
    <Metric key="totalRevenue" value="$12,000" trend="up" trendValue={2} />
    <Metric key="billableHours" value="24" trend="down" trendValue={5} />
    <Metric key="avgHourlyRate" value="$50" trend="up" trendValue={10} />
    <Metric key="tasksCompleted" value="12" trend="down" trendValue={3} />
  </div>

  <!-- INTEGRATIONS, GRAPHS, AND RECENT INVOICES -->
  <div class="grid grid-cols-12 mt-14">
    <div class="col-span-6">
      <section id="integrations" class="">
        <h2 class="text-3xl font-semibold">Integrations</h2>
        <p class="text-muted-foreground">
          Connect your favourite apps and we'll pull in issues and merge requests as they're
          assigned to you.
        </p>

        <div class="flex flex-col mt-7 gap-8">
          <Integration app="GitHub" />
          <Integration app="GitLab" isConnected />
        </div>
      </section>
    </div>

    <div class="col-start-8 col-end-13">
      <section id="recent-invoices">
        <h2 class="text-3xl font-semibold">Recent invoices</h2>
        <p class="text-muted-foreground">Here are the invoices you've sent out recently.</p>

        <div class="mt-7">
          <RecentInvoice
            avatar={FAKE_AVATAR}
            client="Gyen Abubakar"
            invoiceNumber="INV-0TG39"
            invoiceStatus="Overdue"
          />

          <RecentInvoice
            avatar={FAKE_AVATAR}
            client="Gyen Abubakar"
            invoiceNumber="INV-0TG39"
            invoiceStatus="Paid"
          />

          <RecentInvoice
            avatar={FAKE_AVATAR}
            client="Gyen Abubakar"
            invoiceNumber="INV-0TG39"
            invoiceStatus="Pending"
          />

          <RecentInvoice
            avatar={FAKE_AVATAR}
            client="Gyen Abubakar"
            invoiceNumber="INV-0TG39"
            invoiceStatus="Sent"
          />
        </div>
      </section>
    </div>
  </div>

  <Separator class="my-14" />

  <div class="">
    <section id="graphs" class="col-span-8">
      <h2 class="text-3xl font-semibold">Your metrics in detail</h2>
      <p class="text-muted-foreground">Here's a detailed breakdown of your recent activity.</p>

      <div class="mt-7 grid grid-cols-2 gap-8">
        <MetricGraph
          key="totalRevenue"
          dates={FAKE_GRAPH_DATA.totalRevenue.dates}
          values={FAKE_GRAPH_DATA.totalRevenue.values}
        />

        <MetricGraph
          key="billableHours"
          dates={FAKE_GRAPH_DATA.billableHours.dates}
          values={FAKE_GRAPH_DATA.billableHours.values}
        />

        <MetricGraph
          key="avgHourlyRate"
          dates={FAKE_GRAPH_DATA.avgHourlyRate.dates}
          values={FAKE_GRAPH_DATA.avgHourlyRate.values}
        />

        <MetricGraph
          key="tasksCompleted"
          dates={FAKE_GRAPH_DATA.tasksCompleted.dates}
          values={FAKE_GRAPH_DATA.tasksCompleted.values}
        />
      </div>
    </section>
  </div>
</main>

<style lang="postcss">
  /* #metrics {} */
</style>
