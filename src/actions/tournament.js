export const OPEN_MODAL_TOURNAMENT_DETAILS = 'OPEN_MODAL_TOURNAMENT_DETAILS'
export const CLOSE_TOURNAMENT_DETAILS_MODAL = 'CLOSE_TOURNAMENT_DETAILS_MODAL'
export const GET_TOURNAMENTS_ALL_USER = 'GET_TOURNAMENTS_ALL_USER'
export const GET_TOURNAMENTS_SUCCESS = 'GET_TOURNAMENTS_SUCCESS'


/*************************** Modal Tournaments ****************************/

// ouverture de la modal détail d'un tournoi
export const tournamentDetailsModal = () => ({
  type : OPEN_MODAL_TOURNAMENT_DETAILS
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

/************************* POST Tournaments ******************************/




/************************* DELETE Tournaments ******************************/
