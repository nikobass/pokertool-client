import {

    TOGGLE_TIMER,
    changeCurrentValues,
    RESET_TIMER,
    resetCurrentValues,
    GO_TO_PREVIOUS_STAGE,
    loadPreviousStage,
    GO_TO_NEXT_STAGE,
    loadNextStage,

} from 'src/actions/timer';

const timerMiddleware = (store) => (next) => (action) => {

    switch (action.type) {

        case RESET_TIMER: {
            const state = store.getState();
            const intervalId = state.timer.intervalId;

            clearInterval(intervalId);

            store.dispatch(resetCurrentValues());

            break;
        }

        case GO_TO_PREVIOUS_STAGE: {

            const state = store.getState();
            const intervalId = state.timer.intervalId;

            clearInterval(intervalId);

            store.dispatch(loadPreviousStage());

            break;
        }

        case GO_TO_NEXT_STAGE: {

            const state = store.getState();
            const intervalId = state.timer.intervalId;

            clearInterval(intervalId);

            store.dispatch(loadNextStage());

            break;
        }
        case TOGGLE_TIMER: {

            const state = store.getState();
            const intervalId = state.timer.intervalId;


            if (!state.timer.isLaunch) {
                const intervalId = setInterval(() => {
                    store.dispatch(changeCurrentValues(intervalId));
                }, 1000)
            } else {
                clearInterval(intervalId);
            }

            next(action);
            break;
        }

        default:
            next(action);
            break;
    }
};

export default timerMiddleware;