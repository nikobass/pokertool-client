import React from 'react';
import { connect } from 'react-redux';
import Modal from 'src/components/Modal';

import 'src/components/TournamentDetails/tournamentDetails.scss'

import {
 
} 
from 'src/actions/tournament';





const TournamentDetails = ({
  openDetailsModal,
  oneTournament,
  structureTournament,
  

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
          <div>
            <p>Structure du tournoi</p>
            <table>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Small blind</th>
                </tr>
              </thead>
              <tbody>
                {
                  structureTournament.map((structure) => (
                    
                 <tr key={structure.id}>
                  <td className="detailsTournament">{structure.stage}</td>
                  <td className="detailsTournament">{structure.small_blind}</td>
                 </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
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
  oneTournament : state.tournament.oneTournament,
  handleModalStructureDetails : state.tournament.structureTournamentOpen,
  structureTournament : state.tournament.structureTournament
  
});



export default connect (mapStateToProps)(TournamentDetails);


