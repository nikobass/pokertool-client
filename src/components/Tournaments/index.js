import React from 'react';
import { connect } from 'react-redux';
import {ChevronDown} from 'react-feather';

import TournamentElement from 'src/components/TournamentElement'
import TournamentDetails from '../TournamentDetails';

import './tournaments.scss'

const Tournaments = (tournaments) => {

  return (
    <div className="tournaments-container">
      <h2 className="tournaments--title">
        Mes Tournois
      </h2>
      <ul>
        <li className="tournaments--list">

          <span>
            Nom
            <button className="chevron-down">
              <ChevronDown  size={15} />
            </button>
          </span>
          <span>
            Date
            <button className="chevron-down">
              <ChevronDown  size={15} />
            </button>
          </span>
          <span>
            Lieu
            <button className="chevron-down">
              <ChevronDown  size={15} />
            </button>
          </span>
          <span>
            Buy-in
            <button className="chevron-down">
              <ChevronDown  size={15} />
            </button>
          </span>
          <span>
            Cash-price
            <button className="chevron-down">
              <ChevronDown  size={15} />
            </button>
          </span>
          <span>
            Statut
            <button className="chevron-down">
              <ChevronDown  size={15} />
            </button>
          </span>
          <span>
            Joueurs
            <button className="chevron-down">
              <ChevronDown  size={15} />
            </button>
          </span>
        </li>
        {
          tournaments.map((tournament) => (
            <li key={tournament.id}>
              <TournamentElement
                id={tournament.id}
                name={tournament.name}
                date={tournament.date}
                location={tournament.location}
                buyIn={tournament.buyIn}
                cashPrice={tournament.cashPrice}
                statut={tournament.statut}
                nbPlayers={tournament.nbPlayers}
               
              />
             
            </li>
        

          ))
        }
      </ul>
      <TournamentDetails 
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tournaments : state.tournaments.tournamentList

})


export default connect(null, mapStateToProps)(Tournaments);
