<script lang="ts">
import Command from 'lucide-svelte/icons/command';
import type { ComponentProps } from 'svelte';

import { Input } from 'shadcn/input';
import * as Sidebar from 'shadcn/sidebar';

import { Ph } from '#components/icons';
import NavMain from '#components/layouts/app-layout/nav-main.svelte';
import NavPinnedItems from '#components/layouts/app-layout/nav-pinned.svelte';
import NavUser from '#components/layouts/app-layout/nav-user.svelte';
import { FAKE_AVATAR } from '#lib/fakes';
import type { PinnedItem } from '#components/layouts/app-layout/nav-pinned.svelte';

let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

const user = {
  name: 'Gyen Abubakar',
  email: 'gyen@example.com',
  avatar: FAKE_AVATAR,
};

const pinnedItems: PinnedItem[] = [
  {
    id: '1',
    title: "Gyen's Invoicer",
    type: 'Project',
    emoji: '🎨',
  },
  {
    id: '2',
    title: 'Google',
    type: 'Client',
    emoji: '🚀',
  },
  {
    id: '3',
    title: 'fix: ensure the correct value is returned',
    type: 'Task',
    emoji: '🔧',
  },
  {
    id: '4',
    title: 'Invoice #123',
    type: 'Invoice',
    emoji: '💵',
  },
  {
    id: '5',
    title: 'Acme Corp',
    type: 'Client',
    emoji: '🏢',
  },
];
</script>

<Sidebar.Root bind:ref variant="inset" {...restProps}>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton class="px-0">
          {#snippet child({ props })}
            <a href="/" {...props}>
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
              >
                <Command class="size-4" />
              </div>

              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">Gyen's Invoicer</span>
                <span class="truncate text-xs"> A simple invoicing app for freelancers </span>
              </div>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>

  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <form class="relative flex-1">
            <Ph.MagnifyingGlass class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search clients, invoices, tasks..."
              class="w-full appearance-none bg-background pl-8"
            />
          </form>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Group>

    <NavMain />
    <NavPinnedItems items={pinnedItems} />
  </Sidebar.Content>

  <Sidebar.Footer>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Sidebar.MenuButton size="sm">
              {#snippet child({ props })}
                <a href="/feedback" {...props}>
                  <Ph.PaperPlaneTilt weight="bold" />
                  <span>Feedback</span>
                </a>
              {/snippet}
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
    <NavUser {user} />
  </Sidebar.Footer>
</Sidebar.Root>
