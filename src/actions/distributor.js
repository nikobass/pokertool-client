export const CHANGE_DISTRIBUTOR_FORM_INPUT = 'CHANGE_DISTRIBUTOR_FORM_INPUT';
export const ADD_CHIP = 'ADD_CHIP';
export const REMOVE_CHIP = 'REMOVE_CHIP';
export const LAUNCH_DISTRIBUTOR = 'LAUNCH_DISTRIBUTOR';

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
    type: LAUNCH_DISTRIBUTOR
})