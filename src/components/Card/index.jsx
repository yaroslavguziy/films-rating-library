import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { string, oneOf } from 'prop-types';
import { generatePath, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Img } from '#components/Img/index.jsx';
import { ROUTES } from '#constants/routes';

export const Card = ({
  entity,
  type,
  width,
  height,
  direction,
  handleClick,
  isShowOverview,
}) => {
  const { formatMessage } = useIntl();
  const { push } = useHistory();

  const title = useMemo(() => entity?.name || entity?.title, [
    entity?.name,
    entity?.title,
  ]);

  const release = useMemo(
    () => entity?.release_date || entity?.first_air_date,
    [entity?.release_date, entity?.first_air_date]
  );

  const entityType = useMemo(() => entity?.media_type || type, [
    type,
    entity?.media_type,
  ]);

  const handleCardClick = () => {
    if (handleClick) {
      handleClick();
    }
    push(
      generatePath(ROUTES.ENTITY, {
        type: entityType,
        id: entity.id,
      })
    );
  };

  return (
    <button className={`card card-${direction}`} onClick={handleCardClick}>
      <Img src={entity?.poster_path} width={width} height={height} />
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        {isShowOverview && entity?.overview && (
          <p className="card__overview">{entity.overview}</p>
        )}
        {release && (
          <span className="card__release-date">
            {formatMessage({ id: 'CARD.RELEASE' }, { release })}
          </span>
        )}
        {(entity?.vote_average || entity?.vote_count) && (
          <div className="card__ratings">
            {entity?.vote_average && (
              <div className="card__stars">
                <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
                <span className="card__rating">{entity.vote_average}</span>
              </div>
            )}
            {entity?.vote_count && (
              <span className="card__vote">
                {formatMessage(
                  { id: 'CARD.VOTES' },
                  { vote: entity.vote_count }
                )}
              </span>
            )}
          </div>
        )}
      </div>
    </button>
  );
};

Card.propTypes = {
  width: string,
  height: string,
  direction: oneOf(['column', 'row']),
};

Card.defaultProps = {
  // width: '232px',
  // height: '300px',
  direction: 'column',
  isShowOverview: false,
};
