import { API_URL, API_KEY } from '#constants/env.js';

export const getMoviePopularAPI = async () =>
  await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`).then(res =>
    res.json()
  );
