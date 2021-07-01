export const LAUNCH_TIMER = 'TOGGLE_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const CHANGE_CURRENT_VALUES = 'CHANGE_CURRENT_VALUES';
export const RESET_TIMER = 'RESET_TIMER';
export const RESET_CURRENT_VALUES = 'RESET_CURRENT_VALUES';
export const GO_TO_PREVIOUS_STAGE = 'GO_TO_PREVIOUS_STAGE';
export const LOAD_PREVIOUS_STAGE = 'LOAD_PREVIOUS_STAGE';
export const GO_TO_NEXT_STAGE = 'GO_TO_NEXT_STAGE';
export const LOAD_NEXT_STAGE = 'LOAD_NEXT_STAGE';
export const SKIP_BACK = 'SKIP_BACK';
export const SKIP_FORWARD = 'SKIP_FORWARD';
export const REFRESH_TIME = 'REFRESH_TIME';
export const SHOW_TIME = 'SHOW_TIME';
export const SHOW_QUIT_TIMER_MODAL = 'SHOW_QUIT_TIMER_MODAL';
export const CLOSE_QUIT_TIMER_MODAL = 'CLOSE_QUIT_TIMER_MODAL';
export const LAUNCH_TOURNAMENT_SUCCESS = 'LAUNCH_TOURNAMENT_SUCCESS';

export const launchTimer = () => ({
    type: LAUNCH_TIMER
})

export const stopTimer =() => ({
    type: STOP_TIMER
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

export const skipBack = () => ({
    type: SKIP_BACK
})

export const skipForward = () => ({
    type: SKIP_FORWARD
})

export const refreshTime = ()  => ({
    type: REFRESH_TIME
})

export const show_time = (time) => ({
    type: SHOW_TIME,
    time
})

export const showQuitTimerModal = () => ({
    type: SHOW_QUIT_TIMER_MODAL
})

export const closeQuitTimerModal = () => ({
    type: CLOSE_QUIT_TIMER_MODAL
})

export const launchTournamentSucess = (tournament) => ({
    type: LAUNCH_TOURNAMENT_SUCCESS,
    tournament
  })