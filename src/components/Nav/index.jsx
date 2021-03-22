//https://reactrouter.com/web/guides/quick-start
import React from 'react';
import { useIntl } from 'react-intl';
import { Link, generatePath } from 'react-router-dom';

import { ROUTES } from '#constants/routes.js';

import './styles.scss';

export const Nav = () => {
  const { formatMessage } = useIntl();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to={ROUTES.HOME}>
            {formatMessage({ id: 'NAVIGATION.HOME' })}
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={ROUTES.TV}>
            {formatMessage({ id: 'NAVIGATION.TV' })}
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to={ROUTES.MOVIES}>
            {formatMessage({ id: 'NAVIGATION.MOVIES' })}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            className="nav__link"
            to={generatePath(ROUTES.MOVIE, { id: 1 })}
          >
            {formatMessage({ id: 'NAVIGATION.MOVIE' })}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
