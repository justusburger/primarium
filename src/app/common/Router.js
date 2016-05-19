import React from "react";
import { Route, IndexRoute } from 'react-router';

import FullLayout from "./layouts/FullLayout";
import Dashboard from "./components/Dashboard";

export default (
  <Route path="/" component={FullLayout}>
    <IndexRoute component={Dashboard}/>
  </Route>
);