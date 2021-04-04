import { API_URL, API_KEY } from '#constants/env.js';

export const getEntitiesAPI = async ({ queryKey }) => {
  const [_key, { type, category }] = queryKey;

  return await fetch(
    `${API_URL}${type}/${category}?api_key=${API_KEY}`
  ).then(res => res.json());
};

export const getSearchEntitiesAPI = async ({ queryKey }) => {
  const [_key, { query }] = queryKey;

  return await fetch(
    `${API_URL}search/multi?api_key=${API_KEY}&query=${query}`
  ).then(res => res.json());
};

export const getEntityAPI = async ({ queryKey }) => {
  const [_key, { type, id }] = queryKey;

  return await fetch(`${API_URL}${type}/${id}?api_key=${API_KEY}`).then(res =>
    res.json()
  );
};
