<script lang="ts">
  import { CaretUpDown, Check, Plus } from 'phosphor-svelte';
  import { Button } from 'shadcn/button';
  import * as Popover from 'shadcn/popover';
  import * as Command from 'shadcn/command';
  import type { ComboboxOption } from '#components/types';
  import { cn } from 'shadcn/utils';
  import { tick } from 'svelte';

  type Props = {
    class?: string;
    open?: boolean;
    value?: string;
    options: ComboboxOption[];
    showAddButton?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    addLabel?: string;
    fallback?: string;
    onAdd?: () => void;
  };

  let {
    class: className,
    open = $bindable(false),
    value = $bindable(''),
    options = [],
    showAddButton = false,
    placeholder = 'Select an item...',
    searchPlaceholder = 'Search...',
    addLabel = 'Add new item',
    fallback = 'No item selected',
    onAdd,
  }: Props = $props();

  let triggerRef = $state<HTMLButtonElement>(null!);

  let selectedOption = $derived(options.find((o) => o.value === value));
  let selectedValue = $derived(selectedOption?.label ?? placeholder);

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  async function closeAndFocusTrigger() {
    open = false;
    await tick();
    triggerRef.focus();
  }
</script>

<div class="combobox">
  <Popover.Root bind:open>
    <Popover.Trigger bind:ref={triggerRef}>
      {#snippet child({ props })}
        <Button
          variant="outline"
          class={cn('justify-between', className)}
          {...props}
          role="combobox"
          aria-expanded={open}
        >
          <span class="truncate text-gray-600">{selectedValue}</span>
          <CaretUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      {/snippet}
    </Popover.Trigger>
    <Popover.Content preventScroll class="w-[300px] p-0 shadow-sm">
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
              onSelect={() => {
                value = option.value;
                closeAndFocusTrigger();
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
