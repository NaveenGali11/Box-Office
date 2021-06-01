import React, { useEffect, useState } from 'react';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';

const Starred = () => {
  const [starred] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);
  return (
    <MainPageLayout>
      {isLoading && <div>Data is Loading</div>}
      {error && <div>Error Occured:{error}</div>}
      {!isLoading && !shows && <div>No Starred SHows</div>}
      {!isLoading && !error && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
