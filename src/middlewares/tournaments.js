import axios from 'axios';

import {
  GET_TOURNAMENTS_ALL_USER,
  getTournamentUserSuccess,
  DELETE_TOURNAMENT_USER,
  deleteTournamentSucces,
  getOneTournamentUserSuccess,
  GET_ONE_TOURNAMENT_USER,
  sortTournamentByLocationSuccess,
  SORT_LOCATION

} from 'src/actions/tournament';


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
        .catch((err) => console.log(err));
       
      break;

      case GET_ONE_TOURNAMENT_USER : {
        const state = store.getState();
        const tournamentId = state.tournament.currentId;
        const token = localStorage.getItem('token');

        axios({
          method:'get',
          url: `http://localhost:3000/tournament/${tournamentId}`,
          headers: { "Authorization": `Bearer ${token}` }
        })
        .then((response) => {
          store.dispatch(getOneTournamentUserSuccess(response.data));
          console.log(response.data)
        })
        .catch((error) => console.log(error));
      break;
    }
    case SORT_LOCATION: {
      const state = store.getState();
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
          .catch((error) => console.log(error));
        break;
      }

      default:
        next(action);
        break;
    }
};

export default tournamentsMiddleware;
