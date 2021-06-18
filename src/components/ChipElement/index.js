import React from 'react';
import {connect} from 'react-redux';
import {changeChipInput} from 'src/actions/chip.js';

import './chipelement.scss';

const ChipElement = ({
  currentChipColor,
  currentChipValue,
  currentChipQuantity,
  handleInputChipChange
}) => (
  <>    
    <label htmlFor="color">Couleur</label>    
    <input 
      type="color"
      name="color" 
      value={currentChipColor}
      onChange={handleInputChipChange}
    />  
    <label htmlFor="value">Valeur</label>
    <input 
      type="number"
      name="value" 
      value={currentChipValue}
      onChange={handleInputChipChange}
    />
    <label htmlFor="quantity">Quantitée</label>
    <input 
      type="number"
      name="quantity" 
      value={currentChipQuantity}
      onChange={handleInputChipChange}
    />
    <br />
  </>
);

const mapStateToProps = (state) => {
  let i=0;
  console.log(state.chip.chips);
  // for (i=0; i < state.chip.chips.length; i++) {
  //   return ({
  //     currentChipColor: state.chip.chips[i].color,
  //     currentChipValue: state.chip.chips[i].value,
  //     currentChipQuantity: state.chip.chips[i].quantity
  //   })
  // }
};

const mapDispatchToProps = (dispatch) => ({
  handleInputChipChange: (event) => {
    dispatch(changeChipInput(event.target.value, event.target.name));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ChipElement);
