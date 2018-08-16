import React, { Component } from 'react';

class SessionStorage extends Component {
  render() {
    console.log(this.props.history);
    return this.props.children;
  }
}

export default SessionStorage;
