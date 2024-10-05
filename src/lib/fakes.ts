import type { Metric } from '#components/dashboard/constants';
import type { ClientProject, Integration } from '#lib/types';

export const FAKE_AVATAR =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const FAKE_GRAPH_DATA: Record<Metric, { dates: Date[]; values: number[] }> = {
  totalRevenue: {
    dates: [
      new Date('2021-09-01'),
      new Date('2021-09-02'),
      new Date('2021-09-03'),
      new Date('2021-09-04'),
      new Date('2021-09-05'),
      new Date('2021-09-06'),
      new Date('2021-09-07'),
    ],
    values: [100.0, 410.0, 350.0, 510.0, 490.0, 620.0, 690.0],
  },

  billableHours: {
    dates: [
      new Date('2021-09-01'),
      new Date('2021-09-02'),
      new Date('2021-09-03'),
      new Date('2021-09-04'),
      new Date('2021-09-05'),
      new Date('2021-09-06'),
      new Date('2021-09-07'),
    ],
    values: [5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0],
  },

  avgHourlyRate: {
    dates: [
      new Date('2021-09-01'),
      new Date('2021-09-02'),
      new Date('2021-09-03'),
      new Date('2021-09-04'),
      new Date('2021-09-05'),
      new Date('2021-09-06'),
      new Date('2021-09-07'),
    ],
    values: [50.0, 60.0, 70.0, 80.0, 90.0, 100.0, 110.0],
  },

  tasksCompleted: {
    dates: [
      new Date('2021-09-01'),
      new Date('2021-09-02'),
      new Date('2021-09-03'),
      new Date('2021-09-04'),
      new Date('2021-09-05'),
      new Date('2021-09-06'),
      new Date('2021-09-07'),
    ],
    values: [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0],
  },
};

export const FAKE_CLIENTS = [
  {
    id: crypto.randomUUID(),
    name: 'Acme Corp',
    avatar: FAKE_AVATAR,
    products: 5,
    tasks: {
      ongoing: 3,
      completed: 9,
    },
    invoices: 3,
    source: 'GitHub' as Integration,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Globex Corp',
    avatar: FAKE_AVATAR,
    products: 5,
    tasks: {
      ongoing: 4,
      completed: 8,
    },
    invoices: 3,
    source: 'GitLab' as Integration,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Initech',
    avatar: FAKE_AVATAR,
    products: 5,
    tasks: {
      ongoing: 0,
      completed: 10,
    },
    invoices: 3,
    source: 'Internal' as Integration,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const FAKE_PROJECTS: ClientProject[] = [
  {
    id: 'project-1',
    name: "Gyen's Invoicer",
    color: '#FF0000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto autem consectetur corporis deleniti dolorem, ducimus eius eligendi in labore maiores mollitia, neque quod reprehenderit tenetur. At blanditiis ullam velit.',
    status: 'Inactive',
    startDate: new Date('2021-09-01'),
    endDate: new Date('2024-12-31'),
    source: 'GitHub',
    sourceURL: 'https://github.com/gyenabubakar/invoicer',
    tasks: {
      total: 10,
      completed: 5,
    },
  },
  {
    id: 'project-2',
    name: 'Survie',
    color: '#6DBC45',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto autem consectetur corporis deleniti dolorem, ducimus eius eligendi in labore maiores mollitia, neque quod reprehenderit tenetur. At blanditiis ullam velit.',
    status: 'Active',
    startDate: null,
    endDate: null,
    source: 'GitLab',
    sourceURL: 'https://gitlab.com/gyenabubakar/survie',
    tasks: {
      total: 10,
      completed: 5,
    },
  },
  {
    id: 'project-3',
    name: 'Linear',
    color: '#0000FF',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto autem consectetur corporis deleniti dolorem, ducimus eius eligendi in labore maiores mollitia, neque quod reprehenderit tenetur. At blanditiis ullam velit.',
    status: 'Inactive',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2025-08-31'),
    source: 'Internal',
    sourceURL: null,
    tasks: {
      total: 10,
      completed: 5,
    },
  },
  {
    id: 'project-4',
    name: 'Survie API',
    color: '#FF00FF',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto autem consectetur corporis deleniti dolorem, ducimus eius eligendi in labore maiores mollitia, neque quod reprehenderit tenetur. At blanditiis ullam velit.',
    status: 'Active',
    startDate: new Date('2024-09-01'),
    endDate: new Date('2025-12-31'),
    source: 'Internal',
    sourceURL: null,
    tasks: {
      total: 10,
      completed: 5,
    },
  },
];
