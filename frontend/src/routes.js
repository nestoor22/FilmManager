import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import Boards from './pages/boards/Boards';
import OpenBoard from './pages/boards/open-board/OpenBoard';
import RegisterPage from './pages/register/RegisterPage';
import AccountPage from './pages/account/AccountPage';
import PrivateRoute from './components/private-route/PrivateRoute';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signIn">
          <LoginPage />
        </Route>

        <Route exact path="/signUp">
          <RegisterPage />
        </Route>

        <PrivateRoute exact path="/" component={MainPage} />
        <PrivateRoute exact path="/boards" component={Boards} />
        <PrivateRoute exact path="/boards/:id" component={OpenBoard} />
        <PrivateRoute exact path="/account" component={AccountPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
