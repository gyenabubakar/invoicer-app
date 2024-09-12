<script lang="ts">
  import { getContext } from 'svelte';
  import * as Select from 'shadcn-ui/select';
  import { AppLogo, GitHubLogo, GitLabLogo } from '#components/logos';
  import { PhSquaresFour } from '#components/icons';
  import { CLIENTS_PAGE_CTX, onSelectedChange } from '#components/clients/utils';
  import type { ClientsPageContext } from '#components/clients/types';

  const { selectedSource } = getContext<ClientsPageContext>(CLIENTS_PAGE_CTX);
</script>

<Select.Root selected={$selectedSource} onSelectedChange={onSelectedChange('source', 'all')}>
  <Select.Trigger class="w-[150px] flex shadow-none">
    {#if $selectedSource.value === 'all'}
      <div class="flex items-center gap-1.5">
        <PhSquaresFour class="w-6 h-6 text-muted-foreground" />
        <span>All sources</span>
      </div>
    {:else if $selectedSource.value === 'internal'}
      <div class="flex items-center gap-1.5">
        <AppLogo href={null} class="w-5" />
        <span>Internal</span>
      </div>
    {:else if $selectedSource.value === 'github'}
      <div class="flex items-center gap-1.5">
        <GitHubLogo class="w-5" />
        <span>GitHub</span>
      </div>
    {:else if $selectedSource.value === 'gitlab'}
      <div class="flex items-center gap-1.5">
        <GitLabLogo class="w-5" />
        <span>GitLab</span>
      </div>
    {/if}
  </Select.Trigger>

  <Select.Content>
    <Select.Item value="all" class="gap-1">
      <PhSquaresFour class="w-6 h-6 text-muted-foreground" />
      <span>All sources</span>
    </Select.Item>

    <Select.Item value="internal" class="gap-1.5">
      <AppLogo href={null} class="w-5" />
      <span>Internal</span>
    </Select.Item>

    <Select.Item value="github" class="gap-1.5">
      <GitHubLogo class="w-5" />
      <span>GitHub</span>
    </Select.Item>

    <Select.Item value="gitlab" class="gap-1.5">
      <GitLabLogo class="w-5" />
      <span>GitLab</span>
    </Select.Item>
  </Select.Content>
</Select.Root>
