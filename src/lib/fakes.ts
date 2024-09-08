import type { Metric } from '#components/dashboard/constants';

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
