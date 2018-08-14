import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styles from './styles.scss';

class Login extends Component {
  state = {
    isLoggedIn: false
  };

  handleSubmit = e => {
    /* some log in logic */
    e.preventDefault();
    console.log('lslsls');
    this.setState({ isLoggedIn: true });
  };

  render() {
    return !this.state.isLoggedIn ? (
      <form className={styles.login} onSubmit={this.handleSubmit}>
        <label className="username">Username:</label>
        <input type="text" className="username-input" />
        <label className="password">Password:</label>
        <input type="password" className="password-input" />
        <input type="submit" value="Log me in!" className={styles.submit} />
      </form>
    ) : (
      <Redirect to="/game" />
    );
  }
}

export default Login;
