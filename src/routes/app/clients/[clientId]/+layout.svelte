<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { Avatar, AvatarFallback, AvatarImage } from 'shadcn-ui/avatar';
  import { Button } from 'shadcn-ui/button';
  import { Tooltip, TooltipContent, TooltipTrigger } from 'shadcn-ui/tooltip';
  import * as Tabs from 'shadcn-ui/tabs';
  import { FAKE_AVATAR } from '#lib/fakes';
  import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';
  import { PhPen, PhPlus } from '#components/icons';
  import { page } from '$app/stores';
  import { getInitials } from '#lib/utils';
  import { clientsContextKey } from '#lib/clients/utils';
  import { goto } from '$app/navigation';
  import type { Client } from '#lib/types';
  import { ObjectSource } from '#components';

  type Tab = 'projects' | 'tasks' | 'invoices';

  const client = writable<Client>({
    id: $page.params.clientId,
    name: 'Acme Corp',
    avatar: FAKE_AVATAR,
    email: 'info@acmecorp.com',
    phone: {
      readable: '+1 (234) 567-890',
      raw: '+1234567890',
    },
    source: 'GitLab' as 'Internal' | 'GitHub' | 'GitLab',
    address: '1234 Acme St, Acmeville, AC 12345',
  });

  $: currentTab = (() => {
    const pathSegments = $page.url.href.split('/').filter(Boolean);
    const lastSegment = pathSegments.pop();
    if (lastSegment === 'tasks' || lastSegment === 'invoices') {
      return lastSegment as Tab;
    }
    return 'projects';
  })();

  function onTabChange(value: Tab | undefined) {
    let path = `/app/clients/${$page.params.clientId}/`;
    if (value !== 'projects') {
      path += value;
    }
    goto(path);
  }

  setContext(clientsContextKey, { client });
</script>

<svelte:head>
  <title>{$client.name} — Clients | Gyen's Invoicer</title>
</svelte:head>

<main>
  <div class="flex items-center gap-6">
    <Avatar class="rounded-lg w-36 h-36">
      <AvatarImage src={$client.avatar} alt="{$client.name} logo/image" />
      <AvatarFallback class="rounded-lg">{getInitials($client.name)}</AvatarFallback>
    </Avatar>

    <div class="details">
      <h1 class="">
        <span class="mr-1">{$client.name}</span>

        <ObjectSource source={$client.source} />

        <Tooltip>
          <TooltipTrigger class="ml-2">
            <Button href="/app/clients/{$client.id}/edit" variant="outline" size="icon">
              <PhPen class="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Edit details</TooltipContent>
        </Tooltip>
      </h1>

      <div role="list" class="text-[16px] mt-2">
        <div role="listitem">
          <span role="term" class="text-muted-foreground">Email:</span>
          <span role="definition" class="mb-2">
            <a href="mailto:{$client.email}">{$client.email}</a>
          </span>
        </div>

        <div role="listitem">
          <span role="term" class="text-muted-foreground">Phone:</span>
          <span role="definition" class="mb-2">
            <a href="tel:{$client.phone.raw}">{$client.phone.readable}</a>
          </span>
        </div>

        <div role="listitem">
          <span role="term" class="text-muted-foreground">Address:</span>
          <span role="definition" class="mb-2">{$client.address}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-between">
    <Tabs.Root value={currentTab} onValueChange={onTabChange} class="mt-8">
      <Tabs.List>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="tasks">Tasks</Tabs.Trigger>
        <Tabs.Trigger value="invoices">Invoices</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>

    <div class="">
      {#if currentTab === 'projects'}
        <Button class="flex gap-1">
          <PhPlus class="w-4 h-4" weight="bold" />
          <span>New Project</span>
        </Button>
      {:else if currentTab === 'tasks'}
        <Button class="flex gap-1">
          <PhPlus class="w-4 h-4" weight="bold" />
          <span>New Task</span>
        </Button>
      {:else if currentTab === 'invoices'}
        <Button class="flex gap-1">
          <PhPlus class="w-4 h-4" weight="bold" />
          <span>New Invoice</span>
        </Button>
      {/if}
    </div>
  </div>

  <div class="pt-8">
    <slot />
  </div>
</main>

<style lang="postcss">
  .details {
    a {
      @apply text-invoicer hover:text-invoicer-dark;
    }
  }

  :global(.details [data-logo]) {
    @apply !inline-block;
  }

  :global(h2) {
    @apply text-2xl font-bold;
  }
</style>
