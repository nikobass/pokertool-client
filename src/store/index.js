
import { createStore, applyMiddleware } from 'redux';

import authMiddleware from '../middlewares/auth';

import tournamentsMiddleware from '../middlewares/tournaments';

import distributorMiddleware from '../middlewares/distributor';


import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, distributorMiddleware, tournamentsMiddleware),

);

const store = createStore(reducer, enhancers);

export default store;
