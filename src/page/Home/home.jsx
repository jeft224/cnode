import React, { Component } from 'react';
import CHeader from '../../components/header/header';
import News from '../news/news';
import AsideMenu from '../../components/menu/menu';
// import './home.scss';
class Home extends Component{
  state = {
    isMenuShow: false,
  }
  render(){
    return [
      <CHeader />,
      <AsideMenu/>,
      <News />
    ]
  }
}

export default Home;