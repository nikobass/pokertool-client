export const OPEN_MODAL_TOURNAMENT_DETAILS = 'OPEN_MODAL_TOURNAMENT_DETAILS'
export const CLOSE_TOURNAMENT_DETAILS_MODAL = 'CLOSE_TOURNAMENT_DETAILS_MODAL'
export const GET_TOURNAMENTS_ALL_USER = 'GET_TOURNAMENTS_ALL_USER'
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS'
export const DELETE_TOURNAMENT_USER = 'DELETE_TOURNAMENT_USER'
export const DELETE_TOURNAMENT_SUCCESS = 'DELETE_TOURNAMENT_SUCCESS'
export const SHOW_DELETE_TOURNAMENT_MODAL = 'SHOW_DELETE_TOURNAMENT_MODAL'
export const OPEN_MODAL_TOURNAMENT_DELETE = 'OPEN_MODAL_TOURNAMENT_DELETE'
export const GET_ONE_TOURNAMENT_USER = 'GET_ONE_TOURNAMENT_USER'
export const GET_ONE_TOURNAMENT_USER_SUCCESS ='GET_ONE_TOURNAMENT_USER_SUCCESS'

import {HIDE_MODAL} from './user'

/*************************** Modal Tournaments ****************************/

// ouverture de la modal détail d'un tournoi
export const tournamentDetailsModal = (currentId ) => ({
  type : OPEN_MODAL_TOURNAMENT_DETAILS,
  currentId,
  
})

export const tournamentDeleteModal = (currentId) => ({
  type : OPEN_MODAL_TOURNAMENT_DELETE,
  currentId
})

/************************* GET Tournaments ******************************/

// récupération de la list des tournois depuis le back 
export const getTournamentUser = () => ({
  type : GET_TOURNAMENTS_ALL_USER,
})

// retour du middleware pour la 
// récupération de la list des tournois depuis le back 
export const getTournamentUserSuccess = (tournaments) => ({
  type : GET_TOURNAMENTS_SUCCESS,
  tournaments
})

// récupération des détails d'un tournoi
export const getOneTournamentUser = () => ({
  type : GET_ONE_TOURNAMENT_USER  
})

// retour du middleware pour les details d'un tournoi
export const getOneTournamentUserSuccess = (tournaments) => ({
  type : GET_ONE_TOURNAMENT_USER_SUCCESS,
  tournaments
})

/************************* POST Tournaments ******************************/




/************************* DELETE Tournaments ******************************/

// ouverture modal supprimer un tournoi
export const showDeleteTournamentModal = () => ({
  type: SHOW_DELETE_TOURNAMENT_MODAL
});

// pars dans le middleware pour requete delete
export const deleteTournamentUser = (tournamentId) => ({
  type: DELETE_TOURNAMENT_USER,
  tournamentId
  

});

// retour depuis le middleware
export const deleteTournamentSucces = (tournamentId) => ({
  type: DELETE_TOURNAMENT_SUCCESS,
  tournamentId
});

// ferme la modal au bouton annuler
export const hideModalDelete = () => ({
  type : HIDE_MODAL
})
