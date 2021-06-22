const initialState = {
    currentTournament:{
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
        {stage: 1, sb: 10, bb: 20},
        {stage: 2, sb: 20, bb: 40},
        {stage: 3, sb: 30, bb: 60},
        {stage: 4, sb: 40, bb: 80},
        {stage: 5, sb: 50, bb: 100},
        {stage: 6, sb: 60, bb: 120},
        {stage: 7, sb: 70, bb: 140},
        {stage: 8, sb: 80, bb: 160},
        {stage: 9, sb: 90, bb: 180},
        {stage: 10, sb: 100, bb: 200},
    ]
}

const timer = (state = initialState, action = {}) => {
    return state;
}

export default timer;