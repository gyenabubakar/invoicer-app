<script lang="ts">
import { Tooltip, TooltipContent, TooltipTrigger } from 'shadcn/tooltip';
import { cn } from 'shadcn/utils';

import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';
import type { Integration } from '#lib/types';

type Props = {
  class?: string;
  source: Integration;
};

let { class: className, source }: Props = $props();
</script>

<Tooltip>
  <TooltipTrigger class="ml-2" autofocus={false} tabindex={-1}>
    {#snippet child({ props })}
      <span {...props}>
        {#if source === 'Internal'}
          <AppLogo href={null} class={cn('inline-block w-5', className)} />
        {:else if source === 'GitHub'}
          <GitHubLogo class={cn('inline-block w-5', className)} />
        {:else if source === 'GitLab'}
          <GitLabLogo class={cn('inline-block w-5', className)} />
        {/if}
      </span>
    {/snippet}
  </TooltipTrigger>
  <TooltipContent>
    {#if source !== 'Internal'}
      Imported from {source}
    {:else}
      Added internally
    {/if}
  </TooltipContent>
</Tooltip>
