import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import LoginPage from './pages/login/LoginPage';
import Boards from './pages/collections/Boards';
import MoviesPage from './pages/movies-page/MoviesPage';
import SeriesPage from './pages/series-page/SeriesPage';
import OpenBoard from './pages/collections/open-collection/OpenBoard';
import OpenList from './pages/collections/open-collection/OpenList';
import RegisterPage from './pages/register/RegisterPage';
import AccountPage from './pages/account/AccountPage';
import PrivateRoute from './components/private-route/PrivateRoute';
import CartoonsPage from './pages/cartoons-page/CartoonsPage';
import PeoplePage from './pages/peoples/Peoples';

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
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/data/movies" component={MoviesPage} />
        <Route exact path="/data/series" component={SeriesPage} />
        <Route exact path="/data/cartoons" component={CartoonsPage} />
        <PrivateRoute exact path="/boards" component={Boards} />
        <PrivateRoute exact path="/boards/:id/view" component={OpenBoard} />
        <PrivateRoute exact path="/lists/:id/view" component={OpenList} />
        <PrivateRoute path="/account/:id?" component={AccountPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
