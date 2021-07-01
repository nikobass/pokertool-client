import React from 'react';
import  { connect } from 'react-redux';

import {
  submitCreatTournamentValues
} from 'src/actions/tournament';

const TournamentsCashPriceInputs = (
  {
    handleCashPriceInputChange,
    amount,
    position
  }
) => {
  return (
    <div>        
      <div className="creatTournamentForm__cashPrice">
        <label htmlFor="amount" className="creatTournamentForm__label">Cash price:</label>
        <input onChange={ handleCashPriceInputChange } type="number" name="amount" className="creatTournamentForm__input"
        min={0} onWheel={(e) => e.target.blur()}
        value={amount}/>
        <label htmlFor="position" className="creatTournamentForm__label">Cash price position:</label>
        <input onChange={ handleCashPriceInputChange } type="number" name="position" className="creatTournamentForm__input"
        min={0} onWheel={(e) => e.target.blur()}
        value={position}/>
      </div>           
    </div>
  );
};

const mapStateToProps = (state, ownprops) => {
  
  return {

  amount: state.tournament.cash_price[ownprops.index].amount,
  position: state.tournament.cash_price[ownprops.index].position
  
  }};

const mapDispatchToProps = (dispatch, ownprops) => ({
  handleCashPriceInputChange: (event) => {
    dispatch(submitCreatTournamentValues(event.target.value, event.target.name, ownprops.index));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TournamentsCashPriceInputs);
