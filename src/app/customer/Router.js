import React from "react";
import { Route, IndexRoute } from 'react-router';

import FullLayout from "../common/layouts/FullLayout";
import CustomerList from "./components/CustomerList";

export default (
  <Route path="/customers" component={FullLayout}>
    <IndexRoute component={CustomerList}/>
  </Route>
);