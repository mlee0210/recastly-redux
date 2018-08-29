import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
var reducer = rootReducer;
var listeners = [];
var state;

var store = {
  dispatch(action) {
    if (typeof action === 'function') {
      action(store.dispatch);
    } else {
      state = reducer(state, action);
      listeners.forEach(func => func(state));
    }
  },

  subscribe(listener) {
    listeners.push(listener);
  },

  getState() {
    return state || reducer(state, { type: null });
  },

  replaceReducer(newReducer) {
    reducer = newReducer;
  }
};
export default store;
