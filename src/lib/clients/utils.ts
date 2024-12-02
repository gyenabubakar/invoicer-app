import { getContext } from 'svelte';

import type { Client } from '#lib/clients/types';

type ClientsContext = {
  client: Readonly<Client>;
};

export const clientsContextKey = Symbol();

export function useClientsContext() {
  return getContext<ClientsContext>(clientsContextKey);
}
