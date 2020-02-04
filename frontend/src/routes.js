import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignInPage from './pages/sign-in/sign-in';


function Routes() {
  return (
    <Router>
          <Switch>
            <Route path="/">
                <SignInPage />
            </Route>
          </Switch>
        </Router>
         );
}

export default Routes;