import axios from 'axios';

import {
    SUBMIT_LOGIN,
    loginSuccess,
} from 'src/actions/user';

const authMiddleware = (store) => (next) => (action) => {

    switch (action.type) {

        case SUBMIT_LOGIN: {
            //on récupère le state
            const state = store.getState();

            axios({
                method: 'post',
                url: `http://localhost:3000/signin`,
                data: {
                    email: state.user.email,
                    password: state.user.password,
                },
              })
              .then(response => {

                    store.dispatch(loginSuccess(response.data));
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('nickname', response.data.nickname);
                    localStorage.setItem('token', response.data.token);

                })
                .catch(error => console.log(error));
            break;
        }
        default:
            next(action);
            break;
    }
};

export default authMiddleware;