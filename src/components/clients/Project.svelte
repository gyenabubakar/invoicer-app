<script lang="ts">
  import { Card, CardContent, CardHeader } from 'shadcn-ui/card';
  import { Progress } from 'shadcn-ui/progress';
  import type { ClientProject } from '#lib/types';
  import { Badge } from 'shadcn-ui/badge';
  import { cn } from '#shadcn/utils';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { ProjectDetailsModal } from '#components/clients/index';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  export let project: ClientProject;

  let modalOpen = false;

  let statusClass: 'success' | 'neutral' = 'neutral';
  $: statusClass = project.status === 'Active' ? 'success' : 'neutral';

  function handleOpenProject() {
    goto(`${$page.url.href}?projectId=${project.id}`);
  }

  onMount(() => {
    const projectId = get(page).url.searchParams.get('projectId');
    if (projectId === project.id) {
      modalOpen = true;
    }
  });
</script>

<ProjectDetailsModal {modalOpen} {project} {statusClass}>
  <Card
    data-card
    class="shadow-none cursor-pointer hover:shadow-xl hover:shadow-slate-100"
    role="link"
    aria-label={`View project: ${project.name}`}
    on:click={handleOpenProject}
  >
    <CardHeader class="font-medium p-3">
      <div class="flex justify-between items-center">
        <p class="!m-0">{project.name}</p>
        <Badge data-badge class={cn(statusClass)}>{project.status}</Badge>
      </div>
    </CardHeader>

    <CardContent class="p-3">
      <div class="flex justify-between text-[15px] text-gray-500">
        <span>Tasks</span>
        <span>{project.tasks.completed}/{project.tasks.total}</span>
      </div>

      <div style:--color={project.color}>
        <Progress data-progress value={project.tasks.completed} max={project.tasks.total} />
      </div>
    </CardContent>
  </Card>
</ProjectDetailsModal>

<style lang="postcss">
  :global([data-progress] > div) {
    background-color: var(--color);
  }
</style>
