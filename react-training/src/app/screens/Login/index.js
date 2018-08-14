import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from './LoginForm';

class Login extends Component {
  state = {
    isLoggedIn: false
  };

  handleSubmit = values => {
    /* some log in logic */
    this.setState({ isLoggedIn: true });
  };

  render() {
    return !this.state.isLoggedIn ? <LoginForm onSubmit={this.handleSubmit} /> : <Redirect to="/game" />;
  }
}

export default Login;
