<script lang="ts">
  import { setContext } from 'svelte';
  import { derived } from 'svelte/store';
  import { page } from '$app/stores';

  import { Button } from 'shadcn/button';
  import { Input } from 'shadcn/input';

  import { DatesOrder, FluidClientCard, SourceFilter } from '#components/clients';
  import { CLIENTS_PAGE_CTX } from '#components/clients/utils';
  import { PhMagnifyingGlass } from '#components/icons';
  import { PhUserPlus } from '#components/icons.js';
  import { FAKE_CLIENTS } from '#lib/fakes';
  import type { ClientsPageContext, DatesOrderType, FilterSource } from '#components/clients/types';

  const selectedSource = derived(page, (__page) => {
    return (__page.url.searchParams.get('source') || 'all') as FilterSource;
  });

  const datesOrder = derived(page, (__page) => {
    return (__page.url.searchParams.get('order') || 'reset') as DatesOrderType;
  });

  setContext<ClientsPageContext>(CLIENTS_PAGE_CTX, { selectedSource, datesOrder });
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
      <PhMagnifyingGlass class="absolute left-2 top-2 h-5 w-5" />
    </div>

    <div class="flex gap-4">
      <div class="flex gap-2">
        <DatesOrder />
        <SourceFilter />
      </div>

      <Button href="/app/clients/new">
        <PhUserPlus weight="bold" class="mr-2 h-5 w-5" />
        Add client
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
