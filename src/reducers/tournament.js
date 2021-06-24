
import {
  OPEN_MODAL_TOURNAMENT_DETAILS,
  GET_TOURNAMENTS_ALL_USER,
  GET_TOURNAMENTS_SUCCESS,
  OPEN_MODAL_TOURNAMENT_DELETE,
  DELETE_TOURNAMENT_USER,
  DELETE_TOURNAMENT_SUCCESS,
  GET_ONE_TOURNAMENT_USER,
  GET_ONE_TOURNAMENT_USER_SUCCESS

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
  refreshTournaments: false,
  oneTournament:[],
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type){
    case OPEN_MODAL_TOURNAMENT_DETAILS :
      return {
        ...state,
        openDetailsModal: true,
        currentId: action.currentId
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
            refreshTournaments: true,
          }
        case GET_TOURNAMENTS_SUCCESS :
          return {
            ...state,
            // copie les tounois dans la tournamentList
            tournamentList: action.tournaments,
            loading: false,
            refreshTournaments: false,
          }  
          case GET_ONE_TOURNAMENT_USER :
            return {
              ...state,
              loading: true,
            }
          case GET_ONE_TOURNAMENT_USER_SUCCESS:
            return {
              ...state,
              loading: false,
              oneTournament: action.tournaments

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
              openDeleteModal: false,
              refreshTournaments: true,
            }  
      default :
      return state;
  }
}

export default reducer;
