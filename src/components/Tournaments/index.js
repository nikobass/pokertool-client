import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from 'react-feather';
import {
  getTournamentUser,
  deleteTournamentUser,
  hideModalDelete,  
  createTournamentModal,
  submitCreatTournamentValues,
  tournamentSubmit,
  getStructureTournament,
  createStructure,
  checkboxChips,
  submitFromMyChips,
  dontUseMyChips,
  sortLocationSubmit,
  sortNameSubmit,
  sortDateSubmit,
  sortBuyInSubmit,
  sortCashPriceSubmit,
  sortStatusSubmit,
  sortPlayerSubmit,
} from 'src/actions/tournament';

import Modal from 'src/components/Modal';
import TournamentElement from 'src/components/TournamentElement';
import TournamentDetails from '../TournamentDetails';
import TournamentUpdate from 'src/components/TournamentUpdate';


import {
  getChipsFromAPI
} from 'src/actions/chip';


import {
  importChips
} from 'src/actions/distributor'


import './tournaments.scss';

const Tournaments = ({
  handleTournamentSubmit,
  tournaments,
  showDeleteTournamentModal,
  showCreateTournamentModal,
  submitDeleteTournament,
  handleCloseModal,
  oneTournament,
  refreshTournaments,
  handleOnclickSortTournamentByLocation,
  handleOnclickSortTournamentByName,
  handleOnclickSortTournamentByDate,
  handleOnclickSortTournamentByBuyIn,
  handleOnclickSortTournamentByCashPrice,
  handleOnclickSortTournamentByStatus,
  handleOnclickSortTournamentByPlayer,
  isFiltred,
  handleShowModal,
  handleCreatTournamentChange,
  errorMessage,
  isChipsChecked,
  handleIsChipsUsed,
  smallBlindValue,
  chipsList
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournamentUser());
    dispatch(getChipsFromAPI());
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
      <div className="tournaments--list-grid">
      <ul>
        <li className="tournaments--list">

          <span className="tournaments--list__name" >
            Nom
            <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByName}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button>
          </span>
          <span>
            Date
            <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByDate}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button>
          </span>
          <span>
            Lieu
            <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByLocation}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button>
          </span>
          <span>
            Buy-in
            <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByBuyIn}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button>
          </span>
          <span>
            Cash-price
            <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByCashPrice}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button>
          </span>
          <span>
            Statut
            <button 
              className="chevron-down"
              onClick={handleOnclickSortTournamentByStatus}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button>
          </span>
          <span>
            Joueurs
            <button 
              className="chevron-down"
              onClick={handleOnclickSortTournamentByPlayer}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button>
          </span>
        </li>        
        {tournaments &&
          tournaments.map((tournament) => (
            <li  className="tournaments--list-grid"
             key={tournament.id}>
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
      </div>
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
        title= 'Supprimer un tournoi'
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

            {chipsList.length > 0 && 
            <div className="creatTournamentForm__checkbox">
              <label className="creatTournamentForm__label">Utiliser mes jetons préconfiguré</label>
              
              <input onChange={ handleIsChipsUsed } checked={isChipsChecked} type="checkbox"/>
            </div>
            }

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

            <label htmlFor="small_blind" className="creatTournamentForm__label">Small blind:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="small_blind" className="creatTournamentForm__input" required={!isChipsChecked}  value={smallBlindValue} disabled={isChipsChecked}/>

            <label htmlFor="comments" className="creatTournamentForm__label">commentaires:</label>
            <input onChange={ handleCreatTournamentChange } type="text" name="comments" className="creatTournamentForm__input" />

            {errorMessage && <p className="errorMessage"> { errorMessage }</p>}
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
  tournaments: state.tournament.tournamentList,
  showDeleteTournamentModal: state.tournament.openDeleteModal,
  refreshTournaments: state.tournament.refreshTournaments,
  isFiltred: state.tournament.isFiltred,
  showCreateTournamentModal: state.tournament.showCreateTournamentModal,
  errorMessage: state.tournament.errorMessage,
  isChipsChecked: state.tournament.creatTournament.chips_user,
  smallBlindValue: state.tournament.creatTournament.small_blind,
  chipsList: state.chip.chips
})


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
  handleOnclickSortTournamentByName: () => {
    dispatch(sortNameSubmit());
  },
  handleOnclickSortTournamentByDate: () => {
    dispatch(sortDateSubmit());
  },
  handleOnclickSortTournamentByBuyIn: () => {
    dispatch(sortBuyInSubmit());
  },
  handleOnclickSortTournamentByCashPrice: () => {
    dispatch(sortCashPriceSubmit());
  },
  handleOnclickSortTournamentByStatus: () => {
    dispatch(sortStatusSubmit());
  },
  handleOnclickSortTournamentByPlayer: () => {
    dispatch(sortPlayerSubmit());
  },
  handleShowModal: () => {
    dispatch(createTournamentModal())
    
    dispatch(getStructureTournament())
  },

  handleCreatTournamentChange: (event) => {
    dispatch(submitCreatTournamentValues(event.target.value, event.target.name))
  },

  handleIsChipsUsed: (event) => {
    dispatch(checkboxChips(event.target.checked));
    if(event.target.checked) {
      dispatch(submitFromMyChips());
    } else {
      dispatch(dontUseMyChips())
    }
  },

  handleTournamentSubmit: (event) => {
    event.preventDefault();
    // création d'une action qui va stocker dans le state la structure de tournoi.
    dispatch(createStructure())
    //Quand c'est fait, RDV dans le middleware
    //dispatch(tournamentSubmit()) //A supprimer puisque ce sera appelé dans l'action que tu crées juste au dessus
    if (!errorMessage){
      dispatch(hideModalDelete());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
