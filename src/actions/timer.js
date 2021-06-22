export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const CHANGE_CURRENT_VALUES = 'CHANGE_CURRENT_VALUES';

export const toggleTimer = () => ({
    type: TOGGLE_TIMER
})

export const changeCurrentValues = (intervalId) => ({
    type: CHANGE_CURRENT_VALUES,
    intervalId
})