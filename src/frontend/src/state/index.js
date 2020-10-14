import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleWares = [thunk, logger];

const store = createStore(reducers, applyMiddleware(...middleWares));

export default store;
