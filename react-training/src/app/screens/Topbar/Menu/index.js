import React from 'react';
import { connect } from 'react-redux';

import styles from './styles.scss';

const Menu = () => (
  <ul className={styles.list}>
    <li className={styles.option}>Log Out</li>
    <li className={styles.option}>Some other thing</li>
  </ul>
);

export default connect()(Menu);
