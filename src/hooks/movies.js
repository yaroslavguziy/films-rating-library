import { useQuery } from 'react-query';

import {
  getMoviePopularAPI,
  getMovieImagesAPI,
  getMovieTopRatedAPI,
} from '#api/movies.js';

const KEY = 'movies';

export const useMoviePopular = () => useQuery(KEY, getMoviePopularAPI);
export const useMovieTopRated = () => useQuery(KEY, getMovieTopRatedAPI);

export const useMovieImages = options =>
  useQuery([KEY, options], getMovieImagesAPI);
