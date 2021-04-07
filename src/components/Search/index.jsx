import React, { useState, useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useSearchEntities } from '#hooks/entities.js';
import { Card } from '#components/Card/index.jsx';
import { ENTITY_TYPE } from '#constants/entities.js';

export const Search = () => {
  const [query, setQuery] = useState('');

  const { data } = useSearchEntities({
    query,
    queryOptions: { enabled: query?.length > 2 },
  });

  const list = useMemo(
    () =>
      data?.total_results
        ? data.results
            .filter(({ media_type }) => media_type !== ENTITY_TYPE.PERSON)
            .slice(0, 4)
        : [],
    [data?.result, data?.total_results]
  );

  const handleChange = ({ target }) => setQuery(target.value);

  const handleClick = () => setQuery('');

  return (
    <div className="search">
      <div className="search__form">
        <FontAwesomeIcon icon={faSearch} style={{ color: '$primary' }} />
        <input
          placeholder="Search"
          className="search__input"
          value={query}
          onChange={handleChange}
        />
      </div>
      <ul className="search__list">
        {list.length
          ? list.map(
              ({
                id,
                poster_path,
                media_type,
                name,
                title,
                release_date,
                first_air_date,
              }) => (
                <li className="search__item" key={id}>
                  <Card
                    entity={{
                      id,
                      poster_path,
                      media_type,
                      name,
                      title,
                      release_date,
                      first_air_date,
                    }}
                    width="60px"
                    height="70px"
                    direction="row"
                    handleClick={handleClick}
                  />
                </li>
              )
            )
          : 'EMPTY LIST'}
      </ul>
    </div>
  );
};
