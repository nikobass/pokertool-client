export const TOGGLE_MODIFY_PROFIL = 'TOGGLE_MODIFY_PROFIL';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const RESET_PROFIL_MODIF = 'RESET_PROFIL_MODIF';
export const SHOW_CONNECTION_MODAL = 'SHOW_CONNECTION_MODAL';

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