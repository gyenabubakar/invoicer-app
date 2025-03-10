<script lang="ts">
import { setContext } from 'svelte';
import { page } from '$app/state';

import { Button } from 'shadcn/button';
import { Input } from 'shadcn/input';

import { DatesOrder, FluidClientCard, SourceFilter } from '#components/clients';
import { CLIENTS_PAGE_CTX } from '#components/clients/utils';
import { Ph } from '#components/icons';
import { FAKE_CLIENTS } from '#lib/fakes';
import type { ClientsPageContext, DatesOrderType, FilterSource } from '#components/clients/types';

const selectedSource = $derived.by(() => {
  return (page.url.searchParams.get('source') || 'all') as FilterSource;
});

const datesOrder = $derived.by(() => {
  return (page.url.searchParams.get('order') || 'reset') as DatesOrderType;
});

setContext<ClientsPageContext>(CLIENTS_PAGE_CTX, {
  get selectedSource() {
    return selectedSource;
  },
  get datesOrder() {
    return datesOrder;
  },
});
</script>

<svelte:head>
  <title>Clients | Gyen's Invoicer</title>
</svelte:head>

<main>
  <header class="mb-10">
    <h1>Your clients</h1>
    <p class="text-muted-foreground">
      Here's a list of all your clients. Clients act as the parent entities for projects.
    </p>
  </header>

  <div data-filters class="flex items-center justify-between">
    <div class="relative">
      <Input placeholder="Search clients..." class="w-72 pl-8" />
      <Ph.MagnifyingGlass class="absolute left-2 top-2 h-5 w-5" />
    </div>

    <div class="flex gap-4">
      <div class="flex gap-2">
        <DatesOrder />
        <SourceFilter />
      </div>

      <Button href="/app/clients/new">
        <Ph.UserPlus weight="bold" class="mr-2 h-5 w-5" />
        Enroll client
      </Button>
    </div>
  </div>

  <section class="mt-10">
    <div class="grid grid-cols-12 gap-4">
      {#each FAKE_CLIENTS as client (client.id)}
        <FluidClientCard {client} />
      {/each}
    </div>
  </section>
</main>
