<script lang="ts">
  import { Card } from 'shadcn-ui/card';
  import { Button } from 'shadcn-ui/button';
  import { Badge } from 'shadcn-ui/badge';
  import * as AlertDialog from 'shadcn-ui/alert-dialog';
  import { PhPlugs, PhPlugsConnected } from '#components/icons';
  import type { IntegratedApp } from '#components/types';
  import { cn } from '#shadcn/utils';
  import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';

  export let app: IntegratedApp;
  export let isConnected: boolean = false;

  $: Logo = (() => {
    switch (app) {
      case 'GitHub':
        return GitHubLogo;
      case 'GitLab':
        return GitLabLogo;
      default:
        return null;
    }
  })();
</script>

<Card
  class={cn(
    'shadow-none border-slate-300 p-4',
    isConnected && 'border-invoicer bg-invoicer/5 relative'
  )}
>
  <div class="flex items-center gap-2 !mt-0">
    <svelte:component this={Logo} />
    <p class="text-2xl font-bold">{app}</p>
  </div>

  <p class="text-muted-foreground my-2">
    {#if isConnected}
      We're listening for new issues and merge requests on your {app} account.
    {:else}
      Connect your {app} account to get started.
    {/if}
  </p>

  {#if isConnected}
    <Badge
      class="bg-invoicer-dark rounded-full absolute right-4 -top-3.5 shadow-none hover:bg-invoicer-dark"
    >
      <PhPlugsConnected size="18px" weight="fill" class="mr-1" />
      Connected
    </Badge>
  {/if}

  <div class="">
    {#if isConnected}
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button
            variant="outline"
            class="border-red-500 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <PhPlugs class="mr-2" size="20px" weight="fill" />
            Disconnect
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content class="">
          <AlertDialog.Header>
            <AlertDialog.Title>
              <div class="flex items-center gap-4 mb-2">
                <AppLogo />
                <PhPlugs size="18px" weight="fill" class="text-gray-400 transform rotate-45" />
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
        <PhPlugsConnected class="mr-2 shadow-none" size="20px" weight="fill" />
        Connect
      </Button>
    {/if}
  </div>
</Card>

<style lang="postcss">
</style>
