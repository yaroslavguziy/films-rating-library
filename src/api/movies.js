import { API_URL, API_KEY } from '#constants/env.js';

export const getMoviePopularAPI = async () =>
  await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`).then(res =>
    res.json()
  );

export const getMovieTopRatedAPI = async () =>
  await fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}`).then(res =>
    res.json()
  );

export const getMovieImagesAPI = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;

  return await fetch(
    `${API_URL}movie/${id}/images?api_key=${API_KEY}`
  ).then(res => res.json());
};
