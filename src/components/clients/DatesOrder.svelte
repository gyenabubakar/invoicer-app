<script lang="ts">
  import { getContext } from 'svelte';
  import * as Select from 'shadcn-ui/select';
  import type { ClientsPageContext } from '#components/clients/types';
  import { CLIENTS_PAGE_CTX, onSelectedChange } from '#components/clients/utils';
  import { PhBroom, PhSortAscending, PhSortDescending, PhArrowsDownUp } from '#components/icons';

  const { datesOrder } = getContext<ClientsPageContext>(CLIENTS_PAGE_CTX);
</script>

<Select.Root
  selected={{ value: $datesOrder }}
  onSelectedChange={onSelectedChange('order', 'reset')}
>
  <Select.Trigger class="w-[225px] flex shadow-none">
    <div class="flex items-center gap-1.5">
      {#if $datesOrder === 'reset'}
        <PhArrowsDownUp class="w-6 h-6 text-muted-foreground" />
        <span>Order by dates added</span>
      {:else if $datesOrder === 'ascending'}
        <PhSortAscending class="w-6 h-6 text-muted-foreground" />
        <span>Date added — Ascending</span>
      {:else if $datesOrder === 'descending'}
        <PhSortDescending class="w-6 h-6 text-muted-foreground" />
        <span>Date added — Descending</span>
      {/if}
    </div>
  </Select.Trigger>

  <Select.Content>
    <Select.Item value="reset" class="gap-1.5">
      <PhBroom class="w-6 h-6 text-muted-foreground" />
      <span>None</span>
    </Select.Item>

    <Select.Item value="ascending" class="gap-1.5">
      <PhSortAscending class="w-6 h-6 text-muted-foreground" />
      <span>Ascending</span>
    </Select.Item>

    <Select.Item value="descending" class="gap-1.5">
      <PhSortDescending class="w-6 h-6 text-muted-foreground" />
      <span>Descending</span>
    </Select.Item>
  </Select.Content>
</Select.Root>
