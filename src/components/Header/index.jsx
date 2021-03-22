import React from 'react';

import { Nav } from '#components/Nav/index.jsx';
import { Search } from '#components/Search/index.jsx';
import { Logo } from '#components/Logo/index.jsx';

import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Nav />
          <Search />
        </div>
      </div>
    </header>
  );
};
