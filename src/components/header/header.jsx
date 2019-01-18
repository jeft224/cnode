import React, { Component } from 'react';
import './header.scss';
import logo from '../../assets/images/logo.png';
class CHeader extends Component {
  
  render(){
    return <header>
        <div className="header__logo">
          <i className="header__logo--menu iconfont icon-menu" />
          <i className="header__logo--back iconfont icon-fanhui" />
          <div className="header__box--logo">
            <img src={logo} alt="logo" className="header__logo--img" />
          </div>
        </div>
      </header>;
  }

}

export default CHeader;