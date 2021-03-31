import React, { useState, useMemo } from 'react';
import { string } from 'prop-types';

import { IMG_URL } from '#constants/env.js';

export const Img = ({ src, width, height, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const imgSrc = useMemo(() => `${IMG_URL}${src}`, [src]);

  const loadingClass = useMemo(() => `${isLoading ? ' img__loading' : ''}`, [
    isLoading,
  ]);

  const internalClass = useMemo(() => `${className ? ' ' + className : ''}`, [
    className,
  ]);

  const handleOnLoad = () => setIsLoading(false);

  return (
    <img
      src={imgSrc}
      width={width}
      height={height}
      onLoad={handleOnLoad}
      loading="lazy"
      className={`card__img${loadingClass}${internalClass}`}
    />
  );
};

Img.propTypes = {
  className: string,
};

Img.defaultProps = {
  className: '',
};
