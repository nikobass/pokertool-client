import axios from 'axios';

import {
  SUBMIT_LOGIN,
  loginSuccess,
  signUpSuccess,
  SUBMIT_SIGN_UP,
  DELETE_USER_ACCOUNT,
  SUBMIT_PROFIL,
  CHECK_IS_LOGGED,
  logUser,
  GET_PROFIL_FROM_API,
  updateProfilFromAPI,
  submitProfilSuccess,
  loginError,
  UpdateProfilError,
  signUpError,
} from 'src/actions/user';
import { deleteUserAccountSucces } from '../actions/user';

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
        .catch((err) => {          
          store.dispatch(loginError((err.response.data.message)));
        });
      break;
    }
    case SUBMIT_SIGN_UP: {
      const state = store.getState();

      axios ({
        method: 'post',
        url: `http://localhost:3000/signup`,
        data: {
          user_name: state.user.signup.nickname,
          email: state.user.signup.email,
          password: state.user.signup.password
        },
      })
        .then(response => {         
          store.dispatch(signUpSuccess(response.data));
          localStorage.setItem('userId', response.data.id);
          localStorage.setItem('nickname', response.data.user_name);
        })
        .catch((err) => {          
          store.dispatch(signUpError((err.response.data.message)));
        });
      break;
    }
    case DELETE_USER_ACCOUNT: {
      const loggedUserId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      axios({
        method: 'delete',
        url: `http://localhost:3000/profil/${loggedUserId}`,
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
          store.dispatch(deleteUserAccountSucces());
        })
        .catch((error) => console.log(error));
      break;
    }
    case SUBMIT_PROFIL: {

      const state = store.getState();
      const loggedUserId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      axios({
        method: 'patch',
        url: `http://localhost:3000/profil/${loggedUserId}`,
        data: {
          user_name: state.user.profil.nickname,
          email: state.user.profil.email,
          password: state.user.profil.password,
        },
        // headers: { "Authorization": `Bearer ${token}` }
      })
        .then((response) => {         
          store.dispatch(submitProfilSuccess());
        })
        .catch(err => {
          console.log(err.response.data.message)
          store.dispatch(UpdateProfilError(err.response.data.message))
        });

      break;
    }

    case CHECK_IS_LOGGED: {

      const token = localStorage.getItem('token');
      if(token){
        store.dispatch(logUser())
      }
      break;
    }
    

    case GET_PROFIL_FROM_API: {

      const token = localStorage.getItem('token');
      const loggedUserId = localStorage.getItem('userId');

      axios({
        method: 'get',
        url: `http://localhost:3000/profil/${loggedUserId}`,
        headers: { "Authorization": `Bearer ${token}` }
      })
      .then((response) => {      
        store.dispatch(updateProfilFromAPI(response.data))
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
