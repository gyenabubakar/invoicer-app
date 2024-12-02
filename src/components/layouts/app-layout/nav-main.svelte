<script lang="ts">
  import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from 'shadcn/sidebar';
  import { cn } from 'shadcn/utils';

  import { Ph } from '#components/icons';
  import { AppLayoutContext } from '#lib/context';

  const context = AppLayoutContext.use();

  const navs = $derived.by(() => {
    return [
      {
        title: 'Dashboard',
        url: '/app',
        icon: Ph.ProjectorScreenChart,
        isActive: context.activePage.isDashboard,
        items: [],
      },
      {
        title: 'Tasks',
        url: '/app/tasks',
        icon: Ph.Kanban,
        isActive: context.activePage.isTasks,
      },
      {
        title: 'Invoices',
        url: '/app/invoices',
        icon: Ph.Receipt,
        isActive: context.activePage.isInvoices,
        items: [],
      },
      {
        title: 'Clients',
        url: '/app/clients',
        icon: Ph.Users,
        isActive: context.activePage.isClients,
        items: [],
      },
    ];
  });
</script>

<SidebarGroup>
  <SidebarMenu>
    {#each navs as navItem (navItem.title)}
      <SidebarMenuItem>
        <SidebarMenuButton class={cn(navItem.isActive && 'bg-sidebar-accent')}>
          {#snippet child({ props })}
            {@const Icon = navItem.icon}
            <a href={navItem.url} class="items-center" {...props}>
              <Icon weight={navItem.isActive ? 'fill' : 'regular'} class="!h-5 !w-5" />
              <span>{navItem.title}</span>
            </a>
          {/snippet}
        </SidebarMenuButton>
      </SidebarMenuItem>
    {/each}
  </SidebarMenu>
</SidebarGroup>
