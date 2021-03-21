import React from 'react';

import { useMoviePopular, useMovieTopRated } from '#hooks/movies.js';
import { Card } from '#components/Card/index.jsx';
import './movies.scss';

export const Movies = () => {
  const { isLoading, data } = useMovieTopRated();
  console.log('data', data);
  // const { isLoading1, data1 } = useMovieTopRated();
  return (
    <div className="container">
      <div className="content">
        <div className="content__item">
          <h2 className="content__title">Top Rated</h2>
          <div className="cards">
            <ul className="cards__list">
              {data?.results?.map(entity => (
                <li key={entity.id}>
                  <Card entity={entity} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
