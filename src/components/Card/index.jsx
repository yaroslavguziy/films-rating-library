import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Img } from '#components/Img/index.jsx';

export const Card = ({ entity }) => {
  const title = useMemo(() => entity.name || entity.title, [
    entity.name,
    entity.title,
  ]);

  return (
    <div className="card">
      <Img src={entity.poster_path} max-width="232px" max-height="300px" />
      <h3 className="card__title">{title}</h3>
      {entity.release_date ? (
        <span className="card__release-date">
          Release: {entity.release_date}
        </span>
      ) : (
        <span className="card__release-date">
          Release: {entity.first_air_date}
        </span>
      )}
      <div className="card__ratings">
        <div className="card__stars">
          <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
          <span className="card__rating">{entity.vote_average}</span>
        </div>
        <span className="card__vote"> Votes: {entity.vote_count}</span>
      </div>
    </div>
  );
};
