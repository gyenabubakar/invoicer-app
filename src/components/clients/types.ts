import type { Readable } from 'svelte/store';

export type FilterSource = 'all' | 'internal' | 'github' | 'gitlab';

export type ClientsPageContext = {
  selectedSource: Readable<{ value: FilterSource }>;
};
