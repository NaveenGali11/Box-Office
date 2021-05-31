import React from 'react';
import { DetailsWrapper } from './Details.Styled';

const Details = ({ status, premiered, network }) => (
  <DetailsWrapper>
    <p>
      Status: <span>{status}</span>
    </p>
    <p>
      Premiered {premiered} {network ? `on ${network.name}` : null}
    </p>
  </DetailsWrapper>
);

export default Details;
