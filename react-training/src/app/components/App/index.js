import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../../screens/Login';
import Game from '../../screens/Game';
import SessionPersistence from '../SessionPersistence';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/game" component={Game} />
    </Switch>
  </Router>
);

export default App;
