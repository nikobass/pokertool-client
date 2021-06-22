import React , { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {ChevronDown} from 'react-feather';
import {
  getTournamentUser,
  deleteTournamentUser,
  hideModalDelete,
  createTournamentModal,
  submitCreatTournamentValues,
  tournamentSubmit,

  } 
  from 'src/actions/tournament';
import Modal from 'src/components/Modal';

import TournamentElement from 'src/components/TournamentElement';
import TournamentDetails from 'src/components/TournamentDetails';
import TournamentUpdate from 'src/components/TournamentUpdate';

import './tournaments.scss'

const Tournaments = ({
  handleTournamentSubmit,
  tournaments,
  showDeleteTournamentModal,
  showCreateTournamentModal,
  submitDeleteTournament,
  handleCloseModal,
  refreshTournaments,
  oneTournament,
  handleShowModal,
  handleCreatTournamentChange,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournamentUser())
  }, [refreshTournaments]);


  return (
    <div className="tournaments-container">
      <div className="tournaments--header">
          <h2 className="tournaments--title">
            Mes Tournois
          </h2>
          <button 
            className="addButton"
            onClick={handleShowModal}
          >
            Créer un tournoi
          </button>
        </div>
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
      <TournamentDetails /> )
      }
      {
        !oneTournament &&(
          <TournamentUpdate/>

        )
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
     <Modal
          isOpen={showCreateTournamentModal}
          title='Création de mon tournoi'
          content={(
            <form onSubmit= { handleTournamentSubmit } className="creatTournamentForm">
            <label htmlFor="name" className="creatTournamentForm__label">Nom du tournoi: </label>
            <input onChange={ handleCreatTournamentChange } type="text" name="name" className="creatTournamentForm__input" />

            <label htmlFor="date" className="creatTournamentForm__label">date du tournoi:</label>
            <input onChange={ handleCreatTournamentChange } type="date" name="date" className="creatTournamentForm__input" />

            <label htmlFor="location" className="creatTournamentForm__label">Lieu du tournoi:</label>
            <input onChange={ handleCreatTournamentChange } type="text" name="location" className="creatTournamentForm__input" />

            <label htmlFor="nb_players" className="creatTournamentForm__label">Nombre de joueurs:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="nb_players" className="creatTournamentForm__input" />

            <label htmlFor="speed" className="creatTournamentForm__label">Durée des étapes:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="speed" className="creatTournamentForm__input" />

            <label htmlFor="buy_in" className="creatTournamentForm__label">Buy in:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="buy_in" className="creatTournamentForm__input" />

            <label htmlFor="cash_price" className="creatTournamentForm__label">Cash price:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="cash_price" className="creatTournamentForm__input" />


            <label htmlFor="starting_stack" className="creatTournamentForm__label">Tapis de départ:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="starting_stack" className="creatTournamentForm__input" />

            <label htmlFor="comments" className="creatTournamentForm__label">commentaires:</label>
            <input onChange={ handleCreatTournamentChange } type="text" name="comments" className="creatTournamentForm__input" />


            <button type="submit" className="creatTournamentForm__submit">Valider</button>
        </form>
          )}
        />  
    </div>
  );
};

Tournaments.defaultProps = {
  tournaments: null,
};


const mapStateToProps = (state) => ({
  tournaments : state.tournament.tournamentList,
  showDeleteTournamentModal : state.tournament.openDeleteModal,
  refreshTournaments: state.tournament.refreshTournaments,
  showCreateTournamentModal: state.tournament.showCreateTournamentModal
 

})

const mapDispatchToProps = (dispatch) => ({


  handleCloseModal: () => {
    dispatch(hideModalDelete());
  },

  submitDeleteTournament: () => {
   
    dispatch(deleteTournamentUser())
  },

  handleShowModal: () => {
    dispatch(createTournamentModal())
  },

  handleCreatTournamentChange: (event) => {
    dispatch(submitCreatTournamentValues(event.target.value, event.target.name))
  },

  handleTournamentSubmit: (event) => {
    event.preventDefault();
    dispatch(tournamentSubmit())
  }

})



export default connect(mapStateToProps, mapDispatchToProps )(Tournaments);
