<script lang="ts">
  import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuContent,
    DropdownMenuItem,
  } from 'shadcn-ui/dropdown-menu';
  import { Sheet, SheetContent, SheetTrigger } from 'shadcn-ui/sheet';
  import { Button } from 'shadcn-ui/button';
  import { Avatar, AvatarFallback, AvatarImage } from 'shadcn-ui/avatar';
  import { Input } from 'shadcn-ui/input';
  import { page } from '$app/stores';
  import { Combobox } from '#components';
  import {
    PhBell,
    PhUsers,
    PhHouse,
    PhList,
    PhSignOut,
    PhReceipt,
    PhKanban,
    PhMagnifyingGlass,
  } from '#components/icons';
  import { fakeAvatar } from '#lib/fakes';
  import type { ComboboxOption } from '#components/types';
  import { AppLogo } from '#components/logos';

  let activeClientId: string;
  let activeProjectId: string;

  const clients: ComboboxOption[] = [
    { value: crypto.randomUUID(), label: 'Some client with a long ass name' },
  ];
  const projects: ComboboxOption[] = [
    { value: crypto.randomUUID(), label: 'Some project with a long name' },
  ];

  $: isDashboardPage = $page.url.pathname === '/app';
  $: isClientsPage = /\/app\/clients(\/.*)?$/.test($page.url.pathname);
  $: isInvoicesPage = /\/app\/invoices(\/.*)?$/.test($page.url.pathname);
  $: isTasksPage = /\/app\/tasks(\/.*)?$/.test($page.url.pathname);

  function addClient() {
    console.log('Adding a new client...');
  }
</script>

<!-- TODO: Show this notice only if the user is not verified -->
<!-- <UnverifiedEmailNotice /> -->

<div class="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
  <aside data-desktops class="bg-muted/40 hidden border-r lg:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px]">
        <AppLogo class="w-7" href="/app" withText />

        <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
          <PhBell class="h-4 w-4" />
          <span class="sr-only">Toggle notifications</span>
        </Button>
      </div>

      <div class="flex-1">
        <form class="w-full flex-1 px-2 lg:px-4 mb-4">
          <div class="relative">
            <PhMagnifyingGlass class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search through clients, invoices, tasks..."
              class="bg-background w-full appearance-none pl-8"
            />
          </div>
        </form>

        <nav class="items-start px-2 text-sm font-medium lg:px-4">
          <a href="/app/" class="" class:active={isDashboardPage}>
            <PhHouse class="h-5 w-5" weight={isDashboardPage ? 'fill' : 'bold'} />
            <span>Dashboard</span>
          </a>
          <a href="/app/clients" class="" class:active={isClientsPage}>
            <PhUsers class="h-5 w-5" weight={isClientsPage ? 'fill' : 'bold'} />
            <span>Clients</span>
          </a>
          <a href="/app/invoices" class="" class:active={isInvoicesPage}>
            <PhReceipt class="h-5 w-5" weight={isInvoicesPage ? 'fill' : 'bold'} />
            <span>Invoices</span>
          </a>
          <a href="/app/tasks" class="" class:active={isTasksPage}>
            <PhKanban class="h-5 w-5" weight={isTasksPage ? 'fill' : 'bold'} />
            <span>Tasks</span>
          </a>
        </nav>
      </div>
    </div>
  </aside>

  <div class="flex flex-col flex-1">
    <header
      class="bg-muted/40 flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6"
    >
      <Sheet preventScroll>
        <SheetTrigger asChild let:builder>
          <Button variant="outline" size="icon" class="shrink-0 lg:hidden" builders={[builder]}>
            <PhList class="h-5 w-5" />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" class="flex flex-col">
          <nav class="items-start text-sm font-medium pt-8">
            <div class="flex h-14 items-center">
              <AppLogo class="w-7" href="/app" withText />

              <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                <PhBell class="h-4 w-4" />
                <span class="sr-only">Toggle notifications</span>
              </Button>
            </div>

            <form class="w-full flex-1 mt-4">
              <div class="relative">
                <PhMagnifyingGlass
                  class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4"
                />
                <Input
                  type="search"
                  placeholder="Search through clients, invoices, tasks..."
                  class="bg-background w-full appearance-none pl-8"
                />
              </div>
            </form>

            <a href="/app/" class="mt-6" class:active={isDashboardPage}>
              <PhHouse class="h-5 w-5" weight={isDashboardPage ? 'fill' : 'bold'} />
              <span>Dashboard</span>
            </a>
            <a href="/app/clients" class="" class:active={isClientsPage}>
              <PhUsers class="h-5 w-5" weight={isClientsPage ? 'fill' : 'bold'} />
              <span>Clients</span>
            </a>
            <a href="/app/invoices" class="" class:active={isInvoicesPage}>
              <PhReceipt class="h-5 w-5" weight={isInvoicesPage ? 'fill' : 'bold'} />
              <span>Invoices</span>
            </a>
            <a href="/app/tasks" class="" class:active={isTasksPage}>
              <PhKanban class="h-5 w-5" weight={isTasksPage ? 'fill' : 'bold'} />
              <span>Tasks</span>
            </a>
          </nav>
        </SheetContent>
      </Sheet>

      <div data-clients-projects-combo class="items-center hidden lg:flex">
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
        <span class="text-gray-300 px-2">/</span>
        <Combobox
          bind:value={activeProjectId}
          options={projects}
          placeholder="Select a project..."
          searchPlaceholder="Search projects..."
          class="w-[200px]"
        />
      </div>

      <div class="block lg:hidden">
        <AppLogo class="w-7" href="/app" withText hideTextOnExtraSmall />
      </div>

      <DropdownMenu preventScroll={true}>
        <DropdownMenuTrigger>
          <button class="flex items-center justify-center">
            <Avatar class="w-[30px] h-[30px]">
              <AvatarImage src={fakeAvatar} alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent id="user-menu" class="h-max no-underline">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a href="/app/settings">My account</a>
            </DropdownMenuItem>
            <DropdownMenuItem id="logout-link">
              <a href="/app/log-out" class="flex items-center justify-between w-full">
                <span>Log out</span>
                <PhSignOut weight="bold" />
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>

    <div class="flex items-center pt-5 px-4 mx-auto lg:hidden flex-wrap">
      <Combobox
        bind:value={activeClientId}
        options={clients}
        showAddButton
        placeholder="Select a client..."
        searchPlaceholder="Search clients..."
        addLabel="New client"
        onAdd={addClient}
      />
      <span class="text-gray-300 px-2 hidden xs:block">/</span>
      <Combobox
        bind:value={activeProjectId}
        options={projects}
        placeholder="Select a project..."
        searchPlaceholder="Search projects..."
      />
    </div>

    <div id="main" class="flex-1">
      <slot />
    </div>
  </div>
</div>

<style lang="postcss">
  #main {
    @apply p-10 pb-28;

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
