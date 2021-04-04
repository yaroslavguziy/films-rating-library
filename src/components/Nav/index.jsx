import React from 'react';
import { useIntl } from 'react-intl';
import { Link, generatePath } from 'react-router-dom';

import { ROUTES } from '#constants/routes.js';
import { ENTITY_TYPE } from '#constants/entities.js';

export const Nav = ({ handleNavOpen, isNavOpen }) => {
  const { formatMessage } = useIntl();

  return (
    <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to={ROUTES.HOME} onClick={handleNavOpen}>
            {formatMessage({ id: 'NAVIGATION.HOME' })}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            to={generatePath(ROUTES.ENTITIES, { type: ENTITY_TYPE.TV })}
            onClick={handleNavOpen}
          >
            {formatMessage({ id: 'NAVIGATION.TV' })}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            to={generatePath(ROUTES.ENTITIES, { type: ENTITY_TYPE.MOVIE })}
            onClick={handleNavOpen}
          >
            {formatMessage({ id: 'NAVIGATION.MOVIES' })}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
