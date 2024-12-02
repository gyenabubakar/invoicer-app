import { faker } from '@faker-js/faker';

import type { Metric } from '#components/dashboard/constants';
import type { Client, ClientProject } from '#lib/clients/types';
import type { Integration } from '#lib/types';

faker.seed(123);

export const FAKE_AVATAR =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const dates = [
  new Date('2021-09-01'),
  new Date('2021-09-02'),
  new Date('2021-09-03'),
  new Date('2021-09-04'),
  new Date('2021-09-05'),
  new Date('2021-09-06'),
  new Date('2021-09-07'),
];
export const FAKE_GRAPH_DATA: Record<Metric, { dates: Date[]; values: number[] }> = {
  totalRevenue: {
    dates,
    values: faker.helpers.multiple(
      () => Number(Number(faker.finance.amount({ min: 100, max: 1000 })).toFixed(2)),
      { count: 7 },
    ),
  },

  billableHours: {
    dates,
    values: faker.helpers.multiple(
      () => Number(faker.number.float({ min: 1, max: 12 }).toFixed(2)),
      { count: 7 },
    ),
  },

  avgHourlyRate: {
    dates,
    values: faker.helpers.multiple(
      () => Number(faker.number.float({ min: 50, max: 100 }).toFixed(2)),
      { count: 7 },
    ),
  },

  tasksCompleted: {
    dates,
    values: faker.helpers.multiple(() => Number(faker.number.int({ min: 1, max: 10 })), {
      count: 7,
    }),
  },
};

export const FAKE_CLIENTS: Client[] = [
  {
    id: faker.string.uuid(),
    name: faker.company.name(),
    avatar: FAKE_AVATAR,
    email: faker.internet.email(),
    address: {
      street: faker.location.streetAddress({ useFullAddress: true }),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
    phone: {
      raw: faker.phone.number({ style: 'international' }),
      readable: faker.phone.number({ style: 'human' }),
    },
    tasks: {
      ongoing: 3,
      completed: 9,
      todo: 0,
    },
    source: 'GitHub' as Integration,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: faker.string.uuid(),
    name: faker.company.name(),
    avatar: null,
    email: faker.internet.email(),
    address: {
      street: faker.location.streetAddress({ useFullAddress: true }),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
    phone: {
      raw: faker.phone.number({ style: 'international' }),
      readable: faker.phone.number({ style: 'human' }),
    },
    tasks: {
      ongoing: 4,
      completed: 8,
      todo: 3,
    },
    source: 'GitLab' as Integration,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: faker.string.uuid(),
    name: faker.company.name(),
    avatar: FAKE_AVATAR,
    email: faker.internet.email(),
    address: {
      street: faker.location.streetAddress({ useFullAddress: true }),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
    phone: {
      raw: faker.phone.number({ style: 'international' }),
      readable: faker.phone.number({ style: 'human' }),
    },
    tasks: {
      ongoing: 0,
      completed: 10,
      todo: 1,
    },
    source: 'Internal' as Integration,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const FAKE_PROJECTS: ClientProject[] = [
  {
    id: 'project-1',
    name: "Gyen's Invoicer",
    color: '#FF0000',
    description: faker.lorem.sentences(2),
    status: 'Inactive',
    source: 'GitHub',
    sourceURL: 'https://github.com/gyenabubakar/invoicer',
    tasks: {
      total: 10,
      completed: 5,
    },
    startDate: new Date('2021-09-01').toISOString(),
    endDate: new Date('2024-12-31').toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'project-2',
    name: 'Survie',
    color: '#6DBC45',
    description: faker.lorem.sentences(2),
    status: 'Active',
    startDate: null,
    endDate: null,
    source: 'GitLab',
    sourceURL: 'https://gitlab.com/gyenabubakar/survie',
    tasks: {
      total: 10,
      completed: 5,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'project-3',
    name: 'Linear',
    color: '#0000FF',
    description: faker.lorem.sentences(3),
    status: 'Inactive',
    source: 'Internal',
    sourceURL: null,
    tasks: {
      total: 10,
      completed: 5,
    },
    startDate: new Date('2024-03-01').toISOString(),
    endDate: new Date('2025-08-31').toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'project-4',
    name: 'Survie API',
    color: '#FF00FF',
    description: '',
    status: 'Active',
    source: 'Internal',
    sourceURL: null,
    tasks: {
      total: 10,
      completed: 5,
    },
    startDate: new Date('2024-09-01').toISOString(),
    endDate: new Date('2025-12-31').toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
