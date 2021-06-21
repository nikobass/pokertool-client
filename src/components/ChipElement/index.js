import React from 'react';
import {connect} from 'react-redux';
import {changeChipInput} from 'src/actions/chip.js';

import './chipelement.scss';

const ChipElement = ({
  color,
  value,
  quantity,
  handleInputChipChange
}) => (
  <>    
    <label htmlFor="color">Couleur</label>    
    <input 
      type="color"
      name="color" 
      value={color}
      onChange={handleInputChipChange}
    />  
    <label htmlFor="value">Valeur</label>
    <input 
      type="number"
      name="value" 
      value={value}
      onChange={handleInputChipChange}
    />
    <label htmlFor="quantity">Quantitée</label>
    <input 
      type="number"
      name="quantity" 
      value={quantity}
      onChange={handleInputChipChange}
    />
    <br />
  </>
);

const mapStateToProps = (state, ownprops) => {
  return {
    color: state.chip.chips[ownprops.index].color,
    value: state.chip.chips[ownprops.index].value,
    quantity: state.chip.chips[ownprops.index].quantity,
    // chipColor: state.chips.chips[ownprops.index].color
  }
};

const mapDispatchToProps = (dispatch, ownprops) => ({
  handleInputChipChange: (event) => {
    console.log(ownprops.index)
    dispatch(changeChipInput(event.target.value, event.target.name, ownprops.index));
  }
  
});


export default connect(mapStateToProps, mapDispatchToProps)(ChipElement);
