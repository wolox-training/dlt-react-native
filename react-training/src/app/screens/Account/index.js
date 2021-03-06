import React, { Component } from 'react';
import { connect } from 'react-redux';

import userActions from '../../../redux/user/actions';

import styles from './styles.scss';

class Account extends Component {
  componentDidMount() {
    this.props.getAccountInfo(this.props.user);
  }

  render() {
    const { email, name, about, position } = this.props;
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
  getAccountInfo: email => dispatch(userActions.getAccountInfo({ email }))
});

const mapStateToProps = ({ user }) => ({
  name: user.user && user.user.name,
  email: user.user && user.user.email,
  about: user.user && user.user.about,
  position: user.user && user.user.position
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
