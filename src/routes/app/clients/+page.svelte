<script lang="ts">
  import { Input } from 'shadcn-ui/input';
  import { PhMagnifyingGlass } from '#components/icons';
  import { FAKE_CLIENTS } from '#lib/fakes';
  import { FluidClient } from '#components/clients';
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

  <div data-filters>
    <div class="relative">
      <Input placeholder="Search clients..." class="max-w-80 pl-8" />
      <PhMagnifyingGlass class="w-5 h-5 absolute left-2 top-2" />
    </div>

    <div class=""></div>
  </div>

  <section class="mt-10">
    <div class="grid grid-cols-12 gap-4">
      {#each FAKE_CLIENTS as client (client.id)}
        <FluidClient {client} />
      {/each}
    </div>
  </section>
</main>
