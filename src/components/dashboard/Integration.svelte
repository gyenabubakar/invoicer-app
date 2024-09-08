<script lang="ts">
  import { Card } from 'shadcn-ui/card';
  import { Button } from 'shadcn-ui/button';
  import { PhPlugs, PhPlugsConnected } from '#components/icons';
  import type { IntegratedApp } from '#components/types';
  import { cn } from '#components/shadcn/utils';
  import { Badge } from 'shadcn-ui/badge';
  import { PhCheck } from '#components/icons.js';

  export let app: IntegratedApp;
  export let isConnected: boolean = false;

  $: imageAlt = (() => {
    switch (app) {
      case 'GitHub':
        return 'GitHub Logo';
      case 'GitLab':
        return 'GitLab Logo';
    }
  })();
</script>

<Card
  class={cn(
    'shadow-none p-4 flex flex-col justify-between',
    isConnected && 'border-invoicer bg-invoicer/5 relative'
  )}
>
  <div class="flex items-center gap-2 !mt-0">
    {#if app === 'GitHub'}
      <enhanced:img src="../../assets/github-logo.svg" alt={imageAlt} width="35" />
    {:else if app === 'GitLab'}
      <enhanced:img src="../../assets/gitlab-logo.svg" alt={imageAlt} width="35" />
    {/if}
    <p class="text-2xl font-bold">{app}</p>
  </div>

  <p class="text-muted-foreground my-2">
    {#if isConnected}
      We'll create new tasks when you're assigned to issues and merge requests on {app}.
    {:else}
      Connect your {app} account to get started.
    {/if}
  </p>

  {#if isConnected}
    <Badge class="bg-invoicer-dark rounded-full absolute right-4 -top-3.5 shadow-none">
      <PhPlugsConnected size="18px" weight="fill" class="mr-1" />
      Connected
    </Badge>
  {/if}

  <div class="">
    {#if isConnected}
      <Button
        variant="outline"
        class="border-red-500 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"
      >
        <PhPlugs class="mr-2" size="20px" />
        Disconnect
      </Button>
    {:else}
      <Button class="mt-4">
        <PhPlugsConnected class="mr-2" size="20px" />
        Connect
      </Button>
    {/if}
  </div>
</Card>

<style lang="postcss">
</style>
