import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { ChevronDown } from 'react-feather';
import {
  getTournamentUser,
  deleteTournamentUser,
  hideModalDelete,
  sortLocationSubmit
} from 'src/actions/tournament';
import Modal from 'src/components/Modal';

import TournamentElement from 'src/components/TournamentElement';
import TournamentDetails from '../TournamentDetails';

import './tournaments.scss';

const Tournaments = ({
  tournaments,
  showDeleteTournamentModal,
  submitDeleteTournament,
  handleCloseModal,
  refreshTournaments,
  oneTournament,
  handleOnclickSortTournamentByLocation,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournamentUser());
  }, []);

  
 
  // console.log(sortByDate);

  // const reverseId = tournaments.reverse();
  // console.log(reverseId);
  // const sortId = tournaments.sort();
  // console.log(sortId);
  // {const mapTournament = tournaments.map((tournament) => (tournament.location));
  // console.log ("Y'a quoi dans mapTournament?");
  // console.log (mapTournament);}

  return (
    <div className="tournaments-container">
      <h2 className="tournaments--title">
        Mes Tournois
      </h2>
      <ul>
        <li className="tournaments--list">

          <span>
            Nom
            <button 
            className="chevron-down"
            
            >
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
            <button 
            className="chevron-down"
            onClick={handleOnclickSortTournamentByLocation} 
            >
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
        
        {tournaments &&
          tournaments.map((tournament) => (
            <li key={tournament.id}>
              <TournamentElement
                currentId={tournament.id}
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
      {!oneTournament &&(
      <TournamentDetails 
      
      /> )
      }
      
      <Modal
      isOpen={ showDeleteTournamentModal}
      title='Supprimer un tournoi'
      content={(
        <div>
          <p>Voulez-vous vraiment supprimer ce tournoi ?</p>
          
            <button 
            type="submit" 
            className="deleteTournament__submit"
            onClick={submitDeleteTournament}    
            >
              OK
            </button>
         
          <button          
          className="deleteTournament__submit"
          onClick={handleCloseModal}
          >
            Annuler
          </button>
        </div>
      )}
    />
    </div>
  );
};

Tournaments.defaultProps = {
  tournaments: null,
};

const mapStateToProps = (state) => ({
  tournaments: state.tournament.tournamentList,
  showDeleteTournamentModal: state.tournament.openDeleteModal,
  refreshTournaments: state.tournament.refreshTournaments,
});

const mapDispatchToProps = (dispatch) => ({

  handleCloseModal: () => {
    dispatch(hideModalDelete());
  },

  submitDeleteTournament: () => {
    dispatch(deleteTournamentUser());
  },
  handleOnclickSortTournamentByLocation: () => {    
    dispatch(sortLocationSubmit());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
