import { ACTIVE_CLIENT_COOKIE_NAME } from '#lib/constants';
import type { LayoutServerLoadEvent } from './$types';

export function load({ cookies }: LayoutServerLoadEvent) {
  const activeClientId: string | null = cookies.get(ACTIVE_CLIENT_COOKIE_NAME) ?? null;

  return {
    activeClientId,
  };
}
