import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./pages/main/MainPage";


function Routes() {
  return (
    <Router>
        <Switch>
            <Route path="/">
                <MainPage/>
            </Route>
        </Switch>
    </Router>
  );
}

export default Routes;