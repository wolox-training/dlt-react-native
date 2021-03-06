import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export default function Square(props) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};
