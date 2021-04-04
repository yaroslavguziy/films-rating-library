import { useQuery } from 'react-query';

import {
  getEntitiesAPI,
  getSearchEntitiesAPI,
  getEntityAPI,
} from '#api/entities.js';

const KEY = 'entities';

export const useEntities = options => useQuery([KEY, options], getEntitiesAPI);

export const useSearchEntities = ({ queryOptions, ...options }) =>
  useQuery([KEY, options], getSearchEntitiesAPI, queryOptions);

export const useEntity = ({ queryOptions, ...options }) =>
  useQuery([KEY, options], getEntityAPI, queryOptions);
