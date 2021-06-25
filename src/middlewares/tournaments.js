import axios from 'axios';

import {
  GET_TOURNAMENTS_ALL_USER,
  getTournamentUserSuccess,
  DELETE_TOURNAMENT_USER,
  deleteTournamentSucces,
  getOneTournamentUserSuccess,
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
        .then((response) => {
          store.dispatch(getTournamentUserSuccess(response.data))
        })
        .catch((err) => console.log(err));
      break;

    case GET_ONE_TOURNAMENT_USER: {
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

    case SORT_NAME: {
      const state = store.getState();
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
      break;
    }

    case SORT_DATE: {
      const state = store.getState();
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
      break;
    }

    case SORT_BUY_IN: {
      const state = store.getState();
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
      break;
    }

    case SORT_CASH_PRICE: {
      const state = store.getState();
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
      store.dispatch(sortTournamentByCashPriceSuccess(tournamentListByCashPrice));
      break;
    }

    case SORT_STATUS: {
      const state = store.getState();
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
      break;
    }

    case SORT_PLAYER: {
      const state = store.getState();
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
