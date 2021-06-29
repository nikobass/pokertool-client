import axios from 'axios';

import {
    IMPORT_CHIPS,
    importChipsSuccess
} from 'src/actions/distributor';

const distributorMiddleware = (store) => (next) => (action) => {

    switch (action.type) {

        case IMPORT_CHIPS:
            const token = localStorage.getItem('token');
            const loggedUserId = localStorage.getItem('userId');

            axios({
                method: 'get',
                url: `http://localhost:3000/chip/${loggedUserId}`,
                headers: { "Authorization": `Bearer ${token}` }
              })        
              .then((response) => {
                store.dispatch(importChipsSuccess(response.data))
              })
              .catch(error => console.log(error.response.data.message));

            break;

        default:
            next(action);
            break;
    }
};

export default distributorMiddleware;
