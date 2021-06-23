export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const CHANGE_CURRENT_VALUES = 'CHANGE_CURRENT_VALUES';
export const RESET_TIMER = 'RESET_TIMER';
export const RESET_CURRENT_VALUES = 'RESET_CURRENT_VALUES';
export const GO_TO_PREVIOUS_STAGE = 'GO_TO_PREVIOUS_STAGE';
export const LOAD_PREVIOUS_STAGE = 'LOAD_PREVIOUS_STAGE';
export const GO_TO_NEXT_STAGE = 'GO_TO_NEXT_STAGE';
export const LOAD_NEXT_STAGE = 'LOAD_NEXT_STAGE';

export const toggleTimer = () => ({
    type: TOGGLE_TIMER
})

export const changeCurrentValues = (intervalId) => ({
    type: CHANGE_CURRENT_VALUES,
    intervalId
})

export const resetTimer = () => ({
    type: RESET_TIMER
})

export const resetCurrentValues = () => ({
    type: RESET_CURRENT_VALUES
})

export const goToPreviousStage = () => ({
    type: GO_TO_PREVIOUS_STAGE
})

export const loadPreviousStage = () => ({
    type: LOAD_PREVIOUS_STAGE
})

export const goToNextStage = () => ({
    type: GO_TO_NEXT_STAGE
})

export const loadNextStage = () => ({
    type: LOAD_NEXT_STAGE
})