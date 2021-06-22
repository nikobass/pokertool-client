import React from 'react';
import {connect} from 'react-redux';
import {changeChipInput, removeChip} from 'src/actions/chip.js';

import { Trash2 } from 'react-feather';
import './chipelement.scss';

const ChipElement = ({
  color,
  value,
  quantity,
  handleInputChipChange,
  handleRemoveChip,
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
    <Trash2 onClick={handleRemoveChip}/>
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
    dispatch(changeChipInput(event.target.value, event.target.name, ownprops.index));
  },
  handleRemoveChip: (event) => {
    event.preventDefault()
    dispatch(removeChip(ownprops.index));
  } 
});


export default connect(mapStateToProps, mapDispatchToProps)(ChipElement);
