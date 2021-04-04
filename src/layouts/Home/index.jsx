import React, { useRef } from 'react';
import { useIntl } from 'react-intl';

import { List } from '#components/List/index.jsx';
import { ENTITY_TYPE } from '#constants/entities.js';

const ARRAY = [
  { type: ENTITY_TYPE.TV, category: 'popular', key: 'POPULAR_TV' },
  { type: ENTITY_TYPE.MOVIE, category: 'popular', key: 'POPULAR_MOVIE' },
];

const MAP_NAME_TO_FUNC = {
  prev: 'slickPrev',
  next: 'slickNext',
};

export const Home = () => {
  const { formatMessage } = useIntl();

  const tvSliderRef = useRef(null);
  const movieSliderRef = useRef(null);

  const MAP_GROUP_TO_REF = {
    tv: tvSliderRef,
    movie: movieSliderRef,
  };

  const handleClick = type => ({ target }) => {
    const ref = MAP_GROUP_TO_REF[type];

    if (ref?.current) ref.current[MAP_NAME_TO_FUNC[target.name]]();
  };

  return ARRAY.map(({ type, category, key }) => (
    <div className="content__item" key={key}>
      <div className="content__header">
        <h2 className="content__title">
          {formatMessage({ id: `HOME.${key}` })}
        </h2>
        <div className="arrows">
          <button
            className="arrow arrow__left"
            onClick={handleClick(type)}
            name="prev"
          >
            &#11164;
          </button>
          <button
            className="arrow arrow__right"
            onClick={handleClick(type)}
            name="next"
          >
            &#11166;
          </button>
        </div>
      </div>
      <div className="content__body">
        <List
          category={category}
          type={type}
          view="carousel"
          ref={MAP_GROUP_TO_REF[type]}
        />
      </div>
    </div>
  ));
};
