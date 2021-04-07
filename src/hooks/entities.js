import { useQuery, useInfiniteQuery } from 'react-query';

import {
  getEntitiesAPI,
  getSearchEntitiesAPI,
  getEntityAPI,
  getEntitySimilarAPI,
} from '#api/entities.js';

const KEY = 'entities';

export const useEntities = options =>
  useInfiniteQuery([KEY, options], getEntitiesAPI, {
    getNextPageParam: ({ page, total_pages }) => {
      const nextPage = page + 1;
      return nextPage > total_pages ? false : nextPage;
    },
  });

export const useSearchEntities = ({ queryOptions, ...options }) =>
  useQuery([KEY, options], getSearchEntitiesAPI, queryOptions);

export const useEntity = ({ queryOptions, ...options }) =>
  useQuery([KEY, options], getEntityAPI, queryOptions);

export const useEntitySimilar = ({ queryOptions, ...options }) =>
  useQuery([`${KEY}/similar`, options], getEntitySimilarAPI, queryOptions);
