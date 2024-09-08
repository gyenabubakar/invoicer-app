<script lang="ts">
  import { tick } from 'svelte';
  import { CaretUpDown, Check, Plus } from 'phosphor-svelte';
  import { Button } from 'shadcn-ui/button';
  import * as Popover from 'shadcn-ui/popover';
  import * as Command from 'shadcn-ui/command';
  import type { ComboboxOption } from '#components/types';
  import { cn } from '#shadcn/utils';

  let className = '';
  export { className as class };
  export let open = false;
  export let value = '';
  export let options: ComboboxOption[];
  export let showAddButton = false;
  export let placeholder = 'Select an item...';
  export let searchPlaceholder = 'Search...';
  export let addLabel = 'Add new item';
  export let fallback = 'No item selected';
  export let onAdd: (() => void) | undefined = undefined;

  $: selectedOption = options.find((o) => o.value === value);
  $: selectedValue = selectedOption?.label ?? placeholder;

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  async function closeAndFocusTrigger(triggerId: string) {
    open = false;
    await tick();
    document.getElementById(triggerId)?.focus();
  }
</script>

<div class="combobox">
  <Popover.Root bind:open let:ids>
    <Popover.Trigger asChild let:builder>
      <Button
        builders={[builder]}
        variant="outline"
        role="combobox"
        aria-expanded={open}
        class={cn('justify-between', className)}
      >
        <span class="text-gray-600 truncate">{selectedValue}</span>
        <CaretUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </Popover.Trigger>
    <Popover.Content class="w-[300px] p-0 shadow-sm">
      <Command.Root>
        <Command.Input
          placeholder={searchPlaceholder}
          class="h-9 text-gray-600 placeholder-gray-600"
        />
        <Command.Empty class="text-gray-600">{fallback}</Command.Empty>
        <Command.Group>
          {#each options as option (option.value)}
            <Command.Item
              value={option.value}
              onSelect={(currentValue) => {
                value = currentValue;
                closeAndFocusTrigger(ids.trigger);
              }}
            >
              <Check class={cn('mr-2 h-4 w-4', value !== option.value && 'text-transparent')} />
              {option.label}
            </Command.Item>
          {/each}
        </Command.Group>

        {#if showAddButton}
          <Command.Separator />
          <Command.Group>
            <Command.Item onSelect={onAdd}>
              <Plus class="mr-2 h-4 w-4" />
              <span>{addLabel}</span>
            </Command.Item>
          </Command.Group>
        {/if}
      </Command.Root>
    </Popover.Content>
  </Popover.Root>
</div>

<style lang="postcss">
  .combobox {
    @apply h-max w-max;

    :global(button[role='combobox']) {
      @apply px-2;
    }
  }

  :global(div[role='option']) {
    @apply !cursor-pointer;
  }
</style>
