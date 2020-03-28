import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";


function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
        </Switch>
        <Switch>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default Routes;