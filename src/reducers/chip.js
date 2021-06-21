import {
  CHANGE_CHIP_INPUT,
  ADD_CHIP,
  GET_CHIPS_SUCCESS
} from 'src/actions/chip';

const initialState = { 
  chips: [],
  nbChips: null
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CHIP:
      return {
        ...state,
        nbChips: state.chips.length + 1,
        chips: [
            ...state.chips,
            {
                color:'#00000',
                value: 0,
                quantity: 0,
            }
        ]
    }
    case CHANGE_CHIP_INPUT:
      return {
        ...state,
        chips: state.chips.map(
            (chip, i) => i == action.index 
            ? {...chip, [action.inputName]:action.newInputValue} 
            : chip
        )
    }
    case GET_CHIPS_SUCCESS:
      return {
        ...state,
        chips: action.chipsFromAPI
      }
    default:
      return state;
  }
};

export default reducer;
