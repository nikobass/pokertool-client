
import {
  SHOW_CREATE_TOURNAMENT_MODAL
} from 'src/actions/tournament';

import {
  HIDE_MODAL
} from 'src/actions/user';

const initialState = {
  showCreateTournamentModal: false
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) { 
    case SHOW_CREATE_TOURNAMENT_MODAL:
      return {
        ...state,
        showCreateTournamentModal: true
      }
    case HIDE_MODAL:
      return {
        ...state,
        showCreateTournamentModal: false
      }
    default:
      return state;
  }
}

export default reducer;
