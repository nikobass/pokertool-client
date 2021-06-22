import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ChipElement from 'src/components/ChipElement';
import  { submitChips, addChip, getChipsFromAPI } from 'src/actions/chip.js';

import './chipcaseform.scss';

const ChipCaseForm = ({chipsList, handleSubmitForm, handleAddChip}) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChipsFromAPI())
  }, []);

  return (
    <form>
    <button onClick={handleAddChip} className="">Ajouter un jeton</button> <br />
      {       
        chipsList.map((chip, i) => (
            <ChipElement 
            color={chip.color}
            value={chip.value}
            quantity={chip.quantity}
            key={i}
            index={i}
          />
        ))
      }        
      <button onClick={handleSubmitForm}type="submit">Valider</button>
    </form>
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
    event.preventDefault();
    console.log('form submited')    
    dispatch(submitChips());  
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ChipCaseForm);
