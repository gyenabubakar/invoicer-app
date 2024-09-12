import type { Readable } from 'svelte/store';

export type FilterSource = 'all' | 'internal' | 'github' | 'gitlab';
export type DatesOrderType = 'ascending' | 'descending' | 'reset';

export type ClientsPageContext = {
  selectedSource: Readable<FilterSource>;
  datesOrder: Readable<DatesOrderType>;
};
