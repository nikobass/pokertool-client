import React from 'react';
import {connect} from 'react-redux';

import 'src/components/TournamentUpdate/tournamentUpdate.scss';

import {
  changeCashPriceValue
} from 'src/actions/tournament';


const TournamentUpdateInputs = ({
  handleCashPriceInputChange,
  amount,
  position,
  modifying
}) => {
return(

<div className="tournamentUpdate__main__cashPrice__main">
        <label htmlFor="amount" className="tournamentUpdate__main__cashPrice__main__label">Cash price </label>
        <input onChange={ handleCashPriceInputChange } type="number" name="amount" className="tournamentUpdate__main__cashPrice__main__input" value={amount} disabled={modifying ? "" : "disabled"}/>

        <label htmlFor="position" className="tournamentUpdate__main__cashPrice__main__label">Cash price position </label>
        <input onChange={ handleCashPriceInputChange } type="number" name="position" className="tournamentUpdate__main__cashPrice__main__input" value={position} disabled={modifying ? "" : "disabled"}/>
</div>
)}

const mapStateToProps = (state, ownprops) => {
return {
  modifying: state.tournament.modifying,
  amount: state.tournament.oneTournament.cashprices[ownprops.index].amount,
  position: state.tournament.oneTournament.cashprices[ownprops.index].position
}};

const mapDispatchToProps = (dispatch, ownprops) => ({
handleCashPriceInputChange: (event) => {
  dispatch(changeCashPriceValue(parseInt(event.target.value), event.target.name, ownprops.index));
}
})


export default connect(mapStateToProps,mapDispatchToProps)(TournamentUpdateInputs);
