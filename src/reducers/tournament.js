
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
  ERROR_MESSAGE,
  ADD_CASH_PRICE,
  CHANGE_INPUT_CASHPRICE,
  ADD_CASH_PRICE_ONE_TOURNAMENT
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
    name: "",
    date: "",
    location: "",
    speed: "",
    nb_players: "",
    buy_in: "",
    status: "",
    comments: "",
    starting_stack: "",
    small_blind: "",
    chips_user: false,
  },
  cash_price: [],
  nbCashPrice: 1,
  structureTournament:[],
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

      case ERROR_MESSAGE :
        return {
          ...state,
          errorMessage: action.errMessage
          
        }
        case ADD_CASH_PRICE:
          return {
            ...state,
            // nbCashPrice: state.csh_priceInput.position +1,                  
            cash_price:[
              ...state.cash_price,
              {
                position: 0,
                amount : 100
              }
            ]            
          }

          case ADD_CASH_PRICE_ONE_TOURNAMENT:
          return {
            ...state,
            // nbCashPrice: state.csh_priceInput.position +1,  
            oneTournament: {
              ...state.oneTournament,
              cashprices: [
                ...state.oneTournament.cashprices,
                {
                  position: 0,
                  amount : 100
                }
              ]
            }                        
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

          //pour l'udpate
          case CHANGE_INPUT_VALUE:
            return{
              ...state,
              oneTournament: {
                ...state.oneTournament,
                [action.inputName]: action.newInputValue
              },              
              modifying: true,
            }

          case CHANGE_INPUT_CASHPRICE:
            return {
              ...state,
              oneTournament: {
                ...state.oneTournament,
                cashprices: state.oneTournament.cashprices.map(
                  (price, i) => i == action.index
                    ? {
                      ...price, 
                      [action.inputName]: action.newInputValue
                    }
                    : price
                )
            },
            modifying: false
          }
          
          //pour modifier les champs controlés
          case SUBMIT_CREAT_TOURNAMENT_VALUES:
                return {
                  ...state,
                  creatTournament: {
                    ...state.creatTournament,
                    [action.inputName]: action.newInputValue,
                  },
                  cash_price: state.cash_price.map(
                    (price, i) => i == action.index
                    ? {
                      ...price, 
                      [action.inputName]: action.newInputValue
                    }
                    : price
                  ),
                 
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
