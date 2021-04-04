import React from 'react';
import { useParams } from 'react-router-dom';

import { useEntity } from '#hooks/entities.js';

export const Entity = () => {
  const { type, id } = useParams();

  const { data } = useEntity({
    type,
    id,
    queryOptions: { enabled: !!type && !!id },
  });
  console.log('data', data);
  return (
    <div>
      ENTITY: {id} {type}
    </div>
  );
};
