import React from "react";
import { Route, IndexRoute } from 'react-router';

import FullLayout from "../common/layouts/FullLayout";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

export default (
  <Route path="users" component={FullLayout}>
    <IndexRoute component={UserList}/>
    <Route path=":id" component={UserDetails}/>
  </Route>
);