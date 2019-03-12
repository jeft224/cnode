import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CHeader from '../../components/header/header';
import News from '../News/news';
import AsideMenu from '../../components/menu/menu';
import Details from '../News/newDetail';

// import { Route } from "react-router-dom";
// import './home.scss';
class Home extends Component {
  state = {
    isMenuShow: false,
  };
  setMenuShowStatus = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };
  render() {
    return (
      <React.Fragment>
        <CHeader setMenuShowStatus={this.setMenuShowStatus} key="cheader" />
        <AsideMenu
          isMenuShow={this.state.isMenuShow}
          setMenuShowStatus={this.setMenuShowStatus}
          key="menu" />
        <Switch>
          <Route path="/detail/:id" component={Details} />
          <Route path="/" component={News} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Home;
