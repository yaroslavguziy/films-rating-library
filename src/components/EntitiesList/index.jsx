import React, { forwardRef } from 'react';
import { oneOf, node } from 'prop-types';
import Slider from 'react-slick';

import { Card } from '#components/Card/index.jsx';
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

export const EntitiesList = forwardRef(({ entities, type, view }, ref) => (
  <Wrapper view={view} ref={ref}>
    {entities?.map(entity => (
      <li className="cards__item" key={entity.id}>
        <Card entity={entity} view={view} type={type} />
      </li>
    ))}
  </Wrapper>
));

EntitiesList.propTypes = {
  type: oneOf(['tv', 'movie', 'person']),
  view: oneOf(['card', 'list', 'carousel']),
};

EntitiesList.defaultProps = {
  view: 'card',
};
