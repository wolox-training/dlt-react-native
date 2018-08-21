import React, { Fragment } from 'react';
import Topbar from '../../screens/Topbar';

const PrivatePage = ({ component: Component, ...props }) => (
  <Fragment>
    <Topbar />
    <Component {...props} />
  </Fragment>
)

export default PrivatePage;
