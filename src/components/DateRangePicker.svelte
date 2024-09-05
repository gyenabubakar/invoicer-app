<script lang="ts">
  import type { DateRange } from 'bits-ui';
  import {
    CalendarDate,
    DateFormatter,
    type DateValue,
    getLocalTimeZone,
  } from '@internationalized/date';
  import { cn } from '#components/shadcn/utils';
  import { Button } from 'shadcn-ui/button';
  import { RangeCalendar } from 'shadcn-ui/range-calendar';
  import * as Popover from 'shadcn-ui/popover';
  import { PhCalendarBlank } from '#components/icons';

  const df = new DateFormatter('en-US', {
    dateStyle: 'medium',
  });

  export let value: DateRange | undefined = {
    // @ts-ignore
    start: new CalendarDate(2022, 1, 20),
    // @ts-ignore
    end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
  };

  let startValue: DateValue | undefined = undefined;
</script>

<div class="grid gap-2">
  <Popover.Root openFocus>
    <Popover.Trigger asChild let:builder>
      <Button
        variant="outline"
        class={cn(
          'justify-start text-left font-normal text-base',
          !value && 'text-muted-foreground'
        )}
        builders={[builder]}
      >
        <PhCalendarBlank class="mr-2 h-4 w-4" />
        {#if value && value.start}
          {#if value.end}
            {df.format(value.start.toDate(getLocalTimeZone()))} - {df.format(
              value.end.toDate(getLocalTimeZone())
            )}
          {:else}
            {df.format(value.start.toDate(getLocalTimeZone()))}
          {/if}
        {:else if startValue}
          {df.format(startValue.toDate(getLocalTimeZone()))}
        {:else}
          Pick a date
        {/if}
      </Button>
    </Popover.Trigger>
    <Popover.Content class="w-auto p-0" align="start">
      <RangeCalendar
        bind:value
        bind:startValue
        placeholder={value?.start}
        initialFocus
        numberOfMonths={2}
      />
    </Popover.Content>
  </Popover.Root>
</div>
