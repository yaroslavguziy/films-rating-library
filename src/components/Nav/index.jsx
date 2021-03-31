import React from 'react';
import { useIntl } from 'react-intl';
import { Link, generatePath } from 'react-router-dom';

import { ROUTES } from '#constants/routes.js';

export const Nav = ({ navOpen, closeNav }) => {
  const { formatMessage } = useIntl();

  return (
    <nav className={`nav ${navOpen ? 'active' : ''}`}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link
            className="nav__link"
            to={ROUTES.HOME}
            onClick={() => closeNav()}
          >
            {formatMessage({ id: 'NAVIGATION.HOME' })}
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={ROUTES.TV} onClick={() => closeNav()}>
            {formatMessage({ id: 'NAVIGATION.TV' })}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            to={ROUTES.MOVIES}
            onClick={() => closeNav()}
          >
            {formatMessage({ id: 'NAVIGATION.MOVIES' })}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            to={generatePath(ROUTES.MOVIE, { id: 1 })}
            onClick={() => closeNav()}
          >
            {formatMessage({ id: 'NAVIGATION.MOVIE' })}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
