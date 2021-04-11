import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useEntity, useEntitySimilar } from '#hooks/entities.js';

import { Card } from '#components/Card/index.jsx';
import { EntitiesList } from '#components/EntitiesList/index.jsx';

const MAP_NAME_TO_FUNC = {
  prev: 'slickPrev',
  next: 'slickNext',
};

export const Entity = () => {
  const { type, id } = useParams();
  const ref = useRef(null);

  const { data: entity } = useEntity({
    type,
    id,
    queryOptions: { enabled: !!type && !!id },
  });

  const { data: similar } = useEntitySimilar({
    type,
    id,
    queryOptions: { enabled: !!type && !!id },
  });

  const handleClick = ({ target }) => {
    if (ref?.current) ref.current[MAP_NAME_TO_FUNC[target.name]]();
  };

  return (
    <div className="entity">
      <div className="entity__description">
        <Card entity={entity} direction="row" isShowOverview />
      </div>
      <div className="similar">
        <div className="similar__header">
          <h2 className="similar__title">Similar</h2>
          <div className="arrows">
            <button
              className="arrow arrow__left"
              name="prev"
              onClick={handleClick}
            >
              &#11164;
            </button>
            <button
              className="arrow arrow__right"
              name="next"
              onClick={handleClick}
            >
              &#11166;
            </button>
          </div>
        </div>

        <EntitiesList
          entities={similar?.results}
          view="carousel"
          type={type}
          ref={ref}
        />
      </div>
    </div>
  );
};
