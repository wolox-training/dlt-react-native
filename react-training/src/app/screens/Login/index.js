import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import loginActions from '../../../redux/login/actions';
import LoginForm from './LoginForm';

class Login extends Component {
  handleSubmit = values => this.props.requestLogin(values);

  render() {
    return true ? <LoginForm onSubmit={this.handleSubmit} /> : <Redirect to="/game" />;
  }
}

const mapDispatchToProps = dispatch => ({
  requestLogin: login => dispatch(loginActions.requestLogin(login)) 
});

const mapStateToProps = ({ login }) => ({
  loggingIn: login.loggingIn,
  loggedIn: login.loggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
