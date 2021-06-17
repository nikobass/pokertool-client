export const SIGN_UP_FORM = 'SIGN_UP_FORM';

export const CHANGE_OPEN_FORM = 'CHANGE_OPEN_FORM';
export const TOGGLE_MODIFY_PROFIL = 'TOGGLE_MODIFY_PROFIL';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const RESET_PROFIL_MODIF = 'RESET_PROFIL_MODIF';
export const SHOW_CONNECTION_MODAL = 'SHOW_CONNECTION_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_SIGN_UP_MODAL = 'SHOW_SIGN_UP_MODAL';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SIGN_UP_VALUES = 'SUBMIT_SIGN_UP_VALUES';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const TOGGLE_SIGN_UP = 'TOGGLE_SIGN_UP';
export const SUBMIT_SIGN_UP = 'SUBMIT_SIGN_UP';

export const toggleModifyProfil = () => ({
  type: TOGGLE_MODIFY_PROFIL,
});

export const changeInputValue = (newInputValue, inputName) => ({
  type: CHANGE_INPUT_VALUE,
  newInputValue,
  inputName,
});

export const resetProfilModif = () => ({
  type: RESET_PROFIL_MODIF,
});

export const showConnectionModal = () => ({
  type: SHOW_CONNECTION_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

//action qui sera gérée dans le middleware
//Responsable de la requete vers le back
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const loginSuccess = (apiData) => ({
  type: LOGIN_SUCCESS,
  apiData,
});

export const loginError = () => ({
//TODO: gérer l'erreur
});

// inscription

// ouverture de la modale
export const signUpForm = () => ({
  type: SIGN_UP_FORM,
});

//envoi du formulaire
export const signupSubmit = () => ({
  type: SUBMIT_SIGN_UP,
});

// recupère les infos des inputs
export const submitSignUpValues = (newInputValue, inputName ) => ({
  type: SUBMIT_SIGN_UP_VALUES,
  newInputValue,
  inputName,
});
// retour du middleware avec les données
export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

//export const showSignUpModal = () => ({
//   type : SHOW_SIGN_UP_MODAL
//});