import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginActions from '../../../redux/auth/action';
import Loading from '../../components/Loading';

import LoginForm from './LoginForm';

class Login extends Component {
  handleSubmit = values => this.props.requestLogin(values);

  render() {
    const { authLoading, authError } = this.props;
    const WithLoading = Loading(LoginForm);
    return <WithLoading onSubmit={this.handleSubmit} error={authError} loading={authLoading} />;
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
