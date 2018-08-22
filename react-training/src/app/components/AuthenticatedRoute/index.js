import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '../../../redux/auth/action';
import Login from '../../screens/Login';
import { UNAUTHENTICATED_DEFAULT_ROUTE, AUTHENTICATED_DEFAULT_ROUTE } from '../../../constants/auth';
import PrivatePage from '../PrivatePage';

class AuthenticatedRoute extends Component {
  componentDidMount() {
    this.props.setAuthentication();
  }

  renderRoutes = () => {
    const {
      isAuth,
      component: Component,
      location: { pathname }
    } = this.props;
    if (isAuth) {
      return pathname === UNAUTHENTICATED_DEFAULT_ROUTE ? (
        <Redirect to={AUTHENTICATED_DEFAULT_ROUTE} />
      ) : (
        <PrivatePage component={Component} {...this.props} />
      );
    }
    return <Login />;
  };

  render() {
    const { path } = this.props;
    return <Route path={path} render={this.renderRoutes} />;
  }
}
const mapDispatchToProps = dispatch => ({
  setAuthentication: () => dispatch(authActions.setAuthentication())
});

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  user: auth.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedRoute);

AuthenticatedRoute.propTypes = {
  component: PropTypes.func,
  isAuth: PropTypes.bool,
  location: PropTypes.shape({ location: PropTypes.string }),
  path: PropTypes.string,
  setAuthentication: PropTypes.func,
  user: PropTypes.string
};
