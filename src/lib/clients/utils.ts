import { getContext } from 'svelte';
import type { Writable } from 'svelte/store';
import type { Client } from '#lib/types';

type ClientsContext = {
  client: Writable<Client>;
};

export const clientsContextKey = Symbol();

export function useClientsContext() {
  return getContext<ClientsContext>(clientsContextKey);
}
