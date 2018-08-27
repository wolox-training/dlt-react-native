import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginActions from '../../../redux/auth/action';

import LoginForm from './LoginForm';

class Login extends Component {
  handleSubmit = values => this.props.requestLogin(values);

  render() {
    const { authLoading, authError } = this.props;
    return <LoginForm onSubmit={this.handleSubmit} authError={authError} loggingIn={authLoading} />;
  }
}

const mapDispatchToProps = dispatch => ({
  requestLogin: login => dispatch(loginActions.requestLogin(login))
});

const mapStateToProps = ({ auth }) => ({
  authLoading: auth.authLoading,
  authError: auth.authError
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
