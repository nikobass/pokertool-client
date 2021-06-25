import {

    changeCurrentValues,
    RESET_TIMER,
    resetCurrentValues,
    GO_TO_PREVIOUS_STAGE,
    loadPreviousStage,
    GO_TO_NEXT_STAGE,
    loadNextStage,
    REFRESH_TIME,
    show_time,
    LAUNCH_TIMER,
    STOP_TIMER,

} from 'src/actions/timer';

const timerMiddleware = (store) => (next) => (action) => {

    switch (action.type) {

        case REFRESH_TIME: {

            setInterval(() => {
                let now = new Date();
                let currentTime = {
                    hour: now.getHours() >= 10 ? now.getHours() : "0" + now.getHours(),
                    minute: now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes(),
                    second: now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds(),
                }

                store.dispatch(show_time(currentTime));
            }, 1000)
        }

            break;

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
        case LAUNCH_TIMER: {

            const state = store.getState();

            if (!state.timer.isLaunch) {
                const intervalId = setInterval(() => {
                    store.dispatch(changeCurrentValues(intervalId));
                }, 1000)
            }

            next(action);
            break;
        }

        case STOP_TIMER: {
            const state = store.getState();
            const intervalId = state.timer.intervalId;
            if (state.timer.isLaunch) {
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