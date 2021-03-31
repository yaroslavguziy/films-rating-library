import React, { useRef } from 'react';
import { useIntl } from 'react-intl';

import { List } from '#components/List/index.jsx';

const ARRAY = [
  { group: 'tv', category: 'popular', key: 'POPULAR_TV' },
  { group: 'movie', category: 'popular', key: 'POPULAR_MOVIE' },
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

  const handleClick = group => ({ target }) => {
    const ref = MAP_GROUP_TO_REF[group];

    if (ref?.current) ref.current[MAP_NAME_TO_FUNC[target.name]]();
  };

  return ARRAY.map(({ group, category, key }) => (
    <div className="content__item" key={key}>
      <div className="content__header">
        <h2 className="content__title">
          {formatMessage({ id: `HOME.${key}` })}
        </h2>
        <div className="arrows">
          <button
            className="arrow arrow__left"
            onClick={handleClick(group)}
            name="prev"
          >
            &#11164;
          </button>
          <button
            className="arrow arrow__right"
            onClick={handleClick(group)}
            name="next"
          >
            &#11166;
          </button>
        </div>
      </div>
      <div className="content__body">
        <List
          category={category}
          group={group}
          view="carousel"
          ref={MAP_GROUP_TO_REF[group]}
        />
      </div>
    </div>
  ));
};
