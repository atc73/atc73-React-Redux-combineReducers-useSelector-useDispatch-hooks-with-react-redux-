import { createStore, combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './ice-cream/iceCreamReducer';

const rootReducers = combineReducers({ cakeReducer, iceCreamReducer });

const store = createStore(rootReducers);

export default store;
