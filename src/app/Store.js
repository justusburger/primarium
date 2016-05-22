import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from "./user/Reducer";

const store = createStore(
  combineReducers({
    routing: routerReducer,
    form: formReducer,
    user: userReducer
  }),
  applyMiddleware(thunk)
);

export default store;