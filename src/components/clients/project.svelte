<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  import { Badge } from 'shadcn/badge';
  import { Card, CardContent, CardHeader } from 'shadcn/card';
  import { Progress } from 'shadcn/progress';
  import { cn } from 'shadcn/utils';

  import { ProjectDetailsModal } from '#components/clients/index';
  import type { ClientProject } from '#lib/clients/types';

  type Props = {
    project: ClientProject;
  };

  let { project }: Props = $props();

  let modalOpen = $state(false);

  let statusClass: 'success' | 'neutral' = $derived(
    project.status === 'Active' ? 'success' : 'neutral',
  );

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
  {#snippet children(props)}
    <Card
      data-card
      class="cursor-pointer shadow-none hover:shadow-xl hover:shadow-slate-100"
      role="link"
      aria-label={`View project: ${project.name}`}
      onclick={handleOpenProject}
      {...props}
    >
      <CardHeader class="p-3 font-medium">
        <div class="flex items-center justify-between">
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
  {/snippet}
</ProjectDetailsModal>

<style lang="postcss">
  :global([data-progress] > div) {
    background-color: var(--color);
  }
</style>
