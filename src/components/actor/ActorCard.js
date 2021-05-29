import React from 'react';

const ActorCard = ({ name, gender, country, birthday, deathday, image }) => (
  <div>
    <div>
      <img src={image} alt="actor" />
    </div>
    <h1>
      {name} {gender ? `(${gender})` : null}
    </h1>
    <p>{country ? `Comes from ${country}` : 'No country Known'}</p>
    {birthday ? <p>Born {birthday}</p> : null}
    <p>{deathday ? `Died${deathday}` : 'Alive'}</p>
  </div>
);

export default ActorCard;
