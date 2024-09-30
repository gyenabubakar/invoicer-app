<script lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from 'shadcn-ui/avatar';
  import { Button } from 'shadcn-ui/button';
  import { Tooltip, TooltipContent, TooltipTrigger } from 'shadcn-ui/tooltip';
  import { FAKE_AVATAR } from '#lib/fakes';
  import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';
  import { PhPen } from '#components/icons';
  import { page } from '$app/stores';
  import { getInitials } from '#lib/utils';

  const client = {
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
  };
</script>

<svelte:head>
  <title>{client.name} — Clients | Gyen's Invoicer</title>
</svelte:head>

<main>
  <div class="flex items-center gap-6">
    <Avatar class="rounded-lg w-36 h-36">
      <AvatarImage src={client.avatar} alt="{client.name} logo/image" />
      <AvatarFallback class="rounded-lg">{getInitials(client.name)}</AvatarFallback>
    </Avatar>

    <div class="details">
      <h1 class="">
        <span class="mr-1">{client.name}</span>

        <Tooltip>
          <TooltipTrigger class="ml-2">
            {#if client.source === 'Internal'}
              <AppLogo href={null} class="w-5 inline-block" />
            {:else if client.source === 'GitHub'}
              <GitHubLogo class="w-5 inline-block" />
            {:else if client.source === 'GitLab'}
              <GitLabLogo class="w-5 inline-block" />
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

        <Tooltip>
          <TooltipTrigger class="ml-2">
            <Button href="/app/clients/{client.id}/edit" variant="outline" size="icon">
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
            <a href="mailto:{client.email}">{client.email}</a>
          </span>
        </div>

        <div role="listitem">
          <span role="term" class="text-muted-foreground">Phone:</span>
          <span role="definition" class="mb-2">
            <a href="tel:{client.phone.raw}">{client.phone.readable}</a>
          </span>
        </div>

        <div role="listitem">
          <span role="term" class="text-muted-foreground">Address:</span>
          <span role="definition" class="mb-2">{client.address}</span>
        </div>
      </div>
    </div>
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
</style>
