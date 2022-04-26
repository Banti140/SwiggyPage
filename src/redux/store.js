// import { createStore } from "redux";
// import reducers from "./reducers";

// // const store = createStore(reducers);

import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares  = [thunk];

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middlewares), 
  // window.devToolsExtension ? window.devToolsExtension() : f => f
))
  
  export default store;