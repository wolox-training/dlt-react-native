import React, { Component } from 'react';
import { connect } from 'react-redux';

import userActions from '../../../redux/user/actions';

import styles from './styles.scss';

class Account extends Component {
  componentDidMount() {
    this.props.getAccountInfo(this.props.user);
  }

  render() {
    const { name, email, position, about } = this.props;
    return (
      <div className={styles.main}>
        <div className={styles.name}>{name}</div>
        <div className={styles.position}>{position}</div>
        <div className={styles.email}>{email} </div>
        <div className={styles.about}>{about}</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAccountInfo: login => dispatch(userActions.getAccountInfo({ email: login }))
});

const mapStateToProps = ({ auth, user }) => ({
  user: auth.user,
  name: user.name,
  email: user.email,
  position: user.position,
  about: user.about
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
