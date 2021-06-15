
  import {
    TOGGLE_MODIFY_PROFIL,
    CHANGE_INPUT_VALUE,
    RESET_PROFIL_MODIF,
    SHOW_CONNECTION_MODAL,
    HIDE_MODAL,
    SIGN_UP_FORM,
    SHOW_SIGN_UP_MODAL
  } from 'src/actions/user';
import { showSignUpModal } from '../actions/user';


  const initialState = {
    isLogged: false,
    // la valeur par défaut des inputs, PROVISOIRE.
    // Ici on récupérera les données de la BDD lorsque l'utilisateur est connecté.
    nickname: 'nicknamedustate',
    email: 'email@dustate.fr',
    password: 'passworddustate',
    profil: {
      // Le booléen qui gère si le profil est en cours de modification ou non.
      // Lorsqu'il passe a true, les inputs du profil s'ouvrent.
      modifying: false,
    },
    showConnectionModal: false,
    showSignUpModal: false,

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
        case SIGN_UP_FORM:
          return {
            ...state,
            showSignUpModal: true,
          }
      case HIDE_MODAL:
        return {
          ...state,
          showConnectionModal: false,
          showSignUpModal: false
        }

      default:
        return state;
    }
  }

  export default reducer;
