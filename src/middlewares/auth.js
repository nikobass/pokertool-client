
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

            //On prépare la requête
            const loginRequest = {
                method: 'post',
                //TODO: prévoir l'API_URL dans le .env
                url: `localhost:3000/signin`,
                data: {
                    // A voir avec Pascal les données attendues côté back
                    email: state.user.email,
                    password: state.user.password,
                },
            };
            //On éxécute la requete préparée ci-dessus
            axios(loginRequest)
                .then((response) => {
                    //TODO: gérer le cas ou il y a une erreur de requete
                    //TODO: avec l'action loginError
                    // je stocke le token et le pseudo dans mon store
                    store.dispatch(loginSuccess(response.data));
                    // une fois que j'ai le token, je peux direct demander les favoris
                    store.dispatch(getFavorites());
                });
            break;
        }
        default:
            next(action);
            break;
    }
};

export default authMiddleware;