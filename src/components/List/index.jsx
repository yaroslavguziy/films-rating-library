import React, { forwardRef } from 'react';
import { oneOf, string, oneOfType, any, func, shape, node } from 'prop-types';
import Slider from 'react-slick';

import { Card } from '#components/Card/index.jsx';
import { useEntities } from '#hooks/movies.js';
import { settings } from '#constants/slider.js';

const Wrapper = forwardRef(({ view, children }, ref) =>
  view === 'carousel' ? (
    <Slider ref={ref} {...settings}>
      {children}
    </Slider>
  ) : (
    <ul className={`cards cards__${view}-view`}>{children}</ul>
  )
);

Wrapper.propTypes = {
  children: node,
  view: oneOf(['card', 'list', 'carousel']),
};

export const List = forwardRef(({ group, category, view }, ref) => {
  const { data } = useEntities({ group, category });

  return (
    <Wrapper view={view} ref={ref}>
      {data?.results?.map(entity => (
        <li key={entity.id}>
          <Card entity={entity} view={view} />
        </li>
      ))}
    </Wrapper>
  );
});

List.propTypes = {
  group: string,
  category: string,
  view: oneOf(['card', 'list', 'carousel']),
};

List.defaultProps = {
  view: 'card',
};
