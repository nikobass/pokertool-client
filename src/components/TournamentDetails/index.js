import React from 'react';
import { connect } from 'react-redux';
import Modal from 'src/components/Modal';

import { formatDate } from 'src/utils/date';
import 'src/components/TournamentDetails/tournamentDetails.scss'

const TournamentDetails = ({
  openDetailsModal,
  oneTournament,
  cashPriceValue,
  buyInValue,
  speedValue,
  nbPlayersValue,
  startingStackValue,
  commentsValue,
  smallBlindValue,
  nameValue,
  dateValue,
  locationValue,
  structureTournament
} ) => {

  const formattedDate = formatDate(oneTournament.date, false)

  return (
      <Modal
      isOpen={ openDetailsModal }
      title= 'Détails du tournoi'
      content={(
        <div className="tournament-container">
          <div className="tournament-container-detail">
              <p>Nom du tournoi :<span className="detailsTournament" value={nameValue}>{oneTournament.name} </span></p>
              <br/>
              <p>date du tournoi :<span className="detailsTournament" value={dateValue}>{formattedDate}</span></p>
              <br/>
              <p>Lieu du tournoi :<span className="detailsTournament" value={locationValue}>{oneTournament.location}</span></p>
              <br/>
              <p>Nombre de joueurs :<span className="detailsTournament" value={nbPlayersValue}>{oneTournament.nb_players}</span></p>
              <br/>
              <p>Durée des étapes :<span className="detailsTournament" value={speedValue} > {oneTournament.speed}</span></p>
              <br/>
              <p>Tapis de départ :<span className="detailsTournament" value={startingStackValue}>{oneTournament.starting_stack}</span></p>
              <br/>
              <p> Buy-in :<span className="detailsTournament" value={buyInValue}>{oneTournament.buy_in}</span></p>
              <br/>
              <p> Cash-price :<span className="detailsTournament" value={cashPriceValue && cashPriceValue}>{cashPriceValue && cashPriceValue.map((cashprice) => cashprice.position + ': ' + cashprice.amount + ' / ')}</span></p>
              <br/>
              <p> J'utilise mes jetons pour ce tournoi :<span className="detailsTournament">{oneTournament.chips_user ? "oui" : "non"}</span></p>
              <br/>
              <p> Small blind :<span className="detailsTournament" value={smallBlindValue}>{oneTournament.small_blind}</span></p>
              <br/>
              <p>Commentaire(s) du tournoi : <span className="detailsTournament" value={commentsValue}> {oneTournament.comments}</span></p>
          </div>

          <div className="tournament-container-complement">
            <div>
              <p>Structure du tournoi :</p>
              <br/>
              <table>
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Small blind</th>
                    <th>Big blind</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    structureTournament.map((structure) => (
                      
                  <tr key={structure.id}>
                    <td className="ArrayStructureValue">{structure.stage}</td>
                    <td className="ArrayStructureValue">{structure.small_blind}</td>
                    <td className="ArrayStructureValue">{structure.big_blind}</td>
                  </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
   
        
    )}
      />
      
    
  );
};


const mapStateToProps = (state) => ({
  openDetailsModal: state.tournament.openDetailsModal,
  oneTournament: state.tournament.oneTournament,
  nameValue: state.tournament.oneTournament.name,
  locationValue: state.tournament.oneTournament.location,
  dateValue: state.tournament.oneTournament.date,
  statusValue: state.tournament.oneTournament.status,
  cashPriceValue: state.tournament.oneTournament.cashprices,
  buyInValue: state.tournament.oneTournament.buy_in,
  speedValue: state.tournament.oneTournament.speed,
  commentsValue: state.tournament.oneTournament.comments,
  nbPlayersValue: state.tournament.oneTournament.nb_players,
  smallBlindValue: state.tournament.oneTournament.small_blind,
  startingStackValue: state.tournament.oneTournament.starting_stack,
  handleModalStructureDetails: state.tournament.structureTournamentOpen,
  structureTournament: state.tournament.structureTournament
});

export default connect (mapStateToProps)(TournamentDetails);
