import React from 'react';
import { Edit, Eye, Trash2 } from 'react-feather';
import PropTypes from 'prop-types';

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

TournamentElement.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  cashPrice: PropTypes.string.isRequired,
  nbPlayers: PropTypes.number.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  buyIn: PropTypes.string.isRequired,
  statut:PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,

}

export default TournamentElement;
