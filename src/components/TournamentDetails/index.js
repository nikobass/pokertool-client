import React from 'react';
import Modal from '../Modal';

import 'src/components/TournamentDetails/tournamentDetails.scss'

const TournamentDetails = ({
  openModal,
  
} ) => {
  return (
    <div>
      <Modal
      isOpen={ openModal }
      title= 'Détails du tournoi'
      content={(
        <div className="tournament-containerDetail">
          Nom du tournoi:
          <br/>
          date du tournoi:
          <br/>
          Lieu du tournoi:
          <br/>
          Nombre de joueurs:
          <br/>
          Durée des étapes:
          <br/>
          Tapis de départ:
          <br/>
          Buy-in:
          <br/>
          Cash-price:
          <br/>
          Statut:
          <div className="tournament-containerDetail__comment">
            Commentaire(s) du tournoi:
          </div>
        </div>
        
    )}
      />
      
    </div>
  );
};

import { connect } from 'react-redux';
import { closeTournamentDetailsModal } from 'src/actions/tournament.js'

const mapStateToProps = (state) => ({
	openModal: state.tournament.openModal,
});


export default connect (mapStateToProps)(TournamentDetails);


