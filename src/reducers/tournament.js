
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
  MODIFY_TOURNAMENT_SUCESS,
  GET_STRUCTURE_TOURNAMENT_SUCCESS,
  ADD_STRUCTURE_TO_STATE,
  CLEAR_TOURNAMENT,
  ERROR_MESSAGE

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
    small_blind: null,
    chips_user: false,
  },
  structureTournament:[],
  modifying: false,
  errorMessage: null,

  cashPrice: [
    {1: 100},
    {2: 50},
    {3: 25},
  ]
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

      case ERROR_MESSAGE :
        return {
          ...state,
          errorMessage: action.errMessage
          
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
          case CLEAR_TOURNAMENT :
            return {
              ...state,
              tournamentList: []
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
          
          case GET_STRUCTURE_TOURNAMENT_SUCCESS:
            return{
              ...state,
              structureTournament: action.structure,
              
            }

           case ADD_STRUCTURE_TO_STATE:
             return{
               ...state,
               structureTournament: action.structure
             } 

          /************************* POST Tournaments ******************************/
         
          case TOGGLE_MODIFY_TOURNAMENT:
            return{
              ...state,
              modifying: true,
              loading: true,
              refreshTournaments: true,
              }

          case MODIFY_TOURNAMENT_SUCESS :
            return{
              ...state,
              modifying: false,
              loading: false,
              oneTournament: action.tournaments,
              creatTournament: [],
              refreshTournaments: true,
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
                  },
                 
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
