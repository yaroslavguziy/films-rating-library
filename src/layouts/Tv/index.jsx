import React from 'react';
import { useIntl } from 'react-intl';

import { CardList } from '#components/CardList/index.jsx';

const ARRAY = [
  { category: 'popular', key: 'POPULAR' },
  { category: 'top_rated', key: 'TOP_RATED' },
];

export const Tv = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="container">
      <div className="content">
        {ARRAY.map(({ category, key }) => (
          <div className="content__item" key={key}>
            <h2 className="content__title">
              {formatMessage({ id: `TV.${key}` })}
            </h2>
            <div className="cards">
              <CardList category={category} group="tv" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
