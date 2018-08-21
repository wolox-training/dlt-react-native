import React from 'react';
import { connect } from 'react-redux';
import CustomLink from '../../../components/CustomLink';
import styles from './styles.scss';
import { routes } from '../../../constants/routes';

const Menu = () => (
  <ul className={styles.list}>
    <CustomLink tag='Log Out' route={routes.logout} />
    <CustomLink tag='My Account' route={routes.account} />
  </ul>
);

export default connect()(Menu);
