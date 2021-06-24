import { calculator } from 'src/utils/calculator';

import { 
    CHANGE_DISTRIBUTOR_FORM_INPUT, 
    ADD_CHIP,
    REMOVE_CHIP,
    LAUNCH_DISTRIBUTOR,
    CHANGE_TOURNAMENT_INFO,
    IMPORT_CHIPS_SUCCESS
} from 'src/actions/distributor';


const initialState = {
    nbChips: 0,
    nbPlayer: 2,
    startingStack: 0,
    isResult: false,
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
                    ? {
                        ...chip, 
                        [action.inputName]:action.newinputValue
                    } 
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
                        color:'#000000',
                        value: 0,
                        quantity:0,
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
            case LAUNCH_DISTRIBUTOR:
                return {
                    ...state,
                    isResult: true,
                    result: calculator(state.chips, state.nbPlayer, state.startingStack)
                }
            case CHANGE_TOURNAMENT_INFO:
                return {
                    ...state,
                    [action.name]: parseInt(action.newInputValue),
                }
            case IMPORT_CHIPS_SUCCESS:
                return{
                    ...state,
                    chips: action.chipsAPI
                }
    }
    return state;
}

export default reducer;