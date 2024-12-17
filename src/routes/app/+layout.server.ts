import { ACTIVE_CLIENT_COOKIE_NAME } from '#lib/constants';

export function load({ cookies }) {
  const activeClientId = cookies.get(ACTIVE_CLIENT_COOKIE_NAME) ?? null;

  return {
    activeClientId,
  };
}
