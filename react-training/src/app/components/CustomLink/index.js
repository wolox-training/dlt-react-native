import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CustomLink extends Component {

  handleClick = (e) => this.props.history.push(this.props.route)

  render() {
    const { tag } = this.props;
    return <li onClick={this.handleClick}>{tag}</li>;
  }
}

export default withRouter(CustomLink);
