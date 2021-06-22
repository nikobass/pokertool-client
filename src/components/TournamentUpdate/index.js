import React from 'react';
import Modal from 'src/components/Modal';
import { connect } from 'react-redux';

import 'src/components/TournamentUpdate/tournamentUpdate.scss'

import {
  toggleModifyTournament,
  submitTournamentUpdate,
  getOneTournamentUser
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
  currentId
  

}) => {
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

      {errorMessage && <p className="tournamentUpdate__form__errorMsg">{errorMessage}</p>}
      <button type="submit" className={modifying ? "tournamentUpdate__form__button" : "tournamentUpdate__form__button invisible"}>Valider</button>
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
  errorMessage: state.tournament.errorMessage,
  openUpdateModal : state.tournament.openUpdateModal,
  currentId: state.tournament.currentId
})

const mapDispatchToProps = (dispatch) =>({
  handleModifyTournament: (event) => {
    event.preventDefault();
    dispatch(getOneTournamentUser())
    dispatch(toggleModifyTournament(currentId));
  },
  handleInputChange: (event) => {
    dispatch(changeInputValue(event.target.value, event.target.name))
  },
  handleSubmitUpdateTournament: (event) => {
    event.preventDefault();
    dispatch(submitTournamentUpdate())
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(TournamentUpdate);
