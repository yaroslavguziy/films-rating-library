import React, { useState } from 'react';

import { Nav } from '#components/Nav/index.jsx';
import { Search } from '#components/Search/index.jsx';
import { Logo } from '#components/Logo/index.jsx';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Nav navOpen={navOpen} closeNav={closeNav} />
        <Search />
        <div
          className={`header__burger ${navOpen ? 'active' : ''}`}
          onClick={openNav}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};
