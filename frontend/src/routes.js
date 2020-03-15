import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/sign-in/SignIn';
import Logo from "./components/logo/Logo";
import CabinetSideBar from "./components/cabinetSideBar/CabinetSideBar";
import Header from "./components/header/Header";
import FilmsPage from "./pages/shows/Films";
import SeriesPage from "./pages/shows/Series";
import MainPage from "./pages/shows/Main";

function Routes() {
  return (
    <Router>
          <Switch>
            <Route path="/signIn">
                <Logo/>
                <SignInPage />
            </Route>
            <Route path="/account/">
                <div id="content">
                    <Header/>
                    <CabinetSideBar name="Yaroslav" lastName="Nestor"/>
                </div>
            </Route>
            <Route exact path="/data/" component={MainPage}>
            </Route>
            <Route path="/data/films/:pageId?" component={FilmsPage}>
            </Route>
            <Route path="/data/series/:pageId?" component={SeriesPage}>
            </Route>
          </Switch>
        </Router>
         );
}

export default Routes;