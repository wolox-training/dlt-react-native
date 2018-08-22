import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginActions from '../../../redux/auth/action';

import LoginForm from './LoginForm';

class Login extends Component {
  handleSubmit = values => this.props.requestLogin(values);

  render() {
    const { loggingIn, authError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} authError={authError} loggingIn={loggingIn} />
  }
}

const mapDispatchToProps = dispatch => ({
  requestLogin: login => dispatch(loginActions.requestLogin(login))
});

const mapStateToProps = ({ auth }) => ({
  loggingIn: auth.loggingIn,
  isAuth: auth.isAuth,
  authError: auth.authError,
  user: auth.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
