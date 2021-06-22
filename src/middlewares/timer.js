import { 

    TOGGLE_TIMER,
    changeCurrentValues,

} from 'src/actions/timer';

const timerMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case TOGGLE_TIMER:

        const state = store.getState();
        const intervalId = state.timer.intervalId;
        

        if(!state.timer.isLaunch){
            console.log("play")
            const intervalId = setInterval(() => {
                store.dispatch(changeCurrentValues(intervalId));
            }, 1000)
        } else {
            console.log('pause')
            clearInterval(intervalId);
        }

        next(action);
        break;

        default:
            next(action);
            break;
    }
};

export default timerMiddleware;