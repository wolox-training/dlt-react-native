import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';

class Account extends Component {
  render() {
    const { user } = this.props;
    console.log('user', user)
    return
    (
      <div className={styles.main}>
        <div className={styles.name}>{user}</div>
        <div className={styles.email}>{user} </div>
        <div className={styles.position}>{user}</div>
        <div className={styles.about}>{user}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

export default connect(mapStateToProps)(Account);