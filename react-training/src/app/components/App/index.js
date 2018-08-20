import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../../screens/Login';
import Game from '../../screens/Game';
import AuthenticatedRoute from '../AuthenticatedRoute';
import { routes } from '../../constants/routes';

const App = () =>
  <Router>
    <Switch>
      <AuthenticatedRoute path={routes.login} component={Login} />
      {routes.game.map(route => (
        <AuthenticatedRoute key={route} path={route} component={Game} />
      ))}
    </Switch>
  </Router>

export default (App);
