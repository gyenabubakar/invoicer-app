<!--suppress CssUnusedSymbol -->
<script lang="ts">
  import { Badge } from 'shadcn-ui/badge';
  import { Button } from 'shadcn-ui/button';
  import * as Avatar from 'shadcn-ui/avatar';
  import type { InvoiceStatus } from '#components/types';
  import { getInitials } from '#lib/utils';
  import { cn } from '#shadcn/utils';

  export let avatar: string | null;
  export let client: string;
  export let invoiceNumber: string;
  export let invoiceStatus: InvoiceStatus;
</script>

<div data-recent-invoice class="flex gap-3 [&:not(:last-child)]:mb-3">
  <Avatar.Root class="relative">
    <Avatar.Image src={avatar} alt={client + 'avatar'} />
    <Avatar.Fallback>{getInitials(client)}</Avatar.Fallback>
  </Avatar.Root>

  <div
    data-recent-invoice-details
    class="pb-2 flex-grow flex items-center justify-between"
    style="width: calc(100% - (50px + 12px));"
  >
    <div class="truncate">
      <Badge data-invoice-status class={cn(invoiceStatus.toLowerCase())}>
        {invoiceStatus}
      </Badge>
      <p
        class="text-base items-center leading-5 text-muted-foreground text-ellipsis mt-0.5 overflow-clip"
      >
        &nbsp;<span class="font-medium text-black inline">#{invoiceNumber}</span>&nbsp;&nbsp;sent to {client}.
      </p>
    </div>

    <Button variant="outline" size="sm" class="">View</Button>
  </div>
</div>

<style lang="postcss">
  :global([data-invoice-status]) {
    @apply rounded-full border font-medium shadow-none;
  }

  :global([data-invoice-status].overdue) {
    @apply bg-red-50 text-red-500 hover:bg-red-50;
  }

  :global([data-invoice-status].paid) {
    @apply bg-green-50 text-green-500 hover:bg-green-50;
  }

  :global([data-invoice-status].pending) {
    @apply bg-yellow-50 text-yellow-500 hover:bg-yellow-50;
  }

  :global([data-invoice-status].sent) {
    @apply bg-blue-50 text-blue-500 hover:bg-blue-50;
  }

  :global([data-recent-invoice]:not(:last-child) > [data-recent-invoice-details]) {
    @apply border-b border-b-gray-100;
  }
</style>
