import { useQuery } from 'react-query';

import {
  getMovieImagesAPI,
  getEntitiesAPI,
  getSearchEntitiesAPI,
} from '#api/movies.js';

const KEY = 'movies';

export const useEntities = options => useQuery([KEY, options], getEntitiesAPI);

export const useMovieImages = options =>
  useQuery([KEY, options], getMovieImagesAPI);

export const useSearchEntities = ({ queryOptions, ...options }) =>
  useQuery([KEY, options], getSearchEntitiesAPI, queryOptions);
