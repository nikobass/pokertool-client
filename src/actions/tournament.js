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
export const ADD_CASH_PRICE = 'ADD_CASH_PRICE'
export const CHANGE_INPUT_CASHPRICE = 'CHANGE_INPUT_CASHPRICE'
export const ADD_CASH_PRICE_ONE_TOURNAMENT = 'ADD_CASH_PRICE_ONE_TOURNAMENT'
export const CHECKBOX_CHIPS = 'CHECKBOX_CHIPS'
export const SUBMIT_WITH_MY_CHIPS = 'SUBMIT_WITH_MY_CHIPS'
export const SUBMIT_WITH_MY_CHIPS_UPDATE = 'SUBMIT_WITH_MY_CHIPS_UPDATE'
export const SUBMIT_WITH_MY_CHIPS_UPDATE_SUCCESS = 'SUBMIT_WITH_MY_CHIPS_UPDATE_SUCCESS'
export const SUBMIT_WITH_MY_CHIPS_SUCCESS = 'SUBMIT_WITH_MY_CHIPS_SUCCESS'
export const USE_OWN_SMALL_BLIND = 'USE_OWN_SMALL_BLIND';
export const OPEN_MODAL_TOURNAMENT_STRUCTURE = 'OPEN_MODAL_TOURNAMENT_STRUCTURE'
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
export const LAUNCH_TOURNAMENT = 'LAUNCH_TOURNAMENT';
export const UPDATE_STRUCTURE = 'UPDATE_STRUCTURE'

import {HIDE_MODAL} from './user'

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

export const openModalStructureTournament = () => ({
  type : OPEN_MODAL_TOURNAMENT_STRUCTURE
})



export const createTournamentModal = () => ({
  type: SHOW_CREATE_TOURNAMENT_MODAL
});

export const tounamentUpdateModale = (currentId) => ({
  type: OPEN_MODAL_TOURNAMENT_UPDATE,
  currentId
})

export const addCashprice = () => ({
  type: ADD_CASH_PRICE
})

export const addCashpriceOneTournament = () => ({
  type: ADD_CASH_PRICE_ONE_TOURNAMENT
})
/*********************************** PATCH  **************************/

export const modifyTournamentValidate = () =>({
  type: MODIFY_TOURNAMENT_VALIDATE,
  
})

export const updateStructure = () => ({
  type : UPDATE_STRUCTURE
})
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
  type : GET_ONE_TOURNAMENT_USER
});

// retour du middleware pour les details d'un tournoi
export const getOneTournamentUserSuccess = (tournaments) => ({
  type: GET_ONE_TOURNAMENT_USER_SUCCESS,
  tournaments,
});

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
export const submitCreatTournamentValues = (newInputValue, inputName, index) => ({
  type: SUBMIT_CREAT_TOURNAMENT_VALUES,
  newInputValue,
  inputName,
  index
});

export const tournamentSubmitSuccess = (tournament) => ({
  type : TOURNAMENT_SUBMIT_SUCCESS,
  tournament
});

export const changeInputValue = (newInputValue, inputName, index) => ({
  type: CHANGE_INPUT_VALUE,
  newInputValue,
  inputName,
  index
});

export const changeCashPriceValue = (newInputValue, inputName, index) => ({
  type: CHANGE_INPUT_CASHPRICE,
  newInputValue,
  inputName,
  index
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

export const errMessage = (errMessage) => ({
  type : ERROR_MESSAGE,
  errMessage
})

export const checkboxChips = (checkboxValue) => ({
  type: CHECKBOX_CHIPS,
  checkboxValue
})

export const submitFromMyChips = () => ({
  type: SUBMIT_WITH_MY_CHIPS,
})

export const submitFromMyChipsUpdate = () => ({
  type: SUBMIT_WITH_MY_CHIPS_UPDATE,
})

export const submitFromMyChipsSuccess = (smallestChipValue) => ({
  type: SUBMIT_WITH_MY_CHIPS_SUCCESS,
  smallestChipValue
})

export const submitFromMyChipsUpdateSuccess = (smallestChipValue) => ({
  type: SUBMIT_WITH_MY_CHIPS_UPDATE_SUCCESS,
  smallestChipValue
})

export const dontUseMyChips = () => ({
  type: USE_OWN_SMALL_BLIND
})

export const launchTournament = (tournamentId) => ({
  type: LAUNCH_TOURNAMENT,
  tournamentId
})

