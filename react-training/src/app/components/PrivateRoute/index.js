import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TopBar from '../../screens/Topbar';

const PrivateRoute = ({ component: Component, ...args }) => (
  <Route
    {...args}
    render={props =>
      args.isAuth ? (
        <Fragment>
          <TopBar />
          <Component {...props} />
        </Fragment>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  user: auth.user
});

export default connect(mapStateToProps)(PrivateRoute);
