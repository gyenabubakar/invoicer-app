<script lang="ts">
  import type { DateRange } from 'bits-ui';
  import * as Tabs from 'shadcn-ui/tabs';
  import * as Avatar from 'shadcn-ui/avatar';
  import { Integration, Metric, RecentInvoice } from '#components/dashboard';
  import { PhCurrencyDollar, PhCoins, PhTimer, PhCheckSquare } from '#components/icons';
  import { Container, DateRangePicker } from '#components';
  import { goto } from '$app/navigation';
  import { Badge } from 'shadcn-ui/badge';
  import { Button } from 'shadcn-ui/button';

  let dateRange: DateRange | undefined = undefined;

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
  <Container>
    <header class="mb-10">
      <h1>Good afternoon, John.</h1>
      <p class="text-muted-foreground">Here's an overview of your recent activity.</p>
    </header>

    <div id="metrics-filter" class="mb-5 flex items-center justify-between">
      <Tabs.Root value="30" onValueChange={onTabChange}>
        <Tabs.List>
          <Tabs.Trigger value="7">7 days</Tabs.Trigger>
          <Tabs.Trigger value="30">30 days</Tabs.Trigger>
          <Tabs.Trigger value="90">3 months</Tabs.Trigger>
          <Tabs.Trigger value="365">1 year</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <DateRangePicker bind:value={dateRange} />
    </div>

    <div id="metrics" class="grid grid-cols-4 gap-6">
      <Metric
        title="Total revenue"
        value="$12,000"
        trend="up"
        trendValue={2}
        icon={PhCurrencyDollar}
      />

      <Metric title="Billable hours" value="24" trend="down" trendValue={5} icon={PhTimer} />

      <Metric title="Average hourly rate" value="$50" trend="up" trendValue={10} icon={PhCoins} />

      <Metric title="Tasks completed" value="12" trend="down" trendValue={3} icon={PhCheckSquare} />
    </div>

    <div class="grid grid-cols-12 gap-14 mt-10">
      <div class="col-span-7">
        <section id="integrations" class="">
          <h2 class="text-3xl font-semibold">Integrations</h2>
          <p class="text-muted-foreground">
            Connect your favourite apps and we'll pull in issues and merge requests as they're
            assigned to you.
          </p>

          <div class="grid grid-cols-2 mt-7 gap-5">
            <Integration app="GitHub" />
            <Integration app="GitLab" isConnected />
          </div>
        </section>

        <section id="graphs"></section>
      </div>

      <div class="col-span-5">
        <section id="recent-invoices">
          <h2 class="text-3xl font-semibold">Recent invoices</h2>
          <p class="text-muted-foreground">Here are the invoices you've sent out recently.</p>

          <div class="mt-7">
            <RecentInvoice
              avatar="https://avatars.githubusercontent.com/u/26672526?v=4"
              client="Gyen Abubakar"
              invoiceNumber="INV-0TG39"
              invoiceStatus="Overdue"
            />

            <RecentInvoice
              avatar="https://avatars.githubusercontent.com/u/26672526?v=4"
              client="Gyen Abubakar"
              invoiceNumber="INV-0TG39"
              invoiceStatus="Paid"
            />

            <RecentInvoice
              avatar="https://avatars.githubusercontent.com/u/26672526?v=4"
              client="Gyen Abubakar"
              invoiceNumber="INV-0TG39"
              invoiceStatus="Pending"
            />

            <RecentInvoice
              avatar="https://avatars.githubusercontent.com/u/26672526?v=4"
              client="Gyen Abubakar"
              invoiceNumber="INV-0TG39"
              invoiceStatus="Sent"
            />
          </div>
        </section>
      </div>
    </div>
  </Container>
</main>

<style lang="postcss">
  /* #metrics {} */
</style>
