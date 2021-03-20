import { useQuery } from 'react-query';

import { getMoviePopularAPI } from '#api/movies.js';

const KEY = 'movies';

export const useMoviePopular = () => useQuery(KEY, getMoviePopularAPI);
