import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { routerReducer } from 'react-router-redux';

import userReducer from "./user/Reducer";

const store = createStore(
  combineReducers({
    routing: routerReducer,
    user: userReducer
  }),
  applyMiddleware(thunk)
);

export default store;