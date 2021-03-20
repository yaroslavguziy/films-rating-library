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
      <li className="nav__link">
        <Link to={ROUTES.HOME}>{formatMessage({ id: 'NAVIGATION.HOME' })}</Link>
      </li>
      <li className="nav__link">
        <Link to={ROUTES.MOVIES}>
          {formatMessage({ id: 'NAVIGATION.MOVIES' })}
        </Link>
      </li>
      <li className="nav__link">
        <Link to={generatePath(ROUTES.MOVIE, { id: 1 })}>
          {formatMessage({ id: 'NAVIGATION.MOVIE' })}
        </Link>
      </li>
    </nav>
  );
};
