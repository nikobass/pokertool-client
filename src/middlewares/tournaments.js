import axios from 'axios';

import {
  GET_TOURNAMENTS_ALL_USER,
  getTournamentUserSuccess,
  DELETE_TOURNAMENT_USER,
  deleteTournamentSucces
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
       
        next(action)
      break;

      case DELETE_TOURNAMENT_USER: {
        const state = store.getState();
        const tournamentId = state.tournament.currentId;
        const token = localStorage.getItem('token');
        console.log(tournamentId)
  
        axios({
          method: 'delete',
          url: `http://localhost:3000/tournament/${tournamentId}`,
          headers: { "Authorization": `Bearer ${token}` }
        })
          .then((response) => {
            store.dispatch(deleteTournamentSucces());
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
