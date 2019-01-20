import React, { Component } from 'react';
import CHeader from '../../components/header/header';
import News from '../News/news';
import AsideMenu from '../../components/menu/menu';
// import './home.scss';
class Home extends Component{
  state = {
    isMenuShow: false,
  }
  setMenuShowStatus = () => {
    this.setState({
      isMenuShow:!this.state.isMenuShow
    })
  }
  render(){
    return [
      <CHeader setMenuShowStatus={this.setMenuShowStatus}/>,
      <AsideMenu isMenuShow ={this.state.isMenuShow} setMenuShowStatus={this.setMenuShowStatus}/>,
      <News />
    ]
  }
}

export default Home;