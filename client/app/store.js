import { applyMiddleware, createStore } from 'redux';
import {allReducers } from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);


export default createStore(allReducers, middleware);
