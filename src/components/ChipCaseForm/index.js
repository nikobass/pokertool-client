import React from 'react';
import { connect } from 'react-redux';
import ChipElement from 'src/components/ChipElement';
import  { submitChips } from 'src/actions/chip.js';

import './chipcaseform.scss';

const ChipCaseForm = ({chipsList, handleSubmitForm}) => (
    <form onSubmit={handleSubmitForm}>
      {       
        chipsList.map((chip) => (
            <ChipElement 
            currentChipColor={chip.color}
            currentChipValue={chip.value}
            currentChipQuantity={chip.quantity}
          />
        ))
      }        
      <button type="submit">Valider</button>
    </form>
  );

const mapStateToProps = (state) => ({
  chipsList: state.chip.chips
});

// const mapDispatchToProps = (dispatch) => ({
//   handleSubmitForm: (event) => {
//     event.preventDefault();
//     console.log('form submited')
//     dispatch(submitChips());
//   },
// })

export default connect(mapStateToProps)(ChipCaseForm);
