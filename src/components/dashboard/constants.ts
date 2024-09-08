import { PhCheckSquare, PhCoins, PhCurrencyDollar, PhTimer } from '#components/icons';

export const METRICS_COLOURS = {
  totalRevenue: {
    background: 'rgb(243,232,255)',
    foreground: 'rgb(168,85,247)',
  },
  billableHours: {
    background: 'rgb(219,234,254)',
    foreground: 'rgb(59,130,246)',
  },
  avgHourlyRate: {
    background: 'rgb(220,252,231)',
    foreground: 'rgb(34,197,94)',
  },
  tasksCompleted: {
    background: 'rgb(252,231,243)',
    foreground: 'rgb(236,72,153)',
  },
};

export type Metric = keyof typeof METRICS_COLOURS;

export const METRICS_TITLES: Record<Metric, string> = {
  totalRevenue: 'Total Revenue',
  billableHours: 'Billable Hours',
  avgHourlyRate: 'Average Hourly Rate',
  tasksCompleted: 'Tasks Completed',
};

export const METRICS_Y_AXIS_LABELS: Record<Metric, string> = {
  totalRevenue: 'Amount ($)',
  billableHours: 'Hours',
  avgHourlyRate: 'Rate ($)',
  tasksCompleted: 'Tasks',
};

export const METRICS_ICONS: Record<Metric, any> = {
  totalRevenue: PhCurrencyDollar,
  billableHours: PhTimer,
  avgHourlyRate: PhCoins,
  tasksCompleted: PhCheckSquare,
};
