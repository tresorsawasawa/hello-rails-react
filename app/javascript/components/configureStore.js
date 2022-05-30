import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import helloReducer from './helloworld/hello';

const reducer = combineReducers({
  helloReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
