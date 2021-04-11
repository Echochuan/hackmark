import React, { Component } from "react";
import { Route } from "react-router";

import initPage from './pages/init_page/init_page'
import login from './pages/login/login'

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={login} exact/>
        <Route path="/init" component={initPage}></Route>
      </div>
    );
  }
}
