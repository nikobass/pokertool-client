import {

    LAUNCH_TIMER,
    STOP_TIMER,
    CHANGE_CURRENT_VALUES,
    RESET_CURRENT_VALUES,
    LOAD_PREVIOUS_STAGE,
    LOAD_NEXT_STAGE,
    SKIP_BACK,
    SKIP_FORWARD,
    SHOW_TIME,
    SHOW_QUIT_TIMER_MODAL,
    CLOSE_QUIT_TIMER_MODAL,

} from 'src/actions/timer';

import {
    HIDE_MODAL,
  } from 'src/actions/user'

const now = new Date();

const initialState = {
    isQuitTimerModalOpen: false,
    currentTime: {
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
    },
    isLaunch: false,
    isAudioPlaying: false,
    intervalId: null,
    //TODO secondesLeft = durée du tournoi en secondes
    secondesLeft: 300,
    currentTournament: {
        minute: 5,
        seconde: 0,
        stage: 1,
        smallBlind: 10,
        bigBlind: 20,
    },
    currentValues: {
        minute: 5,
        seconde: 0,
        stage: 1,
        previousSB: 0,
        previousBB: 0,
        smallBlind: 10,
        bigBlind: 20,
        nextSB: 20,
        nextBB: 40,
    },
    currentStructure: [
        { stage: 1, smallBlind: 10, bigBlind: 20 },
        { stage: 2, smallBlind: 20, bigBlind: 40 },
        { stage: 3, smallBlind: 30, bigBlind: 60 },
        { stage: 4, smallBlind: 40, bigBlind: 80 },
        { stage: 5, smallBlind: 50, bigBlind: 100 },
        { stage: 6, smallBlind: 60, bigBlind: 120 },
        { stage: 7, smallBlind: 70, bigBlind: 140 },
        { stage: 8, smallBlind: 80, bigBlind: 160 },
        { stage: 9, smallBlind: 90, bigBlind: 180 },
        { stage: 10, smallBlind: 100, bigBlind: 200 },
    ],
    currentChips: [
        {quantity: 50, color: '#dddddd', value: 10},
        {quantity: 50, color: '#00b0ff', value: 20},
        {quantity: 50, color: '#789f30', value: 100},
        {quantity: 50, color: '#cec56c', value: 500},
        {quantity: 50, color: '#78c56c', value: 1000},
    ],
    cashPrice: [
        {position : 1, amount : 500},
        {position : 2, amount : 200},
        {position : 3, amount : 100},
    ]
}



const timer = (state = initialState, action = {}) => {

    switch (action.type) {
        case SHOW_QUIT_TIMER_MODAL:
            return {
                ...state,
                isQuitTimerModalOpen: true,
            }

        case CLOSE_QUIT_TIMER_MODAL:
            return{
                ...state,
                isQuitTimerModalOpen: false,
            }

        case HIDE_MODAL :
            return{
                ...state,
                openDetailsModal: false,
                openDeleteModal: false,
                showCreateTournamentModal: false,
                openUpdateModal: false,
                isQuitTimerModalOpen: false,
            }

        case SHOW_TIME: {
            return {
                ...state,
                currentTime: action.time,
            }
        }
        case LAUNCH_TIMER:
            return {
                ...state,
                isLaunch: true,
            }
        
        case STOP_TIMER:
            return {
                ...state,
                isLaunch: false,
            }

        case CHANGE_CURRENT_VALUES:
            return {
                ...state,
                intervalId: action.intervalId,
                isAudioPlaying:
                state.currentValues.minute === 0 && state.currentValues.seconde === 0
                ?
                true
                :
                false,
                secondesLeft: state.currentValues.minute * 60 + state.currentValues.seconde,
                currentValues: {
                    ...state.currentValues,
                    //gestion des secondes
                    seconde:
                        state.currentValues.seconde > 0
                            ?
                            state.currentValues.seconde - 1
                            :
                            state.currentValues.minute === 0
                                ?
                                0
                                :
                                59,

                    //gestion des minutes
                    minute:
                        state.currentValues.seconde === 0
                            ?
                            state.currentValues.minute === 0 && state.currentValues.stage !== state.currentStructure[state.currentStructure.length-1].stage
                                ?
                                state.currentTournament.minute
                                :
                                state.currentValues.stage === state.currentStructure[state.currentStructure.length-1].stage && state.currentValues.minute === 0
                                ?
                                0
                                :
                                state.currentValues.minute - 1
                            :
                            state.currentValues.minute,

                    //gestion de l'étape
                    stage:
                        state.currentValues.minute === 0 && state.currentValues.seconde === 0 && state.currentStructure[state.currentValues.stage]
                            ?
                            state.currentValues.stage += 1
                            :
                            state.currentValues.stage,

                    //gestion des blinds
                    previousSB:
                        state.currentStructure[state.currentValues.stage - 2]
                            ?
                            state.currentStructure[state.currentValues.stage - 2].smallBlind
                            :
                            0,

                    previousBB: state.currentStructure[state.currentValues.stage - 2]
                        ?
                        state.currentStructure[state.currentValues.stage - 2].bigBlind
                        :
                        0,
                    smallBlind:
                        state.currentStructure[state.currentValues.stage - 1].smallBlind,

                    bigBlind:
                        state.currentStructure[state.currentValues.stage - 1].bigBlind,
                    nextSB: 
                    state.currentStructure[state.currentValues.stage]
                    ?
                    state.currentStructure[state.currentValues.stage].smallBlind
                    :
                    0,
                    nextBB: state.currentStructure[state.currentValues.stage]
                    ?
                    state.currentStructure[state.currentValues.stage].bigBlind
                    :
                    0,

                }
            }

        case RESET_CURRENT_VALUES:
            return {
                ...state,
                isLaunch: false,
                //TODO secondesLeft = durée du tournoi en secondes
                secondesLeft: 300,
                currentValues: state.currentTournament,
                rangeValue: 0,
            }

        case LOAD_PREVIOUS_STAGE:
            return {
                ...state,
                isLaunch: false,
                currentValues: {
                    ...state.currentValues,
                    minute: state.currentTournament.minute,
                    seconde: state.currentTournament.seconde,
                    stage: state.currentValues.stage > 1
                        ?
                        state.currentValues.stage - 1
                        :
                        state.currentValues.stage,
                    previousSB:
                        state.currentValues.stage > 2
                            ?
                            state.currentStructure[state.currentValues.stage - 3].smallBlind
                            :
                            0,

                    previousBB: state.currentValues.stage > 2
                        ?
                        state.currentStructure[state.currentValues.stage - 3].bigBlind
                        :
                        0,
                    smallBlind: state.currentValues.stage > 1
                        ?
                        state.currentStructure[state.currentValues.stage - 2].smallBlind
                        :
                        state.currentValues.smallBlind,
                    bigBlind: state.currentValues.stage > 1
                        ?
                        state.currentStructure[state.currentValues.stage - 2].bigBlind
                        :
                        state.currentValues.bigBlind,
                    nextSB: state.currentValues.stage > 1
                        ?
                        state.currentStructure[state.currentValues.stage - 1].smallBlind
                        :
                        state.currentValues.nextSB,
                    nextBB: state.currentValues.stage > 1
                        ?
                        state.currentStructure[state.currentValues.stage - 1].bigBlind
                        :
                        state.currentValues.nextBB,
                }
            }

        case LOAD_NEXT_STAGE:
            return {
                ...state,
                isLaunch: false,
                currentValues: {
                    ...state.currentValues,
                    minute: state.currentTournament.minute,
                    seconde: state.currentTournament.seconde,
                    stage: state.currentValues.stage < state.currentStructure[state.currentStructure.length - 1].stage
                        ?
                        state.currentValues.stage + 1
                        :
                        state.currentValues.stage,
                    previousSB:
                        state.currentStructure[state.currentValues.stage]
                        ?
                        state.currentStructure[state.currentValues.stage - 1].smallBlind
                        :
                        state.currentStructure[state.currentValues.stage - 2].smallBlind,

                    previousBB: 
                        state.currentStructure[state.currentValues.stage]
                        ?
                        state.currentStructure[state.currentValues.stage - 1].bigBlind
                        :
                        state.currentStructure[state.currentValues.stage - 2].bigBlind,
                    smallBlind: state.currentValues.stage < state.currentStructure[state.currentStructure.length - 1].stage
                        ?
                        state.currentStructure[state.currentValues.stage].smallBlind
                        :
                        state.currentValues.smallBlind,
                    bigBlind: state.currentValues.stage < state.currentStructure[state.currentStructure.length - 1].stage
                        ?
                        state.currentStructure[state.currentValues.stage].bigBlind
                        :
                        state.currentValues.bigBlind,
                    nextSB:
                        state.currentStructure[state.currentValues.stage + 1]
                            ?
                            state.currentStructure[state.currentValues.stage + 1].smallBlind
                            :
                            0,

                    nextBB: state.currentStructure[state.currentValues.stage + 1]
                        ?
                        state.currentStructure[state.currentValues.stage + 1].bigBlind
                        :
                        0,
                }
            }

        case SKIP_BACK:
            return {
                ...state,
                currentValues: {
                    ...state.currentValues,
                    minute: state.currentValues.seconde >= 30 && state.currentValues.minute < state.currentTournament.minute
                        ?
                        state.currentValues.minute + 1
                        :
                        state.currentValues.minute,

                    seconde: state.currentValues.seconde < 30 && state.currentValues.minute < state.currentTournament.minute
                        ?
                        30
                        :
                        state.currentValues.seconde === 0 && state.currentValues.minute < state.currentTournament.minute
                            ?
                            30
                            :
                            0
                }
            }

        case SKIP_FORWARD:
            return {
                ...state,
                currentValues: {
                    ...state.currentValues,
                    minute: state.currentValues.seconde === 0 && state.currentValues.minute > 0
                        ?
                        state.currentValues.minute - 1
                        :
                        state.currentValues.minute,

                    seconde: state.currentValues.seconde > 30
                        ?
                        30
                        :
                        state.currentValues.seconde === 0 && state.currentValues.minute > 0
                            ?
                            30
                            :
                            0
                }
            }
    }
    return state;
}

export default timer;