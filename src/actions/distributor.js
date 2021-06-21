export const CHANGE_DISTRIBUTOR_FORM_INPUT = 'CHANGE_DISTRIBUTOR_FORM_INPUT';
export const ADD_CHIP = 'ADD_CHIP';
export const REMOVE_CHIP = 'REMOVE_CHIP';
export const LAUNCH_DISTRIBUTOR = 'LAUNCH_DISTRIBUTOR';
export const CHANGE_TOURNAMENT_INFO = 'CHANGE_TOURNAMENT_INFO';
export const IMPORT_CHIPS = 'IMPORT_CHIPS';
export const IMPORT_CHIPS_SUCCESS = 'IMPORT_CHIPS_SUCCESS';

export const changeDistributorFormInput = (newinputValue, inputName, index) => ({
    type: CHANGE_DISTRIBUTOR_FORM_INPUT,
    newinputValue,
    inputName,
    index
})

export const addChip = () => ({
    type: ADD_CHIP
})

export const removeChip= (index) => ({
    type: REMOVE_CHIP,
    index
})

export const launchDistributor = () => ({
    type: LAUNCH_DISTRIBUTOR,
})

export const changeTournamentInfo = (newInputValue, name) => ({
    type: CHANGE_TOURNAMENT_INFO,
    newInputValue,
    name
})

export const importChips = () =>({
    type: IMPORT_CHIPS
})

export const importChipsSuccess = (chipsAPI) => ({
    type: IMPORT_CHIPS_SUCCESS,
    chipsAPI
})