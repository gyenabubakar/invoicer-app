import type { Integration, StoredTimes } from '#lib/types';

type ClientPhone = {
  raw: string;
  readable: string;
};

type ClientTasksCounts = {
  todo: number;
  ongoing: number;
  completed: number;
};

type ClientAddress = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type Client = StoredTimes & {
  id: string;
  name: string;
  avatar: string | null;
  email: string;
  phone: ClientPhone | null;
  source: Integration;
  address: ClientAddress;
  tasks: ClientTasksCounts;
};

export type ClientProject = StoredTimes & {
  id: string;
  name: string;
  color: string;
  description: string;
  status: 'Active' | 'Inactive';
  source: Integration;
  sourceURL: string | null;
  tasks: {
    total: number;
    completed: number;
  };
  startDate: string | null;
  endDate: string | null;
};

export type MiniClient = {
  id: string;
  name: string;
  avatar: string | null;
};

export type MiniProject = {
  id: string;
  name: string;
  color: string;
};
