import type { Snippet } from 'svelte';

export type PropsWithChildren<T> = T & {
  children: Snippet<[]>;
};
