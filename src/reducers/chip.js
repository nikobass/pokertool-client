import {
  CHANGE_CHIP_INPUT
} from 'src/actions/chip';

const initialState = { 
  chips: [
    {   
      color: '#e66465',
      value: 5,
      quantity: 10
    },
    {
      color: '#e62144',
      value: 666,
      quantity: 69
    },
  ],
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CHIP_INPUT:
      const index = state.chips.findIndex(chip => chip);
      console.log('index', index);
      return {
        ...state,
        chips: [         
          { 
            ...state.chips[0], 
            [action.inputName]: action.newInputValue 
          }         
        ]      
      }
    default:
      return state;
  }
};

export default reducer;
