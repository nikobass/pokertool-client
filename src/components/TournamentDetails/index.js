import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';

import 'src/components/TournamentDetails/tournamentDetails.scss'





const TournamentDetails = ({
  openDetailsModal,
} ) => {

    
  return (
   
      <Modal
      isOpen={ openDetailsModal }
      title= 'Détails du tournoi'
      content={(
     
        <div className="tournament-containerDetail">
         
          <p>Nom du tournoi: </p>
          <br/>
          <p>date du tournoi:</p>
          <br/>
          <p>Lieu du tournoi:</p>
          <br/>
          <p>Nombre de joueurs:</p>
          <br/>
          <p>Durée des étapes:</p>
          <br/>
          <p>Tapis de départ:</p>
          <br/>
          <p> Buy-in:</p>
          <br/>
          <p> Cash-price:</p>
          <br/>
          <p>Statut:</p>
          <div className="tournament-containerDetail__comment">
            <p>Commentaire(s) du tournoi:</p>
          </div>
          
        </div>
   
        
    )}
      />
      
    
  );
};




const mapStateToProps = (state) => ({
	openDetailsModal: state.tournament.openDetailsModal,
 
});


export default connect (mapStateToProps)(TournamentDetails);


