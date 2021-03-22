import React from 'react';
import { useIntl } from 'react-intl';

import { CardList } from '#components/CardList/index.jsx';

const ARRAY = [
  { group: 'tv', category: 'popular', key: 'POPULAR_TV' },
  { group: 'movie', category: 'popular', key: 'POPULAR_MOVIE' },
];

export const Home = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="container">
      <div className="content">
        {ARRAY.map(({ group, category, key }) => (
          <div className="content__item" key={key}>
            <h2 className="content__title">
              {formatMessage({ id: `HOME.${key}` })}
            </h2>
            <div className="cards">
              <CardList category={category} group={group} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
