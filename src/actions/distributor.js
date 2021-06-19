export const CHANGE_DISTRIBUTOR_FORM_INPUT = 'CHANGE_DISTRIBUTOR_FORM_INPUT';

export const changeDistributorFormInput = (newinputValue, inputName, index) => ({
    type: CHANGE_DISTRIBUTOR_FORM_INPUT,
    newinputValue,
    inputName,
    index
})