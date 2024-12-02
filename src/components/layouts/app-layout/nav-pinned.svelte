<script lang="ts" module>
  export type PinnedItem = {
    id: string;
    title: string;
    type: 'Project' | 'Client' | 'Task' | 'Invoice';
    emoji: string;
  };
</script>

<script lang="ts">
  import { goto } from '$app/navigation';

  import * as DropdownMenu from 'shadcn/dropdown-menu';
  import * as Sidebar from 'shadcn/sidebar';
  import { useSidebar } from 'shadcn/sidebar';

  import { Ph } from '#components/icons';

  type Props = {
    items: PinnedItem[];
  };

  let { items }: Props = $props();

  const sidebar = useSidebar();

  function getURL(item: PinnedItem) {
    switch (item.type) {
      case 'Project':
        return `/app/clients?project=${item.id}`;
      case 'Client':
        return `/app/clients/${item.id}`;
      case 'Task':
        return `/app/tasks/${item.id}`;
      case 'Invoice':
        return `/app/invoices/${item.id}`;
    }
  }

  function unpin(item: PinnedItem) {
    console.log('Unpinning item:', item);
  }
</script>

<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
  <Sidebar.GroupLabel>
    <Ph.PushPinSimple weight="fill" />&nbsp;&nbsp;Pinned
  </Sidebar.GroupLabel>

  <Sidebar.Menu class="gap-0">
    {#each items as pinnedItem (pinnedItem.id)}
      <Sidebar.MenuItem>
        <Sidebar.MenuButton>
          {#snippet child({ props })}
            <a href={getURL(pinnedItem)} {...props}>
              <span>{pinnedItem.emoji}</span>
              <span>{pinnedItem.title}</span>
            </a>
          {/snippet}
        </Sidebar.MenuButton>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuAction showOnHover {...props}>
                <Ph.DotsThreeOutline weight="fill" />
                <span class="sr-only">More</span>
              </Sidebar.MenuAction>
            {/snippet}
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            class="w-48"
            side={sidebar.isMobile ? 'bottom' : 'right'}
            align={sidebar.isMobile ? 'end' : 'start'}
          >
            <DropdownMenu.Item onclick={() => goto(getURL(pinnedItem))}>
              <Ph.Eye weight="bold" class="text-muted-foreground" />
              <span>View {pinnedItem.type}</span>
            </DropdownMenu.Item>

            <DropdownMenu.Separator />

            <DropdownMenu.Item onclick={() => unpin(pinnedItem)}>
              <Ph.PushPinSlash weight="bold" class="text-muted-foreground" size="26" />
              <span>Unpin</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    {/each}
  </Sidebar.Menu>
</Sidebar.Group>
