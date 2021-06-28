import React from 'react';
import  { connect } from 'react-redux';

const ButtonAddCashprice = (
  {
    handleCreatTournamentChange,
    cashPricePosition,

  }
) => {
  return (
    <div>
        
                < div className="creatTournamentForm__cashPrice" >
                  <label htmlFor="cash_price" className="creatTournamentForm__label">Cash price:</label> <input onChange={ handleCreatTournamentChange } type="number" name="cash_price" className="creatTournamentForm__input" value={cashPriceAmount}/>
                  <label htmlFor="cash_position" className="creatTournamentForm__label">Cash price position:</label> <input onChange={ handleCreatTournamentChange } type="number" name="cash_position" className="creatTournamentForm__input" value={cashPricePosition}/>
                  </div>
          
              
    </div>
  );
};

export default ButtonAddCashprice;
