import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignInPage from './pages/sign-in/SignIn';
import Main from "./pages/main/Main";
import Logo from "./components/logo/Logo";


function Routes() {
  return (
    <Router>
          <Switch>
            <Route path="/signIn">
                <Logo/>
                <SignInPage />
            </Route>
            <Route path="/">
                <Main/>
            </Route>
          </Switch>
        </Router>
         );
}

export default Routes;