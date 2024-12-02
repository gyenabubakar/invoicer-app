import Cookies from 'js-cookie';
import { browser } from '$app/environment';

import { ACTIVE_CLIENT_COOKIE_NAME } from '#lib/constants';
import { FAKE_CLIENTS, FAKE_PROJECTS } from '#lib/fakes';

export function load({ data }) {
  if (!data.activeClientId && browser) {
    data.activeClientId = Cookies.get(ACTIVE_CLIENT_COOKIE_NAME) ?? null;
  }

  const clients = FAKE_CLIENTS.map((client) => ({
    id: client.id,
    name: client.name,
    avatar: client.avatar,
  }));

  const projects = FAKE_PROJECTS.map((project) => ({
    id: project.id,
    name: project.name,
    color: project.color,
  }));

  return {
    ...data,
    clients,
    projects,
  };
}
