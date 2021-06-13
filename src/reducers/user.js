import {TOGGLE_MODIFY_PROFIL} from 'src/actions/user';


const initialState = {
    isLogged: false,
    nickname: 'nicknamedustate',
    email: 'email@dustate.fr',
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
        default:
            return state;
    }
}

export default reducer;