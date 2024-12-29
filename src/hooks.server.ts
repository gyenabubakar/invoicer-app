import { redirect } from '@sveltejs/kit';

export function handle({ event, resolve }) {
  if (event.url.pathname === '/') redirect(308, '/app');
  return resolve(event);
}
