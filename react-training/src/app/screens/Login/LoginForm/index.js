import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { CustomFormInput } from '../../../components/CustomFormInput';
import { required, minLength } from '../../../validation';

import styles from './styles.scss';

function LoginForm(props) {
  const { authError, loggingIn } = props;
  return !loggingIn ? (
    <form className={styles.login} onSubmit={props.handleSubmit}>
      {authError && <div className={styles.authError}> Unsucessful Login. Please try again</div>}
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
  ) : (
    <Fragment>
      <div className={styles.loggingInBall} />
      <div className={styles.loggingInText}>Logging you in</div>
    </Fragment>
  );
}
LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  loggingIn: PropTypes.bool,
  authError: PropTypes.bool
};

export default reduxForm({ form: 'login' })(LoginForm);
