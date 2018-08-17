import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...args }) => (
  <Route {...args} render={props => (args.isAuth ? <Component {...props} /> : <Redirect to="/login" />)} />
);

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  user: auth.user
});

export default connect(mapStateToProps)(PrivateRoute);
