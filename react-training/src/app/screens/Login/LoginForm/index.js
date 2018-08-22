import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { CustomFormInput } from '../../../components/CustomFormInput';
import { required, minLength } from '../../../validation';

import styles from './styles.scss';

function LoginForm(props) {
  return (
    <form className={styles.login} onSubmit={props.handleSubmit}>
      <Field name="email" component={CustomFormInput} type="text" label="Email" validate={[required]} />
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
LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({ form: 'login' })(LoginForm);
