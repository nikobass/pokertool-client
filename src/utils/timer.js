const initialState = {
    minute: 5,
    seconde: 0,
    stage: 1,
    smallBlind: 10,
    bigBlind: 20,
    current: {
        minute: 5,
        seconde: 0,
        stage: 1,
        smallBlind: 10,
        bigBlind: 20,
    },
    structure: [
        {stage: 1, sb: 10, bb: 20},
        {stage: 2, sb: 20, bb: 40},
        {stage: 3, sb: 30, bb: 60},
        {stage: 4, sb: 40, bb: 80},
        {stage: 5, sb: 50, bb: 100},

    ]
}

const timer = (minute, seconde, stage, smallBlind, bigBlind) => {

    const result = {
        minute,
        seconde,
        stage,
        smallBlind,
        bigBlind,
    }  
    return result;
}

setInterval(() => {

    console.log(timer(
        initialState.current.minute, 
        initialState.current.seconde, 
        initialState.current.stage, 
        initialState.current.smallBlind, 
        initialState.current.bigBlind,
    ));

    if(initialState.current.seconde > 0){
        initialState.current.seconde--;
    } else {
        initialState.current.seconde = 59;
        initialState.current.minute--;
    }

    if(initialState.current.seconde === 0 && initialState.current.minute > 0){
        initialState.current.minute--;
    } else if(initialState.current.minute === 0) {
        initialState.current.minute = initialState.minute;
        initialState.current.seconde = initialState.seconde;
        initialState.current.stage += 1;
        initialState.current.smallBlind = initialState.structure[initialState.current.stage-1].sb;
        initialState.current.bigBlind = initialState.structure[initialState.current.stage-1].bb;
    }

}, 1000);

