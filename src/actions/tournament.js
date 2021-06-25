export const OPEN_MODAL_TOURNAMENT_DETAILS = 'OPEN_MODAL_TOURNAMENT_DETAILS';
export const CLOSE_TOURNAMENT_DETAILS_MODAL = 'CLOSE_TOURNAMENT_DETAILS_MODAL';
export const GET_TOURNAMENTS_ALL_USER = 'GET_TOURNAMENTS_ALL_USER';
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS';
export const DELETE_TOURNAMENT_USER = 'DELETE_TOURNAMENT_USER';
export const DELETE_TOURNAMENT_SUCCESS = 'DELETE_TOURNAMENT_SUCCESS';
export const SHOW_DELETE_TOURNAMENT_MODAL = 'SHOW_DELETE_TOURNAMENT_MODAL';
export const OPEN_MODAL_TOURNAMENT_DELETE = 'OPEN_MODAL_TOURNAMENT_DELETE';
export const GET_ONE_TOURNAMENT_USER = 'GET_ONE_TOURNAMENT_USER';
export const GET_ONE_TOURNAMENT_USER_SUCCESS = 'GET_ONE_TOURNAMENT_USER_SUCCESS';
export const SORT_TOURNAMENT_BY_LOCATION_SUCCESS = 'SORT_TOURNAMENT_BY_LOCATION_SUCCESS';
export const SORT_LOCATION = 'SORT_LOCATION';
export const SORT_NAME = 'SORT_NAME';
export const SORT_TOURNAMENT_BY_NAME_SUCCESS = 'SORT_TOURNAMENT_BY_NAME_SUCCESS';
export const SORT_DATE = 'SORT_DATE';
export const SORT_TOURNAMENT_BY_DATE_SUCCESS = 'SORT_TOURNAMENT_BY_DATE_SUCCESS';
export const SORT_BUY_IN = 'SORT_BUY_IN';
export const SORT_TOURNAMENT_BY_BUY_IN_SUCCESS = 'SORT_TOURNAMENT_BY_BUY_IN_SUCCESS';
export const SORT_CASH_PRICE = 'SORT_CASH_PRICE';
export const SORT_TOURNAMENT_BY_CASH_PRICE_SUCCESS = 'SORT_TOURNAMENT_BY_CASH_PRICE_SUCCESS';
export const SORT_STATUS = 'SORT_STATUS';
export const SORT_TOURNAMENT_BY_STATUS_SUCCESS = 'SORT_TOURNAMENT_BY_STATUS_SUCCESS';
export const SORT_PLAYER = 'SORT_PLAYER';
export const SORT_TOURNAMENT_BY_PLAYER_SUCCESS = 'SORT_TOURNAMENT_BY_PLAYER_SUCCESS';

import {HIDE_MODAL} from './user';

/*************************** Modal Tournaments ****************************/

// ouverture de la modal détail d'un tournoi
export const tournamentDetailsModal = (currentId ) => ({
  type: OPEN_MODAL_TOURNAMENT_DETAILS,
  currentId,
});

export const tournamentDeleteModal = (currentId) => ({
  type: OPEN_MODAL_TOURNAMENT_DELETE,
  currentId,
});

/************************* GET Tournaments ******************************/

// récupération de la list des tournois depuis le back
export const getTournamentUser = () => ({
  type: GET_TOURNAMENTS_ALL_USER,
});

// retour du middleware pour la 
// récupération de la list des tournois depuis le back 
export const getTournamentUserSuccess = (tournaments) => ({
  type: GET_TOURNAMENTS_SUCCESS,
  tournaments,
});

// récupération des détails d'un tournoi
export const getOneTournamentUser = () => ({
  type: GET_ONE_TOURNAMENT_USER,
});

// retour du middleware pour les details d'un tournoi
export const getOneTournamentUserSuccess = (tournaments) => ({
  type: GET_ONE_TOURNAMENT_USER_SUCCESS,
  tournaments,
});

/************************* POST Tournaments ******************************/




/************************* DELETE Tournaments ******************************/

// ouverture modal supprimer un tournoi
export const showDeleteTournamentModal = () => ({
  type: SHOW_DELETE_TOURNAMENT_MODAL,q
});

// pars dans le middleware pour requete delete
export const deleteTournamentUser = (tournamentId) => ({
  type: DELETE_TOURNAMENT_USER,
  tournamentId,

});

// retour depuis le middleware
export const deleteTournamentSucces = (tournamentId) => ({
  type: DELETE_TOURNAMENT_SUCCESS,
  tournamentId,
});

// ferme la modal au bouton annuler
export const hideModalDelete = () => ({
  type: HIDE_MODAL,
});

// trie les tournois par lieu
export const sortTournamentByLocationSuccess = (tournaments) => ({
  type: SORT_TOURNAMENT_BY_LOCATION_SUCCESS,
  tournaments,
});

export const sortLocationSubmit = () => ({
  type: SORT_LOCATION,
});

// trie les tournois par nom
export const sortNameSubmit = () => ({
  type: SORT_NAME,
});

export const sortTournamentByNameSuccess = (tournaments) => ({
  type: SORT_TOURNAMENT_BY_NAME_SUCCESS,
  tournaments,
});

export const sortDateSubmit = () => ({
  type: SORT_DATE,
});

export const sortTournamentByDateSuccess = (tournaments) => ({
  type: SORT_TOURNAMENT_BY_DATE_SUCCESS,
  tournaments,
});

export const sortBuyInSubmit = () => ({
  type: SORT_BUY_IN,
});

export const sortTournamentByBuyInSuccess = (tournaments) => ({
  type: SORT_TOURNAMENT_BY_BUY_IN_SUCCESS,
  tournaments,
});

export const sortCashPriceSubmit = () => ({
  type: SORT_CASH_PRICE,
});

export const sortTournamentByCashPriceSuccess = (tournaments) => ({
  type: SORT_TOURNAMENT_BY_CASH_PRICE_SUCCESS,
  tournaments,
});

export const sortStatusSubmit = () => ({
  type: SORT_STATUS,
});

export const sortTournamentByStatusSuccess = (tournaments) => ({
  type: SORT_TOURNAMENT_BY_STATUS_SUCCESS,
  tournaments,
});

export const sortPlayerSubmit = () => ({
  type: SORT_PLAYER,
});

export const sortTournamentByPlayerSuccess = (tournaments) => ({
  type: SORT_TOURNAMENT_BY_PLAYER_SUCCESS,
  tournaments,
});
