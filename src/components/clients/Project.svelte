<script lang="ts">
  import { Card, CardContent, CardHeader } from 'shadcn-ui/card';
  import { Progress } from 'shadcn-ui/progress';
  import type { ClientProject } from '#lib/types';
  import { Badge } from 'shadcn-ui/badge';
  import { cn } from '#shadcn/utils';

  export let project: ClientProject;

  $: statusClass = project.status === 'Active' ? 'success' : 'neutral';
</script>

<Card
  data-card
  class="shadow-none cursor-pointer hover:shadow-xl hover:shadow-slate-100"
  role="link"
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

<style lang="postcss">
  :global([data-progress] > div) {
    background-color: var(--color);
  }
</style>
