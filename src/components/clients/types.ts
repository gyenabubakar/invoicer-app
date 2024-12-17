export type FilterSource = 'all' | 'internal' | 'github' | 'gitlab';
export type DatesOrderType = 'ascending' | 'descending' | 'reset';

export type ClientsPageContext = {
  readonly selectedSource: FilterSource;
  readonly datesOrder: DatesOrderType;
};
