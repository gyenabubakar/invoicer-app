<script lang="ts">
import { Project } from '#components/clients';
import { useClientsContext } from '#lib/clients/utils';
import { FAKE_PROJECTS } from '#lib/fakes';

const { client } = useClientsContext();
</script>

<svelte:head>
  <title>Projects — {client.name} | Gyen's Invoicer</title>
</svelte:head>

<div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
    {#each FAKE_PROJECTS as project (project.id)}
      <Project {project} />
    {/each}
  </div>
</div>

<style lang="postcss">
</style>
