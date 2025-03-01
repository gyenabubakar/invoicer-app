<script lang="ts">
import { goto } from '$app/navigation';
import { page } from '$app/state';
import type { Snippet } from 'svelte';

import { Badge } from 'shadcn/badge';
import { Button } from 'shadcn/button';
import * as Sheet from 'shadcn/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from 'shadcn/tooltip';
import { cn } from 'shadcn/utils';

import { ObjectSource } from '#components';
import { Ph } from '#components/icons';
import type { ClientProject } from '#lib/clients/types';

type Props = {
  project: ClientProject;
  modalOpen: boolean;
  statusClass: 'success' | 'neutral';
  children?: Snippet<[Record<string, unknown>]>;
};

let { project, modalOpen = $bindable(false), statusClass, children }: Props = $props();

function onOpenChange(open: boolean) {
  if (!open) {
    const currentURL = new URL(page.url);
    currentURL.searchParams.delete('projectId');
    goto(currentURL);
  }
}

function onEdit() {
  console.log('Edit project details');
}
</script>

<Sheet.Root open={modalOpen} {onOpenChange}>
  <Sheet.Trigger>
    {#snippet child({ props })}
      {@render children?.(props)}
    {/snippet}
  </Sheet.Trigger>

  <Sheet.Content
    class="block max-w-[95vw] md:max-w-[90vw] lg:max-w-[70vw] xl:max-w-[50vw] 2xl:max-w-[40vw]"
  >
    <Sheet.Header>
      <div class="flex items-center gap-4">
        <Badge data-badge class={cn(statusClass)}>{project.status}</Badge>
        <a
          href={project.sourceURL}
          target="_blank"
          class="flex cursor-pointer items-center gap-1 text-[15px] leading-6 hover:opacity-50"
        >
          <span class="font-medium">View on {project.source}</span>
          <Ph.ArrowSquareOut class="inline-block h-5 w-5" />
        </a>
      </div>

      <Sheet.Title class="space-x-1 text-3xl font-bold">
        <span>{project.name}</span>
        <ObjectSource source={project.source} class="ml-2" />
        <Tooltip>
          <TooltipTrigger class="ml-2">
            {#snippet child({ props })}
              <Button variant="outline" size="icon" {...props} onclick={onEdit}>
                <Ph.Pen class="h-5 w-5" />
              </Button>
            {/snippet}
          </TooltipTrigger>
          <TooltipContent>Edit details</TooltipContent>
        </Tooltip>
      </Sheet.Title>

      <Sheet.Description class="!mt-4 block text-base">
        {project.description}
      </Sheet.Description>
    </Sheet.Header>

    <div class="bg-red-500"></div>
  </Sheet.Content>
</Sheet.Root>
