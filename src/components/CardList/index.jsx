import React from 'react';

import { Card } from '#components/Card/index.jsx';
import { useEntities } from '#hooks/movies.js';

export const CardList = ({ group, category }) => {
  const { data } = useEntities({ group, category });

  return (
    <ul className="cards__list">
      {data?.results?.map(entity => (
        <li key={entity.id}>
          <Card entity={entity} />
        </li>
      ))}
    </ul>
  );
};
