import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ChipElement from 'src/components/ChipElement';
import  { submitChips, addChip, getChipsFromAPI } from 'src/actions/chip.js';

import './chipcaseform.scss';

const ChipCaseForm = ({chipsList, handleSubmitForm, handleAddChip}) => {

  const dispatch = useDispatch();
  useEffect(() => {       
    dispatch(getChipsFromAPI()); 
  }, []);

  return (
    <main className="chips">   
     <h2 className="chips__form__subtitle">Gestion de mes jetons</h2> 
      <form className="chips__form">
      <div className="chips__form__chips">
      <button onClick={handleAddChip} className="chips__form__addChip">Ajouter un jeton</button>
        {       
          chipsList && chipsList.map((chip, i) => (
              <ChipElement 
              color={chip.color}
              value={chip.value}
              quantity={chip.quantity}
              key={i}
              index={i}
            />
          ))
        }        
      <button onClick={handleSubmitForm} className="chips__form__submitChips" type="submit">Valider</button>
      </div>
      </form>
    </main>
  )
};

const mapStateToProps = (state) => ({
  chipsList: state.chip.chips,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddChip: (event) => {
    event.preventDefault()
    dispatch(addChip())
  },
  handleSubmitForm: (event) => {
    event.preventDefault() 
    dispatch(submitChips());  
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ChipCaseForm);
