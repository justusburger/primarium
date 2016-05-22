import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import AppRouter from "./Router";
import AppStore from "./Store";

class Application {
  start() {
    ReactDOM.render((
      <Provider store={AppStore}>
        <AppRouter store={AppStore}/>
      </Provider>
    ), document.getElementById('app'));
  }

}

export default new Application();