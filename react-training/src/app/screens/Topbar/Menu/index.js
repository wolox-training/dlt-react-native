import React from 'react';
import { connect } from 'react-redux';

import CustomLink from '../../../components/CustomLink';
import { routes } from '../../../constants/routes';

import styles from './styles.scss';

const Menu = () => (
  <ul className={styles.list}>
    <CustomLink tag="Log Out" route={routes.logout} />
    <CustomLink tag="My Account" route={routes.account} />
    <CustomLink tag="PLAY" route={routes.game[0]} />
  </ul>
);

export default connect()(Menu);
