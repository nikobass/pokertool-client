import React from 'react';
import { Edit, Eye, Trash2 } from 'react-feather';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  tournamentDetailsModal,
  tournamentDeleteModal,
  getOneTournamentUser,
  tounamentUpdateModale,
  getStructureTournament
} from 'src/actions/tournament';
import {
  importChips
} from 'src/actions/distributor'

import './tournamentElement.scss'

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
  handleTournamentUpdate
  
  
}) => {
  return (
    <div className="tournament--element" >
      <span >
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
      <span >
        {nbPlayers}
      </span>
    
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
      <button className="tournaments--play">Commencer</button>
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
    {console.log(ownprops.currentId)}
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

}
})

export default connect(null, mapDispatchToProps)(TournamentElement);
