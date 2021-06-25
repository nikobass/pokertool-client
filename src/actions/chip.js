export const SUBMIT_CHIPS_FORM = 'SUBMIT_CHIPS_FORM';
export const SUBMIT_CHIPS_SUCCESS = 'SUBMIT_CHIPS_SUCCESS';
export const CHANGE_CHIP_INPUT = 'CHANGE_CHIP_INPUT';
export const ADD_CHIP = 'ADD_CHIP';
export const GET_CHIPS_FROM_API = 'GET_CHIPS_FROM_API';
export const GET_CHIPS_SUCCESS = 'GET_CHIPS_SUCCESS';
export const REMOVE_CHIP = 'REMOVE_CHIP';
export const CHIPS_ERROR_MSG = 'CHIPS_ERROR_MSG';

export const submitChips = () => ({
  type: SUBMIT_CHIPS_FORM
});

export const submitChipsSuccess = (chipsFromAPI) => ({
  type: SUBMIT_CHIPS_SUCCESS,
  chipsFromAPI
})

export const changeChipInput =(newInputValue, inputName, index) => ({
  type: CHANGE_CHIP_INPUT,
    newInputValue,
    inputName,
    index
});

export const addChip = () => ({
  type: ADD_CHIP
});

export const getChipsFromAPI = () => ({
  type: GET_CHIPS_FROM_API,
});

export const getChipsSuccess = (chipsFromAPI) => ({
  type: GET_CHIPS_SUCCESS,
  chipsFromAPI
});

export const removeChip= (index) => ({
  type: REMOVE_CHIP,
  index
});

export const chipsError = (msgError) => ({
  type: CHIPS_ERROR_MSG,
  msgError
})
