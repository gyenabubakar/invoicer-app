export type ClientSource = 'GitHub' | 'GitLab' | 'Internal';

export type Client = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: {
    readable: string;
    raw: string;
  };
  source: 'Internal' | 'GitHub' | 'GitLab';
  address: string;
};

export type ClientProject = {
  id: string;
  name: string;
  color: string;
  description: string;
  status: 'Active' | 'Inactive';
  tasks: {
    total: number;
    completed: number;
  };
  startDate: Date | null;
  endDate: Date | null;
};
