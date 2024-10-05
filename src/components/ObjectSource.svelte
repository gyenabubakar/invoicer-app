<script lang="ts">
  import { Tooltip, TooltipContent, TooltipTrigger } from 'shadcn-ui/tooltip';
  import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';
  import type { Integration } from '#lib/types';
  import { cn } from '#shadcn/utils';

  let className = '';
  export { className as class };
  export let source: Integration;
</script>

<Tooltip>
  <TooltipTrigger asChild class="ml-2" autofocus={false} tabindex={-1} let:builder>
    <span use:builder.action {...builder}>
      {#if source === 'Internal'}
        <AppLogo href={null} class={cn('w-5 inline-block', className)} />
      {:else if source === 'GitHub'}
        <GitHubLogo class={cn('w-5 inline-block', className)} />
      {:else if source === 'GitLab'}
        <GitLabLogo class={cn('w-5 inline-block', className)} />
      {/if}
    </span>
  </TooltipTrigger>
  <TooltipContent>
    {#if source !== 'Internal'}
      Imported from {source}
    {:else}
      Added internally
    {/if}
  </TooltipContent>
</Tooltip>
