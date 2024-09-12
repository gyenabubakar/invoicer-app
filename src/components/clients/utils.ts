import type { FilterSource } from '#components/clients/types';
import { goto } from '$app/navigation';

export const CLIENTS_PAGE_CTX = Symbol();

export function onSelectedChange(queryKey: string, defaultValue: string) {
  return async (option: any) => {
    const value = option.value as FilterSource;
    const url = new URL(location.href);

    if (value === defaultValue) {
      url.searchParams.delete(queryKey);
    } else {
      url.searchParams.set(queryKey, value);
    }

    await goto(url);
  };
}
