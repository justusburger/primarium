import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { reducer as formReducer } from 'redux-form';

import userReducer from "./user/Reducer";
import profileReducer from "./profile/Reducer";

const mainReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  user: userReducer,
  profile: profileReducer
});

const store = createStore(
  mainReducer,
  {},
  compose (
    applyMiddleware(
      thunk,
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;