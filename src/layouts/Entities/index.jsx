import React from 'react';
import { useIntl } from 'react-intl';
import { useParams, Link, generatePath } from 'react-router-dom';

import { List } from '#components/List/index.jsx';
import { ENTITY_TYPE } from '#constants/entities.js';
import { ROUTES } from '#constants/routes.js';

const TV_ARRAY = [
  { category: 'top_rated', key: 'TOP_RATED' },
  { category: 'popular', key: 'POPULAR' },
];

const MOVIE_ARRAY = [
  { category: 'top_rated', key: 'TOP_RATED' },
  { category: 'popular', key: 'POPULAR' },
  { category: 'upcoming', key: 'UPCOMING' },
];

const MAP_TYPE_TO_ARRAY = {
  [ENTITY_TYPE.TV]: TV_ARRAY,
  [ENTITY_TYPE.MOVIE]: MOVIE_ARRAY,
};

export const Entities = () => {
  const { formatMessage } = useIntl();
  const { type } = useParams();

  return MAP_TYPE_TO_ARRAY[type].map(({ category, key }) => (
    <div className="content__item" key={key}>
      <div className="content__header">
        <Link
          to={generatePath(ROUTES.ENTITIES_CATEGORIES, {
            type,
            category,
          })}
        >
          <h2 className="content__title">
            {formatMessage({ id: `MOVIE.${key}` })}
          </h2>
        </Link>
      </div>
      <div className="content__body">
        <div className="cards">
          <List category={category} type={type} />
        </div>
      </div>
    </div>
  ));
};
