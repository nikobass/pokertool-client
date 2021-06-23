import {

    TOGGLE_TIMER,
    CHANGE_CURRENT_VALUES,
    RESET_CURRENT_VALUES,
    LOAD_PREVIOUS_STAGE,
    LOAD_NEXT_STAGE,

} from 'src/actions/timer';


const initialState = {
    isLaunch: false,
    intervalId: null,
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
        smallBlind: 10,
        bigBlind: 20,
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
    ]
}

const timer = (state = initialState, action = {}) => {

    switch (action.type) {
        case TOGGLE_TIMER:
            return {
                ...state,
                isLaunch: !state.isLaunch,
            }

        case CHANGE_CURRENT_VALUES:
            return {
                ...state,
                intervalId: action.intervalId,
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
                            state.currentValues.minute === 0
                                ?
                                state.currentTournament.minute
                                :
                                state.currentValues.minute - 1
                            :
                            state.currentValues.minute,

                    //gestion de l'étape
                    stage:
                        state.currentValues.minute === 0 && state.currentValues.seconde === 0
                            ?
                            state.currentValues.stage += 1
                            :
                            state.currentValues.stage,

                    //gestion des blinds
                    smallBlind:
                        state.currentStructure[state.currentValues.stage - 1].smallBlind,

                    bigBlind:
                        state.currentStructure[state.currentValues.stage - 1].bigBlind,

                }
            }

        case RESET_CURRENT_VALUES:
            return {
                ...state,
                isLaunch: false,
                currentValues: state.currentTournament,
            }

        case LOAD_PREVIOUS_STAGE:
            return {
                ...state,
                currentValues: {
                    ...state.currentValues,
                    minute: state.currentTournament.minute,
                    seconde: state.currentTournament.seconde,
                    stage: state.currentValues.stage > 1
                        ?
                        state.currentValues.stage - 1
                        :
                        state.currentValues.stage,
                    smallBlind: state.currentValues.stage > 1
                    ? state.currentStructure[state.currentValues.stage - 2].smallBlind
                    : state.currentValues.smallBlind,
                    bigBlind: state.currentValues.stage > 1
                    ? state.currentStructure[state.currentValues.stage - 2].bigBlind
                    : state.currentValues.bigBlind
                }
            }

        case LOAD_NEXT_STAGE:
            return {
                ...state,
                currentValues: {
                    ...state.currentValues,
                    minute: state.currentTournament.minute,
                    seconde: state.currentTournament.seconde,
                    stage: state.currentValues.stage < state.currentStructure[state.currentStructure.length-1].stage
                        ?
                        state.currentValues.stage + 1
                        :
                        state.currentValues.stage,
                    smallBlind: state.currentValues.stage < state.currentStructure[state.currentStructure.length-1].stage
                    ? state.currentStructure[state.currentValues.stage].smallBlind
                    : state.currentValues.smallBlind,
                    bigBlind: state.currentValues.stage < state.currentStructure[state.currentStructure.length-1].stage
                    ? state.currentStructure[state.currentValues.stage].bigBlind
                    : state.currentValues.bigBlind
                }
            }
    }
    return state;
}

export default timer;