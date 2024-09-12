<script lang="ts">
  import { Tooltip, TooltipContent, TooltipTrigger } from 'shadcn-ui/tooltip';
  import { Avatar, AvatarFallback, AvatarImage } from 'shadcn-ui/avatar';
  import { Badge } from 'shadcn-ui/badge';
  import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';
  import { getInitials } from '#lib/utils';
  import type { FAKE_CLIENTS } from '#lib/fakes';
  import { format } from 'date-fns';

  export let client: (typeof FAKE_CLIENTS)[0];

  $: dateAdded = format(client.createdAt, 'do MMMM, yyyy');
</script>

<div
  data-client-card
  class="col-span-12 flex justify-between items-center gap-4 w-full p-3 border border-slate-100 rounded-lg"
>
  <a href="/app/clients/{client.id}" class="flex items-center gap-4 hover:opacity-70">
    <Avatar class="relative rounded-md">
      <AvatarImage src={client.avatar} alt={client.name + 'logo'} />
      <AvatarFallback>{getInitials(client.name)}</AvatarFallback>
    </Avatar>

    <div class="flex flex-col">
      <p class="leading-5">{client.name}</p>
      <small class="text-muted-foreground/80 leading-4">
        Added on {dateAdded}
      </small>
    </div>
  </a>

  <div class="flex items-center gap-4">
    <a href="/app/clients/{client.id}/#projects" class="flex items-center gap-1 hover:opacity-70">
      <Badge
        variant="outline"
        class="bg-slate-100 text-slate-500 border-slate-300 rounded-full hover:bg-slate-100 shadow-none"
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
        class="bg-orange-100 text-orange-500 border-orange-300 rounded-full hover:bg-orange-100 shadow-none"
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
        class="bg-invoicer/5 text-invoicer-dark border-invoicer rounded-full hover:bg-invoicer/5 shadow-none"
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
