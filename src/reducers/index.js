import { combineReducers } from 'redux';

import userReducer from './user';
import tournamentReducer from './tournament';
import chipReducer from './chip';
import distributorReducer from './distributor'

const rootReducer = combineReducers({
  user: userReducer,
  tournament: tournamentReducer,
  chip: chipReducer,
  distributor: distributorReducer
});

export default rootReducer;