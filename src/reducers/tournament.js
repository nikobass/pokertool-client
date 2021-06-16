
import {
  OPEN_MODAL_TOURNAMENT_DETAILS,
} from 'src/actions/tournament'

import {
  HIDE_MODAL
} from 'src/actions/user'

const initialState = {
  openDetailsModal: false,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type){
    case OPEN_MODAL_TOURNAMENT_DETAILS :
      return {
        ...state,
        openDetailsModal: true,
      }
      
        case HIDE_MODAL :
          return{
            ...state,
            openDetailsModal: false
          }
      default :
      return state;
  }
}

export default reducer;
