<script lang="ts">
  import * as Avatar from 'shadcn/avatar';
  import { Badge } from 'shadcn/badge';
  import { Button } from 'shadcn/button';
  import { cn } from 'shadcn/utils';

  import { getInitials } from '#lib/utils';
  import type { InvoiceStatus } from '#components/types';

  type Props = {
    avatar: string | null;
    client: string;
    invoiceNumber: string;
    invoiceStatus: InvoiceStatus;
  };

  let { avatar, client, invoiceNumber, invoiceStatus }: Props = $props();
</script>

<div data-recent-invoice class="flex gap-3 [&:not(:last-child)]:mb-3">
  <Avatar.Root class="relative">
    <Avatar.Image src={avatar} alt={client + 'avatar'} />
    <Avatar.Fallback>{getInitials(client)}</Avatar.Fallback>
  </Avatar.Root>

  <div
    data-recent-invoice-details
    class="flex flex-grow items-center justify-between pb-2"
    style="width: calc(100% - (50px + 12px));"
  >
    <div class="truncate">
      <Badge data-invoice-status class={cn(invoiceStatus.toLowerCase())}>
        {invoiceStatus}
      </Badge>
      <p
        class="mt-0.5 items-center overflow-clip text-ellipsis text-base leading-5 text-muted-foreground"
      >
        &nbsp;<span class="inline font-medium text-black">#{invoiceNumber}</span>&nbsp;&nbsp;sent to {client}.
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
