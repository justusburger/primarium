import React from "react";
import { Route, IndexRoute } from 'react-router';

import FullLayout from "../common/layouts/FullLayout";
import UserList from "./components/UserList";

export default (
  <Route path="/users" component={FullLayout}>
    <IndexRoute component={UserList}/>
  </Route>
);