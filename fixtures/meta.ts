import type { Meta } from '~/repo/interfaces/meta';

export const createMeta = (params?: Partial<Meta>): Meta => {
  return {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 3
    },
    ...params
  };
};

export const FakeMeta: Meta = {
  ...createMeta()
};
