import React from 'react';
import { useIntl } from 'react-intl';

import { CardList } from '#components/CardList/index.jsx';

import './movies.scss';

const ARRAY = [
  { category: 'popular', key: 'POPULAR' },
  { category: 'top_rated', key: 'TOP_RATED' },
  { category: 'upcoming', key: 'UPCOMING' },
];

export const Movies = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="container">
      <div className="content">
        {ARRAY.map(({ category, key }) => (
          <div className="content__item" key={key}>
            <h2 className="content__title">
              {formatMessage({ id: `MOVIES.${key}` })}
            </h2>
            <div className="cards">
              <CardList category={category} group="movie" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
