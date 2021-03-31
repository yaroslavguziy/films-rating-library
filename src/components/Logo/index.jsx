import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '#constants/routes.js';

export const Logo = () => (
  <div className="logo">
    <Link className="logo__link" to={ROUTES.HOME}>
      TV&Movies
    </Link>
  </div>
);
