import React , { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {ChevronDown} from 'react-feather';
import { getTournamentUser } from 'src/actions/tournament';

import TournamentElement from 'src/components/TournamentElement'
import TournamentDetails from '../TournamentDetails';

import './tournaments.scss'

const Tournaments = ({tournaments}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTournamentUser())
  }, []);


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
                buyIn={tournament.buy_in}
                cashPrice={tournament.cash_price}
                statut={tournament.status}
                nbPlayers={tournament.nb_players}
               
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

Tournaments.defaultProps = {
  tournaments: null,
};


const mapStateToProps = (state) => ({
  tournaments : state.tournament.tournamentList

})

const mapDispatchToProps = (dispatch) => ({

})



export default connect(mapStateToProps, mapDispatchToProps )(Tournaments);
