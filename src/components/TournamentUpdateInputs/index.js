import React from 'react';
import {connect} from 'react-redux';

import './tournamentUpdateInputs.scss';

import {
  changeCashPriceValue
} from 'src/actions/tournament';


const TournamentUpdateInputs = ({
  handleCashPriceInputChange,
  amount,
  position
}) => {
return(

<div>        
    <div className="creatTournamentForm__cashPrice">
        <label htmlFor="amount" className="creatTournamentForm__label">Cash price:</label>
        <input onChange={ handleCashPriceInputChange } type="number" name="amount" className="creatTournamentForm__input" value={amount}/>
        <label htmlFor="position" className="creatTournamentForm__label">Cash price position:</label>
        <input onChange={ handleCashPriceInputChange } type="number" name="position" className="creatTournamentForm__input" value={position}/>
    </div>           
</div>
)}

const mapStateToProps = (state, ownprops) => {
  console.log("ici ", state.tournament.oneTournament.cashprices[ownprops.index].amount);
return {
amount: state.tournament.oneTournament.cashprices[ownprops.index].amount,
position: state.tournament.oneTournament.cashprices[ownprops.index].position
}};

const mapDispatchToProps = (dispatch, ownprops) => ({
handleCashPriceInputChange: (event) => {
  dispatch(changeCashPriceValue(parseInt(event.target.value), event.target.name, ownprops.index));
}
})


export default connect(mapStateToProps,mapDispatchToProps)(TournamentUpdateInputs);
