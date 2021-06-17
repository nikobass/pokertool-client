import axios from 'axios';

import {
  SUBMIT_LOGIN,
  loginSuccess,
  signUpSuccess,
  SUBMIT_SIGN_UP,

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
    case SUBMIT_SIGN_UP: {
      const state = store.getState();

      axios ({
        method: 'post',
        url: `http://localhost:3000/signup`,
        data: {
          user_name: state.user.signup.nickname,
          email: state.user.signup.email,
          password: state.user.signup.password,
          // emailConfirm: state.user.signup.emailConfirm,
          // passwordConfirm: state.user.signup.passwordConfirm,
        },
      })
        .then(response => {
          console.log(response.data);
          store.dispatch(signUpSuccess(response.data));
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('nickname', response.data.nickname);
        })
        .catch(err => console.log(err.response.data.message));
      break;
    }
    default:
      next(action);
      break;
  }
};

export default authMiddleware;