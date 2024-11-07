<script lang="ts" module>
  import { CalendarDate } from '@internationalized/date';

  export const DEFAULT_DATE_RANGE: DateRange = {
    start: new CalendarDate(2022, 1, 20),
    end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
  };
</script>

<script lang="ts">
  import type { DateRange } from 'bits-ui';
  import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
  import { cn } from 'shadcn/utils';
  import { Button } from 'shadcn/button';
  import { RangeCalendar } from 'shadcn/range-calendar';
  import * as Popover from 'shadcn/popover';
  import { PhCalendarBlank } from '#components/icons';

  const df = new DateFormatter('en-US', {
    dateStyle: 'medium',
  });

  type Props = {
    value: DateRange;
  };

  let { value = $bindable(DEFAULT_DATE_RANGE) }: Props = $props();

  let startValue: DateValue | undefined = $state(value?.start);
</script>

<div class="grid gap-2">
  <Popover.Root>
    <Popover.Trigger>
      {#snippet child({ props })}
        <Button
          variant="outline"
          class={cn(
            'justify-start text-left text-base font-normal',
            !value && 'text-muted-foreground',
          )}
          {...props}
        >
          <PhCalendarBlank class="mr-2 h-4 w-4" />
          {#if value && value.start}
            {#if value.end}
              {df.format(value.start.toDate(getLocalTimeZone()))} - {df.format(
                value.end.toDate(getLocalTimeZone()),
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
      {/snippet}
    </Popover.Trigger>
    <Popover.Content class="w-auto p-0" align="start">
      <RangeCalendar
        bind:value
        minValue={DEFAULT_DATE_RANGE.start}
        placeholder={value?.start}
        numberOfMonths={2}
      />
    </Popover.Content>
  </Popover.Root>
</div>
