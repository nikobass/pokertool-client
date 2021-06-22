
import {
  OPEN_MODAL_TOURNAMENT_DETAILS,
  GET_TOURNAMENTS_ALL_USER,
  GET_TOURNAMENTS_SUCCESS,
  OPEN_MODAL_TOURNAMENT_DELETE,
  DELETE_TOURNAMENT_USER,
  DELETE_TOURNAMENT_SUCCESS,
  GET_ONE_TOURNAMENT_USER,
  GET_ONE_TOURNAMENT_USER_SUCCESS,
  SHOW_CREATE_TOURNAMENT_MODAL,
  TOURNAMENT_SUBMIT_SUCCESS,
  SUBMIT_CREAT_TOURNAMENT_VALUES,
  OPEN_MODAL_TOURNAMENT_UPDATE,
  CHANGE_INPUT_VALUE,
  TOGGLE_MODIFY_TOURNAMENT,

} from 'src/actions/tournament'

import {
  HIDE_MODAL
} from 'src/actions/user'

const initialState = {
  openDetailsModal: false,
  openDeleteModal: false,
  openUpdateModal: false,
  tournamentList : [],
  loading: false,
  currentId: null,
  refreshTournaments: false,
  oneTournament:[],
  showCreateTournamentModal: false,
  creatTournament: {
    name: null,
    date: null,
    location: null,
    speed: null,
    nb_players: null,
    buy_in: null,
    cash_price: null,
    status: null,
    comments: null,
    starting_stack: null,

  },
  modifying: false,
  errorMessage: null,
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
      
        case OPEN_MODAL_TOURNAMENT_UPDATE :
          return{
            ...state,
            openUpdateModal: true,
            currentId: action.currentId

          }
      
        case HIDE_MODAL :
          return{
            ...state,
            openDetailsModal: false,
            openDeleteModal: false,
            showCreateTournamentModal: false,
            openUpdateModal: false
          }
        case SHOW_CREATE_TOURNAMENT_MODAL:
      return {
        ...state,
        showCreateTournamentModal: true
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
         
          case TOGGLE_MODIFY_TOURNAMENT:
            return{
              ...state,
              modifying: true,
              oneTournament: tournament.id,
              oneTournament:{
                ...state.oneTournament
              }
            }

          case CHANGE_INPUT_VALUE:
            return{
              ...state,
              oneTournament: {
                ...state.oneTournament,
                [action.inputName]: action.newInputValue
              },
              modifying: true,
            }
          
          case SUBMIT_CREAT_TOURNAMENT_VALUES:
                return {
                  ...state,
                  creatTournament: {
                    ...state.creatTournament,
                    [action.inputName]: action.newInputValue,
                  }
                };
          case TOURNAMENT_SUBMIT_SUCCESS:
                return {
                    ...state,
                    showCreateTournamentModal: false,
                    refreshTournaments: true
                  };


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
