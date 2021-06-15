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
                    console.log(response.data);
                    // je stocke le token et le pseudo ou l'id ou l'adresse email, dans mon store
                    store.dispatch(loginSuccess(response.data));
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