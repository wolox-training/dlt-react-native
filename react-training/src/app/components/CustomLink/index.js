import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class CustomLink extends Component {

  handleClick = (e) => {
    const { route, handleCustomClick } = this.props;
    if (handleCustomClick && typeof handleCustomClick === 'function') handleCustomClick();
    else this.props.history.push(route);
  };

  render() {
    const { tag } = this.props;
    return <li onClick={this.handleClick}>{tag}</li>;
  }
}

export default withRouter(CustomLink);
