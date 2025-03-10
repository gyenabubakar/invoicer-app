<script lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from 'shadcn/avatar';
import { Button } from 'shadcn/button';
import * as DropdownMenu from 'shadcn/dropdown-menu';
import { cn } from 'shadcn/utils';
import type { ButtonProps } from 'shadcn/button';

import { Ph } from '#components/icons';
import { mergeObjects } from '#lib';
import { AppLayoutContext } from '#lib/context';
import { getInitials } from '#lib/utils';
import type { MiniClient } from '#lib/clients/types';

type AvatarSnippetProps = {
  client: MiniClient | null;
  isListItem?: boolean;
};

type Props = ButtonProps;

let { class: buttonClass, ...buttonProps }: Props = $props();

const context = AppLayoutContext.use();
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    {#snippet child({ props })}
      <Button
        variant="ghost"
        {...mergeObjects(props, buttonProps)}
        class={['w-fit px-1.5', buttonClass]}
      >
        <div
          class="flex aspect-square size-5 items-center justify-center gap-3 rounded-md bg-sidebar-primary text-sidebar-primary-foreground"
        >
          {@render avatar({ client: context.activeClient })}
        </div>
        <span class="truncate font-medium">{context.activeClient?.name ?? 'Select a client'}</span>
        <Ph.CaretDown />
      </Button>
    {/snippet}
  </DropdownMenu.Trigger>

  <DropdownMenu.Content class="w-64 rounded-lg" align="start" side="bottom" sideOffset={4}>
    <DropdownMenu.Label class="text-xs text-muted-foreground">Clients</DropdownMenu.Label>

    {#each context.clients as client, index (client.name)}
      <DropdownMenu.Item onSelect={() => context.setActiveClientId(client.id)} class="gap-2 p-2">
        <div class="flex size-6 items-center justify-center rounded-sm border">
          {@render avatar({ client, isListItem: true })}
        </div>
        {client.name}
        <DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
      </DropdownMenu.Item>
    {/each}

    <DropdownMenu.Separator />
    <DropdownMenu.Item class="gap-2 p-2">
      <div class="flex size-6 items-center justify-center rounded-md border bg-background">
        <Ph.Plus class="size-4" />
      </div>
      <div class="font-medium text-muted-foreground">Add client</div>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>

{#snippet avatar({ client, isListItem = false }: AvatarSnippetProps)}
  <Avatar class={cn('rounded-md', isListItem ? 'size-7' : 'size-5')}>
    <AvatarImage src={client?.avatar ?? ''} alt={client?.name} />
    <AvatarFallback class="rounded-md border-0 font-bold text-muted-foreground">
      {#if client?.name}
        {getInitials(client.name)}
      {:else}
        <Ph.User class="h-5 w-5" />
      {/if}
    </AvatarFallback>
  </Avatar>
{/snippet}
