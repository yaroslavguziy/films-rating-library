import React, { useState, useMemo } from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { IMG_URL } from '#constants/env.js';

export const Img = ({ src, width, height, className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const imgSrc = useMemo(() => (src ? `${IMG_URL}${src}` : ''), [src]);

  const loadingClass = useMemo(
    () => `${isLoading ? ' img__loading-active' : ''}`,
    [isLoading]
  );

  const internalClass = useMemo(() => `${className ? ' ' + className : ''}`, [
    className,
  ]);

  const handleOnLoad = () => setIsLoading(false);

  return (
    <div className={`img`} width={width} height={height}>
      <img
        src={imgSrc}
        width={width}
        height={height}
        onLoad={handleOnLoad}
        loading="lazy"
        className={`img__inner${loadingClass}${internalClass}`}
      />
      <FontAwesomeIcon
        icon={faSpinner}
        className={`img__loading${loadingClass}`}
      />
    </div>
  );
};

Img.propTypes = {
  className: string,
};

Img.defaultProps = {
  className: '',
};
