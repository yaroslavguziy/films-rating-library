import React, { forwardRef, useMemo } from 'react';
import { oneOf, string } from 'prop-types';

import { EntitiesList } from '#components/EntitiesList/index.jsx';
import { useEntities } from '#hooks/entities.js';

export const List = forwardRef(({ type, category, view }, ref) => {
  const { data } = useEntities({
    type,
    category,
  });

  const results = useMemo(
    () =>
      data?.pages
        ? [...data.pages].reduce((acc, { results }) => acc.concat(results), [])
        : [],
    [data?.pages]
  );

  return <EntitiesList view={view} ref={ref} type={type} entities={results} />;
});

List.propTypes = {
  type: oneOf(['tv', 'movie', 'person']),
  category: string,
  view: oneOf(['card', 'list', 'carousel']),
};

List.defaultProps = {
  view: 'card',
};
