/* eslint-disable no-duplicate-case */

import {
  TOGGLE_MODIFY_PROFIL,
  CHANGE_INPUT_VALUE,
  RESET_PROFIL_MODIF,
  SHOW_CONNECTION_MODAL,
  HIDE_MODAL,
  CHANGE_OPEN_FORM,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SHOW_UNAUTHORIZED_MODAL,
  SHOW_DELETE_ACCOUNT_MODAL,
  DELETE_USER_ACCOUNT,
  DELETE_SUCCESS,
  LOGOUT,
  CHANGE_CONNECTION_INPUT,
  LOG_USER,
  UPDATE_PROFIL_FROM_API,
  SUBMIT_PROFIL_SUCCESS,
  UPDATE_PROFIL_ERROR
} from 'src/actions/user';

const initialState = {
  isLogged: false,
  userId: null,
  // la valeur par défaut des inputs, PROVISOIRE.
  // Ici on récupérera les données de la BDD lorsque l'utilisateur est connecté.
  nickname: '',
  email: '',
  password: '',
  profil: {
    // Le booléen qui gère si le profil est en cours de modification ou non.
    // Lorsqu'il passe a true, les inputs du profil s'ouvrent.
    modifying: false,
    nickname: '',
    email: '',
    password: '',
    error: {
      emailAlreadyExist: null,
      nicknameAlreadyExist: null,
      passwordWrongFormat: null,
    }
  },
  showConnectionModal: false,
  showDeleteAccountModal: false,
  openFormSignup: false,
  token: null,
  loginError: null
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //action qui toggle le booléen "modifying" lorsque l'utilisateur clique sur le bouton "modifier mon profil"
    case TOGGLE_MODIFY_PROFIL:
      return {
        ...state,
        profil: {
          ...state.profil,
          modifying: true,
        }
      }
    // action qui gère la modification des inputs du profil
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        // On modifie le state selon le champ modifié par l'utilisateur
        // Cela évite de coder 3 fonctions pour chaque input.
        // [action.inputName] modifie donc dans le state soit: nickname, email ou password
        // Pour mieux comprendre se référer au composant Profil -> action.inputName correspond à event.target.name
        profil: {
          ...state.profil,
          modifying: true,
          [action.inputName]: action.newInputValue
        }
      }
    case CHANGE_CONNECTION_INPUT:
      return{
        ...state,
        [action.inputName]: action.newInputValue
      }
    case RESET_PROFIL_MODIF:
      return {
        ...state,
        profil: {
          modifying: false
        }
      }

    case SHOW_CONNECTION_MODAL:
      return {
        ...state,
        showConnectionModal: true
      }
    case CHANGE_OPEN_FORM:
      return {
        ...state,
        openFormSignup: true,
      };
    case SHOW_DELETE_ACCOUNT_MODAL:
      return {
        ...state,
        showDeleteAccountModal: true
      }
    case SHOW_CONNECTION_MODAL:
      return {
        ...state,
        showConnectionModal: true
      };

    case SHOW_UNAUTHORIZED_MODAL:
      return {
        ...state,
        showUnauthorizedModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showConnectionModal: false,
        showUnauthorizedModal: false,
        showDeleteAccountModal: false,
        loginError: null
      };
    case CHANGE_OPEN_FORM:
      return {
        ...state,
        openFormSignup: true,
      };
    case SHOW_DELETE_ACCOUNT_MODAL:
      return {
        ...state,
        showDeleteAccountModal: true,
      };
    case DELETE_USER_ACCOUNT:
      return {
        ...state,
        showDeleteAccountModal: false,
      }
    case DELETE_SUCCESS:
      return {
        ...state,
        isLogged: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        nickname: action.apiData.nickname,
        isLogged: true,
        showConnectionModal: false,
        loginError: null
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false
      }
    case LOG_USER:
      return {
        ...state,
        isLogged: true
      }
    case SUBMIT_PROFIL_SUCCESS:
      return{
        ...state,
        profil: {
          ...state.profil,
          modifying: false
        }
      }

    case UPDATE_PROFIL_FROM_API:
      return {
        ...state,
        profil: {
          ...state.profil,
          modifying: false,
          nickname: action.dataAPI.user_name,
          email: action.dataAPI.email,
        }
      }
<<<<<<< HEAD
    case UPDATE_PROFIL_ERROR:
      return {
        ...state,
        profil: {
          ...state.profil,

        }
=======
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.errorMsg
>>>>>>> 40b81e9ec6c17082bc27416a3b6a61e9eb68eb4a
      }
    default:
      return state;
  }
};

export default reducer;
