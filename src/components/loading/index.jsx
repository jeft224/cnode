import React, { Component } from 'react';
import './loading.scss';
class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <span className="rect1"></span>
        <span className="rect2"></span>
        <span className="rect3"></span>
        <span className="rect4"></span>
        <span className="rect5"></span>
      </div>
    )
  }
}

export default Loading;