import React from 'react';

import { useMoviePopular } from '#hooks/movies.js';

export const Movies = () => {
  const { isLoading, data } = useMoviePopular();
  console.log('data', data);
  return (
    <ul>
      {data?.results?.map(entity => (
        <li key={entity.id}>{entity.title}</li>
      ))}
    </ul>
  );
};
