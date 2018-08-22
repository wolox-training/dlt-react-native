import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import authActions from '../../../redux/auth/action';
import Login from '../../screens/Login';
import { UNAUTHENTICATED_DEFAULT_ROUTE, AUTHENTICATED_DEFAULT_ROUTE } from '../../constants/auth';
import PrivatePage from '../PrivatePage';

class AuthenticatedRoute extends Component {
  componentDidMount() {
    this.props.setAuthentication();
  }

  renderRoutes = () => {
    const {
      auth,
      component: Component,
      location: { pathname }
    } = this.props;
    if (auth) {
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
  auth: auth.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedRoute);
