import axios from 'axios';

import {
  GET_CHIPS_FROM_API,
  getChipsSuccess
} from 'src/actions/chip';

const chipsMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case GET_CHIPS_FROM_API: {   
  
      const loggedUserId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      axios({
        method: 'get',
        url: `http://localhost:3000/chip/${loggedUserId}`,
        headers: { "Authorization": `Bearer ${token}` },
     
      })
      .then((response) => {              
        store.dispatch(getChipsSuccess(response.data));
      })
      .catch(error => console.log(error));

    }
    default:
      next(action);
      break;
  }
};

export default chipsMiddleware;
