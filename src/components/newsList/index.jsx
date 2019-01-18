import React, { Component } from 'react';
import './newslist.scss';

class NewsList extends Component {
  render () {
    const {tab} = this.props
    return <div>NewsList {tab}</div>;
  }
}

export default NewsList;