import React, { Component } from 'react';
import CHeader from '../../components/header/header';
import News from '../news/news';
// import './home.scss';
class Home extends Component{
  render(){
    return [
      <CHeader />,
      <News />
    ]
  }
}

export default Home;