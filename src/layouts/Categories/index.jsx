import React, { useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { useIntersectionObserver } from '#hooks/useIntersectionObserver.js';
import { useEntities } from '#hooks/entities.js';
import { EntitiesList } from '#components/EntitiesList/index.jsx';

export const Categories = () => {
  const { formatMessage } = useIntl();
  const { type, category } = useParams();

  const ref = useRef(null);

  const { data, fetchNextPage, hasNextPage } = useEntities({
    type,
    category,
  });

  useIntersectionObserver({
    target: ref,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  const entities = useMemo(
    () =>
      data?.pages
        ? [...data.pages].reduce((acc, { results }) => acc.concat(results), [])
        : [],
    [data?.pages]
  );

  return (
    <>
      <div className="content__item">
        <div className="content__header">
          <h2 className="content__title">
            {formatMessage({
              id: `${type.toUpperCase()}.${category.toUpperCase()}`,
            })}
          </h2>
        </div>
        <div className="content__body">
          <div className="cards">
            <EntitiesList entities={entities} type={type} />
            <div ref={ref} />
          </div>
        </div>
      </div>
    </>
  );
};
