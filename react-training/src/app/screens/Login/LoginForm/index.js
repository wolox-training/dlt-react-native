import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { CustomFormInput } from '../../../components/customFormInput';
import { required, minLength } from '../../../validation';

import styles from './styles.scss';

class LoginForm extends Component {
  render() {
    return (
      <form className={styles.login} onSubmit={this.props.handleSubmit}>
        <Field
          name="username"
          component={CustomFormInput}
          type="text"
          label="Username"
          validate={[required]}
        />
        <Field
          name="password"
          component={CustomFormInput}
          type="password"
          label="Password"
          validate={[required, minLength]}
        />
        <button className={styles.submit} type="submit">
          Log me in!
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

LoginForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginForm;
