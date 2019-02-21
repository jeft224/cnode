import React, { Component } from 'react';
import './login.scss';
import request from '../../api/fetch';
import { withRouter } from 'react-router-dom';
class Login extends Component {
  

  state = {
    accesstoken:''
  }
  // 对input值进行绑定，改变input
  changeToken =(e) => {
    this.setState({
      accesstoken:e.target.value
    })
  } 
  // 验证accessToken登录
  checkAccessToken =() => {
    const {accesstoken} = this.state;
    request({ url:'/accesstoken',method:'POST',data:{accesstoken}}).then((res) => {
      localStorage.accesstoken = accesstoken;
      localStorage.setItem('user', JSON.stringify(res));
      this.props.history.push('/user')
    })
  }
  goback = () => {
    this.props.history.go(-1);
  }
  componentDidMount() {
    localStorage.accesstoken && this.setState({
      accesstoken:localStorage.accesstoken
    })
  }
  render () {
    const { accesstoken } = this.state;
    return (
      <div className="login">
        <div className="login_header">
          <i className="iconfont icon-right" onClick={this.goback}></i>
          <h2>登录</h2>
        </div>
        <div className="login_form">
          <input type="text" placeholder="请输入Access Token" value={accesstoken} onChange={this.changeToken}/>
          <button className="btn_check" onClick={this.checkAccessToken}>验证</button>
        </div>

        <div className="intro">
          <ul>
            {/* <li>为了更好地体验请先登录<span role="img" aria-label="a">🙂</span></li>
            <li>请输入CNode账号的Access Token<span role="img" aria-label="b">😂</span></li>
            <li>在个人中心可以获取Access Token<span role="img" aria-label="c">😊</span></li> */}
            <li>为了更好地体验请先登录🙂</li>
            <li>请输入CNode账号的Access Token😂</li>
            <li>在个人中心可以获取Access Token😊</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);