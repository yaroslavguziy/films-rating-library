import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" className="search__input" />
      <button className="search__button">
        <FontAwesomeIcon icon={faSearch} style={{ color: '#000' }} />
      </button>
    </div>
  );
};
