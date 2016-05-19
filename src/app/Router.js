import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import CommonRouter from "./common/Router";
import CustomerRouter from "./customer/Router";

export default class AppRouter extends React.Component {

  render() {
    const history = syncHistoryWithStore(browserHistory, this.props.store);

    return (
      <Router history={history}>
        {CommonRouter}
        {CustomerRouter}
      </Router>
    );
  }

}