
import { createStore, applyMiddleware } from 'redux';

import reducer from 'src/reducers';

import authMiddleware from '../middlewares/auth';

import tournamentsMiddleware from '../middlewares/tournaments';

import distributorMiddleware from '../middlewares/distributor';

import timerMiddleware from '../middlewares/timer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, 
  distributorMiddleware, 
  tournamentsMiddleware, 
  timerMiddleware
    ),

);

const store = createStore(reducer, enhancers);

export default store;
