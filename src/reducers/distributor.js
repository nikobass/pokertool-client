import { CHANGE_DISTRIBUTOR_FORM_INPUT } from 'src/actions/distributor';


const initialState = {
    chips: [
        {
            color:'#00',
            value: 0,
            number:0,
        },
        {
            color:'#00',
            value: 0,
            number:0,
        },
        {
            color:'#00',
            value: 0,
            number:0,
        },
        {
            color:'#00',
            value: 0,
            number:0,
        },
        {
            color:'#00',
            value: 0,
            number:0,
        },
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
    }
    return state;
}

export default reducer;