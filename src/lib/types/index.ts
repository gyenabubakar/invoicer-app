export type Integration = 'GitHub' | 'GitLab' | 'Internal';

/**
 * `StorageTimes` is a type that represents when a resource was created and last updated.
 */
export type StoredTimes = {
  createdAt: string;
  updatedAt: string | null;
};
