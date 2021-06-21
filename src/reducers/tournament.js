
import {
  OPEN_MODAL_TOURNAMENT_DETAILS,
  GET_TOURNAMENTS_ALL_USER,
  GET_TOURNAMENTS_SUCCESS,
  OPEN_MODAL_TOURNAMENT_DELETE,
  DELETE_TOURNAMENT_USER,
  DELETE_TOURNAMENT_SUCCESS
} from 'src/actions/tournament'

import {
  HIDE_MODAL
} from 'src/actions/user'

const initialState = {
  openDetailsModal: false,
  openDeleteModal: false,
  tournamentList : [],
  loading: false,
  currentId: null,


}

const reducer = (state = initialState, action = {}) => {
  switch (action.type){
    case OPEN_MODAL_TOURNAMENT_DETAILS :
      return {
        ...state,
        openDetailsModal: true,
      }
      case OPEN_MODAL_TOURNAMENT_DELETE:
        return{
          ...state,
          openDeleteModal: true,
          currentId: action.currentId
        }
      
        case HIDE_MODAL :
          return{
            ...state,
            openDetailsModal: false,
            openDeleteModal: false
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
          case DELETE_TOURNAMENT_USER :
            return{
              ...state,
              openDeleteModal: false,
              
            }
          case DELETE_TOURNAMENT_SUCCESS:
            return{
              ...state,
              tournamentList: [
                ...state.tournamentList,
              ],
              openDeleteModal: false

            }  
      default :
      return state;
  }
}

export default reducer;
