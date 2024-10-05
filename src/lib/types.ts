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
