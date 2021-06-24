import axios from 'axios';

import {
  GET_CHIPS_FROM_API,
  SUBMIT_CHIPS_FORM,
  getChipsSuccess,
  submitChipsSuccess,
  chipsError
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
      const arrayOfChips = [...state.chip.chips];

      function checkForDuplicates(array, keyName) {
        return new Set(array.map(item => item[keyName])).size !== array.length
      }

      if (checkForDuplicates(arrayOfChips, 'color')){
        const msg = "Plusieurs jetons ont la même couleur. Veuillez vérifier votre saisie."
        store.dispatch(chipsError(msg)); 
      }        
      else if (checkForDuplicates(arrayOfChips, 'value')) {
        const msg = "Plusieurs jetons ont la même valeur. Veuillez vérifier votre saisie."
        store.dispatch(chipsError(msg));        
      } else {
        axios({
          method: 'post',
          url: `http://localhost:3000/chip/${loggedUserId}`,
          headers: { "Authorization": `Bearer ${token}` },
          data: [
            ...
            arrayOfChips
          ],
        })
          .then((response) => {  
            store.dispatch(submitChipsSuccess(response.data));
          })
          .catch((err) => {  
            console.log(err)
          });
      }    
      
        break;
    }
    default:
      next(action);
      break;
  }
};

export default chipsMiddleware;
