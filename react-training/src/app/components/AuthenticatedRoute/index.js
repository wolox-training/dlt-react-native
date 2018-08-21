import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authActions } from '../../../redux/auth/action';
import Login from '../../screens/Login';
import { UNAUTHENTICATED_DEFAULT_ROUTE, AUTHENTICATED_DEFAULT_ROUTE } from '../../constants/auth';
import PrivatePage from '../PrivatePage';

class AuthenticatedRoute extends Component {
  componentDidMount() {
    this.props.setAuthentication()
  }

  renderRoutes = () => {
    const { isAuth, component: Component, location: { pathname } } = this.props;
    if (isAuth) {
      return pathname === UNAUTHENTICATED_DEFAULT_ROUTE ? <Redirect to={AUTHENTICATED_DEFAULT_ROUTE} /> : <PrivatePage component={Component} {...this.props} />
    }
    else return <Login />
  }

  render() {
    const { path } = this.props
    return <Route path={path} render={this.renderRoutes} />
  };
}
const mapDispatchToProps = dispatch => ({
  setAuthentication: () => dispatch(authActions.setAuthentication())
});

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  user: auth.user,
  currentLocation: auth.currentLocation,
  previousLocation: auth.previousLocation
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute);
