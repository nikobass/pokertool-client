import axios from 'axios';

import { structureCreator } from 'src/utils/structureCreator'

import {
  GET_TOURNAMENTS_ALL_USER,
  getTournamentUserSuccess,
  DELETE_TOURNAMENT_USER,
  deleteTournamentSucces,
  getOneTournamentUserSuccess,
  tournamentSubmitSuccess,
  TOURNAMENT_SUBMIT,
  modifyTournamentSuccess,
  MODIFY_TOURNAMENT_VALIDATE,
  GET_STRUCTURE_TOURNAMENT,
  getStructureTournamentSuccess,
  CREATE_STRUCTURE,
  addStructureToState,
  tournamentSubmit,
  clearTournament,
  errMessage,
  SUBMIT_WITH_MY_CHIPS,
  SUBMIT_WITH_MY_CHIPS_UPDATE,  
  submitFromMyChipsUpdateSuccess,
  submitFromMyChipsSuccess,
  getStructureTournament,
  GET_ONE_TOURNAMENT_USER,
  sortTournamentByLocationSuccess,
  SORT_LOCATION,
  SORT_NAME,
  sortTournamentByNameSuccess,
  SORT_DATE,
  sortTournamentByDateSuccess,
  SORT_BUY_IN,
  sortTournamentByBuyInSuccess,
  SORT_CASH_PRICE,
  sortTournamentByCashPriceSuccess,
  SORT_STATUS,
  sortTournamentByStatusSuccess,
  SORT_PLAYER,
  sortTournamentByPlayerSuccess,
  LAUNCH_TOURNAMENT,
} from 'src/actions/tournament';

import { launchTournamentSucess } from 'src/actions/timer';

const tournamentsMiddleware = (store) => (next) => (action) => {


    switch (action.type) {
      case GET_TOURNAMENTS_ALL_USER :
        const tournamentUserId = localStorage.getItem('userId');
        const token = localStorage.getItem('token'); 
      
        axios({
          method: 'get',
          url: `http://localhost:3000/tournaments/${tournamentUserId}`,
          headers: {"Authorization" : `Bearer ${token}`}
        })
        .then((response) =>{
          store.dispatch(getTournamentUserSuccess(response.data))
        })
        .catch((err) =>{  console.log(err),       
        store.dispatch(clearTournament());        
        });           
      break;
      case GET_ONE_TOURNAMENT_USER : {
        const state = store.getState();
        const tournamentId = state.tournament.currentId;
        const token = localStorage.getItem('token');   

      axios({
        method: 'get',
        url: `http://localhost:3000/tournament/${tournamentId}`,
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then((response) => {
          store.dispatch(getOneTournamentUserSuccess(response.data));   
          store.dispatch(getStructureTournament())         
        })      
         .catch((err) =>{
        store.dispatch(clearTournament());
        store.dispatch(errMessage(err.response.data.message))
        });
        
      break;
    }

    case SORT_LOCATION: {
      const state = store.getState();
      const isFiltred = state.tournament.isFiltred

      if(!isFiltred) {
        const compareLocation = (a, b) => {
          if (a.location < b.location) {
            return -1;
          }
          if (a.location > b.location) {
            return 1;
          }
          return 0;
        };
        const tournamentListByLocation = state.tournament.tournamentList.sort(compareLocation);
        store.dispatch(sortTournamentByLocationSuccess(tournamentListByLocation));
      } else {
        const compareLocation = (a, b) => {
          if (a.location < b.location) {
            return 1;
          }
          if (a.location > b.location) {
            return -1;
          }
          return 0;
        };
        const tournamentListByLocation = state.tournament.tournamentList.sort(compareLocation);
        store.dispatch(sortTournamentByLocationSuccess(tournamentListByLocation));
      }
   
      break;
    }

    case SORT_NAME: {
      const state = store.getState();
      const isFiltred = state.tournament.isFiltred

      if(!isFiltred) {
        const compareName = (a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        };
        const tournamentListByName = state.tournament.tournamentList.sort(compareName);
        store.dispatch(sortTournamentByNameSuccess(tournamentListByName));
      } else {
        const compareName = (a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        };
        const tournamentListByName = state.tournament.tournamentList.sort(compareName);
        store.dispatch(sortTournamentByNameSuccess(tournamentListByName));
      }     
      break;
    }

    case SORT_DATE: {
      const state = store.getState();
      const isFiltred = state.tournament.isFiltred

      if(!isFiltred) {
      const compareDate = (a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      };
      const tournamentListByDate = state.tournament.tournamentList.sort(compareDate);
      store.dispatch(sortTournamentByDateSuccess(tournamentListByDate));
    } else {
      const compareDate = (a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      };
      const tournamentListByDate = state.tournament.tournamentList.sort(compareDate);
      store.dispatch(sortTournamentByDateSuccess(tournamentListByDate));
    }
      break;
    }

    case SORT_BUY_IN: {
      const state = store.getState();
      const isFiltred = state.tournament.isFiltred

      if(!isFiltred) {
        const compareBuyIn = (a, b) => {
          if (a.buy_in < b.buy_in) {
            return 1;
          }
          if (a.buy_in > b.buy_in) {
            return -1;
          }
          return 0;
      };
      const tournamentListByBuyIn = state.tournament.tournamentList.sort(compareBuyIn);
      store.dispatch(sortTournamentByBuyInSuccess(tournamentListByBuyIn));
    } else {
      const compareBuyIn = (a, b) => {
        if (a.buy_in < b.buy_in) {
          return -1;
        }
        if (a.buy_in > b.buy_in) {
          return 1;
        }
        return 0;
      };
      const tournamentListByBuyIn = state.tournament.tournamentList.sort(compareBuyIn);
      store.dispatch(sortTournamentByBuyInSuccess(tournamentListByBuyIn));
    }
      break;
    }

    case SORT_CASH_PRICE: {
      const state = store.getState();
      const isFiltred = state.tournament.isFiltred

      if(!isFiltred) {
      const compareCashPrice = (a, b) => {
        if (a.cash_price < b.cash_price) {
          return 1;
        }
        if (a.cash_price > b.cash_price) {
          return -1;
        }
        return 0;
      };
      const tournamentListByCashPrice = state.tournament.tournamentList.sort(compareCashPrice);
      console.log(tournamentListByCashPrice);
      store.dispatch(sortTournamentByCashPriceSuccess(tournamentListByCashPrice));
    } else {
      const compareCashPrice = (a, b) => {
        if (a.cash_price < b.cash_price) {
          return -1;
        }
        if (a.cash_price > b.cash_price) {
          return 1;
        }
        return 0;
      };
      const tournamentListByCashPrice = state.tournament.tournamentList.sort(compareCashPrice);
      store.dispatch(sortTournamentByCashPriceSuccess(tournamentListByCashPrice));
    }
      break;
    }

    case SORT_STATUS: {
      const state = store.getState();
      const isFiltred = state.tournament.isFiltred

      if(!isFiltred) {
      const compareStatus = (a, b) => {
        if (a.status < b.status) {
          return 1;
        }
        if (a.status > b.status) {
          return -1;
        }
        return 0;
      };
      const tournamentListByStatus = state.tournament.tournamentList.sort(compareStatus);
      store.dispatch(sortTournamentByStatusSuccess(tournamentListByStatus));
    } else {
      const compareStatus = (a, b) => {
        if (a.status < b.status) {
          return -1;
        }
        if (a.status > b.status) {
          return 1;
        }
        return 0;
      };
      const tournamentListByStatus = state.tournament.tournamentList.sort(compareStatus);
      store.dispatch(sortTournamentByStatusSuccess(tournamentListByStatus));
    }
      break;
    }
        
        case SORT_PLAYER: {
      const state = store.getState();
      const isFiltred = state.tournament.isFiltred

      if(!isFiltred) {
      const comparePlayer = (a, b) => {
        if (a.nb_players < b.nb_players) {
          return 1;
        }
        if (a.nb_players > b.nb_players) {
          return -1;
        }
        return 0;
      };
      const tournamentListByPlayer = state.tournament.tournamentList.sort(comparePlayer);
      store.dispatch(sortTournamentByPlayerSuccess(tournamentListByPlayer));
    } else {
      const comparePlayer = (a, b) => {
        if (a.nb_players < b.nb_players) {
          return -1;
        }
        if (a.nb_players > b.nb_players) {
          return 1;
        }
        return 0;
      };
      const tournamentListByPlayer = state.tournament.tournamentList.sort(comparePlayer);
      store.dispatch(sortTournamentByPlayerSuccess(tournamentListByPlayer));
    }
      break;
    }

      case DELETE_TOURNAMENT_USER: {
        const state = store.getState();
        const tournamentId = state.tournament.currentId;
        const token = localStorage.getItem('token');
  
        axios({
          method: 'delete',
          url: `http://localhost:3000/tournament/${tournamentId}`,
          headers: { "Authorization": `Bearer ${token}` }
        })
          .then((response) => {
            store.dispatch(deleteTournamentSucces(tournamentId));
          })
          .catch((error) => {
          store.dispatch(errMessage(error.response.data.message))
        });       

        break;
      }
      
      case SUBMIT_WITH_MY_CHIPS: {
        const state = store.getState();
        const chips = state.chip.chips;
        const isMyChipsChecked = state.tournament.createTournamentInputs.chips_user;
     
        const smallestChipValue = Math.min.apply(Math, chips.map((chip) =>  chip.value));

        if(isMyChipsChecked) {          
          store.dispatch(submitFromMyChipsSuccess(parseInt(smallestChipValue)));
        };           
      
        break;
      }

      case SUBMIT_WITH_MY_CHIPS_UPDATE: {
        const state = store.getState();
        const chips = state.chip.chips;
        const isMyChipsChecked = state.tournament.oneTournament.chips_user;
     
        const smallestChipValue = Math.min.apply(Math, chips.map((chip) =>  chip.value));

        if(isMyChipsChecked) {          
          store.dispatch(submitFromMyChipsUpdateSuccess(parseInt(smallestChipValue)));
        };           
      
        break;
      }
      

      case TOURNAMENT_SUBMIT: {
        const state = store.getState();
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token'); 

        const data = [    {
          name: state.tournament.createTournamentInputs.name,
          date: state.tournament.createTournamentInputs.date,
          location: state.tournament.createTournamentInputs.location,
          speed:state.tournament.createTournamentInputs.speed,
          nb_players:state.tournament.createTournamentInputs.nb_players,
          comments:state.tournament.createTournamentInputs.comments,
          // cash price todo comme structure
        
          buy_in:state.tournament.createTournamentInputs.buy_in,
          starting_stack: state.tournament.createTournamentInputs.starting_stack,
          small_blind: state.tournament.createTournamentInputs.small_blind,
          chips_user: state.tournament.createTournamentInputs.chips_user         
        },          
          state.tournament.structureTournament,
          state.tournament.cash_price,          
      ] 

        axios ({
          method: 'post',
          url: `http://localhost:3000/tournament/${userId}`,
          headers: { "Authorization": `Bearer ${token}` },
          data:  data
        })
          .then(response => {           
            
            // Créer une autre action qui modifie le state (donc la dispatch)
            // le return de la fonction structureCreator remplacera structureTournament dans le state
            store.dispatch(tournamentSubmitSuccess(response.data));
          })
          .catch((err) => {          
           
            store.dispatch(errMessage(err.response.data.message))
            
          });
        break;
      }
      case MODIFY_TOURNAMENT_VALIDATE : {
        const state = store.getState();
        const tournamentId = state.tournament.currentId;
        const token = localStorage.getItem('token');


        axios({
          method:'patch',
          url: `http://localhost:3000/tournament/${tournamentId}`,
          headers: { "Authorization": `Bearer ${token}` },
          data: [    {
            name: state.tournament.oneTournament.name,
            date: state.tournament.oneTournament.date,
            location: state.tournament.oneTournament.location,
            speed:state.tournament.oneTournament.speed,
            nb_players:state.tournament.oneTournament.nb_players,
            comments:state.tournament.oneTournament.comments,           
            buy_in:state.tournament.oneTournament.buy_in,
            starting_stack: state.tournament.oneTournament.starting_stack,
            small_blind: state.tournament.oneTournament.small_blind,
            status: state.tournament.oneTournament.status,
            chips_user: state.tournament.oneTournament.chips_user,
          },
            state.tournament.structureTournament,
            state.tournament.oneTournament.cashprices

          
        ]
        })
        .then((response) => {

          store.dispatch(modifyTournamentSuccess(response.data));
        })
        .catch((err) => store.dispatch(errMessage(err.response.data.message)));
        
      
      break;
    }

    case GET_STRUCTURE_TOURNAMENT :{ 
      const state = store.getState();
      const tournamentId = state.tournament.currentId;
      const token = localStorage.getItem('token');  
      
      axios({
        method: 'get',
        url: `http://localhost:3000/structure/${tournamentId}`,
        headers: {"Authorization" : `Bearer ${token}`},
        data:{
          structure : state.tournament.structureTournament

        }
      })
      .then((response) =>{
        store.dispatch(getStructureTournamentSuccess(response.data))
        
      })
      .catch((err) => console.log(err));
      
      break;
    }

    case CREATE_STRUCTURE :{
      const state = store.getState()
     // const token = localStorage.getItem('token');  
      
      store.dispatch(addStructureToState(
        structureCreator(
          state.tournament.createTournamentInputs.small_blind,
          state.tournament.createTournamentInputs.nb_players,
          state.tournament.createTournamentInputs.starting_stack,
          state.tournament.createTournamentInputs.speed
          )));
      store.dispatch(tournamentSubmit())
      
      break;
    }

    case LAUNCH_TOURNAMENT: {
      
      const tournamentId = action.tournamentId;
      const token = localStorage.getItem('token'); 

      axios({
        method: 'get',
        url: `http://localhost:3000/timer/${tournamentId}`,
        headers: {"Authorization" : `Bearer ${token}`},
      })
      .then((response) =>{
        store.dispatch(launchTournamentSucess(response.data));
        
      })
      .catch((error) => console.log(error));

      break;
    }
      default:
        next(action);
        break;
    }
};

export default tournamentsMiddleware;
