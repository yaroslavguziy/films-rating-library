import React from 'react';
import { useParams } from 'react-router-dom';

export const Movie = () => {
  const { id } = useParams();

  return <div>MOVIE: {id}</div>;
};
