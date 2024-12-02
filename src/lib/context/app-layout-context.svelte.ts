import { getContext, setContext } from 'svelte';
import { get } from 'svelte/store';
import Cookies from 'js-cookie';
import { page } from '$app/stores';
import type { Unsubscriber } from 'svelte/store';

import { ACTIVE_CLIENT_COOKIE_NAME } from '#lib/constants';
import type { MiniClient, MiniProject } from '#lib/clients/types';

type ContextConfig = {
  activeClientId: string | null;
  clients: MiniClient[];
  projects: MiniProject[];
};

const APP_LAYOUT_CONTEXT_KEY = 'APP_LAYOUT_CONTEXT';

export class AppLayoutContext {
  private path = $state(get(page).url.pathname);
  private activeClientId = $state<string | null>(null);
  readonly clients: MiniClient[] = $state([]);
  readonly projects: MiniProject[] = $state([]);

  private readonly pageStoreUnsubscribe: Unsubscriber;

  constructor(init: ContextConfig) {
    this.activeClientId = init.activeClientId;
    this.clients = init.clients;
    this.projects = init.projects;

    this.pageStoreUnsubscribe = page.subscribe((newPage) => {
      this.path = newPage.url.pathname;
    });

    setContext(APP_LAYOUT_CONTEXT_KEY, this);
  }

  static use() {
    const context = getContext<AppLayoutContext | null>(APP_LAYOUT_CONTEXT_KEY);
    if (!context) {
      throw new Error(`Cannot use AppLayoutContext outside of app layout tree.`);
    }
    return context;
  }

  get activePage() {
    const isDashboard = this.path === '/app';
    const isClients = this.path.startsWith('/app/clients');
    const isInvoices = this.path.startsWith('/app/invoices');
    const isTasks = this.path.startsWith('/app/tasks');
    return {
      isDashboard,
      isClients,
      isInvoices,
      isTasks,
    };
  }

  get activeClient() {
    return this.clients.find((client) => client.id === this.activeClientId) ?? null;
  }

  setActiveClientId(id: string) {
    Cookies.set(ACTIVE_CLIENT_COOKIE_NAME, id);
    this.activeClientId = id;
  }

  destroy() {
    this.pageStoreUnsubscribe();
  }
}
