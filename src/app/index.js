import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';

import AppRouter from "./Router";

import userReducer from "./user/Reducer";

class Application {
  start() {
    const store = createStore(
      combineReducers({
        routing: routerReducer,
        user: userReducer
      })
    );

    ReactDOM.render((
      <Provider store={store}>
        <AppRouter store={store}/>
      </Provider>
    ), document.getElementById('app'));
  }

}

export default new Application();