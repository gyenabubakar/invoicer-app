<script lang="ts">
import * as AlertDialog from 'shadcn/alert-dialog';
import { Badge } from 'shadcn/badge';
import { Button } from 'shadcn/button';
import { Card } from 'shadcn/card';
import { cn } from 'shadcn/utils';

import { Ph } from '#components/icons';
import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';
import type { IntegratedApp } from '#components/types';

type Props = {
  app: IntegratedApp;
  isConnected?: boolean;
};

let { app, isConnected = false }: Props = $props();

let Logo = $derived.by(() => {
  switch (app) {
    case 'GitHub':
      return GitHubLogo;
    case 'GitLab':
      return GitLabLogo;
    default:
      return null;
  }
});
</script>

<Card
  class={cn(
    'border-slate-300 p-4 shadow-none',
    isConnected && 'relative border-invoicer bg-invoicer/5',
  )}
>
  <div class="!mt-0 flex items-center gap-2">
    <Logo />
    <p class="text-2xl font-bold">{app}</p>
  </div>

  <p class="my-2 text-muted-foreground">
    {#if isConnected}
      We're listening for new issues and merge requests on your {app} account.
    {:else}
      Connect your {app} account to get started.
    {/if}
  </p>

  {#if isConnected}
    <Badge
      class="absolute -top-3.5 right-4 rounded-full bg-invoicer-dark shadow-none hover:bg-invoicer-dark"
    >
      <Ph.PlugsConnected size="18px" weight="fill" class="mr-1" />
      Connected
    </Badge>
  {/if}

  <div class="">
    {#if isConnected}
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          {#snippet child({ props })}
            <Button
              variant="outline"
              class="border-red-500 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"
              {...props}
            >
              <Ph.Plugs class="mr-2" size="20px" weight="fill" />
              Disconnect
            </Button>
          {/snippet}
        </AlertDialog.Trigger>
        <AlertDialog.Content class="">
          <AlertDialog.Header>
            <AlertDialog.Title>
              <div class="mb-2 flex items-center gap-4">
                <AppLogo />
                <Ph.Plugs size="18px" weight="fill" class="rotate-45 transform text-gray-400" />
                <Logo />
              </div>
              Disconnect {app}
            </AlertDialog.Title>
            <AlertDialog.Description class="text-base">
              Are you sure you want to disconnect your {app} account? This will stop us from creating
              new tasks when you're assigned to issues and merge requests.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel class="shadow-none">Cancel</AlertDialog.Cancel>
            <AlertDialog.Action class="bg-red-500 text-white shadow-none hover:bg-red-700">
              Continue
            </AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
    {:else}
      <Button>
        <Ph.PlugsConnected class="mr-2 shadow-none" size="20px" weight="fill" />
        Connect
      </Button>
    {/if}
  </div>
</Card>

<style lang="postcss">
</style>
