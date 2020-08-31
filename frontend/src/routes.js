import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import Boards from './pages/boards/Boards';
import MoviesPage from './pages/movies-page/MoviesPage';
import SeriesPage from './pages/series-page/SeriesPage';
import OpenBoard from './pages/boards/open-board/OpenBoard';
import RegisterPage from './pages/register/RegisterPage';
import AccountPage from './pages/account/AccountPage';
import PrivateRoute from './components/private-route/PrivateRoute';
import CartoonsPage from './pages/cartoons-page/CartoonsPage';

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

        <Route exact path="/" component={MainPage} />
        <Route exact path="/data/movies" component={MoviesPage} />
        <Route exact path="/data/series" component={SeriesPage} />
        <Route exact path="/data/cartoons" component={CartoonsPage} />

        <PrivateRoute exact path="/boards" component={Boards} />
        <PrivateRoute exact path="/boards/:id/view" component={OpenBoard} />
        <PrivateRoute exact path="/account" component={AccountPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
