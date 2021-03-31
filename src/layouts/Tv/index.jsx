import React from 'react';
import { useIntl } from 'react-intl';

import { List } from '#components/List/index.jsx';

const ARRAY = [
  { category: 'top_rated', key: 'TOP_RATED' },
  { category: 'popular', key: 'POPULAR' },
];

export const Tv = () => {
  const { formatMessage } = useIntl();

  return ARRAY.map(({ category, key }) => (
    <div className="content__item" key={key}>
      <div className="content__header">
        <h2 className="content__title">{formatMessage({ id: `TV.${key}` })}</h2>
      </div>
      <div className="content__body">
        <div className="cards">
          <List category={category} group="tv" />
        </div>
      </div>
    </div>
  ));
};
