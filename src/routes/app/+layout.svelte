<script lang="ts">
import { onDestroy } from 'svelte';
import { scale } from 'svelte/transition';

import { Separator } from 'shadcn/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from 'shadcn/sidebar';

import { Container } from '#components';
import { AppSidebar } from '#components/layouts/app-layout';
import { ClientSwitcher } from '#components/layouts/app-layout/index.js';
import { AppLayoutContext } from '#lib/context';
import type { PropsWithChildren } from '#lib/types/utils';
import type { LayoutData } from './$types';

type Props = PropsWithChildren<{
  data: LayoutData;
}>;

let { children, data }: Props = $props();

const _layoutContext = new AppLayoutContext(data);
</script>

<!-- TODO: Show this notice only if the user is not verified -->
<!-- <UnverifiedEmailNotice /> -->

<div in:scale={{ start: 1.1, duration: 1_000, delay: 100 }}>
  <SidebarProvider>
    <AppSidebar />

    <SidebarInset class="overflow-hidden" style="height: calc(100svh - 1rem)">
      <header class="flex h-12 shrink-0 items-center justify-between border-b pr-4">
        <div class="flex items-center gap-2 pl-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="h-4" />
        </div>

        <ClientSwitcher />
      </header>

      <div id="main" class="overflow-y-auto p-10 pb-52" style="height: calc(100vh - 4rem)">
        <Container>
          {@render children?.()}
        </Container>
      </div>
    </SidebarInset>
  </SidebarProvider>
</div>

<style lang="postcss">
:global(body) {
  @apply overflow-hidden;
}

#main {
  scrollbar-color: theme(colors.slate.300) transparent;

  :global(h1) {
    @apply text-4xl font-semibold;
  }
}
</style>
