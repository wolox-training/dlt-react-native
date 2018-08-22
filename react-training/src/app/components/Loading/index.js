import React, { Fragment } from 'react';

import styles from './styles.scss';

const Loading = Component => props => {
  const { loading, error } = props;
  return loading ? (
    <Fragment>
      <div className={styles.loadingAnimation} />
      <div className={styles.loadingText}>Logging you in</div>
    </Fragment>
  ) : error ? (
    <Fragment>
      <div className={styles.error}>There was an error. Please try again</div>
      <Component {...props} />
    </Fragment>
  ) : (
    <Component {...props} />
  );
};

export default Loading;
