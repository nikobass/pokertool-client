import React from 'react';
import { Edit, Eye, Trash2 } from 'react-feather';
import './tournamentElement.scss'

const TournamentElement = ({
  name,
  location,
  cashPrice,
  nbPlayers,
  maxPlayers,
  buyIn,
  statut,
  date
}) => {
  return (
    <div className="tournament--element">
      <span>
        {name}
      </span>
      <span>
        {date}
      </span>
      <span>
        {location}
      </span>
      <span>
        {buyIn}
      </span>
      <span>
        {cashPrice}
      </span>
      <span>
        {statut}
      </span>
      <span>
        {nbPlayers}/{maxPlayers}
      </span>
      <button className="modify-tournament">
        <Eye />
      </button>
      <button className="modify-tournament">
        <Edit />
      </button>
      <button className="modify-tournament">
        <Trash2 />
      </button>
      <button className="tournaments--play">Commencer</button>
    </div>
    
     
  );
};

export default TournamentElement;
