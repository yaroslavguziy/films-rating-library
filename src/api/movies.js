import { API_URL, API_KEY } from '#constants/env.js';

export const getEntitiesAPI = async ({ queryKey }) => {
  const [_key, { group, category }] = queryKey;

  return await fetch(
    `${API_URL}${group}/${category}?api_key=${API_KEY}`
  ).then(res => res.json());
};

export const getMovieImagesAPI = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;

  return await fetch(
    `${API_URL}movie/${id}/images?api_key=${API_KEY}`
  ).then(res => res.json());
};

export const getSearchEntitiesAPI = async ({ queryKey }) => {
  const [_key, { query, page, group }] = queryKey;

  return await fetch(
    `${API_URL}search/${group}?api_key=${API_KEY}&${page}&${query}`
  ).then(res => res.json());
};
