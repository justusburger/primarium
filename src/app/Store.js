import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { reducer as formReducer } from 'redux-form';

import userReducer from "./user/Reducer";
import profileReducer from "./profile/Reducer";

const store = createStore(
  combineReducers({
    routing: routerReducer,
    form: formReducer,
    user: userReducer,
    profile: profileReducer
  }),
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory)
  )
);

export default store;