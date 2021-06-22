import axios from 'axios';

import {
  GET_TOURNAMENTS_ALL_USER,
  getTournamentUserSuccess,
  DELETE_TOURNAMENT_USER,
  deleteTournamentSucces,
  getOneTournamentUserSuccess,
  GET_ONE_TOURNAMENT_USER ,
  tournamentSubmitSuccess,
  TOURNAMENT_SUBMIT,


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
          store.dispatch(toggleModifyTournament(tournamentId))
          console.log(response.data)
        })
        .catch((error) => console.log(error));
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

      case TOURNAMENT_SUBMIT: {
        const state = store.getState();
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
  
        axios ({
          method: 'post',
          url: `http://localhost:3000/tournament/${userId}`,
          headers: { "Authorization": `Bearer ${token}` },
          data: {
            name: state.tournament.creatTournament.name,
            date: state.tournament.creatTournament.date,
            location: state.tournament.creatTournament.location,
            speed:state.tournament.creatTournament.speed,
            nb_players:state.tournament.creatTournament.nb_players,
            comments:state.tournament.creatTournament.comments,
            cash_price:state.tournament.creatTournament.cash_price,
            buy_in:state.tournament.creatTournament.buy_in,
            starting_stack: state.tournament.creatTournament.starting_stack,
          },
        })
          .then(response => {
            console.log(response.data);
            console.log('test')
            store.dispatch(tournamentSubmitSuccess(response.data));
            
          })
          .catch((err) => {          
            console.log(err.response.data.message);
          });
        break;
      }

      default:
        next(action);
        break;
    }
};

export default tournamentsMiddleware;
