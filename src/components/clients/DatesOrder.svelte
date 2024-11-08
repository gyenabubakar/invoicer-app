<script lang="ts">
  import { getContext } from 'svelte';

  import * as Select from 'shadcn/select';

  import { CLIENTS_PAGE_CTX, onSelectedChange } from '#components/clients/utils';
  import { Ph } from '#components/icons';
  import type { ClientsPageContext } from '#components/clients/types';

  const { datesOrder } = getContext<ClientsPageContext>(CLIENTS_PAGE_CTX);
</script>

<Select.Root
  type="single"
  controlledValue
  value={$datesOrder ?? 'descending'}
  onValueChange={onSelectedChange('order', 'reset')}
>
  <Select.Trigger class="relative flex w-[225px] shadow-none">
    <div data-dot class:visible={$datesOrder !== 'reset'}></div>

    <div class="flex items-center gap-1.5">
      {#if $datesOrder === 'reset'}
        <Ph.ArrowsDownUp class="h-6 w-6 text-muted-foreground" />
        <span>Order by dates added</span>
      {:else if $datesOrder === 'ascending'}
        <Ph.SortAscending class="h-6 w-6 text-muted-foreground" />
        <span>Date added — Ascending</span>
      {:else if $datesOrder === 'descending'}
        <Ph.SortDescending class="h-6 w-6 text-muted-foreground" />
        <span>Date added — Descending</span>
      {/if}
    </div>
  </Select.Trigger>

  <Select.Content>
    <Select.Item value="reset" class="gap-1.5">
      <Ph.Broom class="h-6 w-6 text-muted-foreground" />
      <span>None</span>
    </Select.Item>

    <Select.Item value="ascending" class="gap-1.5">
      <Ph.SortAscending class="h-6 w-6 text-muted-foreground" />
      <span>Ascending</span>
    </Select.Item>

    <Select.Item value="descending" class="gap-1.5">
      <Ph.SortDescending class="h-6 w-6 text-muted-foreground" />
      <span>Descending</span>
    </Select.Item>
  </Select.Content>
</Select.Root>
