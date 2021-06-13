import {TOGGLE_MODIFY_PROFIL, CHANGE_INPUT_VALUE} from 'src/actions/user';


const initialState = {
    isLogged: false,
    nickname: 'nicknamedustate',
    email: 'email@dustate.fr',
    password: 'passworddustate',
    profil: {
        modifying: false,
    }
}

const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case TOGGLE_MODIFY_PROFIL:
            return {
                ...state,
                profil: {
                    modifying: true
                }
            }
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                [action.inputName]: action.newInputValue
            }
        default:
            return state;
    }
}

export default reducer;