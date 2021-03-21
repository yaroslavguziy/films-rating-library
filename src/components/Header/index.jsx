import React from 'react';

import { Nav } from '#components/Nav/index.jsx';

import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Nav />
      </div>
    </header>
  );
};
