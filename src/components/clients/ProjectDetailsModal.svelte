<script lang="ts">
  import { Button } from 'shadcn-ui/button';
  import * as Dialog from 'shadcn-ui/dialog';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';
  import type { ClientProject } from '#lib/types';
  import { Badge } from 'shadcn-ui/badge';
  import { cn } from '#shadcn/utils';
  import { ObjectSource } from '#components';
  import { PhArrowSquareOut, PhPen } from '#components/icons';
  import { Tooltip, TooltipContent, TooltipTrigger } from 'shadcn-ui/tooltip';

  export let modalOpen = false;
  export let project: ClientProject;
  export let statusClass: 'success' | 'neutral';

  function onOpenChange(open: boolean) {
    if (!open) {
      const currentURL = new URL(get(page).url);
      currentURL.searchParams.delete('projectId');
      goto(currentURL);
    }
  }

  function onEdit() {
    console.log('Edit project details');
  }
</script>

<Dialog.Root open={modalOpen} {onOpenChange}>
  <Dialog.Trigger>
    <slot />
  </Dialog.Trigger>

  <Dialog.Content
    class="max-w-[95vw] md:max-w-[90vw] lg:max-w-[70vw] xl:max-w-[50vw] 2xl:max-w-[45vw] h-[90vh] block"
  >
    <Dialog.Header>
      <div class="flex items-center gap-4">
        <Badge data-badge class={cn(statusClass)}>{project.status}</Badge>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a
          href={project.sourceURL}
          target="_blank"
          class="text-[15px] leading-6 flex items-center gap-1 hover:opacity-50"
        >
          <span class="font-medium">View on {project.source}</span>
          <PhArrowSquareOut class="w-5 h-5 inline-block" />
        </a>
      </div>

      <Dialog.Title class="text-3xl font-bold space-x-1">
        <span>{project.name}</span>
        <ObjectSource source={project.source} class="ml-2" />
        <Tooltip>
          <TooltipTrigger asChild class="ml-2">
            <Button variant="outline" size="icon" on:click={onEdit}>
              <PhPen class="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Edit details</TooltipContent>
        </Tooltip>
      </Dialog.Title>

      <Dialog.Description class="text-base !mt-4 block">
        {project.description}
      </Dialog.Description>
    </Dialog.Header>

    <div class="bg-red-500"></div>
  </Dialog.Content>
</Dialog.Root>
