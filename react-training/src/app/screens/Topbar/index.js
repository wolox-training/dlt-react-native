import React from 'react';

import woloxLogo from '../../../assets/wolox_logo.svg';

import Menu from './Menu';
import styles from './styles.scss';

const TopBar = () => (
  <div className={styles.navbar}>
    <img src={woloxLogo} alt="Wolox Logo" className={styles.imgLogo} />
    <Menu />
  </div>
);

export default TopBar;
