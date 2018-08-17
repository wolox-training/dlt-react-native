import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { authActions } from '../../../redux/auth/action';
import Login from '../../screens/Login';
import Game from '../../screens/Game';
import PrivateRoute from '../PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.setAuthentication();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          {['/', 'game'].map(route => (
            <PrivateRoute key={route} path={route} component={Game} />
          ))}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  user: auth.user
});

const mapDispatchToProps = dispatch => ({
  setAuthentication: () => dispatch(authActions.setAuthentication())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
