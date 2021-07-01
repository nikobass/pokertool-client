import React from 'react';
import  { connect } from 'react-redux';

import {
  submitCreatTournamentValues
} from 'src/actions/tournament';


import 'src/components/Tournaments/tournaments.scss';
import 'src/components/TournamentsCashPriceInputs/tournamentsCashPriceInputs.scss';

const TournamentsCashPriceInputs = (
  {
    handleCashPriceInputChange,
    amount,
    position
  }
) => {
  return (
    <div>
      <div className="tournamentUpdate__main__cashPrice__main">
        <label htmlFor="amount" className="tournamentUpdate__main__cashPrice__main__label">Cash price du n°{position}:</label>
        <input onChange={ handleCashPriceInputChange } type="number" name="amount" className="tournamentUpdate__main__cashPrice__main__input"
        min={0} onWheel={(e) => e.target.blur()}
        value={amount}/>
        <label htmlFor="position" className="tournamentUpdate__main__cashPrice__main__label display">Cash price position:</label>
        <input onChange={ handleCashPriceInputChange } type="number" name="position" className="tournamentUpdate__main__cashPrice__main__input display"
        min={0} onWheel={(e) => e.target.blur()} value={position}/>
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
