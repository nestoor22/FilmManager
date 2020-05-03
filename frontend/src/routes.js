import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";
import Boards from "./pages/boards/Boards";
import OpenBoard from "./pages/boards/open-board/OpenBoard";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/boards">
          <Boards />
        </Route>
        <Route exact path="/boards/:id">
          <OpenBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
