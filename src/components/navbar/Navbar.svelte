<script lang="ts">
  import { SignOut } from 'phosphor-svelte';
  import * as DropdownMenu from 'shadcn-ui/dropdown-menu';
  import { Avatar, AvatarFallback, AvatarImage } from 'shadcn-ui/avatar';
  import { Combobox, Container, Logo } from '#components';
  import type { ComboboxOption } from '#components/types';
  import { fakeAvatar } from '#lib/fakes';
  import { page } from '$app/stores';

  let activeClientId: string;
  let activeProjectId: string;

  const clients: ComboboxOption[] = [{ value: crypto.randomUUID(), label: 'Some client' }];
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

<header>
  <Container size="lg" class="h-[50px] py-2 flex items-center justify-between">
    <Logo class="w-7" href="/app" withText />

    <nav>
      <ul class="flex items-center space-x-4">
        <li>
          <a href="/app" class="text-invoicer-dark" class:active={isDashboardPage}>Dashboard</a>
        </li>
        <li>
          <a href="/app/clients" class="text-invoicer-dark" class:active={isClientsPage}>Clients</a>
        </li>
        <li>
          <a href="/app/invoices" class="text-invoicer-dark" class:active={isInvoicesPage}>
            Invoices
          </a>
        </li>
        <li>
          <a href="/app/tasks" class="text-invoicer-dark" class:active={isTasksPage}>Tasks</a>
        </li>
      </ul>
    </nav>

    <DropdownMenu.Root preventScroll={false}>
      <DropdownMenu.Trigger>
        <button class="flex items-center justify-center">
          <Avatar class="w-[30px] h-[30px]">
            <AvatarImage src={fakeAvatar} alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content id="user-menu" class="h-max no-underline">
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <a href="/app/settings">My account</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item id="logout-link">
            <a href="/app/log-out" class="flex items-center justify-between w-full">
              <span>Log out</span>
              <SignOut weight="bold" />
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Container>
</header>

<Container id="orgs-projects-nav-wrapper" size="md">
  <div id="orgs-projects-nav" class="flex items-center">
    <Combobox
      bind:value={activeClientId}
      options={clients}
      showAddButton
      placeholder="Select a client..."
      searchPlaceholder="Search clients..."
      addLabel="New client"
      onAdd={addClient}
    />
    <span class="text-gray-300 px-2">/</span>
    <Combobox
      bind:value={activeProjectId}
      options={projects}
      placeholder="Select a project..."
      searchPlaceholder="Search projects..."
    />
  </div>
</Container>

<style lang="postcss">
  header {
    @apply border-b bg-white;

    nav {
      a {
        @apply relative font-medium text-gray-400 no-underline hover:text-gray-600;

        &.active {
          @apply text-gray-600;

          &::after {
            content: '';
            @apply absolute -bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 transform rounded-full bg-invoicer;
          }
        }
      }
    }
  }

  #orgs-projects-nav {
    @apply mt-4 flex items-center rounded-md border bg-white p-2;
  }

  :global(.combobox button[role='combobox']) {
    @apply w-max justify-start border-0 text-base font-normal shadow-none;

    &:hover {
      @apply bg-slate-50;
    }
  }

  /*noinspection CssUnusedSymbol*/
  :global(#logout-link) {
    @apply hover:bg-red-50;

    & a {
      @apply text-red-500;
    }
  }

  :global(#user-menu a) {
    @apply no-underline;
  }
</style>
