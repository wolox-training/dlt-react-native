import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Account from '../../screens/Account';
import AuthenticatedRoute from '../AuthenticatedRoute';
import Game from '../../screens/Game';
import Login from '../../screens/Login';
import { routes } from '../../../constants/routes';

const App = () => (
  <Router>
    <Switch>
      <AuthenticatedRoute path={routes.login} component={Login} />
      <AuthenticatedRoute path={routes.account} component={Account} />
      {routes.game.map(route => (
        <AuthenticatedRoute key={route} path={route} component={Game} />
      ))}
    </Switch>
  </Router>
);

export default App;
