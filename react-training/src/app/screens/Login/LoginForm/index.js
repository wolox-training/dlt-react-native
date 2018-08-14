import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.scss';

class LoginForm extends Component {
  render() {
    return (
      <form className={styles.login} onSubmit={this.props.handleSubmit}>
        <label className="username">Username:</label>
        <Field name="username" component="input" type="text" />
        <label className="password">Password:</label>
        <Field name="password" component="input" type="password" />
        <button type="submit">Log me in!</button>
      </form>
    );
  }
}

LoginForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginForm;
