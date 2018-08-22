import React from 'react';
import { connect } from 'react-redux';

import CustomLink from '../../../components/CustomLink';
import { routes } from '../../../../constants/routes';
import authActions from '../../../../redux/auth/action';

import styles from './styles.scss';

const Menu = props => (
  <ul className={styles.list}>
    <CustomLink tag="Log Out" handleCustomClick={props.logout} />
    <CustomLink tag="My Account" route={routes.account} />
    <CustomLink tag="PLAY" route={routes.game[0]} />
  </ul>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(authActions.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Menu);
