import React from 'react';
import PropTypes from 'prop-types';
import {ChevronDown} from 'react-feather';

import TournamentElement from 'src/components/TournamentElement'

import './tournaments.scss'

const Tournaments = () => {
  // liste de tournoi pour test, à finir avec BDD fini
  const tournaments = [
    {
      name: 'Le tournoi de la mort chez Eteinne',
      nbPlayers: 8,
      maxPlayers: 10,
      date: '02/07/2021',
      cashPrice: 'une journée avec les goélands',
      statut: 'à venir',
      buyIn: 'Sac de graine ou pain',
      location: 'Chez Eteinne',
    },
    {
      name: 'Le tournoi de Juan',
      nbPlayers: 15,
      maxPlayers: 16,
      date: '25/06/2021',
      cashPrice: '200€',
      statut: 'à venir',
      buyIn: '20€',
      location: 'Chez Juan',
    },
    {
      name: 'Le tournoi de Baptiste',
      nbPlayers: 10,
      maxPlayers: 10,
      date: '01/06/2021',
      cashPrice: '10€',
      statut: 'Terminer',
      buyIn: '1€',
      location: 'Chez Michel',
    },


  ]


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
            <li>
              <TournamentElement
                name={tournament.name}
                date={tournament.date}
                location={tournament.location}
                buyIn={tournament.buyIn}
                cashPrice={tournament.cashPrice}
                statut={tournament.statut}
                nbPlayers={tournament.nbPlayers}
                maxPlayers={tournament.maxPlayers}
              />

            </li>



          ))
        }
      </ul>

    </div>
  );
};

export default Tournaments;
