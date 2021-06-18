export const SUBMIT_CHIPS_FORM = 'SUBMIT_CHIPS_FORM';
export const CHANGE_CHIP_INPUT = 'CHANGE_CHIP_INPUT';

export const submitChips = () => ({
  type: SUBMIT_CHIPS_FORM
});

export const changeChipInput =(newInputValue, inputName) => ({
  type: CHANGE_CHIP_INPUT,
    newInputValue,
    inputName
});
