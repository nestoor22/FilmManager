import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainChatPage from './pages/main/MainChatPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainChatPage} />
      </Switch>
    </Router>
  );
}

export default Routes;