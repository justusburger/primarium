import React from "react";
import { Route, IndexRoute } from 'react-router';

import FullLayout from "../common/layouts/FullLayout";
import PublicLayout from "../common/layouts/PublicLayout";
import Login from "./components/Login";

export default (
  <Route component={PublicLayout}>
    <Route path="login" component={Login}/>
  </Route>
);