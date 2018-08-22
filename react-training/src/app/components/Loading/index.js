import React, { Fragment } from 'react';

const Loading = Component => props => {
  console.log(Component, props);
  const { loading, error } = props;
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <Fragment>
      <div>error!</div> <Component {...props} />
    </Fragment>
  ) : (
    <Component {...props} />
  );
};

export default Loading;
