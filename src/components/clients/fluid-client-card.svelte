<script lang="ts">
import { format } from 'date-fns';

import { Avatar, AvatarFallback, AvatarImage } from 'shadcn/avatar';
import { Badge } from 'shadcn/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from 'shadcn/tooltip';

import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';
import { getInitials } from '#lib/utils';
import type { FAKE_CLIENTS } from '#lib/fakes';

type Props = {
  client: (typeof FAKE_CLIENTS)[0];
};

let { client }: Props = $props();

let dateAdded = $derived(format(client.createdAt, 'do MMMM, yyyy'));
</script>

<div
  data-client-card
  class="col-span-12 flex w-full items-center justify-between gap-4 rounded-lg border border-slate-100 p-3"
>
  <a href="/app/clients/{client.id}" class="flex items-center gap-4 hover:opacity-70">
    <Avatar class="relative rounded-md">
      <AvatarImage src={client.avatar} alt={client.name + 'logo'} />
      <AvatarFallback>{getInitials(client.name)}</AvatarFallback>
    </Avatar>

    <div class="flex flex-col">
      <p class="leading-5">{client.name}</p>
      <small class="leading-4 text-muted-foreground/80">
        Added on {dateAdded}
      </small>
    </div>
  </a>

  <div class="flex items-center gap-4">
    <a href="/app/clients/{client.id}/#projects" class="flex items-center gap-1 hover:opacity-70">
      <Badge
        variant="outline"
        class="rounded-full border-slate-300 bg-slate-100 text-slate-500 shadow-none hover:bg-slate-100"
      >
        {client.tasks.ongoing}
      </Badge>
      <p class="text-sm leading-4 text-slate-500">Projects</p>
    </a>

    <a
      href="/app/tasks/?status=ongoing&clientId={client.id}"
      class="flex items-center gap-1 hover:opacity-70"
    >
      <Badge
        variant="outline"
        class="rounded-full border-orange-300 bg-orange-100 text-orange-500 shadow-none hover:bg-orange-100"
      >
        {client.tasks.ongoing}
      </Badge>
      <p class="text-sm leading-4 text-orange-500">Ongoing tasks</p>
    </a>

    <a
      href="/app/tasks/?status=completed&clientId={client.id}"
      class="flex items-center gap-1 hover:opacity-70"
    >
      <Badge
        variant="outline"
        class="rounded-full border-invoicer bg-invoicer/5 text-invoicer-dark shadow-none hover:bg-invoicer/5"
      >
        {client.tasks.completed}
      </Badge>
      <p class="text-sm leading-4 text-invoicer-dark">Completed tasks</p>
    </a>

    <Tooltip>
      <TooltipTrigger class="ml-2">
        {#if client.source === 'Internal'}
          <AppLogo href={null} class="w-5" />
        {:else if client.source === 'GitHub'}
          <GitHubLogo class="w-5" />
        {:else if client.source === 'GitLab'}
          <GitLabLogo class="w-5" />
        {/if}
      </TooltipTrigger>
      <TooltipContent>
        {#if client.source !== 'Internal'}
          Imported from {client.source}
        {:else}
          Added internally
        {/if}
      </TooltipContent>
    </Tooltip>
  </div>
</div>
