import React from 'react';
import { Edit, Eye, Trash2 } from 'react-feather';
import PropTypes from 'prop-types';
import { formatDate } from 'src/utils/date';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  tournamentDetailsModal,
  tournamentDeleteModal,
  getOneTournamentUser,
  tounamentUpdateModale,
  getStructureTournament,
  launchTournament
} from 'src/actions/tournament';
import {
  importChips
} from 'src/actions/distributor';

import './tournamentElement.scss';

const TournamentElement = ({
  name,
  location,
  cashPrice,
  nbPlayers,
  buyIn,
  statut,
  date,
  handleTournamentDetails,
  handleTournamentDelete,
  handleTournamentUpdate,
  handleLaunchTournament
}) => {

  const formattedDate = formatDate(date, false);

  return (
    <div className="tournament--list">
      <div className="tournament--list--row">
        <p className="tournament--list--row--element">
          {name}
        </p>
        <p className="tournament--list--row--element">
          {formattedDate}
        </p>
        <p className="tournament--list--row--element">
          {location}
        </p>
        <p className="tournament--list--row--element">
          {buyIn}
        </p>
        <p className="tournament--list--row--element">
          {cashPrice}
        </p>
        <p className="tournament--list--row--element">
          {nbPlayers}
        </p>
      </div>

      <div className="tournament--list--row--action"> 
        <button onClick={handleTournamentDetails} className="modify-tournament">
          <Eye />
        </button>

        <button
        className="modify-tournament"
        onClick={handleTournamentUpdate}
        >
          <Edit />
        </button>

        <button 
          className="modify-tournament"
          onClick={handleTournamentDelete}
        >
          <Trash2 />
        </button>

        <button className="tournaments--play">Lancer le tournoi</button>
      </div>
    </div>
    
     
  );
};

TournamentElement.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  cashPrice: PropTypes.array.isRequired,
  nbPlayers: PropTypes.number.isRequired,
  buyIn: PropTypes.number.isRequired,
  statut: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleTournamentDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownprops) => ({
  handleTournamentDetails : () => {
    dispatch(tournamentDetailsModal(ownprops.currentId))
    dispatch(getOneTournamentUser())
    dispatch(importChips())
    dispatch(getStructureTournament())   
  },
  handleTournamentDelete: () => {
    dispatch(tournamentDeleteModal(ownprops.currentId));
},
  handleTournamentUpdate: () => {
    dispatch(tounamentUpdateModale(ownprops.currentId))
    dispatch(getOneTournamentUser())
    dispatch(importChips())
    dispatch(getStructureTournament())
},
handleLaunchTournament :() => {
    dispatch(launchTournament(ownprops.currentId))
}

})

export default connect(null, mapDispatchToProps)(TournamentElement);
