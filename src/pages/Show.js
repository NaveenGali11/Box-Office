import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setshow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setshow(results);
    });
  }, [id]);

  // eslint-disable-next-line no-console
  console.log('show', show);

  return (
    <>
      <h2>This is Show Page</h2>
    </>
  );
};
export default Show;
