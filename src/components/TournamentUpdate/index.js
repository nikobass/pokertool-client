import React from 'react';
import Modal from 'src/components/Modal';
import { connect } from 'react-redux';

import 'src/components/TournamentUpdate/tournamentUpdate.scss'
import TournamentUpdateInputs from 'src/components/TournamentUpdateInputs'

import {
  toggleModifyTournament,
  submitTournamentUpdate,
  changeInputValue,
  modifyTournamentValidate,
  getStructureTournament,
  hideModalDelete,
  addCashpriceOneTournament  
} from 'src/actions/tournament'

const TournamentUpdate = ({
  modifying,
  handleInputChange,
  openUpdateModal,
  errorMessage,
  handleModifyTournament,
  handleSubmitUpdateTournament,
  nameValue,
  dateValue,
  locationValue,
  handleModifyTournamentConfirm,
  statusValue ,
  cashPriceValue,
  buyInValue,
  speedValue,
  nbPlayersValue,
  startingStackValue,
  commentsValue,
  smallBlindValue,
  cash_price,
  nbCashPriceInput,
  handleAddCashprice,
  handleChangeCashPrice
}) => {

  console.log(cashPriceValue)

  return (
    <div>
      <Modal
      isOpen={openUpdateModal}
      title= 'Modifier mon tournoi'
      content = {(
        <form className="tournamentUpdate__form" onSubmit={handleSubmitUpdateTournament} >
      <h2 className="tournamentUpdate__form__subtitle">Mon Tournoi</h2>

      <label htmlFor="name" className="tournamentUpdate__form__label">name</label>
      <input onChange={handleInputChange} type="text" name="name" className="tournamentUpdate__form__input" value={nameValue} disabled={modifying ? "" : "disabled"} required/>

      <label htmlFor="date" className="tournamentUpdate__form__label">date</label>
      <input onChange={handleInputChange} type="date" name="date"className="tournamentUpdate__form__input" value={dateValue} disabled={modifying ? "" : "disabled"} required/>

      <label htmlFor="location" className="tournamentUpdate__form__label">lieu</label>
      <input onChange={handleInputChange} type="text" name="location" className="tournamentUpdate__form__input" value={locationValue} disabled={modifying ? "" : "disabled"}  />

      <label htmlFor="nb_players" className="tournamentUpdate__form__label">Nombre de joueurs</label>
      <input onChange={handleInputChange} type="number" name="nb_players" className="tournamentUpdate__form__input" value={nbPlayersValue} disabled={modifying ? "" : "disabled"}  />

      <label htmlFor="speed" className="tournamentUpdate__form__label">vitesse</label>
      <input onChange={handleInputChange} type="number" name="speed" className="tournamentUpdate__form__input" value={speedValue} disabled={modifying ? "" : "disabled"}  />

      <label htmlFor="starting_stack" className="tournamentUpdate__form__label">Tapis de départ</label>
      <input onChange={handleInputChange} type="number" name="starting_stack" className="tournamentUpdate__form__input" value={startingStackValue} disabled={modifying ? "" : "disabled"}  />

      <label htmlFor="buy_in" className="tournamentUpdate__form__label">Buy in</label>
      <input onChange={handleInputChange} type="number" name="buy_in" className="tournamentUpdate__form__input" value={buyInValue} disabled={modifying ? "" : "disabled"}  />

      {/* <p> Cash-price:<span className="detailsTournament" value={cashPriceValue && cashPriceValue}>{cashPriceValue && cashPriceValue.map((cashprice) => cashprice.position + ': ' + cashprice.amount + ' / ')}</span></p> */}
    
           <div  className="tournamentUpdate__form__label__cashprice">
              {
                cashPriceValue && cashPriceValue.map((chip, i) => <TournamentUpdateInputs index={i} key={i}/>
                 
              )}            

           </div>
   

       <button onClick={handleAddCashprice}  disabled={modifying ? "" : "disabled"} className={modifying ? "active" : "invisible"} >Ajouter un Cash price supplémentaire</button>

     
      <label htmlFor="small_blind" className="tournamentUpdate__form__label">Small blind</label>
      <input onChange={handleInputChange} type="text" name="small_blind" className="tournamentUpdate__form__input" value={smallBlindValue} disabled={modifying ? "" : "disabled"}  />

      

       
      <label htmlFor="status" className="tournamentUpdate__form__label">status</label>
      <input onChange={handleInputChange} type="text" name="status" className="tournamentUpdate__form__input" value={statusValue}  disabled={modifying ? "" : "disabled"}  />


      <label htmlFor="comments" className="tournamentUpdate__form__label">Commentaire</label>
      <input onChange={handleInputChange} type="text" name="comments" className="tournamentUpdate__form__input" value={commentsValue} disabled={modifying ? "" : "disabled"}  />



      {errorMessage && <p className="tournamentUpdate__form__errorMsg">{errorMessage}</p>}
      <button type="submit" onClick={handleModifyTournamentConfirm} className={modifying ? "tournamentUpdate__form__button" : "tournamentUpdate__form__button invisible"}>Valider</button>
      <button onClick={handleModifyTournament} className={!modifying ? "tournamentUpdate__form__button" : "tournamentUpdate__form__button invisible"}>Modifier mon tournoi</button>
      </form>
      )}
      />
      
    </div>
  );
};


const mapStateToProps = (state) => ({
  modifying: state.tournament.modifying,
  nameValue: state.tournament.oneTournament.name,
  locationValue: state.tournament.oneTournament.location,
  dateValue : state.tournament.oneTournament.date,
  statusValue :state.tournament.oneTournament.status,
  cashPriceValue:state.tournament.oneTournament.cashprices,
  buyInValue:state.tournament.oneTournament.buy_in,
  speedValue:state.tournament.oneTournament.speed,
  commentsValue:state.tournament.oneTournament.comments,
  nbPlayersValue:state.tournament.oneTournament.nb_players,
  smallBlindValue: state.tournament.oneTournament.small_blind,
  startingStackValue:state.tournament.oneTournament.starting_stack,
  errorMessage: state.tournament.errorMessage,
  openUpdateModal : state.tournament.openUpdateModal,
  currentId: state.tournament.currentId,
})

const mapDispatchToProps = (dispatch) =>({
  handleAddCashprice: (event) => {
    event.preventDefault()
    dispatch(addCashpriceOneTournament())
  },

  handleModifyTournament: (event) => {
    event.preventDefault();
    dispatch(getStructureTournament())
    dispatch(toggleModifyTournament())
    
  },
  handleInputChange: (event) => {
    dispatch(changeInputValue(event.target.value, event.target.name))
  },
  handleSubmitUpdateTournament: (event) => {
    event.preventDefault();
    dispatch(submitTournamentUpdate())
  },

  handleModifyTournamentConfirm: (event) => {
    event.preventDefault();
    dispatch(modifyTournamentValidate())
    dispatch(hideModalDelete())
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(TournamentUpdate);
