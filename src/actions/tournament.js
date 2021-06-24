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
export const SHOW_CREATE_TOURNAMENT_MODAL = 'SHOW_CREATE_TOURNAMENT_MODAL';
export const SUBMIT_CREAT_TOURNAMENT_VALUES = 'SUBMIT_CREAT_TOURNAMENT_VALUES'
export const TOURNAMENT_SUBMIT = 'TOURNAMENT_FORM'
export const TOURNAMENT_SUBMIT_SUCCESS = 'TOURNAMENT_SUBMIT_SUCCESS'
export const OPEN_MODAL_TOURNAMENT_UPDATE = 'OPEN_MODAL_TOURNAMENT_UPDATE'
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
export const TOGGLE_MODIFY_TOURNAMENT = 'TOGGLE_MODIFY_TOURNAMENT'
export const SUBMIT_TOURNAMENT_UPDATE = 'SUBMIT_TOURNAMENT_UPDATE'
export const MODIFY_TOURNAMENT_SUCESS ='MODIFY_TOURNAMENT_SUCESS'
export const MODIFY_TOURNAMENT_VALIDATE = 'MODIFY_TOURNAMENT_VALIDATE'
export const GET_STRUCTURE_TOURNAMENT = 'GET_STRUCTURE_TOURNAMENT'
export const GET_STRUCTURE_TOURNAMENT_SUCCESS = 'GET_STRUCTURE_TOURNAMENT_SUCCESS'
export const CREATE_STRUCTURE ='CREATE_STRUCTURE'
export const ADD_STRUCTURE_TO_STATE = 'ADD_STRUCTURE_TO_STATE'
export const CLEAR_TOURNAMENT = 'CLEAR_TOURNAMENT'
export const ERROR_MESSAGE ='ERROR_MESSAGE'

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



export const createTournamentModal = () => ({
  type: SHOW_CREATE_TOURNAMENT_MODAL
});

export const tounamentUpdateModale = (currentId) => ({
  type: OPEN_MODAL_TOURNAMENT_UPDATE,
  currentId
})
/*********************************** PATCH  **************************/

export const modifyTournamentValidate = () =>({
  type: MODIFY_TOURNAMENT_VALIDATE,
  
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

// récupération structure tournoi
export const getStructureTournament = () => ({
  type: GET_STRUCTURE_TOURNAMENT
})

export const getStructureTournamentSuccess = (structure) => ({
  type: GET_STRUCTURE_TOURNAMENT_SUCCESS,
  structure
})

export const createStructure = () => ({
  type: CREATE_STRUCTURE
})

export const addStructureToState = (structure) => ({
  type : ADD_STRUCTURE_TO_STATE,
  structure
})

export const clearTournament = () => ({
  type : CLEAR_TOURNAMENT
})

/************************* POST Tournaments ******************************/

// envoie du form
export const tournamentSubmit = () => ({
  type : TOURNAMENT_SUBMIT,
})

// recupère les infos des inputs
export const submitCreatTournamentValues = (newInputValue, inputName ) => ({
  type: SUBMIT_CREAT_TOURNAMENT_VALUES,
  newInputValue,
  inputName,
});

export const tournamentSubmitSuccess = () => ({
  type : TOURNAMENT_SUBMIT_SUCCESS
});

export const changeInputValue = (newInputValue, inputName) => ({
  type: CHANGE_INPUT_VALUE,
  newInputValue,
  inputName,
});

export const toggleModifyTournament = (tournaments) => ({
  type: TOGGLE_MODIFY_TOURNAMENT,
  tournaments
});

export const modifyTournamentSuccess = (tournaments) =>({
  type: MODIFY_TOURNAMENT_SUCESS,
  tournaments

})

// middleware =>
export const submitTournamentUpdate = () => ({
  type: SUBMIT_TOURNAMENT_UPDATE
})

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

export const errMessage = (errMessage) => ({
  type : ERROR_MESSAGE,
  errMessage
})
