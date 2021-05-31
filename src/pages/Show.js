import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setshow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        setTimeout(() => {
          setshow(results);
          setIsLoading(false);
        }, 2000);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [id]);

  console.log('show', show);

  if (isLoading) {
    return <div>Data is Loading</div>;
  }

  if (error) {
    return <div>Error Occured: {error}</div>;
  }
  return (
    <div>
      <h2>This is Show Page</h2>
    </div>
  );
};
export default Show;
