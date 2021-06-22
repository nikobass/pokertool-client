import axios from 'axios';

import {
  GET_CHIPS_FROM_API,
  SUBMIT_CHIPS_FORM,
  getChipsSuccess,
  submitChipsSuccess
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
    break;
    case SUBMIT_CHIPS_FORM: {    
      const loggedUserId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const state = store.getState();
      console.log(state)
      const array = [...state.chip.chips];
      console.log(array);
      axios({
        method: 'post',
        url: `http://localhost:3000/chip/${loggedUserId}`,
        headers: { "Authorization": `Bearer ${token}` },
        data: [
          ...
          array
        ],
      })
        .then((response) => {  
          store.dispatch(submitChipsSuccess(response.data));
        })
        .catch((err) => {  
          console.log(err)       
          // store.dispatch(loginError((err.response.data.message)));
        });
        break;
    }
    default:
      next(action);
      break;
  }
};

export default chipsMiddleware;
