export const CHANGE_OPEN_FORM = 'CHANGE_OPEN_FORM'
export const TOGGLE_MODIFY_PROFIL = 'TOGGLE_MODIFY_PROFIL';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const RESET_PROFIL_MODIF = 'RESET_PROFIL_MODIF';
export const SHOW_CONNECTION_MODAL = 'SHOW_CONNECTION_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';


export const toggleModifyProfil = () => ({
    type: TOGGLE_MODIFY_PROFIL
})

export const changeInputValue = (newInputValue, inputName) => ({
    type: CHANGE_INPUT_VALUE,
    newInputValue,
    inputName
})

export const resetProfilModif = () => ({
    type: RESET_PROFIL_MODIF
})

export const showConnectionModal = () => ({
    type: SHOW_CONNECTION_MODAL
})

export const hideModal = () => ({
    type: HIDE_MODAL
})

export const changeOpenForm = () => ({
  type: CHANGE_OPEN_FORM
})

//action qui sera gérée dans le middleware
export const submitLogin = () => ({
    type: SUBMIT_LOGIN,
  });

export const loginSuccess = (apiData) => ({
    type: LOGIN_SUCCESS,
    //a voir avec Pascal les données retournées par le back
    nickname: apiData.username,
    email: apiData.email,
    token: apiData.token,
});

export const loginError = () => ({
    //TODO: gérer l'erreur
});