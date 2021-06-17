import axios from 'axios';

import {
    SUBMIT_LOGIN,
    loginSuccess,
    SUBMIT_SIGN_UP_VALUES,
    signUpSuccess,
    SUBMIT_SIGN_UP,
    SIGN_UP_SUCCESS

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
        };
        case SUBMIT_SIGN_UP: {
            const state = store.getState();

            axios ({
                method: 'post',
                url: `http://localhost:3000/signup`,
                data: {
                    pseudo: state.user.signup.pseudo,
                    email: state.user.signup.email,
                    password: state.user.signup.password,
                    // emailConfirm: state.user.emailConfirm,
                    // passwordConfirm: state.user.passwordConfirm,
                },
            })
            .then(response => {

                store.dispatch(SignUpSuccess(response.data));
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('nickname', response.data.nickname);

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