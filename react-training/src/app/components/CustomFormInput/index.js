import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const CustomFormInput = props => {
  const { label, input, type, meta } = props;
  return (
    <Fragment>
      <label className="username">{label}</label>
      <input {...input} type={type} />
      {meta.error && meta.touched && <div className={styles.errorMsg}>{meta.error}</div>}
    </Fragment>
  );
};

CustomFormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
};
