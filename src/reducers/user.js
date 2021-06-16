
import {
    TOGGLE_MODIFY_PROFIL,
    CHANGE_INPUT_VALUE,
    RESET_PROFIL_MODIF,
    SHOW_CONNECTION_MODAL,
    HIDE_MODAL,
    CHANGE_OPEN_FORM,
    SHOW_DELETE_ACCOUNT_MODAL,
    DELETE_USER_ACCOUNT,
    LOGIN_SUCCESS,
    DELETE_SUCCESS
  } from 'src/actions/user';  

const initialState = {
    isLogged: false,
    userId: null,
    // la valeur par défaut des inputs, PROVISOIRE.
    // Ici on récupérera les données de la BDD lorsque l'utilisateur est connecté.
    nickname: localStorage.getItem('nickname') || '',
    email: localStorage.getItem('email') || '',
    password: '********',
    profil: {
        // Le booléen qui gère si le profil est en cours de modification ou non.
        // Lorsqu'il passe a true, les inputs du profil s'ouvrent.
        modifying: false,
        nickname: '',
        email: ''
    },
    showConnectionModal: false,
    showDeleteAccountModal: false,
    openFormSignup: false,
    token: null
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        //action qui toggle le booléen "modifying" lorsque l'utilisateur clique sur le bouton "modifier mon profil"
        case TOGGLE_MODIFY_PROFIL:
            return {
                ...state,
                profil: {
                    modifying: true
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
      case HIDE_MODAL:
        return {
          ...state,
          showConnectionModal: false,
          showDeleteAccountModal: false
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
      case DELETE_USER_ACCOUNT:
        return {
          ...state,
          showDeleteAccountModal: false
        }
      case DELETE_SUCCESS:
        return {
          ...state,
          isLogged: false
        }
      case SHOW_CONNECTION_MODAL:
          return {
              ...state,
              showConnectionModal: true
          }
      case HIDE_MODAL:
          return {
              ...state,
              showConnectionModal: false
          }
      case CHANGE_OPEN_FORM:
          return {
              ...state,
              openFormSignup: true,
          };
      case LOGIN_SUCCESS:
          return {
              ...state,
              nickname: action.apiData.nickname,
              password: '********',
              isLogged: true,
              showConnectionModal: false,
          };
      default:
          return state;
    }
}

export default reducer;
