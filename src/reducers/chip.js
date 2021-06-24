import {
  CHANGE_CHIP_INPUT,
  ADD_CHIP,
  GET_CHIPS_SUCCESS,
  REMOVE_CHIP,
  SUBMIT_CHIPS_SUCCESS,
  CHIPS_ERROR_MSG
} from 'src/actions/chip';

const initialState = { 
  chips: [],
  nbChips: null,
  errorMsgChips: null
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
              quantity: 0,
              color:'#000000',
              value: 0,                
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
    case REMOVE_CHIP:
      return {
        ...state,
        nbChips: state.nbChips > 0 ? state.nbChips - 1 : state.nbChips,
        chips: [
          ...state.chips.slice(0, action.index),
          ...state.chips.slice(action.index + 1)
        ]
      }
    case SUBMIT_CHIPS_SUCCESS:
      return {
        ...state,
        chips: action.chipsFromAPI,
        errorMsgChips: null
      }
    case CHIPS_ERROR_MSG:
      return {
        ...state,
        errorMsgChips: action.msgError
      }
    default:
      return state;
  }
};

export default reducer;
