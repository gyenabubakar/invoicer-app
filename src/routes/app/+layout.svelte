<script lang="ts">
  import { page } from '$app/stores';

  import { Avatar, AvatarFallback, AvatarImage } from 'shadcn/avatar';
  import { Button } from 'shadcn/button';
  import * as DropdownMenu from 'shadcn/dropdown-menu';
  import { Input } from 'shadcn/input';
  import { Sheet, SheetContent, SheetTrigger } from 'shadcn/sheet';

  import { Combobox, Container } from '#components';
  import { Ph } from '#components/icons';
  import { AppLogo } from '#components/logos';
  import { FAKE_AVATAR } from '#lib/fakes';
  import type { ComboboxOption } from '#components/types';

  let { children } = $props();

  let activeClientId: string = $state('');
  let activeProjectId: string = $state('');

  const clients: ComboboxOption[] = [
    { value: crypto.randomUUID(), label: 'Some client with a long ass name' },
  ];
  const projects: ComboboxOption[] = [
    { value: crypto.randomUUID(), label: 'Some project with a long name' },
  ];

  let isDashboardPage = $derived($page.url.pathname === '/app');
  let isClientsPage = $derived(/\/app\/clients(\/.*)?$/.test($page.url.pathname));
  let isInvoicesPage = $derived(/\/app\/invoices(\/.*)?$/.test($page.url.pathname));
  let isTasksPage = $derived(/\/app\/tasks(\/.*)?$/.test($page.url.pathname));

  function addClient() {
    console.log('Adding a new client...');
  }
</script>

<!-- TODO: Show this notice only if the user is not verified -->
<!-- <UnverifiedEmailNotice /> -->

<div class="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
  <aside data-desktops class="hidden border-r bg-muted/40 lg:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px]">
        <AppLogo class="w-7" href="/app" withText />

        <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
          <Ph.Bell class="h-4 w-4" />
          <span class="sr-only">Toggle notifications</span>
        </Button>
      </div>

      <div class="flex-1">
        <form class="mb-4 w-full flex-1 px-2 lg:px-4">
          <div class="relative">
            <Ph.MagnifyingGlass class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search through clients, invoices, tasks..."
              class="w-full appearance-none bg-background pl-8"
            />
          </div>
        </form>

        <nav class="items-start px-2 text-sm font-medium lg:px-4">
          <a href="/app/" class="" class:active={isDashboardPage}>
            <Ph.House class="h-5 w-5" weight={isDashboardPage ? 'fill' : 'bold'} />
            <span>Dashboard</span>
          </a>
          <a href="/app/clients" class="" class:active={isClientsPage}>
            <Ph.Users class="h-5 w-5" weight={isClientsPage ? 'fill' : 'bold'} />
            <span>Clients</span>
          </a>
          <a href="/app/invoices" class="" class:active={isInvoicesPage}>
            <Ph.Receipt class="h-5 w-5" weight={isInvoicesPage ? 'fill' : 'bold'} />
            <span>Invoices</span>
          </a>
          <a href="/app/tasks" class="" class:active={isTasksPage}>
            <Ph.Kanban class="h-5 w-5" weight={isTasksPage ? 'fill' : 'bold'} />
            <span>Tasks</span>
          </a>
        </nav>
      </div>
    </div>
  </aside>

  <div class="grid flex-1 grid-cols-1 grid-rows-[60px,calc(100vh-60px)] flex-col">
    <header
      class="flex h-14 items-center justify-between border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"
    >
      <Sheet>
        <SheetTrigger>
          {#snippet child({ props })}
            <Button variant="outline" size="icon" class="shrink-0 lg:hidden" {...props}>
              <Ph.List class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          {/snippet}
        </SheetTrigger>
        <SheetContent preventScroll side="left" class="flex flex-col">
          <nav class="items-start pt-8 text-sm font-medium">
            <div class="flex h-14 items-center">
              <AppLogo class="w-7" href="/app" withText />

              <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                <Ph.Bell class="h-4 w-4" />
                <span class="sr-only">Toggle notifications</span>
              </Button>
            </div>

            <form class="mt-4 w-full flex-1">
              <div class="relative">
                <Ph.MagnifyingGlass
                  class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                />
                <Input
                  type="search"
                  placeholder="Search through clients, invoices, tasks..."
                  class="w-full appearance-none bg-background pl-8"
                />
              </div>
            </form>

            <a href="/app/" class="mt-6" class:active={isDashboardPage}>
              <Ph.House class="h-5 w-5" weight={isDashboardPage ? 'fill' : 'bold'} />
              <span>Dashboard</span>
            </a>
            <a href="/app/clients" class="" class:active={isClientsPage}>
              <Ph.Users class="h-5 w-5" weight={isClientsPage ? 'fill' : 'bold'} />
              <span>Clients</span>
            </a>
            <a href="/app/invoices" class="" class:active={isInvoicesPage}>
              <Ph.Receipt class="h-5 w-5" weight={isInvoicesPage ? 'fill' : 'bold'} />
              <span>Invoices</span>
            </a>
            <a href="/app/tasks" class="" class:active={isTasksPage}>
              <Ph.Kanban class="h-5 w-5" weight={isTasksPage ? 'fill' : 'bold'} />
              <span>Tasks</span>
            </a>
          </nav>
        </SheetContent>
      </Sheet>

      <div data-clients-projects-combo class="hidden items-center lg:flex">
        <Combobox
          bind:value={activeClientId}
          options={clients}
          showAddButton
          placeholder="Select a client..."
          searchPlaceholder="Search clients..."
          addLabel="New client"
          onAdd={addClient}
          class="max-w-[200px]"
        />
        <span class="px-2 text-gray-300">/</span>
        <Combobox
          bind:value={activeProjectId}
          options={projects}
          placeholder="Select a project..."
          searchPlaceholder="Search projects..."
          class="max-w-[200px]"
        />
      </div>

      <div class="block lg:hidden">
        <AppLogo class="w-7" href="/app" withText hideTextOnExtraSmall />
      </div>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar class="h-[30px] w-[30px]">
            <AvatarImage src={FAKE_AVATAR} alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content preventScroll={false} id="user-menu" class="h-max no-underline">
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <a href="/app/settings">My account</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item id="logout-link">
              <a href="/app/log-out" class="flex w-full items-center justify-between">
                <span>Log out</span>
                <Ph.SignOut weight="bold" />
              </a>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </header>

    <div class="mx-auto flex flex-wrap items-center px-4 pt-5 lg:hidden">
      <Combobox
        bind:value={activeClientId}
        options={clients}
        showAddButton
        placeholder="Select a client..."
        searchPlaceholder="Search clients..."
        addLabel="New client"
        onAdd={addClient}
      />
      <span class="hidden px-2 text-gray-300 xs:block">/</span>
      <Combobox
        bind:value={activeProjectId}
        options={projects}
        placeholder="Select a project..."
        searchPlaceholder="Search projects..."
      />
    </div>

    <div id="main" class="flex-grow overflow-y-auto p-10 pb-52">
      <Container>
        {@render children?.()}
      </Container>
    </div>
  </div>
</div>

<style lang="postcss">
  :global(body) {
    @apply overflow-y-hidden;
  }

  #main {
    /*height: calc(100vh - 60px);*/

    :global(h1) {
      @apply text-4xl font-semibold;
    }
  }

  nav {
    a {
      @apply flex items-center gap-3 rounded-lg px-3 py-2 text-base text-muted-foreground hover:text-invoicer-dark;

      &.active {
        @apply bg-invoicer/5 text-invoicer-dark;
      }

      span {
        @apply -mb-1;
      }
    }
  }

  [data-clients-projects-combo] :global(.combobox button[role='combobox']) {
    @apply justify-start border-0 bg-transparent text-base font-normal shadow-none;

    &:hover {
      @apply bg-slate-50;
    }
  }
</style>
