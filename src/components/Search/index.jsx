import React, { useState } from 'react';
import { Link, generatePath } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useSearchEntities } from '#hooks/movies.js';
import { ROUTES } from '#constants/routes.js';
import { Img } from '#components/Img/index.jsx';

export const Search = () => {
  const [query, setQuery] = useState('');

  const { data } = useSearchEntities({
    query,
    queryOptions: { enabled: query?.length > 2, keepPreviousData: true },
  });
  console.log('Search', data);
  const handleCnahge = ({ target }) => setQuery(target.value);

  return (
    <div className="search">
      <div className="search__form">
        <FontAwesomeIcon icon={faSearch} style={{ color: '$primary' }} />
        <input
          placeholder="Search"
          className="search__input"
          value={query}
          onChange={handleCnahge}
        />
      </div>
      <ul className="search__list">
        {data?.total_results
          ? data.results.slice(0, 4).map(item => (
              <li className="search__item" key={item.id}>
                <Link
                  className="search__link"
                  to={generatePath(ROUTES.MOVIE, { id: 1 })}
                >
                  <Img className="search__img" src={item.poster_path} />
                  <div className="search__info">
                    <h4 className="search__title">{item.name || item.title}</h4>
                    <span className="search__release-date">
                      {item.release_date || item.first_air_date}
                    </span>
                  </div>
                </Link>
              </li>
            ))
          : 'EMPTY LIST'}
      </ul>
    </div>
  );
};
