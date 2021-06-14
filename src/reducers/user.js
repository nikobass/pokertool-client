import { CHANGE_OPEN_FORM } from 'src/actions/user';

const initialState = {
    isLogged: false,
    openFormSignup: false,
}

const reducer = (state = initialState, action = {}) => {
  switch(action.type){
    case CHANGE_OPEN_FORM :
      return{
        ...state,
        openFormSignup: true,
      };
      default:
        return state;
      
  }
}

export default reducer;
