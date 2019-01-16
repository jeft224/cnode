import React, { Component } from 'react';

class CHeader extends Component {
  
  render(){
    return <header>
        <div className="header__logo">
          <i className="header__logo--menu iconfont icon-menu" />
          <i className="header__logo--back iconfont icon-fanhui" />
          <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="" />
        </div>
      </header>;
  }

}

export default CHeader;