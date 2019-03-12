import React, { Component } from 'react';
import './loading.scss';

class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <span className="rect1" />
        <span className="rect2" />
        <span className="rect3" />
        <span className="rect4" />
        <span className="rect5" />
      </div>
    );
  }
}

export default Loading;
