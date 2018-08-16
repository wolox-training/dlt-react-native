import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import loginActions from '../../../redux/login/actions';

import LoginForm from './LoginForm';

class Login extends Component {
  handleSubmit = values => this.props.requestLogin(values);

  render() {
    const { loggedIn, loggingIn, loginError } = this.props;

    return !loggedIn ? (
      <LoginForm onSubmit={this.handleSubmit} loginError={loginError} loggingIn={loggingIn} />
    ) : (
      <Redirect to="/game" />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  requestLogin: login => dispatch(loginActions.requestLogin(login))
});

const mapStateToProps = ({ login }) => ({
  loggingIn: login.loggingIn,
  loggedIn: login.loggedIn,
  loginError: login.loginError,
  user: login.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
