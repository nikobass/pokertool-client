
import {
  OPEN_MODAL_TOURNAMENT_DETAILS,
} from 'src/actions/tournament'

import {
  HIDE_MODAL
} from 'src/actions/user'

const initialState = {
  openModal: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type){
    case OPEN_MODAL_TOURNAMENT_DETAILS :
      return {
        ...state,
        openModal: true,
      }
      
        case HIDE_MODAL :
          return{
            ...state,
            openModal: false
          }
      default :
      return state;
  }
}

export default reducer;
