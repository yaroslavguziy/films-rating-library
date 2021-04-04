import React, { useState } from 'react';

import { Nav } from '#components/Nav/index.jsx';
import { Search } from '#components/Search/index.jsx';
import { Logo } from '#components/Logo/index.jsx';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <Nav handleNavOpen={handleNavOpen} isNavOpen={isNavOpen} />
        <Search />
        <div
          className={`header__burger ${isNavOpen ? 'active' : ''}`}
          onClick={handleNavOpen}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};
