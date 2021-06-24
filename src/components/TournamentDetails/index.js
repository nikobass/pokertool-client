import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';

import 'src/components/TournamentDetails/tournamentDetails.scss'





const TournamentDetails = ({
  openDetailsModal,
  oneTournament,
  

} ) => {

 
  return (
   
      <Modal
      isOpen={ openDetailsModal }
      title= 'Détails du tournoi'
      content={(
     
        <div className="tournament-containerDetail">    
               
               
          <p>Nom du tournoi: <span className="detailsTournament">{oneTournament.name} </span></p>
          <br/>
          <p>date du tournoi: <span className="detailsTournament">{oneTournament.date}</span></p>
          <br/>
          <p>Lieu du tournoi: <span className="detailsTournament">{oneTournament.location}</span></p>
          <br/>
          <p>Nombre de joueurs: <span className="detailsTournament">{oneTournament.nb_players}</span></p>
          <br/>
          <p>Durée des étapes: <span className="detailsTournament"> {oneTournament.speed}</span></p>
          <br/>
          <p>Tapis de départ: <span className="detailsTournament">{oneTournament.starting_stack}</span></p>
          <br/>
          <p> Buy-in: <span className="detailsTournament">{oneTournament.buy_in}</span></p>
          <br/>
          <p> Cash-price:<span className="detailsTournament">{oneTournament.cash_price}</span></p>
          <br/>
          <p> Small blind:<span className="detailsTournament">{oneTournament.small_blind}</span></p>
          <br/>
          <p>Statut:  <span className="detailsTournament">{oneTournament.status}</span></p>
          <br/>
          <div className="tournament-containerDetail__comment">
            <p>Commentaire(s) du tournoi:</p>
            <p className="detailsTournament"> {oneTournament.comments}</p>
          </div>
          
        </div>
   
        
    )}
      />
      
    
  );
};


const mapStateToProps = (state) => ({
	openDetailsModal: state.tournament.openDetailsModal,
  oneTournament : state.tournament.oneTournament
  
});

export default connect (mapStateToProps)(TournamentDetails);


