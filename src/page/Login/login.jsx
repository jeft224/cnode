import React, { Component } from 'react';
import './login.scss';
class Login extends Component {
  render () {
    return (
      <div className="login">
        <div className="login_header">
          <i />
          <h2>登录</h2>
          {/* <button>你好</button> */}
        </div>
        <div className="login_form">
          <input type="text" placeholder="请输入Access Token" />
          <button className="btn_check">验证</button>
        </div>

        <div className="intro">
          <ul>
            <li>为了更好地体验请先登录☺</li>
            <li>请输入CNode账号的Access Token</li>
            <li>在个人中心可以获取Access Token</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;