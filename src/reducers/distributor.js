import { 
    CHANGE_DISTRIBUTOR_FORM_INPUT, 
    ADD_CHIP,
    REMOVE_CHIP
} from 'src/actions/distributor';


const initialState = {
    nbChips: 0,
    chips: [

    ],
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_DISTRIBUTOR_FORM_INPUT:
            return {
                ...state,
                chips: state.chips.map(
                    (chip, i) => i == action.index 
                    ? {...chip, [action.inputName]:action.newinputValue} 
                    : chip
                )
            }
        case ADD_CHIP:
            return {
                ...state,
                nbChips: state.nbChips + 1,
                chips: [
                    ...state.chips,
                    {
                        color:'#00',
                        value: 0,
                        number:0,
                    }
                ],

            }
            case REMOVE_CHIP:
                return {
                    ...state,
                    nbChips: state.nbChips > 0 ? state.nbChips - 1 : state.nbChips,
                    chips: [
                        ...state.chips.slice(0, action.index),
                        ...state.chips.slice(action.index + 1)
                    ]
    
                }
    }
    return state;
}

export default reducer;