import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'react-feather';

import {
  getTournamentUser,
  deleteTournamentUser,
  hideModalDelete,  
  createTournamentModal,
  submitCreatTournamentValues,
  createStructure,
  errMessage,
  addCashprice,
  changeInputValue,
  tournamentSubmit,
  getStructureTournament,  
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
import TournamentDetails from 'src/components/TournamentDetails';
import TournamentUpdate from 'src/components/TournamentUpdate';
import TournamentsCashPriceInputs from 'src/components/TournamentsCashPriceInputs'

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
  handleAddCashprice,
  nbCashPriceInput,
  cash_price,
  cashPriceAmount,
  cashPricePosition,
  isChipsChecked,
  handleIsChipsUsed,  
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
            {/* <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByName}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button> */}
          </span>
          <span>
            Date
            {/* <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByDate}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button> */}
          </span>
          <span>
            Lieu
            {/* <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByLocation}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button> */}
          </span>
          <span>
            Buy-in
            {/* <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByBuyIn}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button> */}
          </span>
          <span>
            Cash-price
            {/* <button
              className="chevron-down"
              onClick={handleOnclickSortTournamentByCashPrice}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button> */}
          </span>
          {/* <span>
            Statut
            <button 
              className="chevron-down"
              onClick={handleOnclickSortTournamentByStatus}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button>
          </span> */}
          <span>
            Joueurs
            {/* <button 
              className="chevron-down"
              onClick={handleOnclickSortTournamentByPlayer}
              type="button"
            >
              {isFiltred ? <ChevronUp size={15} /> : <ChevronDown size={15}/>}
            </button> */}
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
                cashPrice={tournament.cashprices && tournament.cashprices.reduce((accumulator, current) => accumulator + current.amount, 0)}
                statut={tournament.status}
                nbPlayers={tournament.nb_players}
                />
            </li>
          ))
        }
      </ul>
      </div>
      {!oneTournament &&(
      <TournamentDetails 
      cash_price={cash_price}
      /> )
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
            <input onChange={ handleCreatTournamentChange } type="text" name="name" className="creatTournamentForm__input" value={nameValue} />

            <label htmlFor="date" className="creatTournamentForm__label">date du tournoi:</label>
            <input onChange={ handleCreatTournamentChange } type="date" name="date" className="creatTournamentForm__input" value={dateValue}/>

            <label htmlFor="location" className="creatTournamentForm__label">Lieu du tournoi:</label>
            <input onChange={ handleCreatTournamentChange } type="text" name="location" className="creatTournamentForm__input" value={locationValue}/>

            <label htmlFor="nb_players" className="creatTournamentForm__label">Nombre de joueurs:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="nb_players" className="creatTournamentForm__input" value={nbPlayersValue}/>

            <label htmlFor="speed" className="creatTournamentForm__label">Durée des étapes:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="speed" className="creatTournamentForm__input" value={speedValue}/>

            <label htmlFor="buy_in" className="creatTournamentForm__label">Buy in:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="buy_in" className="creatTournamentForm__input" value={buyInValue}/>
         
           {cash_price && cash_price.map((chip, i) => <TournamentsCashPriceInputs index={i} key={i} />)}

           <button onClick={handleAddCashprice} className=" ">Ajouter un Cash price supplémentaire</button>

            <label htmlFor="starting_stack" className="creatTournamentForm__label">Tapis de départ:</label>
            <input onChange={ handleCreatTournamentChange } type="number" name="starting_stack" className="creatTournamentForm__input" value={startingStackValue}/>

            <label htmlFor="small_blind" className="creatTournamentForm__label">Small blind:</label>
        

            <input onChange={ handleCreatTournamentChange } type="number" name="small_blind" className="creatTournamentForm__input" required={!isChipsChecked}  value={smallBlindValue} disabled={isChipsChecked}/>


            <label htmlFor="comments" className="creatTournamentForm__label">commentaires:</label>
            <input onChange={ handleCreatTournamentChange } type="text" name="comments" className="creatTournamentForm__input"  value={commentsValue}/>

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


Tournaments.propTypes = {
 // handleTournamentSubmit,
  tournaments: PropTypes.array,
  showDeleteTournamentModal:PropTypes.bool.isRequired,
  showCreateTournamentModal: PropTypes.bool.isRequired,
  submitDeleteTournament: PropTypes.func.isRequired,
  handleCloseModal:PropTypes.func.isRequired,
  refreshTournaments: PropTypes.bool.isRequired,
  oneTournament: PropTypes.array,
  handleShowModal:PropTypes.func.isRequired,
  handleCreatTournamentChange:PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  buyInValue: PropTypes.string.isRequired,
  speedValue: PropTypes.string.isRequired,
  nbPlayersValue: PropTypes.string.isRequired,
  startingStackValue: PropTypes.string.isRequired,
  commentsValue : PropTypes.string,
  smallBlindValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  dateValue: PropTypes.string,
  locationValue: PropTypes.string.isRequired,
}


const mapStateToProps = (state) => ({
  tournaments: state.tournament.tournamentList,
  showDeleteTournamentModal: state.tournament.openDeleteModal,
  refreshTournaments: state.tournament.refreshTournaments,
  isFiltred: state.tournament.isFiltred,
  showCreateTournamentModal: state.tournament.showCreateTournamentModal,
  errorMessage: state.tournament.errorMessage,
  nameValue: state.tournament.createTournamentInputs.name,
  locationValue: state.tournament.createTournamentInputs.location,
  dateValue : state.tournament.createTournamentInputs.date,
  statusValue :state.tournament.createTournamentInputs.status,
  cashPriceValue:state.tournament.cash_price, //cash_price.amount,
  buyInValue:state.tournament.createTournamentInputs.buy_in,
  speedValue:state.tournament.createTournamentInputs.speed,
  commentsValue:state.tournament.createTournamentInputs.comments,
  nbPlayersValue:state.tournament.createTournamentInputs.nb_players,
  smallBlindValue: state.tournament.createTournamentInputs.small_blind,
  startingStackValue:state.tournament.createTournamentInputs.starting_stack,
  nbCashPriceInput : state.tournament.cash_priceInput,
  cash_price: state.tournament.cash_price,
  isChipsChecked: state.tournament.createTournamentInputs.chips_user,
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
    
    handleAddCashprice: (event) => {
    event.preventDefault()
    dispatch(addCashprice())
  },

  handleTournamentSubmit: (event) => {
    event.preventDefault();
    // création d'une action qui va stocker dans le state la structure de tournoi.
    dispatch(createStructure())
    //Quand c'est fait, RDV dans le middleware
    //dispatch(tournamentSubmit()) //A supprimer puisque ce sera appelé dans l'action que tu crées juste au dessus
    if (!errMessage){
      dispatch(hideModalDelete());
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
