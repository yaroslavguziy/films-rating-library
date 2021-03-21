import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { IMG_URL } from '#constants/env.js';

import './card.scss';

export const Card = ({ entity }) => {
  console.log('Card', entity);
  return (
    <div className="card">
      <img
        className="card__image"
        src={`${IMG_URL}${entity.poster_path}`}
        loading="lazy"
        max-width="200px"
        max-height="300px"
      />
      <h3 className="card__title">{entity.title}</h3>
      <span className="card__release-date">Release: {entity.release_date}</span>
      <div className="card__ratings">
        <div className="card__stars">
          <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
          <span className="card__rating">{entity.vote_average}</span>
        </div>
        <span className="card__vote"> Votes: {entity.vote_count}</span>
      </div>

      {/* <span className="movie__popularity">{entity.popularity}</span>
      <span className="movie__description">{entity.overview}</span> */}
      {/* <span className="movie__popularity">{entity.popularity}</span> */}
      {/* {entity.id} */}
    </div>
  );
};