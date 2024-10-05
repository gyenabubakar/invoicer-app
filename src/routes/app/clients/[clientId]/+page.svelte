<script lang="ts">
  import { useClientsContext } from '#lib/clients/utils';

  const { client } = useClientsContext();
</script>

<svelte:head>
  <title>{$client.name} — Clients | Gyen's Invoicer</title>
</svelte:head>

<main>
  <h2>Projects</h2>
</main>

<style lang="postcss">
</style>
