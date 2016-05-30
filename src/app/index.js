import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import AppRouter from "./Router";
import AppStore from "./Store";

import { checkSession } from "./profile/Actions";

class Application {
  start() {
    ReactDOM.render((
      <Provider store={AppStore}>
        <AppRouter store={AppStore}/>
      </Provider>
    ), document.getElementById('app'));

    AppStore.dispatch(checkSession(window.location.pathname));
  }

}

export default new Application();