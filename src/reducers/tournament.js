
import {
  OPEN_MODAL_TOURNAMENT_DETAILS,
  GET_TOURNAMENTS_ALL_USER,
  GET_TOURNAMENTS_SUCCESS,
} from 'src/actions/tournament'

import {
  HIDE_MODAL
} from 'src/actions/user'

const initialState = {
  openDetailsModal: false,
  tournamentList : [],
  loading: false,

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
          /************************* GET Tournaments ******************************/
        case GET_TOURNAMENTS_ALL_USER :
          return{
            ...state,
            loading: true,
          }
        case GET_TOURNAMENTS_SUCCESS :
          return {
            ...state,
            // copie les tounois dans la tournamentList
            tournamentList: action.tournaments,
            loading: false
          }  
          /************************* POST Tournaments ******************************/



          /************************* DELETE Tournaments ******************************/
      default :
      return state;
  }
}

export default reducer;
